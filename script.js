// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get target section
            const targetId = this.getAttribute('href').substring(1);

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filterValue = this.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filterValue) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Generate placeholder avatar if image doesn't exist
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.onerror = function () {
            this.style.display = 'none';
            this.parentElement.innerHTML = '<div style="font-size: 3rem;">👨‍💻</div>';
        };
    }

    // Generate placeholder images for portfolio items
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    portfolioImages.forEach((img, index) => {
        img.onerror = function () {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #667eea ${index * 10}%, #764ba2 100%);
                font-size: 3rem;
            `;
            placeholder.textContent = '🖼️';
            this.parentElement.insertBefore(placeholder, this);
        };
    });

    // Generate placeholder images for client logos
    const clientLogos = document.querySelectorAll('.client-logo img');
    clientLogos.forEach((img, index) => {
        img.onerror = function () {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                font-size: 2rem;
                opacity: 0.5;
            `;
            placeholder.textContent = '🏢';
            this.parentElement.appendChild(placeholder);
        };
    });

    // Smooth scroll animation for skill bars
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
        observer.observe(resumeSection);
    }

    // Portfolio Modal functionality
    const modal = document.getElementById('portfolioModal');
    const modalClose = document.querySelector('.modal-close');
    const modalPortfolioItems = document.querySelectorAll('.portfolio-item');

    // Open modal when portfolio item is clicked
    modalPortfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const tech = this.getAttribute('data-tech');
            const link = this.getAttribute('data-link');
            const imageSrc = this.querySelector('img').src;

            // Set modal content
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('modalTech').textContent = tech;
            document.getElementById('modalLink').href = link;
            document.getElementById('modalImage').src = imageSrc;

            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when X is clicked
    if (modalClose) {
        modalClose.addEventListener('click', function () {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});
