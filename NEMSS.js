// ========================================
        // JAVASCRIPT CODE
        // ========================================
        
        // Sample Data
        const membersData = [
            {name: "Egbuonu Amara", base: "Anambra State. NG", occupation: "Business", dob: "12-May", phone: "08012345678", email: "egbuonu.amara@gmail.com", image: "https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg"},
  {name: "Ijeoma Nwokolo", base: "Anambra State. NG", occupation: "Business", dob: "22-Dec", phone: "08012345678", email: "ijeoma.nwokolo@gmail.com", image: "https://i.ibb.co/N2zdsHhr/Nwokolo-Ijeoma.jpg"},
  {name: "Chinaza Njoku Johnson", base: "Anambra State. NG", occupation: "Business", dob: "10-Apr", phone: "08012345678", email: "chinaza.njoku@gmail.com", image: "https://i.ibb.co/XfGbptDg/Chinaza-Njoku-Johnson.jpg"},
  {name: "Emmanuel Iwuanya", base: "Delta State. NG", occupation: "Business", dob: "15-Mar", phone: "08012345678", email: "emmanuel.iwuanya@gmail.com", image: "https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg"},
  {name: "Amara Juliet", base: "Kaduna State. NG", occupation: "Business", dob: "15-Mar", phone: "08012345678", email: "amara.juliet@gmail.com", image:"https://i.ibb.co/jZ1Mgd2r/Amara-Julliet.jpg"},
  {name: "Nzube Obi" ,base:"Lagos State. NG" ,occupation:"Nigeria Air Force" ,dob:"15-Mar" ,phone:"08012345678" ,email:"nzube.obi@email.com" ,image:"https://i.ibb.co/HfZNQkJm/Nzube-Obi.jpg"},
  {name: "Uzochukwu Uchechkwu", base: "Edo State. NG", occupation: "Business", dob: "15-Mar", phone: "08012345678", email: "uzochukwu.ucheckwu@email.com", image:"https://i.ibb.co/nMKnsFyw/Uzochukwu-Uchechukwu.jpg"},
  {name: "Onyinye Mbonu (Egemonye)", base:"United Kingdom" ,occupation:"Recruiter Cordinator" ,dob:"15-Mar" ,phone:"08012345678" ,email:"onyinye.mbonu@email.com" ,image:"https://i.ibb.co/k2F2YX8b/Onyinye-Mbonu.jpg"},
  {name: "Chimmeli Okonkwo", base: "Anambra State.Ng", occupation: "Enterprenuer", dob: "22-Jun", phone: "08023456789", email: "chimmeli.okonkwo@email.com", image: "https://i.ibb.co/jvRRZPx4/Chimmeli-okonkwo.jpg"},
  {name: "Goodness Oranekwu", base: "Enugu State. NG", occupation: "Secretary & Real Estate", dob: "08-Jan", phone: "08034567890", email: "goodness.oranekwu@email.com", image: "https://i.ibb.co/zhfM34vr/Goodness-Oranekwu.jpg"},
  {name: "Udochukwu Onwugbenu", base: "Anambra State. NG", occupation: "Pharmacy & Accounts", dob: "30-Sep", phone: "08045678901", email: "udochukwu.onwugbenu@email.com", image: "https://i.ibb.co/sJy9h3mq/Udochukwu-Onwugbenu.jpg"},
  {name: "Oken Jerry", base: "Lagos State.NG", occupation: "Clothing  Business", dob: "12-Dec", phone: "08056789012", email: "oken.jerry@email.com", image: "https://i.ibb.co/6ckQbKDP/Oken-Jerry.jpg"},
  {name: "Sopulu Nwawulu", base: "Anambra State. NG", occupation: "Cleaning Service", dob: "25-Apr", phone: "08067890123", email: "sopulu.nwawulu@email.com", image: "https://i.ibb.co/qL0YPVTQ/Sopulu-Nwawulu.jpg"},
  {name: "Chiamaka Tagbo", base: "Anmbra State. NG", occupation: "Business", dob: "18-Jul", phone: "08078901234", email: "chiamaka.tagbo@email.com", image: "https://i.ibb.co/Jj8brWd1/Chiamaka-Tagbo.jpg"},
  {name: "Okemefuna Chioma", base: "Anmbra State. NG", occupation: "Business", dob: "05-Feb", phone: "08089012345", email: "okemefuna.chioma@email.com", image: "https://i.ibb.co/gMtCJKcb/Okemefuna-Chioma.jpg"},
  {name: "Awa Chiamaka Rita", base: "Asaba. NG", occupation: "Seamstress, Travelling Agent", dob: "28-Nov", phone: "08090123456", email: "awa.chiamaka@email.com", image: "https://i.ibb.co/4g05Mnpb/Awa-Chiamaka.jpg"},
  {name: "Okoro Chekwube", base: "Anmbra State. NG", occupation: "Business", dob: "14-Aug-", phone: "08001234567", email: "okoro.chekwube@email.com", image: "https://i.ibb.co/7J5FjtGM/Okoro-Chekwube.jpg"},
  {name: "Azubueze Bright Ikem", base: "Anmbra State. NG", occupation: "Interior Decorator", dob: "20-May-", phone: "08011223344", email: "azubueze.bright@email.com", image: "https://i.ibb.co/KpTqPDfH/Azubueze-Bright.jpg"},
  {name: "Goodness Onyelonu", base: "Anmbra State. NG", occupation: "Enterprenuer", dob: "10-Oct", phone: "08022334455", email: "goodness.onyelonu@email.com", image: "https://i.ibb.co/67zpy0hD/Goodness-Onyelonu.jpg"},
  {name: "Happiness Udechukwu", base: "Anambra State. NG", occupation: "Chef & Clergy", dob: "03-Dec", phone: "08033445566", email: "happiness.udechukwu@email.com", image: "https://i.ibb.co/BJRKqVz/Happiness-Udechukwu.jpg"},
  {name: "Eijkeme Amara", base: "Anmbra State. NG", occupation: "Hairstylist", dob: "17-Feb", phone: "08044556677", email: "eijkeme.amara@email.com", image: "https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg"},
  {name: "Caleb Isife", base: "Anmbra State. NG", occupation: "Deals on Tiles & Building Materilas", dob: "25-Aug", phone: "08055667788", email: "caleb.isife@email.com", image: "https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg"},
  {name: "Chidi Oforma", base: "Lagos State. NG", occupation: "Deals on Toyota & Lexus Upgrade Parts", dob: "11-Apr", phone: "08066778899", email: "chidi.oforma@email.com", image: "https://i.ibb.co/3YcdbM4P/Chidi-Oforma.jpg"},
  {name: "Somto Okeke", base: "Malabo", occupation: "Business", dob: "09-Jul", phone: "08077889900", email: "somto.okeke@email.com", image: "https://i.ibb.co/9FjLYJg/Somto-Okeke.jpg"},
  {name: "Isreal Chukwumamkpam", base: "Enugu State. NG", occupation: "Consultant Nutritionist(Dietitian)", dob: "19-Jan", phone: "08088990011", email: "isreal.chukwumamkpam@email.com", image: "https://i.ibb.co/7J77Gvy1/Isreal-Chukwumamkpam.jpg"},
  {name: "Chiemerie Okoye", base: "Banjul", occupation: "Business", dob: "07-Sep", phone: "08099001122", email: "chiemerie.okoye@email.com", image: "https://i.ibb.co/8w6DLZz/Chiemerie-Okoye.jpg"},
  {name: "Aliba Ezenwa", base: "Aberdeen", occupation: "Business", dob: "23-Nov", phone: "08010112233", email: "aliba.ezenwa@email.com", image: "https://i.ibb.co/C55mp397/Aliba-Ezenwa.jpg"},
  {name: "Emmanuel Silas", base: "Lagos State. NG", occupation: "Software Implementor & Support Analyst", dob: "12-Dec", phone: "08143508348", email: "maximug10@gmail.com", image: "https://i.ibb.co/93GgZtry/Emmanuel-Silas.jpg"},
  {name: "Enoja Kingsley", base: "Anambra State. NG", occupation: "Dealer in keke spare parts", dob: "04-Jun", phone: "08032334455", email: "enoja.kingsley@email.com", image: "https://i.ibb.co/prrLsMvB/Enoja-Kingsley.jpg"},
  {name: "Chinedu Udeji", base: "Anambra State. NG", occupation: "Merchant", dob: "28-Dec", phone: "08043445566", email: "chinedu.udeji@email.com", image: "https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg"},
  {name: "Chisom Onuoha", base: "Anmbra State. NG", occupation: "Civil Engineer and Businessman", dob: "16-Oct", phone: "08054556677", email: "chisom.onuoha@email.com", image: "https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg"},
  {name: "Omenwa Chidozie", base: "Turkey", occupation: "Merchant", dob: "02-May", phone: "08065667788", email: "omenwa.chidozie@email.com", image: "https://i.ibb.co/BVXTGGQr/Omenwa-Chidozie.jpg"},
  {name: "Suzy Omerebere", base: "Anmbra State. NG", occupation: "Business", dob: "21-Aug", phone: "08076778899", email: "suzy.omerebere@email.com", image: "https://i.ibb.co/LVbBLWJ/Suzy-Omerebere.jpg"},
  {name: "Ubajekwe Ifenna", base: "Gabon", occupation: "Business", dob: "13-Feb", phone: "08087889900", email: "ubajekwe.ifenna@email.com", image: "https://i.ibb.co/k2BFCx1s/Ubajekwe-Ifenna.jpg"},
  {name: "Nnadi Chidinma", base: "Lagos State.NG", occupation: "Voice-over artist & Social media Manger", dob: "08-Nov", phone: "08098990011", email: "nnadi.chidinma@email.com", image: "https://i.ibb.co/zTZSnVyZ/Nnadi-Chidinma.jpg"},
  {name: "Chima Blessing", base: "Anambra State. NG", occupation: "Business", dob: "26-Jul-", phone: "08009001122", email: "chima.blessing@email.com", image: "https://i.ibb.co/R4ZyBjFC/Chima-Blessing.jpg"},
  {name: "Ofoma Chisom", base: "Lagos State. NG", occupation: "Fashion Designer", dob: "14-Apr-1995", phone: "08010203040", email: "ofoma.chisom@email.com", image: "https://i.ibb.co/twMyw51d/Ofoma-Chisom.jpg"}
        
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
                
            ],

            2027: [
                
            ],

            2028: [
                
            ],

            2029: [
                
            ],

            2030: [
                
            ],
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
            ],
            wedding: [
                { name: "Emmanuel & Grace Wedding", date: "June 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 5000 },
                    { member: "Sarah Johnson", amount: 20000 },
                    { member: "David Okonkwo", amount: 2500 },
                    { member: "Grace Adeyemi", amount: 5000 },
                    { member: "Michael Chen", amount: 20000 }
                ]},
                { name: "David & Sarah Wedding", date: "December 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 30000 },
                    { member: "Sarah Johnson", amount: 5000 },
                    { member: "David Okonkwo", amount: 5000 },
                    { member: "Grace Adeyemi", amount: 2500 },
                    { member: "Michael Chen", amount: 30000 }
                ]}
            ],
            childDedication: [
                { name: "Baby Emmanuel Jr. Dedication", date: "August 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 30000 },
                    { member: "Sarah Johnson", amount: 1500 },
                    { member: "David Okonkwo", amount: 1500 },
                    { member: "Grace Adeyemi", amount: 20000 },
                    { member: "Michael Chen", amount: 1500 }
                ]}
            ],
            support: [
                { name: "Medical Support for Sarah", date: "May 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 2500 },
                    { member: "Sarah Johnson", amount: 0 },
                    { member: "David Okonkwo", amount: 30000 },
                    { member: "Grace Adeyemi", amount: 2500 },
                    { member: "Michael Chen", amount: 2500 }
                ]},
                { name: "Business Support for Michael", date: "September 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 20000 },
                    { member: "Sarah Johnson", amount: 20000 },
                    { member: "David Okonkwo", amount: 2500 },
                    { member: "Grace Adeyemi", amount: 20000 },
                    { member: "Michael Chen", amount: 0 }
                ]}
            ]
        };

        const executivesData = [
            { name: "Emmanuel Silas", position: "President", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg" },
            { name: "Sarah Johnson", position: "Vice President", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg" },
            { name: "David Okonkwo", position: "Secretary", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg" },
            { name: "Grace Adeyemi", position: "Treasurer", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg" },
            { name: "Michael Chen", position: "Financial Secretary", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg" }
        ];

        const galleryData = [
            { name: "Emmanuel Silas", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg", thought: "Every moment spent with this amazing group has enriched my life in ways I never imagined. The memories we create today will be the stories we cherish tomorrow." },
            { name: "Sarah Johnson", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg", thought: "In this journey of growth and learning, I've found not just colleagues, but lifelong friends who inspire me daily to be better." },
            { name: "David Okonkwo", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg", thought: "The bonds we've formed transcend the ordinary. Each interaction, each shared experience, adds another beautiful chapter to our collective story." },
            { name: "Grace Adeyemi", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg", thought: "Together, we've built something special - a community where every voice matters and every dream is supported." },
            { name: "Michael Chen", image: "https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg", thought: "Looking back at our journey, I'm amazed by how far we've come. The future holds even more promise as we continue to grow together." }
        ];

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
            const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,];
            
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
