const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Read members data
function getMembersData() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'members.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading members.json:', error);
    return [];
  }
}


// Load contribution data
function getContributionData() {
  try {
    const dataPath = path.join(__dirname, 'contributions.json');
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      const parsedData = JSON.parse(data);
      
      // Convert nested structure to flat array for compatibility
      const flatContributions = [];
      
      // Process burial contributions
      if (parsedData.burial && Array.isArray(parsedData.burial)) {
        parsedData.burial.forEach(event => {
          if (event.contributions) {
            event.contributions.forEach(contrib => {
              flatContributions.push({
                memberName: contrib.member,
                amount: contrib.amount,
                type: 'Burial',
                eventName: event.name,
                date: event.date
              });
            });
          }
        });
      }
      
      // Process wedding contributions
      if (parsedData.wedding && Array.isArray(parsedData.wedding)) {
        parsedData.wedding.forEach(event => {
          if (event.contributions) {
            event.contributions.forEach(contrib => {
              flatContributions.push({
                memberName: contrib.member,
                amount: contrib.amount,
                type: 'Wedding',
                eventName: event.name,
                date: event.date
              });
            });
          }
        });
      }
      
      // Process child dedication contributions
      if (parsedData.childDedication && Array.isArray(parsedData.childDedication)) {
        parsedData.childDedication.forEach(event => {
          if (event.contributions) {
            event.contributions.forEach(contrib => {
              flatContributions.push({
                memberName: contrib.member,
                amount: contrib.amount,
                type: 'Child Dedication',
                eventName: event.name,
                date: event.date
              });
            });
          }
        });
      }
      
      // Process support contributions
      if (parsedData.support && Array.isArray(parsedData.support)) {
        parsedData.support.forEach(event => {
          if (event.contributions) {
            event.contributions.forEach(contrib => {
              flatContributions.push({
                memberName: contrib.member,
                amount: contrib.amount,
                type: 'Support',
                eventName: event.name,
                date: event.date
              });
            });
          }
        });
      }
      
      // Process get2gether contributions
      if (parsedData.get2gether && Array.isArray(parsedData.get2gether)) {
        parsedData.get2gether.forEach(event => {
          if (event.contributions) {
            event.contributions.forEach(contrib => {
              flatContributions.push({
                memberName: contrib.member,
                amount: contrib.amount,
                type: 'Get2Gether',
                eventName: event.name,
                date: event.date
              });
            });
          }
        });
      }
      
      return flatContributions;
    }
  } catch (error) {
    console.error('Error reading contributions.json:', error);
  }
  return [];
}

// Get dues data
function getDuesData() {
  try {
    const dataPath = path.join(__dirname, 'contributions.json');
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      const parsedData = JSON.parse(data);
      return parsedData.duesData || {};
    }
  } catch (error) {
    console.error('Error reading dues data:', error);
  }
  return {};
}

// Calculate statistics
function calculateStats(members) {
  const stats = {
    totalMembers: members.length,
    membersByState: {},
    membersByOccupation: {},
    emailStats: { withEmail: 0, withoutEmail: 0 },
    phoneStats: { withPhone: 0, withoutPhone: 0 },
    birthdayByMonth: {},
    occupationCategories: {},
    ageGroups: { '18-25': 0, '26-30': 0, '31-35': 0, '46+': 0 }
  };

  // Initialize months
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  months.forEach(month => stats.birthdayByMonth[month] = 0);

  members.forEach(member => {
    // State statistics
    const state = member.base.split(',')[0].trim();
    stats.membersByState[state] = (stats.membersByState[state] || 0) + 1;

    // Occupation statistics
    const occupation = member.occupation || 'Not Specified';
    stats.membersByOccupation[occupation] = (stats.membersByOccupation[occupation] || 0) + 1;

    // Email statistics
    if (member.email && member.email.trim() !== '') {
      stats.emailStats.withEmail++;
    } else {
      stats.emailStats.withoutEmail++;
    }

    // Phone statistics
    if (member.phone && member.phone.trim() !== '') {
      stats.phoneStats.withPhone++;
    } else {
      stats.phoneStats.withoutPhone++;
    }

    // Birthday by month
    if (member.dob) {
      const dobParts = member.dob.split(/[- ]/);
      const month = dobParts[1] ? dobParts[1].substring(0, 3) : 'Jan';
      if (stats.birthdayByMonth[month] !== undefined) {
        stats.birthdayByMonth[month]++;
      }
    }

    // Age calculation (approximate)
    if (member.dob && member.dob.includes('-')) {
      try {
        const year = parseInt(member.dob.split('-')[2]);
        if (year && year > 1900) {
          const age = new Date().getFullYear() - year;
          if (age >= 18 && age <= 25) stats.ageGroups['18-25']++;
          else if (age >= 26 && age <= 30) stats.ageGroups['26-30']++;
          else if (age >= 31 && age <= 35) stats.ageGroups['31-35']++;
          else if (age > 45) stats.ageGroups['46+']++;
        }
      } catch (e) {
        // Skip age calculation if format is invalid
      }
    }
  });

  // Categorize occupations
  Object.keys(stats.membersByOccupation).forEach(occ => {
    const lowerOcc = occ.toLowerCase();
    if (lowerOcc.includes('software') || lowerOcc.includes('developer') || lowerOcc.includes('analyst') || lowerOcc.includes('ict')) {
      stats.occupationCategories['Technology & IT'] = (stats.occupationCategories['Technology & IT'] || 0) + stats.membersByOccupation[occ];
    } else if (lowerOcc.includes('business') || lowerOcc.includes('entrepreneur') || lowerOcc.includes('merchant')) {
      stats.occupationCategories['Business & Commerce'] = (stats.occupationCategories['Business & Commerce'] || 0) + stats.membersByOccupation[occ];
    } else if (lowerOcc.includes('officer') || lowerOcc.includes('assistant') || lowerOcc.includes('coordinator') || lowerOcc.includes('supervisor')) {
      stats.occupationCategories['Administrative & Management'] = (stats.occupationCategories['Administrative & Management'] || 0) + stats.membersByOccupation[occ];
    } else if (lowerOcc.includes('designer') || lowerOcc.includes('marketer') || lowerOcc.includes('content')) {
      stats.occupationCategories['Creative & Marketing'] = (stats.occupationCategories['Creative & Marketing'] || 0) + stats.membersByOccupation[occ];
    } else if (lowerOcc.includes('electrical') || lowerOcc.includes('technician') || lowerOcc.includes('parts')) {
      stats.occupationCategories['Technical & Engineering'] = (stats.occupationCategories['Technical & Engineering'] || 0) + stats.membersByOccupation[occ];
    } else {
      stats.occupationCategories['Other'] = (stats.occupationCategories['Other'] || 0) + stats.membersByOccupation[occ];
    }
  });

  return stats;
}

