interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
}
interface Skill {
    name: string;
    level: number;
    category: string;
}
declare const projects: ({
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl: string;
    demoUrl?: undefined;
} | {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
})[];
declare const skills: {
    name: string;
    level: number;
    category: string;
}[];
declare class PortfolioApp {
    private navbar;
    private navToggle;
    private navMenu;
    private contactForm;
    constructor();
    private init;
    private setupEventListeners;
    private scrollToSection;
    private setupScrollEffects;
    private renderProjects;
    private animateSkillBars;
    private setupFormHandling;
    private handleFormSubmission;
    private isValidEmail;
    private showNotification;
}
declare class Utils {
    static debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
    static throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
}
declare const style: HTMLStyleElement;
