const schedule = require('node-schedule');
const puppeteer = require('puppeteer');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const GROUP_NAME = 'NEMSS 2014 FAMILY';
const MEMBERS_FILE = path.join(__dirname, '..', 'members.json');
const OUT_DIR = path.join(__dirname, 'birthday_cards');
const SESSION_DIR = path.join(__dirname, 'whatsapp_session');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

if (!fs.existsSync(SESSION_DIR)) {
  fs.mkdirSync(SESSION_DIR, { recursive: true });
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

async function createBirthdayCard(member, designIndex = 0) {
  const canvasWidth = 1080;
  const canvasHeight = 1350;
  const bgGradients = [
    { start: '#FF6B6B', end: '#FFE66D' },
    { start: '#4ECDC4', end: '#44A08D' },
    { start: '#667eea', end: '#764ba2' },
    { start: '#f093fb', end: '#f5576c' },
    { start: '#4facfe', end: '#00f2fe' }
  ];
  
  const gradient = bgGradients[designIndex % bgGradients.length];

  try {
    console.log(`🎨 Creating beautiful birthday card for ${member.name}...`);
    
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const grad = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
    grad.addColorStop(0, gradient.start);
    grad.addColorStop(1, gradient.end);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    // Add decorative circles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(100, 100, 120, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.arc(canvasWidth - 80, canvasHeight - 100, 150, 0, Math.PI * 2);
    ctx.fill();
    
    // Load and draw member image with circular clipping
    if (member.image) {
      try {
        console.log(`📸 Loading image from: ${member.image}`);
        
        // Download and save image temporarily
        const response = await fetch(member.image);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // Save temp image file
        const tempImagePath = path.join(__dirname, `temp_img_${Date.now()}.jpg`);
        fs.writeFileSync(tempImagePath, buffer);
        
        // Load image into canvas
        const img = await loadImage(tempImagePath);
        
        // Draw shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(540, 380, 215, 0, Math.PI * 2);
        ctx.fill();
        
        // Clip to circle and draw image
        ctx.save();
        ctx.beginPath();
        ctx.arc(540, 370, 210, 0, Math.PI * 2);
        ctx.clip();
        
        // Draw image centered in circle
        const imgSize = 420;
        ctx.drawImage(img, 540 - imgSize / 2, 370 - imgSize / 2, imgSize, imgSize);
        
        ctx.restore();
        
        // White border
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(540, 370, 210, 0, Math.PI * 2);
        ctx.stroke();
        
        // Golden accent border
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(540, 370, 215, 0, Math.PI * 2);
        ctx.stroke();
        
        // Clean up temp file
        fs.unlinkSync(tempImagePath);
        
        console.log(`✅ Image added for ${member.name}`);
      } catch (imgErr) {
        console.log(`⚠️ Could not load image: ${imgErr.message}`);
        
        // Fallback: draw placeholder
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(540, 370, 210, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('📷', 540, 380);
      }
    }
    
    // Birthday text at top
    ctx.fillStyle = 'white';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fillText('🎉', 540, 120);
    ctx.fillText('HAPPY', 540, 180);
    ctx.fillText('BIRTHDAY', 540, 250);
    ctx.fillText('🎉', 540, 310);
    
    // Member name - large and prominent
    ctx.font = 'bold 56px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 8;
    ctx.fillText(member.name.toUpperCase(), 540, 650);
    
    // Member details
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 5;
    
    ctx.fillText(`📍 ${member.base}`, 540, 730);
    ctx.fillText(`💼 ${member.occupation}`, 540, 780);
    
    // Decorative line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 820);
    ctx.lineTo(880, 820);
    ctx.stroke();
    
    // Message
    ctx.font = '24px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 4;
    
    ctx.fillText('Wishing you a wonderful day filled', 540, 900);
    ctx.fillText('with joy, love, and happiness!', 540, 940);
    
    // Footer
    ctx.font = 'bold 26px Arial';
    ctx.textAlign = 'center';
    
    const textGrad = ctx.createLinearGradient(0, 1050, canvasWidth, 1100);
    textGrad.addColorStop(0, '#FFD700');
    textGrad.addColorStop(0.5, '#FFFFFF');
    textGrad.addColorStop(1, '#FFD700');
    ctx.fillStyle = textGrad;
    ctx.fillText('💚 NEMSS 2014 SET Family 💚', 540, 1080);
    
    // Bottom decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.arc(200, canvasHeight - 100, 80, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.beginPath();
    ctx.arc(canvasWidth - 150, canvasHeight - 80, 100, 0, Math.PI * 2);
    ctx.fill();
    
    // Save card
    const outPath = path.join(OUT_DIR, `${member.name.replace(/\s+/g, '_')}_${Date.now()}.png`);
    const canvasBuffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outPath, canvasBuffer);
    
    console.log(`✅ Beautiful card created: ${outPath}`);
    return outPath;

  } catch (err) {
    console.error(`❌ Error creating card for ${member.name}:`, err.message);
    return null;
  }
}

async function sendToWhatsAppGroup(cardPath, caption, memberName) {
  let browser;
  try {
    console.log(`📱 Opening WhatsApp for ${memberName}...`);
    
    browser = await puppeteer.launch({
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled'
      ],
      userDataDir: SESSION_DIR,
      defaultViewport: null
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setDefaultNavigationTimeout(90000);
    await page.setDefaultTimeout(90000);

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
      });
    });

    console.log(`🌐 Loading WhatsApp Web...`);
    await page.goto('https://web.whatsapp.com', { waitUntil: 'domcontentloaded', timeout: 90000 });
    
    await page.waitForTimeout(4000);

    console.log(`⏳ Checking login status...`);
    
    let isLoggedIn = false;
    try {
      await Promise.race([
        page.waitForSelector('div[role="textbox"]', { timeout: 10000 }),
        page.waitForSelector('input[type="text"]', { timeout: 10000 })
      ]);
      isLoggedIn = true;
      console.log(`✅ Already logged in!`);
    } catch (e) {
      console.log(`⏳ First login - scan QR (120 seconds)...`);
      try {
        await Promise.race([
          page.waitForSelector('div[role="textbox"]', { timeout: 120000 }),
          page.waitForSelector('input[type="text"]', { timeout: 120000 })
        ]);
        isLoggedIn = true;
        console.log(`✅ QR scanned!`);
      } catch (qrErr) {
        throw new Error('WhatsApp login timeout');
      }
    }

    console.log(`\n🔍 Searching for group: ${GROUP_NAME}...`);
    
    const searchSelectors = [
      '[data-testid="search_input"]',
      'input[type="text"]',
      '[aria-label*="Search"]'
    ];

    let searchBox = null;
    for (let selector of searchSelectors) {
      searchBox = await page.$(selector);
      if (searchBox) break;
    }

    if (searchBox) {
      await searchBox.click();
      await page.waitForTimeout(500);
      await page.keyboard.type(GROUP_NAME, { delay: 75 });
      await page.waitForTimeout(2000);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2500);
      console.log(`✅ Group found`);
    }

    console.log(`📎 Attaching card...`);
    await page.waitForTimeout(1000);
    
    const attachSelectors = [
      'button[aria-label*="ttach"]',
      'button[title*="ttach"]',
      '[data-testid="clip"]'
    ];

    let attachBtn = null;
    for (let selector of attachSelectors) {
      attachBtn = await page.$(selector);
      if (attachBtn) break;
    }

    if (attachBtn) {
      await attachBtn.click();
      await page.waitForTimeout(1200);
    }

    console.log(`📁 Uploading card image...`);
    const fileInput = await page.$('input[type="file"]');
    if (fileInput) {
      await fileInput.uploadFile(cardPath);
      await page.waitForTimeout(3000);
    }

    console.log(`✍️ Adding message...`);
    const inputs = await page.$$('div[contenteditable="true"], div[role="textbox"]');
    if (inputs.length > 0) {
      const lastInput = inputs[inputs.length - 1];
      await lastInput.click();
      await page.waitForTimeout(500);
      await page.keyboard.type(caption, { delay: 5 });
    }

    await page.waitForTimeout(1500);
    console.log(`📤 Sending...`);
    
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    
    console.log(`✅ Sent for ${memberName}!\n`);
    await browser.close();

  } catch (err) {
    console.error(`❌ Error for ${memberName}:`, err.message);
    if (browser) {
      try {
        await browser.close();
      } catch (e) {}
    }
  }
}

