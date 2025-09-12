"use strict";
// Project data
const projects = [
    {
        id: 1,
        title: "TCF French Exam System(Full-Stack)",
        description: "An online French exam practice platform for reading and listening exercises, allowing users to complete questions in sequential or random order while tracking progress and performance.",
        technologies: ["Vue.js", "TypeScript", "Node.js", "Express", "MySQL", "AWS", "Docker"],
        image: "images/tcf_read_3.jpg",
        // demoUrl: "#",
        githubUrl: "https://github.com/lianaofsg/TCF-French-Exam"
    },
    {
        id: 2,
        title: "AdventureHub",
        description: "A responsive web platform enabling users to discover, explore, and engage with outdoor adventure activities seamlessly across devices.",
        technologies: ["React", "Next.js", "Tailwind CSS4"],
        image: "images/adventure.jpg",
        demoUrl: "https://adventure-react-next-tailwind.vercel.app",
        githubUrl: "https://github.com/lianaofsg/Adventure-React-Next-Tailwind"
    },
    {
        id: 3,
        title: "Note App(Full-Stack)",
        description: "A full-stack note-taking application enabling secure user authentication, and a responsive, seamless user experience.",
        technologies: ["Django", "Python", "React", "CSS3", "JavaScript", "PostgreSQL", "JWT"],
        image: "images/note.jpg",
        // demoUrl: "#",
        githubUrl: "https://github.com/lianaofsg/Django-React-FullStack-Note"
    },
    
];
// Skill data
const skills = [
    { name: "HTML/CSS", level: 95, category: "Frontend Technologies" },
    { name: "JavaScript/TypeScript", level: 90, category: "Frontend Technologies" },
    { name: "React/Vue.js", level: 85, category: "Frontend Technologies" },
    { name: "Node.js", level: 80, category: "Frontend Technologies" },
    { name: "Python", level: 88, category: "Backend Technologies" },
    { name: "Java", level: 90, category: "Backend Technologies" },
    { name: "SQL/NoSQL", level: 82, category: "Backend Technologies" },
    { name: "Docker", level: 75, category: "Backend Technologies" }
];
// Main application class
class PortfolioApp {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.contactForm = document.getElementById('contact-form');
        this.init();
    }
    init() {
        this.setupEventListeners();
        this.renderProjects();
        this.setupScrollEffects();
        this.setupFormHandling();
        this.animateSkillBars();
    }
    setupEventListeners() {
        // Mobile navigation menu toggle
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.navMenu?.classList.toggle('active');
            });
        }
        // Navigation link click events
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                if (targetId) {
                    this.scrollToSection(targetId);
                }
                // Close mobile menu
                this.navMenu?.classList.remove('active');
            });
        });
        // Smooth scrolling to anchors
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    this.scrollToSection(targetId);
                }
            });
        });
    }
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 70; // Subtract navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    setupScrollEffects() {
        // Navbar scroll effects
        window.addEventListener('scroll', () => {
            if (this.navbar) {
                if (window.scrollY > 100) {
                    this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    this.navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
                }
                else {
                    this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            }
        });
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        // Observe all elements that need animation
        const animateElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .stat-item');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid)
            return;
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card" data-aos="fade-up">
                <div class="project-image">
                    ${project.image.startsWith('fas ') ? `<i class="${project.image}"></i>` : `<img src="${project.image}" alt="${project.title}" />`}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubUrl}" class="project-link demo ">GitHub</a>
                        ${project.demoUrl ? `<a href="${project.demoUrl}" class="project-link github">View Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            const skill = skills[index];
            if (skill) {
                setTimeout(() => {
                    bar.style.width = `${skill.level}%`;
                }, index * 200);
            }
        });
    }
    setupFormHandling() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission();
            });
        }
    }
    handleFormSubmission() {
        if (!this.contactForm)
            return;
        const formData = new FormData(this.contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        // Simple form validation
        if (!name || !email || !subject || !message) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }
        if (!this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }
        // Simulate form submission
        this.showNotification('Message sent successfully! I will reply to you as soon as possible.', 'success');
        this.contactForm.reset();
    }
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'success' ? '#10b981' : '#ef4444'
        });
        document.body.appendChild(notification);
        // Show animation
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        // Auto hide
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}
// Utility functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
    static throttle(func, limit) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}
// Initialize application when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .skill-progress {
        transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .stat-item {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .timeline-content {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);
//# sourceMappingURL=main.js.map