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
                { name: "Emmanuel Silas", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "Sarah Johnson", months: [5000, 5000, 0, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "David Okonkwo", months: [5000, 5000, 5000, 5000, 0, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "Grace Adeyemi", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 0, 5000, 5000, 5000, 5000] },
                { name: "Michael Chen", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] }
            ],
            2024: [
                { name: "Emmanuel Silas", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "Sarah Johnson", months: [5000, 5000, 5000, 5000, 5000, 0, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "David Okonkwo", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 0, 5000, 5000, 5000] },
                { name: "Grace Adeyemi", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "Michael Chen", months: [5000, 0, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] }
            ],
            2025: [
                { name: "Emmanuel Silas", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "Sarah Johnson", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "David Okonkwo", months: [5000, 5000, 5000, 0, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] },
                { name: "Grace Adeyemi", months: [5000, 5000, 5000, 5000, 5000, 5000, 0, 5000, 5000, 5000, 5000, 5000] },
                { name: "Michael Chen", months: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] }
            ],
            2026: [
                { name: "Emmanuel Silas", months: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
                { name: "Sarah Johnson", months: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
                { name: "David Okonkwo", months: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
                { name: "Grace Adeyemi", months: [5000, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0] },
                { name: "Michael Chen", months: [5000, 5000, 0, 5000, 0, 0, 0, 0, 0, 0, 0, 0] }
            ]
        };

        const contributionsData = {
            burial: [
                { name: "Late Mr. Johnson's Father", date: "March 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 10000 },
                    { member: "Sarah Johnson", amount: 15000 },
                    { member: "David Okonkwo", amount: 10000 },
                    { member: "Grace Adeyemi", amount: 10000 },
                    { member: "Michael Chen", amount: 10000 }
                ]},
                { name: "Late Mrs. Adeyemi's Mother", date: "July 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 12000 },
                    { member: "Sarah Johnson", amount: 10000 },
                    { member: "David Okonkwo", amount: 15000 },
                    { member: "Grace Adeyemi", amount: 20000 },
                    { member: "Michael Chen", amount: 10000 }
                ]}
            ],
            wedding: [
                { name: "Emmanuel & Grace Wedding", date: "June 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 50000 },
                    { member: "Sarah Johnson", amount: 20000 },
                    { member: "David Okonkwo", amount: 25000 },
                    { member: "Grace Adeyemi", amount: 50000 },
                    { member: "Michael Chen", amount: 20000 }
                ]},
                { name: "David & Sarah Wedding", date: "December 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 30000 },
                    { member: "Sarah Johnson", amount: 50000 },
                    { member: "David Okonkwo", amount: 50000 },
                    { member: "Grace Adeyemi", amount: 25000 },
                    { member: "Michael Chen", amount: 30000 }
                ]}
            ],
            childDedication: [
                { name: "Baby Emmanuel Jr. Dedication", date: "August 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 30000 },
                    { member: "Sarah Johnson", amount: 15000 },
                    { member: "David Okonkwo", amount: 15000 },
                    { member: "Grace Adeyemi", amount: 20000 },
                    { member: "Michael Chen", amount: 15000 }
                ]}
            ],
            support: [
                { name: "Medical Support for Sarah", date: "May 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 25000 },
                    { member: "Sarah Johnson", amount: 0 },
                    { member: "David Okonkwo", amount: 30000 },
                    { member: "Grace Adeyemi", amount: 25000 },
                    { member: "Michael Chen", amount: 25000 }
                ]},
                { name: "Business Support for Michael", date: "September 2024", contributions: [
                    { member: "Emmanuel Silas", amount: 20000 },
                    { member: "Sarah Johnson", amount: 20000 },
                    { member: "David Okonkwo", amount: 25000 },
                    { member: "Grace Adeyemi", amount: 20000 },
                    { member: "Michael Chen", amount: 0 }
                ]}
            ]
        };

        const executivesData = [
            {name: 'Chinedu Udejimba', position: 'Chairman', image: 'https://i.ibb.co/hFv6b95Y/Chinedu-Udeji.jpg', },
            { name: 'Chibuzor Ability', position: 'Vice Chairman', image: 'https://i.ibb.co/jvRRZPx4/Chimmeli-okonk' },
            { name: 'Omenwa Chidozie', position: 'Patron', image: 'https://i.ibb.co/MDYPfftG/Omenwa-Chidozie.jpg' },
            { name: 'Iwuanya Emmanuel', position: 'Patron', image: 'https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg' },
            { name: 'Chiemerie Okoye', position: 'Secretary', image: 'https://i.ibb.co/xbJStTm/Chiemerie-Okoye.jpg' },
            { name: 'Awa Chiamaka Rita', position: 'Secretary', image: 'https://i.ibb.co/4g05Mnpb/Awa-Chiamaka.jpg' },
            { name: 'Onyelonu Goodness', position: 'Financial Secretary', image: 'https://i.ibb.co/rRYLQ2P5/Goodness-Onyelonu.jpg' },
            { name: 'Amara Ejikeme', position: 'Treasurer', image: 'https://i.ibb.co/ymChxyZm/Eijkeme-Amara.jpg' },
            { name: 'Emmanuel Silas N', position: 'Public Relations Officer', image: 'https://i.ibb.co/XkVLY8CF/Emmanuel-Silas.jpg' },
            { name: 'Chisom Onuoha', position: 'Chairman Planning-Committe', image: 'https://i.ibb.co/v4p6nNLx/Chisom-Onuoha.jpg' },
            { name: 'Caleb Isife', position: 'Vice Planning-Committe', image: 'https://i.ibb.co/84Qf3mF7/Caleb-Isife.jpg' }
        ];

        const galleryData = [
            { name: "Ijeoma Nwokolo", image: "https://i.ibb.co/N2zdsHhr/Nwokolo-Ijeoma.jpg", thought: "Happiness grows when shared with friends who lift our spirits." },
            { name: "Amara Egbuonu", image: "https://i.ibb.co/Q3pPZJLw/Amara-Egbuonu.jpg", thought: "Each small act of kindness creates ripples of joy in the world." },
            { name: "Emmanuel Iwuanya", image: "https://i.ibb.co/hxXmJbCk/Iwuanya-Emmanuel.jpg", thought: "True friendship shines brightest during challenging times." },
            { name: "Chinaza Njoku Johnson", image: "https://i.ibb.co/XfGbptDg/Chinaza-Njoku-Johnson.jpg", thought: "Sharing laughter and memories strengthens the bonds we hold dear." },
            { name: "Nzube Obi", image: "https://i.ibb.co/HfZNQkJm/Nzube-Obi.jpg", thought: "Hope is the spark that guides us through every journey." },
            { name: "Uzochukwu Uchechukwu", image: "https://i.ibb.co/nMKnsFyw/Uzochukwu-Uchechukwu.jpg", thought: "Every kind word has the power to brighten someone’s day." },
            { name: "Amara Julliet", image: "https://i.ibb.co/jZ1Mgd2r/Amara-Julliet.jpg", thought: "Joy multiplies when shared among those we care about." },
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
            const years = [2023, 2024, 2025, 2026];
            
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