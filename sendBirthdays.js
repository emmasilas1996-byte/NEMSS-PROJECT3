const puppeteer = require('puppeteer');
const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const GROUP_NAME = 'NEMSS 2014 FAMILY';
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

async function buildCard(member, designIndex = 0) {
  const w = 1200;
  const h = 630;
  const bgColors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
  const bg = bgColors[designIndex % bgColors.length];

  try {
    // Create base image with gradient background
    let image = new Jimp({ width: w, height: h, color: parseInt(bg.replace('#', '0x'), 16) });

    // Try to fetch and add avatar
    try {
      const response = await fetch(member.image);
      const buffer = await response.buffer();
      let avatar = await Jimp.read(buffer);
      avatar.cover({ width: 360, height: 360 });
      image.composite({ source: avatar, x: 60, y: Math.round((h - 360) / 2) });
    } catch (err) {
      console.log(`Could not load image for ${member.name}, continuing without avatar`);
    }

    // Add text using built-in fonts
    const font64 = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    const font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    const font16 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

    image.print({ font: font64, x: 460, y: 120, text: 'HAPPY BIRTHDAY' });
    image.print({ font: font32, x: 460, y: 220, text: member.name.toUpperCase() });
    image.print({ font: font16, x: 460, y: 300, text: `Base: ${member.base}` });
    image.print({ font: font16, x: 460, y: 330, text: `Occupation: ${member.occupation}` });
    image.print({ font: font16, x: 460, y: 360, text: 'From: NEMSS 2014 SET Family' });

    const outPath = path.join(OUT_DIR, `${member.name.replace(/\s+/g, '_')}.png`);
    await image.write(outPath);
    console.log(`✅ Card created: ${outPath}`);
    return outPath;
  } catch (err) {
    console.error(`Error building card for ${member.name}:`, err.message);
    return null;
  }
}

async function sendToGroup(browser, imagePath, caption, memberName) {
  try {
    let page = (await browser.pages())[0];
    if (!page) {
      page = await browser.newPage();
    }
    await page.bringToFront();

    console.log(`📱 Opening WhatsApp Web...`);
    await page.goto('https://chat.whatsapp.com/GQlvbLYtv9d3FATiMLAFD6', { waitUntil: 'networkidle2', timeout: 60000 });

    // Wait for login (message input box)
    console.log(`⏳ Waiting for login... (scan QR if needed)`);
    await page.waitForSelector('div[contenteditable="true"]', { timeout: 120000 });

    console.log(`🔍 Searching for group: ${GROUP_NAME}...`);
    
    // Click on search box
    const searchBoxes = await page.$$('div[contenteditable="true"]');
    if (searchBoxes.length === 0) {
      throw new Error('Search box not found');
    }
    await searchBoxes[0].click();

    // Type group name
    await page.keyboard.type(GROUP_NAME, { delay: 50 });
    await page.waitForTimeout(1500);

    // Press Enter to select group
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);

    console.log(`📎 Attaching image...`);
    
    // Click attach button
    const attachBtn = await page.$('button[aria-label="Attach"]') || await page.$('span[data-icon="clip"]');
    if (!attachBtn) {
      throw new Error('Attach button not found');
    }
    await attachBtn.click();
    await page.waitForTimeout(500);

    // Upload file
    const fileInput = await page.$('input[type="file"]');
    if (!fileInput) {
      throw new Error('File input not found');
    }
    await fileInput.uploadFile(imagePath);
    await page.waitForTimeout(2000);

    console.log(`✍️ Adding caption...`);
    
    // Click on caption input
    const captionInputs = await page.$$('div[contenteditable="true"]');
    if (captionInputs.length > 0) {
      await captionInputs[captionInputs.length - 1].click();
      await page.keyboard.type(caption, { delay: 10 });
    }

    await page.waitForTimeout(1000);

    console.log(`📤 Sending message...`);
    
    // Click send button
    const sendBtn = await page.$('button[aria-label="Send"]') || await page.$('span[data-icon="send"]');
    if (sendBtn) {
      await sendBtn.click();
    } else {
      // Fallback: press Enter
      await page.keyboard.press('Enter');
    }

    await page.waitForTimeout(2000);
    console.log(`✅ Message sent for ${memberName}!`);

  } catch (err) {
    console.error(`❌ Error sending message for ${memberName}:`, err.message);
    throw err;
  }
}

(async () => {
  try {
    console.log('🎂 NEMSS Birthday Automation Started\n');

    // Load members
    if (!fs.existsSync(MEMBERS_FILE)) {
      console.error(`❌ members.json not found at ${MEMBERS_FILE}`);
      process.exit(1);
    }

    const members = JSON.parse(fs.readFileSync(MEMBERS_FILE, 'utf8'));
    const today = todayKey();

    console.log(`📅 Today's date: ${today.day}-${today.month.toUpperCase()}\n`);

    // Find birthdays today
    const birthdays = members.filter(m => {
      if (!m.dob) return false;
      const parsed = parseDOB(m.dob);
      return parsed.day === today.day && parsed.month === today.month;
    });

    if (birthdays.length === 0) {
      console.log('ℹ️ No birthdays today.');
      process.exit(0);
    }

    console.log(`🎉 Found ${birthdays.length} birthday(s) today!\n`);
    birthdays.forEach(b => console.log(`   • ${b.name}`));
    console.log();

    // Launch browser
    console.log('🚀 Launching browser...\n');
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      userDataDir: path.join(__dirname, 'whatsapp_session')
    });

    // Process each birthday
    for (let i = 0; i < birthdays.length; i++) {
      const member = birthdays[i];
      console.log(`\n📌 Processing ${i + 1}/${birthdays.length}: ${member.name}`);

      // Build card
      const cardPath = await buildCard(member, i);
      if (!cardPath) continue;

      // Generate caption
      const caption = `🎉 HAPPY BIRTHDAY ${member.name.toUpperCase()} 🎉\n\n` +
                     `Base: ${member.base}\n` +
                     `Occupation: ${member.occupation}\n\n` +
                     `From NEMSS 2014 SET Family 💚\n`;

      // Send to group
      try {
        await sendToGroup(browser, cardPath, caption, member.name);
      } catch (err) {
        console.error(`Failed to send for ${member.name}`);
      }

      // Delay between sends
      if (i < birthdays.length - 1) {
        console.log('⏳ Waiting before next message...');
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }

    console.log('\n✅ All birthdays sent! Closing browser...\n');
    await browser.close();
    process.exit(0);

  } catch (err) {
    console.error('❌ Fatal error:', err);
    process.exit(1);
  }
})();