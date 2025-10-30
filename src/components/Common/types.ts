export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
}

export interface Contribution {
    id: string;
    title: string;
    description: string;
    contributionList: string;
    githubUrl?: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
}