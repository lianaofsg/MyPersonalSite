// Project data interface
interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
}

// Skill data interface
interface Skill {
    name: string;
    level: number;
    category: string;
}

// Project data
const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform Management System",
        description: "Modern e-commerce platform based on React and Node.js, including complete functional modules for user management, product management, order processing, and more.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        image: "images/note.jpg",
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Task Management Application",
        description: "Real-time task management application built with Vue.js and Firebase, supporting team collaboration and task tracking.",
        technologies: ["Vue.js", "Firebase", "Vuex", "CSS3", "JavaScript"],
        image: "fas fa-tasks",
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Data Visualization Dashboard",
        description: "Data visualization project based on D3.js and React, showcasing interactive charts and reports for complex data.",
        technologies: ["React", "D3.js", "TypeScript", "Chart.js", "CSS3"],
        image: "fas fa-chart-line",
        demoUrl: "#",
        githubUrl: "#"
    }
];

// Skill data
const skills: Skill[] = [
    { name: "HTML/CSS", level: 95, category: "Frontend Technologies" },
    { name: "JavaScript/TypeScript", level: 90, category: "Frontend Technologies" },
    { name: "React/Vue.js", level: 85, category: "Frontend Technologies" },
    { name: "Node.js", level: 80, category: "Frontend Technologies" },
    { name: "Python", level: 88, category: "Backend Technologies" },
    { name: "Java", level: 90, category: "Backend Technologies" },
    { name: "SQL/NoSQL", level: 82, category: "Backend Technologies" },
    { name: "Docker", level: 80, category: "Backend Technologies" }
];

// Main application class
class PortfolioApp {
    private navbar: HTMLElement | null;
    private navToggle: HTMLElement | null;
    private navMenu: HTMLElement | null;
    private contactForm: HTMLFormElement | null;

    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.contactForm = document.getElementById('contact-form') as HTMLFormElement;
        
        this.init();
    }

    private init(): void {
        this.setupEventListeners();
        this.renderProjects();
        this.setupScrollEffects();
        this.setupFormHandling();
        this.animateSkillBars();
    }

    private setupEventListeners(): void {
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
                const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
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
                const href = (link as HTMLAnchorElement).getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    this.scrollToSection(targetId);
                }
            });
        });
    }

    private scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 70; // Subtract navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    private setupScrollEffects(): void {
        // Navbar scroll effects
        window.addEventListener('scroll', () => {
            if (this.navbar) {
                if (window.scrollY > 100) {
                    this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    this.navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
                } else {
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

    private renderProjects(): void {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

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
                        <a href="${project.demoUrl}" class="project-link demo">View Demo</a>
                        <a href="${project.githubUrl}" class="project-link github">GitHub</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    private animateSkillBars(): void {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            const skill = skills[index];
            if (skill) {
                setTimeout(() => {
                    (bar as HTMLElement).style.width = `${skill.level}%`;
                }, index * 200);
            }
        });
    }

    private setupFormHandling(): void {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission();
            });
        }
    }

    private handleFormSubmission(): void {
        if (!this.contactForm) return;

        const formData = new FormData(this.contactForm);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

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

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private showNotification(message: string, type: 'success' | 'error'): void {
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
    static debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
        let timeout: number;
        return (...args: Parameters<T>) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }

    static throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
        let inThrottle: boolean;
        return (...args: Parameters<T>) => {
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