async function checkAndSendBirthdays() {
  try {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🎂 Birthday Check - ${new Date().toLocaleString()}`);
    console.log(`${'='.repeat(60)}\n`);

    if (!fs.existsSync(MEMBERS_FILE)) {
      console.error(`❌ members.json not found`);
      return;
    }

    const members = JSON.parse(fs.readFileSync(MEMBERS_FILE, 'utf8'));
    const today = todayKey();

    console.log(`📅 Today: ${today.day}-${today.month.toUpperCase()}\n`);

    const birthdays = members.filter(m => {
      if (!m.dob) return false;
      const parsed = parseDOB(m.dob);
      return parsed.day === today.day && parsed.month === today.month;
    });

    if (birthdays.length === 0) {
      console.log(`ℹ️ No birthdays today\n`);
      return;
    }

    console.log(`🎉 Found ${birthdays.length} birthday(s)!\n`);
    birthdays.forEach(b => console.log(`   ✨ ${b.name}`));
    console.log();

    for (let i = 0; i < birthdays.length; i++) {
      const member = birthdays[i];
      console.log(`\n📌 Processing ${i + 1}/${birthdays.length}: ${member.name}`);

      if (!member.image) {
        console.log(`⚠️ No image for ${member.name} - skipping`);
        continue;
      }

      const cardPath = await createBirthdayCard(member, i);
      if (!cardPath) continue;

      const caption = `🎉 HAPPY BIRTHDAY ${member.name.toUpperCase()} 🎉\n\n` +
                     `Base: ${member.base}\n` +
                     `Occupation: ${member.occupation}\n\n` +
                     `Wishing you a wonderful day!\n💚 NEMSS 2014 Family`;

      await sendToWhatsAppGroup(cardPath, caption, member.name);

      if (i < birthdays.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 15000));
      }
    }

    console.log(`${'='.repeat(60)}\n`);

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

console.log(`\n${'🤖'.repeat(30)}`);
console.log(`🎂 NEMSS Birthday Automation System`);
console.log(`📅 Daily check at 8:00 AM`);
console.log(`📱 Group: ${GROUP_NAME}`);
console.log(`✅ WhatsApp stays signed in`);
console.log(`⏸️  Ctrl+C to stop\n`);
console.log(`${'🤖'.repeat(30)}\n`);

checkAndSendBirthdays();

schedule.scheduleJob('0 8 * * *', () => {
  console.log(`\n⏰ Scheduled check...`);
  checkAndSendBirthdays();
});

process.on('SIGINT', () => {
  console.log(`\n🛑 Stopped\n`);
  process.exit(0);
});

setInterval(() => {}, 1000);