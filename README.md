# 🎯 NEMSS 2014 - Birthday Email System & Data Dashboard

Automated birthday email system with personalized cards and a comprehensive data dashboard for member analytics and contribution tracking.

## 🌟 Features

### Birthday Email System
- 🎂 **Automated Daily Checks**: Runs every day at 6:00 AM
- 🎨 **Custom Birthday Cards**: Generated with member photos and colorful designs
- 📧 **Varied Messages**: 125 unique message combinations (5 greetings × 5 wishes × 5 closings)
- 🖼️ **Profile Images**: Displays member photos in emails
- 📅 **Date Matching**: Automatically matches birthdays with current date
- 🔄 **Persistent Operation**: Runs continuously in background with PM2


### Data Dashboard
- 📊 **Member Analytics**: Statistics on member distribution, occupations, and contact info
- 💰 **Contribution Tracking**: Monitor financial contributions with detailed breakdowns
- 📈 **Visual Charts**: Beautiful interactive visualizations with Chart.js
- 🎯 **Dual Tab Interface**: Switch between member data and contributions
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Data Dashboard
```bash
npm run start-dashboard
```
Then visit: **http://localhost:3000**

### 3. Deploy Birthday Email System
Choose your preferred deployment method:

**Option A: PowerShell (Recommended for Windows)**
```powershell
powershell -ExecutionPolicy Bypass -File deploy-scheduler.ps1
```

**Option B: Batch File**
```batch
deploy-birthday-scheduler.bat
```

**Option C: Direct Node.js**
```bash
npm run start-scheduler
```

## 📊 Dashboard Features

### Member Statistics Tab
- **Total Members**: Count of all registered members
- **Contact Completeness**: Email and phone number availability
- **Geographic Distribution**: Members by state
- **Professional Sectors**: Occupation categories and breakdown

### Visualizations
1. **Members by State**: Doughnut chart showing geographic spread
2. **Occupation Categories**: Pie chart of professional sectors
3. **Contact Information**: Bar chart comparing email/phone availability
4. **Birthday Distribution**: Line chart of birthdays throughout the year
5. **Age Demographics**: Bar chart showing age group distribution
6. **Top Occupations**: Horizontal bar chart of most common professions

### Contributions Tab
- **Total Amount Tracked**: Sum of all contributions
- **Average Contribution**: Per-transaction average
- **Top Contributors**: Ranking of members by contribution amount
- **Contribution Types**: Breakdown by category (Event Fund, Building Project, Scholar Fund)
- **Contribution Trend**: Line chart showing contributions over time

## 🔧 Configuration

### Member Data
Edit `members.json` to add or update members:
```json
{
  "name": "John Doe",
  "base": "Anambra State, NG",
  "occupation": "Software Developer",
  "dob": "15-Dec-1996",
  "phone": "+234-70-xxxx-xxxx",
  "email": "john@example.com",
  "image": "https://example.com/photo.jpg"
}
```

### Contribution Data
Add contributions to `contributions.json`:
```json
{
  "memberName": "John Doe",
  "amount": 50000,
  "type": "Event Fund",
  "date": "2026-01-15"
}
```

### Email Configuration
Set environment variables before running:
```bash
set SMTP_HOST=smtp.gmail.com
set SMTP_PORT=587
set SMTP_USER=nemss2014set@gmail.com
set SMTP_PASS=your_app_password
set SENDER_EMAIL=nemss2014set@gmail.com
set SENDER_NAME="NEMSS Family"
```

## 📝 Available Scripts

```bash
# Start the data dashboard
npm run start-dashboard

# Run birthday email scheduler
npm run start-scheduler

# Send birthday emails manually
npm run send-birthday-emails

# Start old WhatsApp automation (deprecated)
npm run send-birthdays
```

## 📂 Project Structure

```
NEMSS PROJECT3/
├── dashboard.js                 # Express server for dashboard
├── autoBirthdayScheduler.js    # Birthday checker and sender
├── sendBirthdayEmails.js       # Manual birthday email script
├── sendBirthdays.js            # WhatsApp automation (legacy)
├── members.json                # Member database
├── contributions.json          # Contribution records
├── public/
│   └── index.html             # Dashboard UI
├── birthday_cards/            # Generated card images
├── package.json               # Dependencies
├── deploy-scheduler.ps1       # PowerShell deployment
├── deploy-birthday-scheduler.bat # Batch deployment
└── README.md                  # This file
```

## 🔐 Security Notes

- Gmail app password is used instead of main password
- Credentials stored in environment variables (not in code)
- SMTP configuration uses TLS encryption
- No sensitive data stored in repository

## 🐛 Troubleshooting

### Birthday emails not sending
- Check SMTP credentials are correctly set
- Verify Gmail account has app-specific password enabled
- Check member email addresses in members.json

### Dashboard not loading
- Ensure node modules are installed: `npm install`
- Verify port 3000 is available
- Check browser console for errors

### Scheduler not running
- Verify contributions.json exists and is valid JSON
- Check autoBirthdayScheduler.js path is correct
- Ensure Node.js is installed and in PATH

### Images not displaying in emails
- Verify image URLs are publicly accessible
- Check image format is supported (JPG, PNG, GIF)
- Fallback to text if images fail

## 📞 Support & Maintenance

For issues or improvements:
1. Check the troubleshooting section above
2. Review console output for error messages
3. Verify all configuration files have valid JSON
4. Ensure all dependencies are installed

## 📄 License

ISC License - See package.json for details

## 🙏 Credits

Built for NEMSS 2014 Alumni Family
- Birthday automation using Jimp & Nodemailer
- Dashboard powered by Express & Chart.js
- Member data management and analytics

---

**Status**: ✅ Production Ready with automated daily checks and comprehensive data analytics
