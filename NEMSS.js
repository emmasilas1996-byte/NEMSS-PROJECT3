            // ========================================
        // JAVASCRIPT CODE
        // ========================================
        
        // Sample Data
        const membersData = [
                { name: "Pius", base: "Abia State, NG", occupation: "Buisiness", dob: "03-Feb", phone: "", email: "", image: "https://i.ibb.co/yCP1bCR/Pius.jpg" },
                { name: "Vivian Uche", base: "Lagos State, NG", occupation: "Entrepreneur", dob: "15-Mar", phone: "", email: "", image: "https://i.ibb.co/FbwqmxwS/Vivian-Uche.jpg" },
                { name: "Mmesomea Okoye", base: "Anambra State, NG", occupation: "Merchant", dob: "05 Oct", phone: "07031024974", email: "", image: "https://i.ibb.co/kVY5HC5r/Mmesoma-Okoye.jpg" },
                { name: "Joshua Mgbemena", base: "Imo State, NG", occupation: "Software Developer", dob: "21-Jun", phone: "", email: "", image: "https://i.ibb.co/9m3vXjBh/Joshua-Mgbemena.jpg" },
                { name: "Emmanuel Onyedika", base: "Anambra State, NG", occupation: "Business Analyst", dob: "14-Aug", phone: "", email: "", image: "https://i.ibb.co/SX4B9hxw/Emmanuel-Onyedika.jpg" },
                { name: "Chibueze Okafor", base: "Enugu State, NG", occupation: "Digital Marketer", dob: "09-Mar", phone: "", email: "", image: "https://i.ibb.co/v6z5PyCq/Chibueze-Okafor.jpg" },
                { name: "Adaeze Okeke", base: "Anambra State, NG", occupation: "Customer Relations Officer", dob: "27-May", phone: "", email: "", image: "https://i.ibb.co/B2WGS2tQ/Adaeze-Okeke.jpg" },
                { name: "Akubude Albert", base: "Delta State, NG", occupation: "Electrical Technician", dob:"11-Jan" ,phone:"",email:"",image:"https://i.ibb.co/tT6m17hQ/Akubude-Albert.jpg"},
                { name: "Jecinta Ibemesi", base: "Imo State, NG", occupation: "Administrative Assistant", dob: "06-Jul", phone: "", email: "", image: "https://i.ibb.co/VWKf458x/Jecinta-Ibemesi.jpg" },
                { name: "Chimezie Okeke", base: "Anambra State, NG", occupation: "Project Coordinator", dob: "19-Sep", phone: "", email: "", image: "https://i.ibb.co/B58pPx6m/Chimezie-Okeke.jpg" },
                { name: "Favour Ogbonna", base: "Rivers State, NG", occupation: "Content Creator", dob: "02-Dec", phone: "", email: "", image: "https://i.ibb.co/TqRnrtL7/Favour-Ogbonna.jpg" },
                { name: "Ifeoma Okeke", base: "Ebonyi State, NG", occupation: "Human Resources Officer", dob: "25-Apr", phone: "", email: "", image: "https://i.ibb.co/4ZX42JWP/Ifeoma-Okeke.jpg" },
                { name: "Dabele Okeke", base: "Anambra State, NG", occupation: "Operations Supervisor", dob: "30-Oct", phone: "", email: "", image: "https://i.ibb.co/0Ryhsy8p/Dabele-Okeke.jpg" },
                { name: "Uzochukwu Augustine", base: "Abuja, NG", occupation: "ICT Support Officer", dob: "08-Jun", phone: "", email: "", image: "https://i.ibb.co/mr9GWSJb/Uzochukwu-Augustine.jpg" },
                { name: "Ubaka Okoye", base: "Anambra State, NG", occupation: "Logistics Coordinator", dob: "17-Nov", phone: "", email: "", image: "https://i.ibb.co/ZpD4K8Kz/Ubaka-Okoye.jpg" },
                {name: "Henry Adibe", base: "Anambra State. NG", occupation: "Deals on Motor Parts", dob: "24-Dec", phone: "0813496324", email: "", image: "https://i.ibb.co/S7PKS2Tn/Henry-Adibe.jpg"},
                {name: "Faith Anthony", base: "Lagos State. NG", occupation: "Fashion Designer", dob: "12-May", phone: "", email: "", image: "https://i.ibb.co/BVcN4yQH/Faith-Anthony.jpg"},
                {name: "Precious Madu", base: "Rivers State. NG", occupation: "Business", dob: "23 Dec", phone: "", email: "", image: "https://i.ibb.co/B5TGdrKc/Precious-Madu.jpg"},
                {name: "Ability Chibuzor", base: "Anambra State. NG", occupation: "DJ & Electrical Parts", dob: "26 Mar", phone: "", email: "", image: "https://i.ibb.co/4wwBBFTz/Ability-Chibuzor.jpg"},
                {name: "Chikamso Nnama", base: "Anambra State. NG", occupation: "Business", dob: "12-May", phone: "", email: "", image: "https://i.ibb.co/KxJDHPHQ/Chikamso-Nnam.jpg"},
                {name: "Amaka Oforma", base:"Anambra State. NG" ,occupation:"Business" ,dob:"12-May" ,phone:"" ,email:"" ,image:"https://i.ibb.co/7xhxmGyQ/Amaka-Oforma.jpg"},
                {name: "Ebuka Unegbu", base: "Anambra State. NG", occupation: "Business", dob: "12-May", phone: "", email: "", image: "https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg"},
                {name: "Egbuonu Amara", base: "Anambra State. NG", occupation: "Business", dob: "12-May", phone: "", email: "", image: "https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg"},
                {name: "Ijeoma Nwokolo", base: "Anambra State. NG", occupation: "Business", dob: "22-Dec", phone: "", email: "", image: "https://i.ibb.co/N2zdsHhr/Nwokolo-Ijeoma.jpg"},
                {name: "Chinaza Njoku Johnson", base: "Anambra State. NG", occupation: "Business", dob: "10-Apr", phone: "", email: "", image: "https://i.ibb.co/XfGbptDg/Chinaza-Njoku-Johnson.jpg"},
                {name: "Emmanuel Iwuanya", base: "Delta State. NG", occupation: "Business", dob: "15-Mar", phone: "", email: "", image: "https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg"},
                {name: "Amara Juliet", base: "Kaduna State. NG", occupation: "Business", dob: "15-Mar", phone: "", email: "", image: "https://i.ibb.co/jZ1Mgd2r/Amara-Julliet.jpg"},
                {name: "Nzube Obi" ,base:"Lagos State. NG" ,occupation:"Nigeria Air Force" ,dob:"15-Mar" ,phone:"" ,email:"" ,image:"https://i.ibb.co/HfZNQkJm/Nzube-Obi.jpg"},
                {name: "Uzochukwu Uchechkwu", base: "Edo State. NG", occupation: "Business", dob: "15-Mar", phone: "", email: "", image:"https://i.ibb.co/nMKnsFyw/Uzochukwu-Uchechukwu.jpg"},
                {name: "Onyinye Mbonu (Egemonye)", base:"United Kingdom" ,occupation:"Recruiter Cordinator" ,dob:"15-Mar" ,phone:"" ,email:"" ,image:"https://i.ibb.co/k2F2YX8b/Onyinye-Mbonu.jpg"},
                {name: "Chimmeli Okonkwo", base: "Anambra State.Ng", occupation: "Enterprenuer", dob: "22-Jun", phone: "", email: "", image: "https://i.ibb.co/jvRRZPx4/Chimmeli-okonkwo.jpg"},
                {name: "Goodness Oranekwu", base: "Enugu State. NG", occupation: "Secretary & Real Estate", dob: "08-Jan", phone: "", email: "", image: "https://i.ibb.co/zhfM34vr/Goodness-Oranekwu.jpg"},
                {name: "Udochukwu Onwugbenu", base: "Anambra State. NG", occupation: "Pharmacy & Accounts", dob: "30 Jun", phone: "", email: "", image: "https://i.ibb.co/sJy9h3mq/Udochukwu-Onwugbenu.jpg"},
                {name: "Oken Jerry", base: "Lagos State.NG", occupation: "Clothing  Business", dob: "12-Dec", phone: "", email:"", image :"https://i.ibb.co/6ckQbKDP/Oken-Jerry.jpg"},
                {name: "Sopulu Nwawulu", base: "Anambra State. NG", occupation: "Cleaning Service", dob: "07 Jan", phone: "", email: "", image: "https://i.ibb.co/qL0YPVTQ/Sopulu-Nwawulu.jpg"},
                {name: "Chiamaka Tagbo", base: "Anmbra State. NG", occupation: "Business", dob: "18-Jul", phone: "", email: "", image: "https://i.ibb.co/Jj8brWd1/Chiamaka-Tagbo.jpg"},
                {name: "Okemefuna Chioma", base: "Anmbra State. NG", occupation: "Business", dob: "05-Feb", phone: "", email: "", image: "https://i.ibb.co/gMtCJKcb/Okemefuna-Chioma.jpg"},
                {name: "Awa Chiamaka Rita", base: "Asaba. NG", occupation: "Seamstress, Travelling Agent", dob: "25 Aug", phone: "", email: "", image: "https://i.ibb.co/4g05Mnpb/Awa-Chiamaka.jpg"},
                {name: "Okoro Chekwube", base: "Anmbra State. NG", occupation: "Business", dob: "09 Jan", phone: "", email: "", image: "https://i.ibb.co/7J5FjtGM/Okoro-Chekwube.jpg"},
                {name: "Azubueze Bright Ikem", base: "Anmbra State. NG", occupation: "Interior Decorator", dob:"20-May", phone:"" ,email:"" ,image:"https://i.ibb.co/KpTqPDfH/Azubueze-Bright.jpg"},
                {name: "Goodness Onyelonu", base: "Anmbra State. NG", occupation: "Enterprenuer", dob: "26 Dec", phone: "", email: "", image: "https://i.ibb.co/67zpy0hD/Goodness-Onyelonu.jpg"},
                {name: "Happiness Udechukwu", base: "Anambra State. NG", occupation: "Chef & Clergy", dob: "03-Dec", phone: "", email: "", image: "https://i.ibb.co/BJRKqVz/Happiness-Udechukwu.jpg"},
                {name: "Eijkeme Amara", base: "Anmbra State. NG", occupation: "Hairstylist", dob: "17-Feb", phone: "", email: "", image: "https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg"},
                {name: "Caleb Isife", base: "Anmbra State. NG", occupation: "Deals on Tiles & Building Materilas", dob: "14 Oct", phone: "", email: "", image: "https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg"},
                {name: "Chidi Oforma", base: "Lagos State. NG", occupation: "Deals on Toyota & Lexus Upgrade Parts", dob: "29 Sept", phone: "", email: "", image: "https://i.ibb.co/3YcdbM4P/Chidi-Oforma.jpg"},
                {name: "Somto Okeke", base: "Malabo", occupation: "Business", dob: "28 Apr", phone: "08037465231", email: "", image: "https://i.ibb.co/9FjLYJg/Somto-Okeke.jpg"},
                {name: "Isreal Chukwumamkpam", base: "Enugu State. NG", occupation: "Consultant Nutritionist(Dietitian)", dob: "19-Jan", phone: "", email: "", image: "https://i.ibb.co/7J77Gvy1/Isreal-Chukwumamkpam.jpg"},
                {name: "Chiemerie Okoye", base: "Banjul", occupation: "Business", dob: "10 Oct", phone: "", email: "", image: "https://i.ibb.co/8w6DLZz/Chiemerie-Okoye.jpg"},
                {name: "Aliba Ezenwa", base: "Aberdeen", occupation: "Business", dob: "23-Nov", phone: "", email: "", image: "https://i.ibb.co/C55mp397/Aliba-Ezenwa.jpg"},
                {name: "Emmanuel Silas", base: "Lagos State. NG", occupation: "Software Implementor & Support Analyst", dob: "12-Dec", phone:"08143508348" ,email:"" ,image:"https://i.ibb.co/93GgZtry/Emmanuel-Silas.jpg"},
                {name: "Enoja Kingsley", base: "Anambra State. NG", occupation: "Dealer in keke spare parts", dob: "28 Nov", phone: "", email: "", image: "https://i.ibb.co/prrLsMvB/Enoja-Kingsley.jpg"},
                {name: "Chinedu Udeji", base: "Anambra State. NG", occupation: "Merchant", dob: "05 Oct", phone: "07031024974", email:"" ,image:"https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg"},
                {name: "Chisom Onuoha", base: "Anmbra State. NG", occupation: "Civil Engineer and Businessman", dob: "16 Sept", phone: "", email: "", image: "https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg"},
                {name: "Omenwa Chidozie", base: "Turkey", occupation: "Merchant", dob: "03 Mar", phone: "", email: "", image: "https://i.ibb.co/BVXTGGQr/Omenwa-Chidozie.jpg"},
                {name: "Suzy Omerebere", base: "Anmbra State. NG", occupation: "Business", dob: "05 Apr", phone: "", email: "", image: "https://i.ibb.co/LVbBLWJ/Suzy-Omerebere.jpg"},
                {name: "Ubajekwe Ifenna", base: "Gabon", occupation: "Business", dob:"06 Jan" ,phone:"" ,email:"" ,image:"https://i.ibb.co/k2BFCx1s/Ubajekwe-Ifenna.jpg"},
                {name: "Nnadi Chidinma", base: "Lagos State.NG", occupation: "Voice-over artist & Social media Manger", dob: "24 Feb", phone: "", email: "", image: "https://i.ibb.co/zTZSnVyZ/Nnadi-Chidinma.jpg"},
                {name: "Chima Blessing", base: "Anambra State. NG", occupation: "Business", dob:"07 May", phone:"", email:"", image:"https://i.ibb.co/R4ZyBjFC/Chima-Blessing.jpg"},
                {name: "Ofoma Chisom", base:"Lagos State. NG", occupation:"Fashion Designer", dob:"14-Apr-1995", phone:"", email:"", image:"https://i.ibb.co/twMyw51d/Ofoma-Chisom.jpg"}

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

            2025: [
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
                ]}
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
                    { name: "CHIMA BLESSING FATHERS BURIAL 2023", date: "June 2023", contributions: [
                    { member: "ABILITY CHIBUZOR", amount: 1500 },
                    { member: "AMARA EJIKEME", amount: 1000 },
                ]},
            ],
        };

        const executivesData = [
            { name: 'Chinedu Udejimba', position: 'Chairman', image: 'https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg', },
            { name: 'Chibuzor Ability', position: 'Vice Chairman', image: 'https://i.ibb.co/LzmXrVTg/Ability-Chibuzor.jpg' },
            { name: 'Omenwa Chidozie', position: 'Patron', image: 'https://i.ibb.co/MDYPfftG/Omenwa-Chidozie.jpg' },
            { name: 'Iwuanya Emmanuel', position: 'Patron', image: 'https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg' },
            { name: 'Chiemerie Okoye', position: 'Secretary', image: 'https://i.ibb.co/xbJStTm/Chiemerie-Okoye.jpg' },
            { name: 'Awa Chiamaka Rita', position: 'Secretary', image: 'https://i.ibb.co/bgKfh5gZ/Awa-Chiamaka.jpg' },
            { name: 'Onyelonu Goodness', position: 'Financial Secretary', image: 'https://i.ibb.co/V0mtPq57/Goodness-Onyelonu.jpg' },
            { name: 'Amara Ejikeme', position: 'Treasurer', image: 'https://i.ibb.co/dsdZMvb8/Eijkeme-Amara.jpg' },
            { name: 'Emmanuel Silas N', position: 'Public Relations Officer', image: 'https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg' },
            { name: 'Chisom Onuoha', position: 'Chairman Planning-Committe', image: 'https://i.ibb.co/XZ323xG5/Chisom-Onuoha.jpg' },
            { name: 'Caleb Isife', position: 'Vice Planning-Committe', image: 'https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg' }
        ];

        const galleryData = [
            { name: "Pius", image: "https://i.ibb.co/KpWckHrC/Pius.jpg", thought: "Consistency quietly builds the future you desire." },
            { name: "Vivian Uche", image: "https://i.ibb.co/FbwqmxwS/Vivian-Uche.jpg", thought: "The success of tomorrow." },
            { name: "Mmesomea Okoye", image: "https://i.ibb.co/kVY5HC5r/Mmesoma-Okoye.jpg", thought: "Success is the sum of small efforts repeated day in and day out." },
            { name: "Joshua Mgbemena", image: "https://i.ibb.co/9m3vXjBh/Joshua-Mgbemena.jpg", thought: "Growth begins the moment comfort ends." },
            { name: "Emmanuel Onyedika", image: "https://i.ibb.co/S7cDNHY3/Emmanuel-Onyedika.jpg", thought: "Discipline today creates freedom tomorrow." },
            { name: "Chibueze Okafor", image: "https://i.ibb.co/v6z5PyCq/Chibueze-Okafor.jpg", thought: "Small efforts, repeated daily, lead to remarkable outcomes." },
            { name: "Adaeze Okeke", image: "https://i.ibb.co/RkYdD8rc/Adaeze-Okeke.jpg", thought: "Confidence grows when preparation meets opportunity." },
            { name: "Akubude Albert", image: "https://i.ibb.co/MxcpxRy0/Akubude-Albert.jpg", thought: "Focus sharpens vision and eliminates distractions." },
            { name: "Jecinta Ibemesi", image: "https://i.ibb.co/VWKf458x/Jecinta-Ibemesi.jpg", thought: "Patience is progress that refuses to rush." },
            { name: "Chimezie Okeke", image: "https://i.ibb.co/4ZYhkfLD/Chimezie-Okeke.jpg", thought: "Your mindset determines the limits of your success." },
            { name: "Favour Ogbonna", image: "https://i.ibb.co/DP1nvbFq/Favour-Ogbonna.jpg", thought: "Purpose gives meaning to even the hardest days." },
            { name: "Ifeoma Okeke", image: "https://i.ibb.co/ym2z6M5H/Ifeoma-Okeke.jpg", thought: "Clarity comes from action, not hesitation." },
            { name: "Dabele Okeke", image: "https://i.ibb.co/0Ryhsy8p/Dabele-Okeke.jpg", thought: "Success is built quietly before it is seen publicly." },
            { name: "Uzochukwu Augustine", image: "https://i.ibb.co/mr9GWSJb/Uzochukwu-Augustine.jpg", thought: "Resilience turns setbacks into stepping stones." },
            { name: "Ubaka Okoye", image: "https://i.ibb.co/ZpD4K8Kz/Ubaka-Okoye.jpg", thought: "Excellence is a habit, not a single act." },
            { name: "Nwokolo Ijeoma", image: "https://i.ibb.co/N2zdsHhr/Nwokolo-Ijeoma.jpg", thought: "Moments of gratitude transform ordinary days into blessings." },
            { name: "Henry Adibe", image: "https://i.ibb.co/S7PKS2Tn/Henry-Adibe.jpg", thought: "Happiness is best when shared with loved ones." },
            { name: "Faith Anthony", image: "https://i.ibb.co/BVcN4yQH/Faith-Anthony.jpg", thought: "Kindness has the power to change the world, one heart at a time." },
            { name: "Precious Madu", image: "https://i.ibb.co/B5TGdrKc/Precious-Madu.jpg", thought: "Gratitude turns what we have into enough." },
            { name: "Amaka Oforma", image: "https://i.ibb.co/7xhxmGyQ/Amaka-Oforma.jpg", thought: "A single act of kindness can create endless ripples of positivity." },
            { name: "Ability Chibuzor", image: "https://i.ibb.co/LzmXrVTg/Ability-Chibuzor.jpg", thought: "In unity, we find strength and endless possibilities." },
            { name: "Chikamso Nnama", image: "https://i.ibb.co/KxJDHPHQ/Chikamso-Nnam.jpg", thought: "Every act of kindness creates a ripple effect of positivity." },
            { name: "Ebuka Unegbu", image: "https://i.ibb.co/hFWzzp6D/Ebuka-Unegbu.jpg", thought: "Happiness grows when shared with friends who lift our spirits." },
            { name: "Amara Egbuonu", image: "https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg", thought: "Each small act of kindness creates ripples of joy in the world." },
            { name: "Emmanuel Iwuanya", image: "https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg", thought: "True friendship shines brightest during challenging times." },
            { name: "Chinaza Njoku Johnson", image: "https://i.ibb.co/XfGbptDg/Chinaza-Njoku-Johnson.jpg", thought: "Sharing laughter and memories strengthens the bonds we hold dear." },
            { name: "Nzube Obi", image: "https://i.ibb.co/HfZNQkJm/Nzube-Obi.jpg", thought: "Hope is the spark that guides us through every journey." },
            { name: "Uzochukwu Uchechukwu", image: "https://i.ibb.co/nMKnsFyw/Uzochukwu-Uchechukwu.jpg", thought: "Every kind word has the power to brighten someone’s day." },
            { name: "Amara Julliet", image: "https://i.ibb.co/jZ1Mgd2r/Amara-Julliet.jpg", thought: "Joy multiplies when shared among those we care about." },
            { name: "Onyinye Mbonu", image: "https://i.ibb.co/k2F2YX8b/Onyinye-Mbonu.jpg", thought: "Moments of gratitude transform ordinary days into blessings." },
            { name: "Chimmeli Okonkwo", image: "https://i.ibb.co/jvRRZPx4/Chimmeli-okonkwo.jpg", thought: "Every smile we share leaves a lasting mark on the heart." },
            { name: "Goodness Oranekwu", image: "https://i.ibb.co/zhfM34vr/Goodness-Oranekwu.jpg", thought: "Patience and kindness guide us toward a brighter future." },
            { name: "Udochukwu Onwugbenu", image: "https://i.ibb.co/sJy9h3mq/Udochukwu-Onwugbenu.jpg", thought: "Courage grows when we support each other wholeheartedly." },
            { name: "Oken Jerry", image: "https://i.ibb.co/JRfFfsCF/Oken-Jerry.jpg", thought: "Every day is a new chance to inspire someone with your actions." },
            { name: "Sopulu Nwawulu", image: "https://i.ibb.co/qL0YPVTQ/Sopulu-Nwawulu.jpg", thought: "Friendship shines brighter than any treasure in the world." },
            { name: "Chiamaka Tagbo", image: "https://i.ibb.co/Jj8brWd1/Chiamaka-Tagbo.jpg", thought: "Hope blooms when we nurture it with care and love." },
            { name: "Okemefuna Chioma", image: "https://i.ibb.co/gMtCJKcb/Okemefuna-Chioma.jpg", thought: "Even small acts of kindness can leave a big impact." },
            { name: "Awa Chiamaka", image: "https://i.ibb.co/bgKfh5gZ/Awa-Chiamaka.jpg", thought: "Happiness is found in sharing memorable moments together." },
            { name: "Okoro Chekwube", image: "https://i.ibb.co/ks2TCKSY/Okoro-Chekwube.jpg", thought: "Positivity and perseverance pave the road to success." },
            { name: "Azubueze Bright", image: "https://i.ibb.co/KpTqPDfH/Azubueze-Bright.jpg", thought: "Kindness lights up even the darkest corners of life." },
            { name: "Goodness Onyelonu", image: "https://i.ibb.co/V0mtPq57/Goodness-Onyelonu.jpg", thought: "Every shared laugh adds warmth to our hearts." },
            { name: "Happiness Udechukwu", image: "https://i.ibb.co/BJRKqVz/Happiness-Udechukwu.jpg", thought: "The joy we create together becomes a treasured memory." },
            { name: "Eijkeme Amara", image: "https://i.ibb.co/dsdZMvb8/Eijkeme-Amara.jpg", thought: "Gratitude and hope make life's journey even more beautiful." },
            { name: "Caleb Isife", image: "https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg", thought: "True strength is revealed when we help others rise." },
            { name: "Chidi Oforma", image: "https://i.ibb.co/3YcdbM4P/Chidi-Oforma.jpg", thought: "Every kind gesture leaves a lasting impression on someone’s heart." },
            { name: "Somto Okeke", image: "https://i.ibb.co/QFw587SQ/Somto-Okeke.jpg", thought: "Happiness is amplified when we share it with friends." },
            { name: "Isreal Chukwumamkpam", image: "https://i.ibb.co/7J77Gvy1/Isreal-Chukwumamkpam.jpg", thought: "Patience and love are keys to a fulfilling life." },
            { name: "Chiemerie Okoye", image: "https://i.ibb.co/8w6DLZz/Chiemerie-Okoye.jpg", thought: "Hope grows stronger when shared with others around us." },
            { name: "Aliba Ezenwa", image: "https://i.ibb.co/C55mp397/Aliba-Ezenwa.jpg", thought: "Friendship and laughter are treasures of the soul." },
            { name: "Emmanuel Silas", image: "https://i.ibb.co/93GgZtry/Emmanuel-Silas.jpg", thought: "Every shared experience adds a beautiful chapter to our lives." },
            { name: "Enoja Kingsley", image: "https://i.ibb.co/prrLsMvB/Enoja-Kingsley.jpg", thought: "Caring for others is the essence of true happiness." },
            { name: "Chinedu Udeji", image: "https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg", thought: "Memories become magical when we cherish them together." },
            { name: "Chisom Onuoha", image: "https://i.ibb.co/XZ323xG5/Chisom-Onuoha.jpg", thought: "A kind word can brighten someone’s whole day." },
            { name: "Omenwa Chidozie", image: "https://i.ibb.co/MDYPfftG/Omenwa-Chidozie.jpg", thought: "Sharing joy and hope makes life truly meaningful." },

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
                support: 'support-list',
                get2gether: 'get2gether-list'
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