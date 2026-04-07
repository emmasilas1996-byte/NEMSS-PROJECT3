const fs = require('fs');
const path = require('path');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const Jimp = require('jimp');

const MEMBERS_FILE = path.join(__dirname, 'members.json');
const OUT_DIR = path.join(__dirname, 'birthday_cards');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}


function parseDOB(dob) {
  const parts = dob.replace(/-/g, ' ').split(' ').filter(Boolean);
  const day = parts[0].padStart(2, '0');
  const month = parts[1].toLowerCase().slice(0, 3);
  return { day, month };
}

function todayKey() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return { day, month: months[d.getMonth()] };
}

async function buildBirthdayCard(member, designIndex = 0) {
  const width = 1200;
  const height = 630;
  const bgColors = ['#5A31F4', '#24A19C', '#F38C00', '#E03E9D', '#3E7BFA'];
  const bg = bgColors[designIndex % bgColors.length];

  const image = new Jimp(width, height, bg);
  const fontLarge = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  const fontMedium = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  const fontSmall = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

  // Fetch and add member image
  if (member.image) {
    try {
      const response = await fetch(member.image);
      const buffer = await response.buffer();
      const avatar = await Jimp.read(buffer);
      avatar.resize(200, 200);
      image.composite(avatar, 40, 190);
    } catch (err) {
      console.log(`Could not load image for ${member.name}, continuing without avatar`);
    }
  }

  image.print(fontLarge, 280, 80, 'HAPPY BIRTHDAY');
  image.print(fontMedium, 280, 180, member.name.toUpperCase());

  const subtitle = `Wishing you joy, success and great memories today.`;
  image.print(fontSmall, 280, 280, {
    text: subtitle,
    alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
    alignmentY: Jimp.VERTICAL_ALIGN_TOP
  }, width - 300, 260);

  const dobText = member.dob ? `Birthday: ${member.dob}` : 'Birthday: Today';
  image.print(fontSmall, 280, 360, dobText);
  image.print(fontSmall, 280, 400, `From: NEMSS Family 💚`);

  const outFile = path.join(OUT_DIR, `${member.name.replace(/\s+/g, '_')}_birthday.png`);
  await image.writeAsync(outFile);
  return outFile;
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in environment variables.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function getRandomMessage() {
  const greetings = [
    '🎉 Happy Birthday {name}! 🎉',
    '🎂 Wishing you a fantastic birthday, {name}! 🎂',
    '🥳 Happy Birthday to an amazing person, {name}! 🥳',
    '🎈 Cheers to another year of awesomeness, {name}! 🎈',
    '🌟 Happy Birthday, {name}! May your day be filled with joy! 🌟'
  ];

  const wishes = [
    'We hope your special day is filled with joy, celebration, and wonderful memories with those you love.',
    'May your birthday be as amazing as you are! Wishing you happiness, success, and all the best.',
    'Celebrating you today and every day! May this year bring you endless joy and new adventures.',
    'Another year wiser, another year better! Wishing you a birthday filled with love and laughter.',
    'May your birthday be the start of a year full of good luck, good health, and much happiness.'
  ];

  const closings = [
    'From the entire NEMSS 2014 Family 💚',
    'With love from all your NEMSS family members 💚',
    'Warm wishes from the NEMSS 2014 community 💚',
    'Celebrating with you from the NEMSS family 💚',
    'Sending birthday hugs from all of us at NEMSS 💚'
  ];

  const greeting = greetings[Math.floor(Math.random() * greetings.length)].replace('{name}', '{name}');
  const wish = wishes[Math.floor(Math.random() * wishes.length)];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  return { greeting, wish, closing };
}

async function sendBirthdayEmail(member, attachmentPath) {
  const transporter = createTransporter();
  const sender = process.env.SENDER_EMAIL || process.env.SMTP_USER;
  const senderName = process.env.SENDER_NAME || 'NEMSS Family';

  const message = getRandomMessage();

  const mailOptions = {
    from: `${senderName} <${sender}>`,
    to: member.email,
    subject: `Happy Birthday ${member.name}! 🎉`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
             <h1 style="color: #333; text-align: center; margin: 0 0 10px 0;">${message.greeting.replace('{name}', member.name)}</h1>
             <p style="font-size: 14px; color: #777; text-align: center; margin: 0 0 20px 0;">Wishing you joy, success, and wonderful memories</p>
             
             <div style="text-align: center; margin: 20px 0;">
               ${member.image ? `<img src="${member.image}" alt="${member.name}" style="width: 180px; height: 180px; border-radius: 50%; border: 4px solid #5A31F4; object-fit: cover;" />` : ''}
             </div>
             
             <p style="font-size: 16px; color: #555; text-align: center;">Dear ${member.name},</p>
             <p style="font-size: 16px; color: #555; line-height: 1.6;">${message.wish}</p>
             
             <div style="text-align: center; margin: 30px 0;">
               <img src="cid:birthdaycard@nemss" alt="Birthday Card" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
             </div>
             
             <p style="font-size: 16px; color: #555; text-align: center; font-weight: bold;">${message.closing}</p>
             <hr style="border: none; border-top: 2px solid #ccc; margin: 20px 0;" />
             <p style="font-size: 12px; color: #999; text-align: center;">This is an automated birthday message. Please don't reply to this email.</p>
           </div>`,
    attachments: [
      {
        filename: path.basename(attachmentPath),
        path: attachmentPath,
        cid: 'birthdaycard@nemss',
      },
    ],
  };

  await transporter.sendMail(mailOptions);
  console.log(`✅ [${new Date().toLocaleString()}] Sent email to ${member.name} <${member.email}>`);
}

async function checkAndSendBirthdays() {
  try {
    console.log(`\n🔍 [${new Date().toLocaleString()}] Checking for birthdays...`);

    if (!fs.existsSync(MEMBERS_FILE)) {
      console.error('❌ members.json not found.');
      return;
    }

    const members = JSON.parse(fs.readFileSync(MEMBERS_FILE, 'utf8'));
    const today = todayKey();
    const birthdays = members.filter((member) => {
      if (!member.dob || !member.email) return false;
      const parsed = parseDOB(member.dob);
      return parsed.day === today.day && parsed.month === today.month;
    });

    if (birthdays.length === 0) {
      console.log('ℹ️ No birthday emails to send today.');
      return;
    }

    console.log(`🎂 Found ${birthdays.length} birthday(s) today!`);

    for (let i = 0; i < birthdays.length; i += 1) {
      const member = birthdays[i];
      const cardPath = await buildBirthdayCard(member, i);
      await sendBirthdayEmail(member, cardPath);
    }

    console.log('✅ All birthday emails sent successfully!\n');
  } catch (error) {
    console.error('❌ Error checking birthdays:', error.message);
  }
}

// Schedule the job to run every day at 6:00 AM
schedule.scheduleJob('0 6 * * *', checkAndSendBirthdays);

console.log('🎉 Birthday Email Scheduler started!');
console.log('📅 Scheduled to check for birthdays daily at 6:00 AM');
console.log('💚 Press Ctrl+C to stop the scheduler\n');

// Check immediately on startup
checkAndSendBirthdays();
