
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface NavLink {
  name: string;
  href: string;
}
