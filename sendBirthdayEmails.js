const fs = require('fs');
const path = require('path');
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
  image.print(fontSmall, 280, 400, `From: NEMSS Family`);

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

async function sendBirthdayEmail(member, attachmentPath) {
  const transporter = createTransporter();
  const sender = process.env.SENDER_EMAIL || process.env.SMTP_USER;
  const senderName = process.env.SENDER_NAME || 'NEMSS Family';

  const mailOptions = {
    from: `${senderName} <${sender}>`,
    to: member.email,
    subject: `Happy Birthday ${member.name}! 🎉`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
             <h1 style="color: #333; text-align: center;">🎉 Happy Birthday ${member.name}! 🎉</h1>
             <p style="font-size: 16px; color: #555;">Dear ${member.name},</p>
             <p style="font-size: 16px; color: #555;">We hope you have an amazing birthday filled with joy, celebration, and wonderful memories!</p>
             <div style="text-align: center; margin: 30px 0;">
               <img src="cid:birthdaycard@nemss" alt="Birthday Card" style="max-width: 100%; height: auto; border-radius: 10px;" />
             </div>
             <p style="font-size: 16px; color: #555;">From the entire NEMSS 2014 Family 💚</p>
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
  console.log(`✅ Sent email to ${member.name} <${member.email}>`);
}

(async () => {
  try {
    if (!fs.existsSync(MEMBERS_FILE)) {
      console.error('❌ members.json not found. Create a members.json file in the project root.');
      process.exit(1);
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

    for (let i = 0; i < birthdays.length; i += 1) {
      const member = birthdays[i];
      const cardPath = await buildBirthdayCard(member, i);
      await sendBirthdayEmail(member, cardPath);
    }

    console.log('\n🎉 All birthday email(s) sent successfully!');
  } catch (error) {
    console.error('❌ Error sending birthday emails:', error.message);
    process.exit(1);
  }
})();