// Calculate contribution statistics
function calculateContributionStats(contributions) {
  const stats = {
    totalContributions: contributions.length,
    totalAmount: 0,
    contributionsByType: {},
    contributionsByMember: {},
    contributionsByDate: {},
    topContributors: [],
    averageContribution: 0,
    contributionTrend: {}
  };

  contributions.forEach(contrib => {
    // Total and amount
    stats.totalAmount += contrib.amount || 0;

    // By type
    const type = contrib.type || 'General';
    stats.contributionsByType[type] = (stats.contributionsByType[type] || 0) + 1;

    // By member
    const member = contrib.memberName || 'Anonymous';
    if (!stats.contributionsByMember[member]) {
      stats.contributionsByMember[member] = { count: 0, total: 0 };
    }
    stats.contributionsByMember[member].count++;
    stats.contributionsByMember[member].total += contrib.amount || 0;

    // By date
    const date = contrib.date ? new Date(contrib.date).toLocaleDateString() : 'Unknown';
    stats.contributionsByDate[date] = (stats.contributionsByDate[date] || 0) + (contrib.amount || 0);

    // By month for trend
    if (contrib.date) {
      const month = new Date(contrib.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      stats.contributionTrend[month] = (stats.contributionTrend[month] || 0) + (contrib.amount || 0);
    }
  });

  // Add monthly dues to total amount
  const duesData = getDuesData();
  let totalDues = 0;
  Object.keys(duesData).forEach(year => {
    duesData[year].forEach(member => {
      member.months.forEach(monthAmount => {
        totalDues += monthAmount || 0;
      });
    });
  });
  stats.totalAmount += totalDues;
  stats.totalDues = totalDues;

  // Calculate average
  stats.averageContribution = stats.totalContributions > 0 ? (stats.totalAmount / stats.totalContributions).toFixed(2) : 0;

  // Get top contributors
  stats.topContributors = Object.entries(stats.contributionsByMember)
    .sort(([,a], [,b]) => b.total - a.total)
    .slice(0, 10)
    .map(([name, data]) => ({ name, ...data }));

  return stats;
}

// API endpoint for member statistics
app.get('/api/member-stats', (req, res) => {
  const members = getMembersData();
  const stats = calculateStats(members);
  res.json(stats);
});

// API endpoint for contribution statistics
app.get('/api/contribution-stats', (req, res) => {
  const contributions = getContributionData();
  const stats = calculateContributionStats(contributions);
  res.json(stats);
});

// API endpoint for members data
app.get('/api/members', (req, res) => {
  const members = getMembersData();
  res.json(members);
});

// API endpoint for contributions data
app.get('/api/contributions', (req, res) => {
  const contributions = getContributionData();
  res.json(contributions);
});

// API endpoint for dues data
app.get('/api/dues', (req, res) => {
  const duesData = getDuesData();
  res.json(duesData);
});

// API endpoint for detailed contributions by category
app.get('/api/contributions-detailed', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'contributions.json');
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      const parsedData = JSON.parse(data);
      
      const detailedContributions = {
        burial: parsedData.burial || [],
        wedding: parsedData.wedding || [],
        childDedication: parsedData.childDedication || [],
        support: parsedData.support || [],
        get2gether: parsedData.get2gether || []
      };
      
      res.json(detailedContributions);
    } else {
      res.json({ error: 'File not found' });
    }
  } catch (error) {
    console.error('Error fetching detailed contributions:', error);
    res.status(500).json({ error: 'Error reading contributions data' });
  }
});

// Main dashboard route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Group overview route
app.get('/overview', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'group-overview.html'));
});

app.listen(PORT, () => {
  console.log(`🎯 NEMSS Data Dashboard running on http://localhost:${PORT}`);
  console.log(`📊 View statistics and member data visualizations`);
  console.log(`📍 Overview: http://localhost:${PORT}/overview`);
  console.log(`📍 Member Stats API: http://localhost:${PORT}/api/member-stats`);
  console.log(`📍 Contribution Stats API: http://localhost:${PORT}/api/contribution-stats`);
  console.log(`📍 Dues Data API: http://localhost:${PORT}/api/dues`);
});

module.exports = app;
