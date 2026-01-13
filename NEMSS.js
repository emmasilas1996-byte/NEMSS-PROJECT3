        // ========================================
        // JAVASCRIPT CODE
        // ========================================
        
        // Sample Data
        const membersData = [
            { name: "Emmanuel Silas", base: "Lagos", occupation: "Software Engineer", dob: "1995-05-15", phone: "+234 801 234 5678", email: "emmanuel@email.com" },
            { name: "Sarah Johnson", base: "Abuja", occupation: "Medical Doctor", dob: "1996-08-22", phone: "+234 802 345 6789", email: "sarah@email.com" },
            { name: "David Okonkwo", base: "Port Harcourt", occupation: "Architect", dob: "1994-03-10", phone: "+234 803 456 7890", email: "david@email.com" },
            { name: "Grace Adeyemi", base: "Ibadan", occupation: "Teacher", dob: "1997-11-30", phone: "+234 804 567 8901", email: "grace@email.com" },
            { name: "Michael Chen", base: "Lagos", occupation: "Business Analyst", dob: "1995-07-18", phone: "+234 805 678 9012", email: "michael@email.com" }
        ];

        const duesData = {
            2023: [
                { name: "ABILITY CHIBUZOR", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500] },
                { name: "AMACHUKWU CHIDIMMA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIAMAKA AWA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIAMAKA UZOKWE", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIDIMMA NNADI", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIDIEBERE OFORMA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIDOZIE OMENWA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIMEZIE OKEKE", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHIMA BLESSING", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHISOM ONUOHA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "CHUKWULEZE AMARA HOPE", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "GOODNESS ONYERONU", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "IJEOMA NWOKOLO", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "ISIFE CALEB", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "KINGSLEY ENOJA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OBI KOSI", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OKEKE CHISOM", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]  },
                { name: "OKEKE ADAEZE", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OKEKE EKPEREKA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OKEKE SOMTO", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OKEMEFUNA CHIOMA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OKEN JEREMAIAH", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "OKOYE CHIEMERIE", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "PIUS", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "SILAS EMMANUEL", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "UBAJEKWE IFENNA", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "UDECHUKWU HAPPINESS", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "UDOCHUKWU O", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]},
                { name: "UDEJI CHINEDU", months: [0, 0, 0, 0, 0, 0, 500, 500, 500, 500, 500, 500]}

            ],
            
            2024: [
                { name: "ABILITY CHIBUZOR", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "AMARA JULIET", months: [500,500,500,500,500,500,500,0,0,0,0,0] },
                { name: "CHIAMAKA AWA", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "CHIAMAKA UZOKWE", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "CHIDIEBER OFORMA", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "CHIDOZIE OMENWA", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "CHIMA BLESSING", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "CHIMEZIE OKEKE", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "CHISOM ONUOHA", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "CHUKWUEBUKA UNEGBU", months: [0,0,0,0,0,0,500,500,500,500,500,500] },
                { name: "EJIKE OMEREBERE", months: [500,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "GOODNESS ONYERONU", months: [500,500,500,500,500,500,500,0,0,0,0,0] },
                { name: "IJEOMA NWOKOLO", months: [500,500,500,500,500,500,500,500,0,0,0,0] },
                { name: "ISIFE CALEB", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "KINGSLEY ENOJA", months: [500,500,500,500,500,500,500,500,500,0,0,0] },
                { name: "NNADI CHIDIMMA", months: [500,500,500,500,500,500,500,500,500,500,500,0] },
                { name: "OBI KOSI", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "OKEKE ADAEZE", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "OKEKE EKPEREKA", months: [500,500,500,500,500,500,0,0,0,0,0,0] },
                { name: "OKEKE SOMTO", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "OKEMEFUNA CHIOMA P", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "OKEN JEREMAIAH", months: [500,500,500,0,0,0,0,0,0,0,0,0] },
                { name: "OKOYE CHIEMERIE", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "PIUS", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "SILAS EMMANUEL", months: [500,500,500,500,500,500,0,0,0,0,0,0] },
                { name: "UBAJEKWE IFENNA", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "UDEJI CHINEDU", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "UDOCHUKWU ONWUGBENU", months: [500,500,500,500,500,500,500,500,500,500,500,500] }

        ],
            2025:  [
                { name: "ABILITY CHIBUZOR", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "ALIBA EZENWA", months: [500,500,500,0,0,0,0,0,0,0,0,0] },
                { name: "AMARA JULIET", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "CHIAMAKA UZOKWE", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "CHIAMAKA AWA", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "CHIDIEBER OFORMA", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "CHIDOZIE OMENWA", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "CHIMA BLESSING", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "CHIMEZIE OKEKE", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "CHISOM ONUOHA", months: [500,500,500,500,500,500,500,500,500,0,0,0] },
                { name: "CHUKWUEBUKA UNEGBU", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "EJIKE OMEREBERE", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "GOODNESS ONYERONU", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "IJEOMA NWOKOLO", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "ISIFE CALEB", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "KINGSLEY ENOJA", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "NNADI CHIDIMMA", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "OBI KOSI", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "OBI NZUBE", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "OKEKE ADAEZE", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "OKEKE EKPEREKA", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "OKEKE SOMTO", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "OKEMEFUNA CHIOMA P", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "OKEN JEREMAIAH", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "OKOYE CHIEMERIE", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "PIUS", months: [500,500,500,500,500,500,0,0,0,0,0,0] },
                { name: "SILAS EMMANUEL", months: [0,0,0,0,0,0,0,0,0,0,0,0] },
                { name: "UBAJEKWE IFENNA", months: [500,500,500,500,0,0,0,0,0,0,0,0] },
                { name: "UDEJI CHINEDU", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "UDOCHUKWU ONWUGBENU", months: [500,500,500,500,500,500,500,500,500,500,500,500] }

            ],

            2026: [
                { name: "CHIDOZIE OMENWA", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "CHUKWUEBUKA UNEGBU", months: [500,500,500,500,500,500,500,500,500,500,500,500] },
                { name: "UDEJI CHINEDU", months: [500,500,500,500,500,500,500,500,500,500,500,500] }
            ],

            2027: [
                
            ],

            2028: [
                
            ],

            2029: [
                
            ],

            2030: [
                
            ]
        };

        const contributionsData = {
  burial: [
                { name: "Emmanuel Silas Fathers Burial 2023", date: "May 2023", contributions: [
                    { member: "ABILITY CHIBUZOR", amount: 1500 },
                    { member: "ALIBE EZENWA", amount: 1500 },
                    { member: "AMARA EJIKEME", amount: 1500 },
                    { member: "CHIAMAKA AWA", amount: 2000 },
                    { member: "CHIMA BLESSING", amount: 1500 },
                    { member: "CHIMEZIE OKEKE", amount: 1500 },
                    { member: "CHISOM ONUORAH", amount: 2000 },
                    { member: "EKPEREKA OKEKE", amount: 2000 },
                    { member: "GOODNESS ONYERUONU", amount: 1500 },
                    { member: "HAPPINESS UDECHUKWU", amount: 2000 },
                    { member: "IJEOMA NWOKOLO", amount: 1500 },
                    { member: "ISIFE CALEB", amount: 2000 },
                    { member: "JEREMIAH OKEN", amount: 1500 },
                    { member: "KINGSLEY ONOJA", amount: 1500 },
                    { member: "NNADI CHIDIMMA", amount: 1500 },
                    { member: "OBI KOSI", amount: 1500 },
                    { member: "OKEKE STELLA", amount: 1500 },
                    { member: "OKOYE CHIEMERIE", amount: 1500 },
                    { member: "OMENWA CHIDOZIE", amount: 1500 },
                    { member: "SOMTO OKEKE", amount: 1500 },
                    { member: "UBAJEKWE IFENNA", amount: 1800 },
                    { member: "UDEJI CHINEDU", amount: 3000 }
                ]},
                { name: "EZENWA MOTHERS BURIAL 2023", date: "August 2023", contributions: [
                { member: 'ABILITY CHIBUZOR', amount: 1500 },
                { member: 'AMACHUKWU CHIDINMA', amount: 1500 },
                { member: 'AMARA GLORIA', amount: 1500 },
                { member: 'CHIAMAKA AWA', amount: 1500 },
                { member: 'CHIDIEBERE OFOMA', amount: 1500 },
                { member: 'CHIEMERIE OKOYE', amount: 1500 },
                { member: 'CHIMA BLESSING', amount: 1500 },
                { member: 'CHINEDU UDEJI', amount: 3000 },
                { member: 'CHISOM ONUORAH', amount: 2000 },
                { member: 'EKPEREKA NZUBE', amount: 3000 },
                { member: 'GOODNESS ONYELEONU', amount: 1500 },
                { member: 'HAPPINESS UDECHUKWU', amount: 1500 },
                { member: 'IJEOMA NWOKOLO', amount: 1500 },
                { member: 'ISIEFE CALEB', amount: 3000 },
                { member: 'JEREMIAH OKEN', amount: 1500 },
                { member: 'KINGSLEY ENOJA', amount: 1500 },
                { member: 'MMADỤ PRECIOUS', amount: 2000 },
                { member: 'NNADI CHIDINMA', amount: 1500 },
                { member: 'NZUBE PAUL OKEKE', amount: 1500 },
                { member: 'OBI KOSI', amount: 1500 },
                { member: 'OKEKE SOMTO', amount: 3000 },
                { member: 'OKEMEFUNA CHIOMA', amount: 1500 },
                { member: 'OMENWA CHIDOZIE', amount: 2000 },
                { member: 'SILAS EMMANUEL', amount: 1500 },
                { member: 'SOPULU NWAWULU', amount: 2000 },
                { member: 'UBAJEKWE IFENNA', amount: 3000 },
                { member: 'UDOCHUKWU ONWUGB', amount: 1500 }
                ]},
                { name: "UCHENNA IBEH BURIAL 2024", date: "September 2023", contributions: [
                { member: 'ABILITY CHIBUZOR', amount: 3000 },
                { member: 'ADAEZE OKEKE', amount: 2000 },
                { member: 'ALIBA EZENWA', amount: 1500 },
                { member: 'AMAKA OFORMA', amount: 5000 },
                { member: 'AMARA GLORIA', amount: 2000 },
                { member: 'AMARA JULIET', amount: 2000 },
                { member: 'ATUCHUKWU CHIEMERIE', amount: 1000 },
                { member: 'CHIAMAKA AWA', amount: 2000 },
                { member: 'CHIBUIKE CALEB', amount: 2000 },
                { member: 'CHIDINMMA NNADI', amount: 2000 },
                { member: 'CHIEMERIE OKOYE', amount: 3000 },
                { member: 'CHIIMMELI OKEKE', amount: 2000 },
                { member: 'CHIMA BLESSING', amount: 2000 },
                { member: 'CHIMEZIE OKEKE', amount: 2000 },
                { member: 'CHINAZA NKOLIKA .C.', amount: 1500 },
                { member: 'CHINEDU UDEJI', amount: 2000 },
                { member: 'CHISOM OFOMA', amount: 3000 },
                { member: 'CHUKWUDEBLU JACINTA', amount: 1500 },
                { member: 'EBUKA UNEGBU', amount: 2000 },
                { member: 'EKPEREKA OKEKE', amount: 5000 },
                { member: 'GOODNESS ONYERUONU', amount: 2000 },
                { member: 'HENRY ADIBE', amount: 5000 },
                { member: 'ISIFE CALEB', amount: 2000 },
                { member: 'KINGSLRY ENOJA', amount: 2000 },
                { member: 'MAKUO OJUKWU', amount: 1500 },
                { member: 'NWAWULU SOPURU', amount: 1000 },
                { member: 'NWOKOLO IJEOMA', amount: 1000 },
                { member: 'NZUBE PAUL OKEKE', amount: 2000 },
                { member: 'OBI KOSI', amount: 2000 },
                { member: 'OBI NZUBE', amount: 3000 },
                { member: 'OBIOMA .I.', amount: 1000 },
                { member: 'OFORMA CHIDIEBERE', amount: 2000 },
                { member: 'OGBONNA FAVOUR', amount: 4000 },
                { member: 'OKEKE STELLA', amount: 3000 },
                { member: 'OKEMEFUNA CHIOMA', amount: 1000 },
                { member: 'OKEN JEREMAIH', amount: 2000 },
                { member: 'OMENWA CHIDOZIE', amount: 5000 },
                { member: 'ONUOHA CHISOM', amount: 5000 },
                { member: 'SILAS EMMANUEL', amount: 3000 },
                { member: 'SOMTO OKEKE', amount: 2000 },
                { member: 'SUZY OMEREBERE', amount: 1000 },
                { member: 'SUZY OMEREBERE', amount: 2000 },
                { member: 'UBAJEKWE IFENNA', amount: 5000 },
                { member: 'UDECHUKWU HAPPINESS', amount: 5000 },
                { member: 'UDOCHUKWU O', amount: 2000 },
                { member: 'UZOKWE CHIAMAKA', amount: 1000 },
                { member: 'VIVIAN UCHE', amount: 1000 },
                ]},
                 { name: "CHIMEZIE OKEKE FATHERS BURIAL 2024", date: "SEPT 2023", contributions: [
		        { member: 'ABILITY CHIBUZOR', amount: 1500 },
                { member: 'ADAEZE OKEKE', amount: 2000 },
                { member: 'AWA CHIAMAKA', amount: 1500 },
                { member: 'CHIDOZIE OMENWA', amount: 2500 },
                { member: 'CHIMA BLESSING', amount: 1500 },
                { member: 'CHISOM OKEKE', amount: 1500 },
                { member: 'CHIAMAKA AWA', amount: 1500 },
                { member: 'EKPEREKA OKEKE', amount: 5000 },
                { member: 'EMMANUEL SILAS', amount: 1500 },
                { member: 'GOODNESS ONYERUONU', amount: 1500 },
                { member: 'ISIFE CALEB', amount: 2000 },
                { member: 'JEREMIAH OKEN', amount: 2000 },
                { member: 'KINGSLEY ENOJA', amount: 1500 },
                { member: 'NNADI CHIDINMA', amount: 1500 },
                { member: 'NWOKOLO IJEOMA', amount: 1500 },
                { member: 'OBI KOSI', amount: 2000 },
                { member: 'OGBONNA FAVOUR', amount: 1500 },
                { member: 'OKOYE CHIEMERIE', amount: 1500 },
                { member: 'OMA', amount: 1500 },
                { member: 'SOMTO OKEKE', amount: 1500 },
                { member: 'SOPULU', amount: 1500 },
                { member: 'UBAJEKWE IFENNA', amount: 1500 },
                { member: 'UDEJI CHINEDU', amount: 3000 },
                { member: 'UDOCHUKWU ONWUGBENU', amount: 1500 },
                ]},
                { name: "KOSI OBI MOTHERS BURIAL", date: "Dec 2025", contributions: [
 	   	        { member: 'ABILITY CHIBUZOR', amount: 1500 },
                { member: 'ADAEZE OKEKE', amount: 2000 },
                { member: 'ALIBA EZENWA', amount: 1500 },
                { member: 'AMARA GLORIA', amount: 1500 },
                { member: 'AMARA JULIET', amount: 1500 },
                { member: 'AMARA UZOMA', amount: 1500 },
                { member: 'AWA CHIAMAKA', amount: 1500 },
                { member: 'CHHIOMA OKEMEFUNA', amount: 1500 },
                { member: 'CHIAGOZIE AKUBUE', amount: 2000 },
                { member: 'CHIAMAKA UZOKWE', amount: 1500 },
                { member: 'CHIDI OFORMA', amount: 1500 },
                { member: 'CHIMA BLESSSING', amount: 1500 },
                { member: 'CHIMEZIE OKEKE', amount: 1500 },
                { member: 'CHISOM OFORMA', amount: 3000 },
                { member: 'CHISOM ONUORAH', amount: 2000 },
                { member: 'CHUKWUDEBELU JACINTA', amount: 1500 },
                { member: 'CHUKWULEZE AMARA HOPE', amount: 2000 },
                { member: 'EBUKE UNEGBU', amount: 2000 },
                { member: 'HAPPINESS UDECHUKWU', amount: 2000 },
                { member: 'HENRY ADIBE', amount: 2000 },
                { member: 'IJEOMA NWOKOLO', amount: 1500 },
                { member: 'ISIFE CALEB', amount: 2000 },
                { member: 'KINGSLEY ENOJA', amount: 1500 },
                { member: 'MABU NELLY', amount: 30000 },
                { member: 'NNADI CHIDIMMA', amount: 1500 },
                { member: 'OKEN JEREMAIAH', amount: 1500 },
                { member: 'OKORO CHUKWUBE', amount: 1500 },
                { member: 'OKOYE CHIEMERIE', amount: 1500 },
                { member: 'OMENWA CHIDOZIE', amount: 2500 },
                { member: 'ONWUGBENU UDOCHUKWU', amount: 1500 },
                { member: 'SOMTO OKEKE', amount: 1500 },
                { member: 'SOPULU NWAWULU', amount: 1500 },
                { member: 'SUZY OMEREBERE', amount: 1500 },
                { member: 'UBAJEKWE IFENNA', amount: 2000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
             ]},
                { name: "CHINAZA KAKA MOTHERS BURIAL 2025", date: "SEPT 2025", contributions: [
		        { member: 'ABILITY CHIBUZOR', amount: 1500 },
                { member: 'ADAEZE OKEKE', amount: 2000 },
                { member: 'ALIBA EZENWA', amount: 1500 },
                { member: 'AMARA GLORIA', amount: 1500 },
                { member: 'AMARA JULIET', amount: 1500 },
                { member: 'AMARA UZOMA', amount: 1500 },
                { member: 'AWA CHIAMAKA', amount: 1500 },
                { member: 'CHHIOMA OKEMEFUNA', amount: 1500 },
                { member: 'CHIAGOZIE AKUBUE', amount: 2000 },
                { member: 'CHIAMAKA UZOKWE', amount: 1500 },
                { member: 'CHIDI OFORMA', amount: 1500 },
                { member: 'CHIMA BLESSSING', amount: 1500 },
                { member: 'CHIMEZIE OKEKE', amount: 1500 },
                { member: 'CHISOM OFORMA', amount: 3000 },
                { member: 'CHISOM ONUORAH', amount: 2000 },
                { member: 'CHUKWUDEBELU JACINTA', amount: 1500 },
                { member: 'CHUKWULEZE AMARA HOPE', amount: 2000 },
                { member: 'EBUKE UNEGBU', amount: 2000 },
                { member: 'HAPPINESS UDECHUKWU', amount: 2000 },
                { member: 'HENRY ADIBE', amount: 2000 },
                { member: 'IJEOMA NWOKOLO', amount: 1500 },
                { member: 'ISIFE CALEB', amount: 2000 },
                { member: 'KINGSLEY ENOJA', amount: 1500 },
                { member: 'MABU NELLY', amount: 30000 },
                { member: 'NNADI CHIDIMMA', amount: 1500 },
                { member: 'OKEN JEREMAIAH', amount: 1500 },
                { member: 'OKORO CHUKWUBE', amount: 1500 },
                { member: 'OKOYE CHIEMERIE', amount: 1500 },
                { member: 'OMENWA CHIDOZIE', amount: 2500 },
                { member: 'ONWUGBENU UDOCHUKWU', amount: 1500 },
                { member: 'SOMTO OKEKE', amount: 1500 },
                { member: 'SOPULU NWAWULU', amount: 1500 },
                { member: 'SUZY OMEREBERE', amount: 1500 },
                { member: 'UBAJEKWE IFENNA', amount: 2000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
             ]},
                { name: "AMARA GLORIA HUSBAND  2025", date: "SEPT 2025", contributions: [
                { member: 'CHIMA BLESSING', amount: 2000 },
                { member: 'DJ ABILITY', amount: 3000 },
                { member: 'OKOYE CHIEMERIE', amount: 5000 },
                { member: 'CALEB ISISFE', amount: 10000 },
                { member: 'IKENNA EZE', amount: 2000 },
                { member: 'ALIBA EZENWA', amount: 4000 },
                { member: 'HAPPINESS UDECHUKWU', amount: 5000 },
                { member: 'CHISOM ONUOHA', amount: 5000 },
                { member: 'CHIOMA OKEMEFUNA', amount: 2000 },
                { member: 'SOMTO OKEKE', amount: 20000 },
                { member: 'UBAJEKWE IFENNA', amount: 10000 },
                { member: 'UDOCHUKWU ONWUGBENU', amount: 2000 },
                { member: 'KINGSLEY ELOJA', amount: 2000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
                { member: 'SILAS EMMANUEL', amount: 2000 },
                { member: 'OKEN JEREMIAH', amount: 2000 },
                { member: 'OBI NZUBE', amount: 5000 },
                { member: 'OMENWA CHIDOZIE', amount: 3000 },
                { member: 'CHIMEZIE OKEKE', amount: 3000 },
                { member: 'FAVOUR OGBONAA', amount: 2000 },
                { member: 'AWA CHIAMAKA', amount: 3000 },
                { member: 'AMAKA OFORMA', amount: 2000 },
                { member: 'CHIDINMA NNADI', amount: 2000 },
                { member: 'SUZY OMEREBELE', amount: 2000 },
                { member: 'JACINTA CHUKWUDEBELU', amount: 3000 },
                { member: 'IJEOMA NWOKOLO', amount: 2000 },
                { member: 'CHEKWUBE OKORO', amount: 2000 },
                { member: 'AMARA CHUKWUKELEZE', amount: 3000 },
                { member: 'AMARA JULIET', amount: 2000 },
                { member: 'GOODNESS ONYELONU', amount: 3000 },
                { member: 'CHINAZA JOHNSON NJOKU', amount: 2000 },
                { member: 'HENRY ADIBE', amount: 10000 },
                { member: 'CHIMAMKPAM ISREAL', amount: 2000 },
                { member: 'CHIDIMMA AMACHUKWU', amount: 3000 },
                { member: 'SOPULU NWAWULUWULU', amount: 2000 },
                { member: 'ADAEZE OKEKE', amount: 2000 },
                { member: 'CHISOM OFORMA', amount: 2000 },
             ]},
            ],
            wedding: [
                { name: "CHIAMAKA UZOKWES WEDDING", date: "June 2024", contributions: [
                { member: 'CHIMA BLESSING', amount: 2000 },
                { member: 'DJ ABILITY', amount: 3000 },
                { member: 'OKOYE CHIEMERIE', amount: 5000 },
                { member: 'CALEB ISISFE', amount: 10000 },
                { member: 'IKENNA EZE', amount: 2000 },
                { member: 'ALIBA EZENWA', amount: 4000 },
                { member: 'HAPPINESS UDECHUKWU', amount: 5000 },
                { member: 'CHISOM ONUOHA', amount: 5000 },
                { member: 'CHIOMA OKEMEFUNA', amount: 2000 },
                { member: 'SOMTO OKEKE', amount: 20000 },
                { member: 'UBAJEKWE IFENNA', amount: 10000 },
                { member: 'UDOCHUKWU ONWUGBENU', amount: 2000 },
                { member: 'KINGSLEY ELOJA', amount: 2000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
                { member: 'SILAS EMMANUEL', amount: 2000 },
                { member: 'OKEN JEREMIAH', amount: 2000 },
                { member: 'OBI NZUBE', amount: 5000 },
                { member: 'OMENWA CHIDOZIE', amount: 3000 },
                { member: 'CHIMEZIE OKEKE', amount: 3000 },
                { member: 'FAVOUR OGBONAA', amount: 2000 },
                { member: 'AWA CHIAMAKA', amount: 3000 },
                { member: 'AMAKA OFORMA', amount: 2000 },
                { member: 'CHIDINMA NNADI', amount: 2000 },
                { member: 'SUZY OMEREBELE', amount: 2000 },
                { member: 'JACINTA CHUKWUDEBELU', amount: 3000 },
                { member: 'IJEOMA NWOKOLO', amount: 2000 },
                { member: 'CHEKWUBE OKORO', amount: 2000 },
                { member: 'AMARA CHUKWUKELEZE', amount: 3000 },
                { member: 'AMARA JULIET', amount: 2000 },
                { member: 'GOODNESS ONYELONU', amount: 3000 },
                { member: 'CHINAZA JOHNSON NJOKU', amount: 2000 },
                { member: 'HENRY ADIBE', amount: 10000 },
                { member: 'CHIMAMKPAM ISREAL', amount: 2000 },
                { member: 'CHIDIMMA AMACHUKWU', amount: 3000 },
                { member: 'SOPULU NWAWULUWULU', amount: 2000 },
                { member: 'ADAEZE OKEKE', amount: 2000 },
                { member: 'CHISOM OFORMA', amount: 2000 },
            ]},
           ],
            childDedication: [
                { name: "Chima Blessing Child Dedictaion 2023", date: "June 2022", contributions: [
                { member: 'ABILITY CHIBUZOR', amount: 1500 },
                { member: 'AMARA EJIKEME', amount: 1000 },
                { member: 'CHIAMAKA AWA', amount: 1500 },
                { member: 'CHIDI OFORMA', amount: 1000 },
                { member: 'CHISOM ONUORAH', amount: 1000 },
                { member: 'EKPEREKA OKEKE', amount: 1000 },
                { member: 'GOODNESS ONYERUONU', amount: 1000 },
                { member: 'IJEOMA NWOKOLO', amount: 1000 },
                { member: 'ISIFE CALEB', amount: 5000 },
                { member: 'IWUANYA EMMANUEL', amount: 1000 },
                { member: 'KINGSLEY ENOJA', amount: 1000 },
                { member: 'NNADI CHIDINMMA', amount: 1000 },
                { member: 'OBI KOSI', amount: 1500 },
                { member: 'OGBONNA FAVOUR', amount: 1000 },
                { member: 'OMENWA CHIDOZIE', amount: 2000 },
                { member: 'ONWUGBENU UDOCHUKWU', amount: 1000 },
                { member: 'SILAS EMMANUEL', amount: 2000 },
                { member: 'SOMTO OKEKE', amount: 1000 },
                { member: 'SOPULU NWAWULU', amount: 1000 },
                { member: 'UBAJEKWE IFENNA', amount: 2000 },
                { member: 'UDECHUKWU HAPPINESS', amount: 1000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
                { member: 'UZOKWE CHIAMAKA', amount: 1000 },
             ]},
            ],
            support: [
                { name: "BUSINESS SUPPORT FOR OMERBERE 2025", date: "June 2025", contributions: [
                { member: 'ABILITY CHIBUZOR', amount: 1500 },
                { member: 'AMARA EJIKEME', amount: 1000 },
                { member: 'CHIAMAKA AWA', amount: 1500 },
                { member: 'CHIDI OFORMA', amount: 1000 },
                { member: 'CHISOM ONUORAH', amount: 1000 },
                { member: 'EKPEREKA OKEKE', amount: 1000 },
                { member: 'GOODNESS ONYERUONU', amount: 1000 },
                { member: 'IJEOMA NWOKOLO', amount: 1000 },
                { member: 'ISIFE CALEB', amount: 5000 },
                { member: 'IWUANYA EMMANUEL', amount: 1000 },
                { member: 'KINGSLEY ENOJA', amount: 1000 },
                { member: 'NNADI CHIDINMMA', amount: 1000 },
                { member: 'OBI KOSI', amount: 1500 },
                { member: 'OGBONNA FAVOUR', amount: 1000 },
                { member: 'OMENWA CHIDOZIE', amount: 2000 },
                { member: 'ONWUGBENU UDOCHUKWU', amount: 1000 },
                { member: 'SILAS EMMANUEL', amount: 2000 },
                { member: 'SOMTO OKEKE', amount: 1000 },
                { member: 'SOPULU NWAWULU', amount: 1000 },
                { member: 'UBAJEKWE IFENNA', amount: 2000 },
                { member: 'UDECHUKWU HAPPINESS', amount: 1000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
                { member: 'UZOKWE CHIAMAKA', amount: 1000 },
                ]},
               { name: "SUPPORT FOR MR OGUNJIOFFOR 2026", date: "June 2025", contributions: [
                { member: 'HAPPINESS UDECHUKWU', amount: 2000 },
                { member: 'SOMTO OKEKE', amount: 2000 },
                { member: 'UDOCHUKWU GODSLOVE', amount: 2500 },
                { member: 'CHIEMERIE OKOYE', amount: 2500 },
                { member: 'EMMANUEL SILAS', amount: 3000 },
                { member: 'AMARA EJIKEUMEJIUWA', amount: 2000 },
                { member: 'ALIBA EZENWA', amount: 3000 },
                { member: 'SUZY OMEREBERE', amount: 2000 },
                { member: 'CHIOMA OKEMEFUNA', amount: 2000 },
                { member: 'CHIDINMA NNADI', amount: 2000 },
                { member: 'UDEJI CHINEDU', amount: 5000 },
                { member: 'CHIMMELI OKONKWO', amount: 10000 },
                { member: 'IKENNA EZE', amount: 2000 },
                { member: 'ADAEZE OKEKE', amount: 3000 },
                { member: 'IJEOMA NWOKOLO', amount: 2000 },
                { member: 'KOSI OBI', amount: 5000 },
                { member: 'HENRY ADIBE', amount: 10000 },
                { member: 'IFENNA UBAJEKWE', amount: 5000 },
                { member: 'GOODNESS ONYELEONU (OPI)', amount: 2000 },
                { member: 'OKEN JEREMIAH', amount: 2000 },
                { member: 'CHEKWUBE OKORO', amount: 2000 },
                { member: 'CHINAEME NWANKWO', amount: 2000 },
                { member: 'AMARA JULIET', amount: 2000 },
                { member: 'STELLA OKEKE', amount: 3000 },
                { member: 'ABILITY CHIBUZOR', amount: 3000 },
                { member: 'CHIAMAKA TAGBO', amount: 2000 },
                { member: 'CHIMA BLESSING', amount: 2000 },
                { member: 'OGBONNA FAVOUR', amount: 2000 },
                { member: 'CALEB ISIFE', amount: 5000 },
                { member: 'CHIEMERIE NWOSU', amount: 2000 },
                { member: 'AMARA CHUKWUKELEZE', amount: 5000 },
                { member: 'OMENWA CHIDOZIE', amount: 10000 },
                { member: 'KINGSLEY ENOJA', amount: 2000 },
                { member: 'SOPULU NWAWULU', amount: 2000 },
                { member: 'EBUKA UNAENGBU', amount: 2000 },
               ]},
            ],  
            get2gether: [  
                { name: "Get Together 2024", date: "December 2025", contributions: [
                { member: 'ABILITY CHIBUZOR', amount: 45000 },
                { member: 'AMAKA OFORMA', amount: 15000 },
                { member: 'AMARA JULIET', amount: 5000 },
                { member: 'ATUCHUKWU CHIEMELIE', amount: 16000 },
                { member: 'CALEB ISIFE', amount: 70000 },
                { member: 'CHIAMAKA AWA', amount: 15000 },
                { member: 'CHIEMERIE OKOYE', amount: 25000 },
                { member: 'CHIGOZIE AKUBUDE', amount: 15000 },
                { member: 'CHIMA BLESSING', amount: 15000 },
                { member: 'CHIMEZIE OKEKE', amount: 10000 },
                { member: 'CHISOM ONUOHA', amount: 15000 },
                { member: 'CHUKWULEZE AMARA HOPE', amount: 15000 },
                { member: 'CHUKWUMAMKPA ISREAL', amount: 5000 },
                { member: 'EJIKEME OMEREBER SUZY', amount: 10000 },
                { member: 'GOODNESS ORANEKWU', amount: 15000 },
                { member: 'HAPPINESS UDECHUKWU', amount: 65000 },
                { member: 'HENRY ABIBE', amount: 50000 },
                { member: 'IEOMA NWOKOLO', amount: 15000 },
                { member: 'IFENNA UBAJEKWE', amount: 50000 },
                { member: 'KINGSLEY ENOJA', amount: 15000 },
                { member: 'KOSI OBI', amount: 15000 },
                { member: 'MAKUO OJUKWU', amount: 30000 },
                { member: 'NJOKU CHINAZA J', amount: 15000 },
                { member: 'OBI NZUBE', amount: 50000 },
                { member: 'OFOMA CHIDIDEBERE', amount: 15000 },
                { member: 'OKEMEFUNA CHIOMA', amount: 15000 },
                { member: 'OKEN JEREMAIAH', amount: 15000 },
                { member: 'OKEZUE CHINECHEREM', amount: 5000 },
                { member: 'OMENWA CHIDOZIE', amount: 185000 },
                { member: 'ONYINYE MBONU', amount: 50000 },
                { member: 'SILAS EMMANUEL', amount: 15000 },
                { member: 'SOMTO OKEKE', amount: 100000 },
                { member: 'SOPULU NWAWULU', amount: 15000 },
                { member: 'UDEJI CHINEDU', amount: 90000 },
                { member: 'UDOCHUKWU ONWUGBENU', amount: 15000 },
                { member: 'UZOKWE CHIAMAKA', amount: 15000 },
             ]},
                { name: "Launching of Magazine", date: "January 2025", contributions: [
                { member: 'ABILITY CHIBUZOR', amount: 5000 },
                { member: 'AKUBUDE CHIGOZIE', amount: 10000 },
                { member: 'AMAKA OFORMA', amount: 3000 },
                { member: 'CALEB ISIFE', amount: 20000 },
                { member: 'CHIDI OFORMA', amount: 2000 },
                { member: 'CHINAZA', amount: 10000 },
                { member: 'CHISOM ONUOHA', amount: 20000 },
                { member: 'EBUKA UNEGBU', amount: 10000 },
                { member: 'ENOJAH KINGSLEY', amount: 10000 },
                { member: 'FAVOUR OGBONNA', amount: 5000 },
                { member: 'HAPPINESS UDECHUKWU', amount: 10000 },
                { member: 'ISREAL CHIMAMKPAM', amount: 5000 },
                { member: 'KOSI OBI', amount: 10000 },
                { member: 'OMEREBERE SUZY', amount: 5000 },
                { member: 'ORANEKWU GOODNESS', amount: 1000 },
                { member: 'SOPULU NWAWULU', amount: 5000 },
                { member: 'UDEJI CHINEDU', amount: 30000 },
                ]},
                { name: "Launching of Cake", date: "January 2025", contributions: [
                { member: 'AKUBUDE CHIGOZIE', amount: 10000 },
                { member: 'CALEB ISIFE', amount: 10000 },
                { member: 'CHISOM ONUOHA', amount: 20000 },
                { member: 'EBUKA UNEGBU', amount: 5000 },
                { member: 'ENOJA KINGSLEY', amount: 5000 },
                { member: 'KOSI OBI', amount: 5000 },
                { member: 'UDEJI CHINEDU', amount: 20000 },
                { member: 'UZOKWE CHIAMAKA', amount: 5000 },
                ]},
            ],
        };

 const executivesData = [
            { member: 'Chinedu Udejimba', position: 'Chairman', image: 'https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg', },
            { member: 'Chibuzor Ability', position: 'Vice Chairman', image: 'https://i.ibb.co/jvRRZPx4/Chimmeli-okonk' },
            { member: 'Omenwa Chidozie', position: 'Patron', image: 'https://i.ibb.co/MDYPfftG/Omenwa-Chidozie.jpg' },
            { member: 'Iwuanya Emmanuel', position: 'Patron', image: 'https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg' },
            { member: 'Chiemerie Okoye', position: 'Secretary', image: 'https://i.ibb.co/xbJStTm/Chiemerie-Okoye.jpg' },
            { member: 'Awa Chiamaka Rita', position: 'Secretary', image: 'https://i.ibb.co/4g05Mnpb/Awa-Chiamaka.jpg' },
            { member: 'Onyelonu Goodness', position: 'Financial Secretary', image: 'https://i.ibb.co/rRYLQ2P5/Goodness-Onyelonu.jpg' },
            { member: 'Amara Ejikeme', position: 'Treasurer', image: 'https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg' },
            { member: 'Emmanuel Silas N', position: 'Public Relations Officer', image: 'https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg' },
            { member: 'Chisom Onuoha', position: 'Chairman Planning-Committe', image: 'https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg' },
            { member: 'Caleb Isife', position: 'Vice Planning-Committe', image: 'https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg' }
        ];

      const galleryData = [
            { member: "Ijeoma Nwokolo", image: "https://i.ibb.co/N2zdsHhr/Nwokolo-Ijeoma.jpg", thought: "Happiness grows when shared with friends who lift our spirits." },
            { member: "Amara Egbuonu", image: "https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg", thought: "Each small act of kindness creates ripples of joy in the world." },
            { member: "Emmanuel Iwuanya", image: "https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg", thought: "True friendship shines brightest during challenging times." },
            { member: "Chinaza Njoku Johnson", image: "https://i.ibb.co/XfGbptDg/Chinaza-Njoku-Johnson.jpg", thought: "Sharing laughter and memories strengthens the bonds we hold dear." },
            { member: "Nzube Obi", image: "https://i.ibb.co/HfZNQkJm/Nzube-Obi.jpg", thought: "Hope is the spark that guides us through every journey." },
            { member: "Uzochukwu Uchechukwu", image: "https://i.ibb.co/nMKnsFyw/Uzochukwu-Uchechukwu.jpg", thought: "Every kind word has the power to brighten someone’s day." },
            { member: "Amara Julliet", image: "https://i.ibb.co/jZ1Mgd2r/Amara-Julliet.jpg", thought: "Joy multiplies when shared among those we care about." },
            { member: "Onyinye Mbonu", image: "https://i.ibb.co/k2F2YX8b/Onyinye-Mbonu.jpg", thought: "Moments of gratitude transform ordinary days into blessings." },
            { member: "Chimmeli Okonkwo", image: "https://i.ibb.co/jvRRZPx4/Chimmeli-okonkwo.jpg", thought: "Every smile we share leaves a lasting mark on the heart." },
            { member: "Goodness Oranekwu", image: "https://i.ibb.co/zhfM34vr/Goodness-Oranekwu.jpg", thought: "Patience and kindness guide us toward a brighter future." },
            { member: "Udochukwu Onwugbenu", image: "https://i.ibb.co/sJy9h3mq/Udochukwu-Onwugbenu.jpg", thought: "Courage grows when we support each other wholeheartedly." },
            { member: "Oken Jerry", image: "https://i.ibb.co/6ckQbKDP/Oken-Jerry.jpg", thought: "Every day is a new chance to inspire someone with your actions." },
            { member: "Sopulu Nwawulu", image: "https://i.ibb.co/qL0YPVTQ/Sopulu-Nwawulu.jpg", thought: "Friendship shines brighter than any treasure in the world." },
            { member: "Chiamaka Tagbo", image: "https://i.ibb.co/Jj8brWd1/Chiamaka-Tagbo.jpg", thought: "Hope blooms when we nurture it with care and love." },
            { member: "Okemefuna Chioma", image: "https://i.ibb.co/gMtCJKcb/Okemefuna-Chioma.jpg", thought: "Even small acts of kindness can leave a big impact." },
            { member: "Awa Chiamaka", image: "https://i.ibb.co/4g05Mnpb/Awa-Chiamaka.jpg", thought: "Happiness is found in sharing memorable moments together." },
            { member: "Okoro Chekwube", image: "https://i.ibb.co/7J5FjtGM/Okoro-Chekwube.jpg", thought: "Positivity and perseverance pave the road to success." },
            { member: "Azubueze Bright", image: "https://i.ibb.co/KpTqPDfH/Azubueze-Bright.jpg", thought: "Kindness lights up even the darkest corners of life." },
            { member: "Goodness Onyelonu", image: "https://i.ibb.co/67zpy0hD/Goodness-Onyelonu.jpg", thought: "Every shared laugh adds warmth to our hearts." },
            { member: "Happiness Udechukwu", image: "https://i.ibb.co/BJRKqVz/Happiness-Udechukwu.jpg", thought: "The joy we create together becomes a treasured memory." },
            { member: "Eijkeme Amara", image: "https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg", thought: "Gratitude and hope make lifes journey even more beautiful." },
            { member: "Caleb Isife", image: "https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg", thought: "True strength is revealed when we help others rise." },
            { member: "Chidi Oforma", image: "https://i.ibb.co/3YcdbM4P/Chidi-Oforma.jpg", thought: "Every kind gesture leaves a lasting impression on someone’s heart." },
            { member: "Somto Okeke", image: "https://i.ibb.co/9FjLYJg/Somto-Okeke.jpg", thought: "Happiness is amplified when we share it with friends." },
            { member: "Isreal Chukwumamkpam", image: "https://i.ibb.co/7J77Gvy1/Isreal-Chukwumamkpam.jpg", thought: "Patience and love are keys to a fulfilling life." },
            { member: "Chiemerie Okoye", image: "https://i.ibb.co/8w6DLZz/Chiemerie-Okoye.jpg", thought: "Hope grows stronger when shared with others around us." },
            { member: "Aliba Ezenwa", image: "https://i.ibb.co/C55mp397/Aliba-Ezenwa.jpg", thought: "Friendship and laughter are treasures of the soul." },
            { member: "Emmanuel Silas", image: "https://i.ibb.co/93GgZtry/Emmanuel-Silas.jpg", thought: "Every shared experience adds a beautiful chapter to our lives." },
            { member: "Enoja Kingsley", image: "https://i.ibb.co/prrLsMvB/Enoja-Kingsley.jpg", thought: "Caring for others is the essence of true happiness." },
            { member: "Chinedu Udeji", image: "https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg", thought: "Memories become magical when we cherish them together." },
            { member: "Chisom Onuoha", image: "https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg", thought: "A kind word can brighten someone’s whole day." },
            { member: "Omenwa Chidozie", image: "https://i.ibb.co/BVXTGGQr/Omenwa-Chidozie.jpg", thought: "Sharing joy and hope makes life truly meaningful." }
];

           
// Image position overrides — edit these values (format: 'X% Y%')
const imagePositionOverrides = {
    'https://i.ibb.co/jZ1Mgd2r/Amara-Julliet.jpg': '50% 50%',
    'https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg': '50% 50%',
    'https://i.ibb.co/XfGbptDg/Chinaza-Njoku-Johnson.jpg': '20% 20%',
    'https://i.ibb.co/N2zdsHhr/Nwokolo-Ijeoma.jpg': '40% 40%',
    'https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg': '40% 40%',
    'https://i.ibb.co/k2F2YX8b/Onyinye-Mbonu.jpg': '35% 35%',
    'https://i.ibb.co/nMKnsFyw/Uzochukwu-Uchechukwu.jpg': '25% 25%',
    'https://i.ibb.co/HfZNQkJm/Nzube-Obi.jpg': '25% 25%',
    'https://i.ibb.co/zhfM34vr/Goodness-Oranekwu.jpg': '35% 35%',
    'https://i.ibb.co/sJy9h3mq/Udochukwu-Onwugbenu.jpg': '45% 45%',
    'https://i.ibb.co/gMtCJKcb/Okemefuna-Chioma.jpg': '40% 40%',
    'https://i.ibb.co/8w6DLZz/Chiemerie-Okoye.jpg': '25% 25%',
    'https://i.ibb.co/67zpy0hD/Goodness-Onyelonu.jpg': '10% 10%',
    'https://i.ibb.co/KpTqPDfH/Azubueze-Bright.jpg': '30% 30%',
    'https://i.ibb.co/zTZSnVyZ/Nnadi-Chidinma.jpg': '8% 8%',
    'https://i.ibb.co/7J77Gvy1/Isreal-Chukwumamkpam.jpg': '8% 8%',
    'https://i.ibb.co/rRYLQ2P5/Goodness-Onyelonu.jpg': '50% 50%',
    'https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg': '80% 80%',
    'https://i.ibb.co/93GgZtry/Emmanuel-Silas.jpg': '25% 25%',
    'https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg': '6% 6%',
    'https://i.ibb.co/prrLsMvB/Enoja-Kingsley.jpg': '10% 10%',
    'https://i.ibb.co/9FjLYJg/Somto-Okeke.jpg': '4% 4%',
    'https://i.ibb.co/BVXTGGQr/Omenwa-Chidozie.jpg': '20% 20%',
    'https://i.ibb.co/7J5FjtGM/Okoro-Chekwube.jpg': '10% 10%',
    'https://i.ibb.co/6ckQbKDP/Oken-Jerry.jpg': '10% 10%',
    'https://i.ibb.co/7J5FjtGM/Okoro-Chekwube.jpg': '20% 20%',
    'https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg': '50% 30%',
    'https://i.ibb.co/R4ZyBjFC/Chima-Blessing.jpg': '10% 10%',
    'https://i.ibb.co/twMyw51d/Ofoma-Chisom.jpg': '10% 10%',
    'https://i.ibb.co/k2BFCx1s/Ubajekwe-Ifenna.jpg': '25% 25%',
    

    // Executives (set same editable map so changing here affects both views)
    'https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg': '6% 6%',
    'https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg': '80% 80%',
    'https://i.ibb.co/jvRRZPx4/Chimmeli-okonk.jpg': '50% 30%',
    'https://i.ibb.co/MDYPfftG/Omenwa-Chidozie.jpg': '20% 20%',
    'https://i.ibb.co/xbJStTm/Chiemerie-Okoye.jpg': '50% 30%',
    'https://i.ibb.co/4g05Mnpb/Awa-Chiamaka.jpg': '50% 30%',
    'https://i.ibb.co/rRYLQ2P5/Goodness-Onyelonu.jpg': '10% 10%',
    'https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg': '80% 80%',
    'https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg': '15% 15%',
    'https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg': '50% 30%'
};

        // Navigation History
        let navigationHistory = ['dashboard'];

        // Navigate to Page
        function navigateTo(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show target page
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
                
                // Update navigation history
                if (navigationHistory[navigationHistory.length - 1] !== pageId) {
                    navigationHistory.push(pageId);
                    // Push state to browser history
                    window.history.pushState({ page: pageId }, '', '');
                }

                // Update active nav button
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('active');
                });

                // Scroll to top
                document.querySelector('.main-content').scrollTo(0, 0);

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    toggleMobileMenu();
                }
            }
        }

        // History Back
        window.history.back = function() {
            if (navigationHistory.length > 1) {
                navigationHistory.pop();
                const previousPage = navigationHistory[navigationHistory.length - 1];
                navigateTo(previousPage);
            } else {
                navigateTo('dashboard');
            }
        };

        // Toggle Submenu
        function toggleSubmenu(submenuId) {
            const submenu = document.getElementById(submenuId);
            const button = submenu.previousElementSibling;
            
            submenu.classList.toggle('hidden');
            submenu.classList.toggle('open');
            button.classList.toggle('open');
        }

        // Populate Members Table
        function populateMembersTable() {
            const tbody = document.getElementById('members-table');
            tbody.innerHTML = '';

            membersData.forEach(member => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${member.name}</td>
                    <td>${member.base}</td>
                    <td class="hidden-mobile">${member.occupation}</td>
                    <td class="hidden-mobile">${new Date(member.dob).toLocaleDateString()}</td>
                    <td class="hidden-tablet">${member.phone}</td>
                    <td class="hidden-tablet">${member.email}</td>
                `;
                tbody.appendChild(row);
            });
        }

        // Populate Dues Tables
        function populateDuesTables() {
            const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
            
            years.forEach(year => {
                const tbody = document.getElementById(`dues-table-${year}`);
                tbody.innerHTML = '';

                const yearData = duesData[year];
                const monthTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                // Add member rows
                yearData.forEach(member => {
                    const row = document.createElement('tr');
                    const memberTotal = member.months.reduce((sum, amount) => sum + amount, 0);

                    let rowHTML = `<td class="sticky-col">${member.name}</td>`;
                    member.months.forEach((amount, index) => {
                        monthTotals[index] += amount;
                        rowHTML += `<td class="${amount > 0 ? 'paid' : 'unpaid'}">₦${amount.toLocaleString()}</td>`;
                    });
                    rowHTML += `<td class="total-col">₦${memberTotal.toLocaleString()}</td>`;

                    row.innerHTML = rowHTML;
                    tbody.appendChild(row);
                });

                // Add totals row
                const totalRow = document.createElement('tr');
                totalRow.classList.add('total-row');
                const grandTotal = monthTotals.reduce((sum, amount) => sum + amount, 0);

                let totalRowHTML = '<td class="sticky-col">TOTAL</td>';
                monthTotals.forEach(total => {
                    totalRowHTML += `<td class="total-col">₦${total.toLocaleString()}</td>`;
                });
                totalRowHTML += `<td class="total-col">₦${grandTotal.toLocaleString()}</td>`;

                totalRow.innerHTML = totalRowHTML;
                tbody.appendChild(totalRow);
            });
        }

        // Populate Contributions
        function populateContributions() {
            const types = {
                burial: 'burial-list',
                wedding: 'wedding-list',
                childDedication: 'child-dedication-list',
                support: 'support-list'
            };

            Object.keys(types).forEach(type => {
                const container = document.getElementById(types[type]);
                container.innerHTML = '';

                contributionsData[type].forEach(contribution => {
                    const total = contribution.contributions.reduce((sum, c) => sum + c.amount, 0);
                    
                    const card = document.createElement('div');
                    card.classList.add('contribution-card');
                    card.innerHTML = `
                        <div class="contribution-name">${contribution.name}</div>
                        <div class="contribution-date">${contribution.date}</div>
                        <div class="contribution-total">₦${total.toLocaleString()}</div>
                    `;
                    card.onclick = () => showContributionDetails(contribution);
                    container.appendChild(card);
                });
            });
        }

        // Show Contribution Details
        function showContributionDetails(contribution) {
            const modal = document.getElementById('contribution-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalTable = document.getElementById('modal-table');

            modalTitle.textContent = contribution.name;
            modalTable.innerHTML = '';

            let total = 0;
            contribution.contributions.forEach(c => {
                total += c.amount;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${c.member}</td>
                    <td class="${c.amount > 0 ? 'paid' : 'unpaid'}">₦${c.amount.toLocaleString()}</td>
                `;
                modalTable.appendChild(row);
            });

            // Add total row
            const totalRow = document.createElement('tr');
            totalRow.classList.add('total-row');
            totalRow.innerHTML = `
                <td><strong>TOTAL</strong></td>
                <td class="total-col"><strong>₦${total.toLocaleString()}</strong></td>
            `;
            modalTable.appendChild(totalRow);

            modal.classList.add('active');
        }

        // Close Contribution Modal
        function closeContributionModal() {
            document.getElementById('contribution-modal').classList.remove('active');
        }

        // Populate Executives
        function populateExecutives() {
            const container = document.getElementById('executives-grid');
            container.innerHTML = '';

            executivesData.forEach(exec => {
                const card = document.createElement('div');
                card.classList.add('executive-card');
                card.innerHTML = `
                    <img src="${exec.image}" alt="${exec.name}" class="executive-image" onerror="this.src=''; this.style.display='none';" onclick="openImageModal('${exec.image}', '${exec.name}')" style="cursor: pointer;">
                    <div class="executive-name">${exec.name}</div>
                    <div class="executive-position">${exec.position}</div>
                `;
                container.appendChild(card);
            });
        }

        // Populate Gallery
        function populateGallery() {
            const container = document.getElementById('gallery-grid');
            container.innerHTML = '';

            galleryData.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('gallery-card');
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="gallery-image" onerror="this.src=''; this.style.display='none';" onclick="openImageModal('${item.image}', '${item.name}')" style="cursor: pointer;">
                    <div class="gallery-info">
                        <div class="gallery-name">${item.name}</div>
                        <div class="gallery-thought">"${item.thought}"</div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Open Image Modal
        function openImageModal(imageSrc, altText) {
            const modal = document.getElementById('image-modal');
            const modalImage = document.getElementById('modal-image');
            modalImage.src = imageSrc;
            modalImage.alt = altText;
            modal.classList.add('active');
        }

        // Close Image Modal
        function closeImageModal() {
            document.getElementById('image-modal').classList.remove('active');
        }

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        function toggleMobileMenu() {
            sidebar.classList.toggle('open');
            mobileOverlay.classList.toggle('active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', toggleMobileMenu);

        // Scroll to Top Button
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        const mainContent = document.querySelector('.main-content');

        mainContent.addEventListener('scroll', () => {
            if (mainContent.scrollTop > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Dark Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            sunIcon.classList.toggle('hidden');
            moonIcon.classList.toggle('hidden');

            // Save theme preference
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Close modal when clicking outside
        document.getElementById('contribution-modal').addEventListener('click', (e) => {
            if (e.target.id === 'contribution-modal') {
                closeContributionModal();
            }
        });

        document.getElementById('image-modal').addEventListener('click', (e) => {
            if (e.target.id === 'image-modal') {
                closeImageModal();
            }
        });

        // Keyboard Navigation Support
        document.addEventListener('keydown', (e) => {
            // Escape key closes modals
            if (e.key === 'Escape') {
                closeContributionModal();
                closeImageModal();
            }
        });

        // Browser Back Button Support
        window.addEventListener('popstate', (e) => {
            if (navigationHistory.length > 1) {
                navigationHistory.pop();
                const previousPage = navigationHistory[navigationHistory.length - 1];
                
                // Hide all pages
                document.querySelectorAll('.page-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show previous page
                const targetPage = document.getElementById(previousPage);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
            }
        });

        // Push initial state
        window.history.pushState({ page: 'dashboard' }, '', '');

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            populateMembersTable();
            populateDuesTables();
            populateContributions();
            populateExecutives();
            populateGallery();
               });
 document.addEventListener("DOMContentLoaded", () => {
  console.log("NEMSS app loaded");
 });