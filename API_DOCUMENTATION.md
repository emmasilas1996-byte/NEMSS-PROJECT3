# NEMSS 2014 Dashboard API Documentation

## Overview
The dashboard API has been successfully updated to work with the new `contributions.json` structure (nested format with categories). The backend is now running on `http://localhost:3000`.

## Problem Fixed
**Issue:** Dashboard data was failing to load because `contributions.json` was restructured from a flat array format to a nested object with categories (burial, wedding, childDedication, support, get2gether, duesData).

**Solution:** Updated `dashboard.js` to:
1. Parse the nested contribution structure correctly
2. Convert contribution data to the flat array format needed by statistics calculations
3. Added new API endpoints for dues data and detailed contributions

## Available API Endpoints

### 1. **Member Statistics**
```
GET /api/member-stats
```
Returns statistics about members:
- Total members count
- Members by state
- Members by occupation
- Email and phone contact statistics
- Birthday distribution by month
- Occupation categories
- Age groups

**Example Response:**
```json
{
  "totalMembers": 59,
  "emailStats": { "withEmail": 1, "withoutEmail": 58 },
  "phoneStats": { "withPhone": 5, "withoutPhone": 54 },
  ...
}
```

### 2. **Contribution Statistics**
```
GET /api/contribution-stats
```
Returns aggregate statistics about all contributions:
- Total contributions count: 346
- Total amount raised: ₦895,800
- Average contribution: ₦2,589.02
- Top contributors list
- Contributions by type
- Contribution trends by date

### 3. **Contributions (Flat Array)**
```
GET /api/contributions
```
Returns all contributions as a flat array with member name, amount, type, event name, and date.

**Example Response:**
```json
[
  {
    "memberName": "ABILITY CHIBUZOR",
    "amount": 1500,
    "type": "Burial",
    "eventName": "Emmanuel Silas Fathers Burial 2023",
    "date": "May 2023"
  },
  ...
]
```

### 4. **Dues Data**
```
GET /api/dues
```
Returns monthly dues payment records organized by year (2023-2026).

**Format:**
```json
{
  "2023": [
    {
      "name": "ABILITY CHIBUZOR",
      "months": [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]
    },
    ...
  ],
  "2024": [...],
  "2025": [...],
  "2026": [...]
}
```

### 5. **Detailed Contributions by Category**
```
GET /api/contributions-detailed
```
Returns contributions organized by category (burial, wedding, childDedication, support, get2gether).

**Format:**
```json
{
  "burial": [
    {
      "name": "Event Name",
      "date": "Date",
      "contributions": [
        { "member": "Name", "amount": 1500 }
      ]
    }
  ],
  "wedding": [...],
  "childDedication": [...],
  "support": [...],
  "get2gether": [...]
}
```

### 6. **Members List**
```
GET /api/members
```
Returns all 59 members with their full details (name, location, occupation, DOB, contact info, image URL).

## Dashboard Access

### Main Dashboard
```
http://localhost:3000/
```
Shows interactive visualizations of member and contribution statistics.

### Group Overview Page
```
http://localhost:3000/overview
```
Displays the NEMSS 2014 Group Overview with module cards showing key statistics.

## Data Structure Changes

### Old Format (contributions.json)
```json
[
  { "memberName": "Name", "amount": 50000, "type": "Event Fund", "date": "2026-01-15" }
]
```

### New Format (contributions.json)
```json
{
  "duesData": {
    "2023": [...],
    "2024": [...],
    "2025": [...],
    "2026": [...]
  },
  "burial": [
    {
      "name": "Event Name",
      "date": "Date",
      "contributions": [...]
    }
  ],
  "wedding": [...],
  "childDedication": [...],
  "support": [...],
  "get2gether": [...]
}
```

## How to Start the Dashboard

```bash
npm run start-dashboard
```

Or with nodemon for development:
```bash
npm run dev-dashboard
```

The dashboard will be available at `http://localhost:3000`

## Data Files
- **members.json** - Member directory data (59 members)
- **contributions.json** - All contributions and dues (346 total contributions)

## Testing the APIs

Using PowerShell:
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/api/member-stats" -UseBasicParsing | Select-Object -ExpandProperty Content | ConvertFrom-Json
```

## Status ✅
All APIs are fully functional and returning data correctly.
