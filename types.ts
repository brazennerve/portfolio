export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface AcademicRecord {
    degree: string;
    institution: string;
    period: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Tool' | 'Soft Skill';
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  about: string;
  imageUrl: string;
  contact: {
    email: string;
    mobile: string;
    linkedin: string;
    github: string;
  };
  projects: Project[];
  experience: Experience[];
  academics: AcademicRecord[];
  skills: Skill[];
  certifications: string[];
  interests: string[];
  languages: string[];
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}