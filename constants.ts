import { SkillCategory, Project, Experience, Education, Certification, NavLink } from './types';
import { FaPython, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiPostgresql, SiMysql } from 'react-icons/si';
import { GoDatabase } from 'react-icons/go';
import { AiOutlineApi } from 'react-icons/ai';
import { FiTerminal, FiAlertTriangle } from 'react-icons/fi';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'Django', icon: SiDjango },
      { name: 'Django REST Framework', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Docker (Beginner)', icon: FaDocker },
      { name: 'AWS (Basic)', icon: FaAws },
    ],
  },
  {
    title: 'Frontend (Familiar)',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'React (Learning)', icon: FaReact },
    ],
  },
   {
    title: 'Concepts',
    skills: [
      { name: 'REST API Design', icon: AiOutlineApi },
      { name: 'Authentication', icon: AiOutlineApi },
      { name: 'ORM', icon: GoDatabase },
      { name: 'Deployment', icon: FiTerminal },
      { name: 'Error Handling', icon: FiAlertTriangle },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Razorpay Payment Integration System',
    description: 'Integrated a secure payment gateway using Django REST Framework to handle transactions, webhooks, and order management.',
    techStack: ['Django REST Framework', 'Razorpay API', 'PostgreSQL'],
    githubUrl: 'https://github.com/jainroy',
    liveUrl: undefined,
  },
  {
    title: 'Firebase Push Notification API',
    description: 'Sent real-time, targeted notifications from a Django backend to various client applications using the Firebase Admin SDK.',
    techStack: ['Django', 'Firebase Admin SDK', 'Celery', 'Redis'],
    githubUrl: 'https://github.com/jainroy',
  },
  {
    title: 'Feedback Management System',
    description: 'Designed APIs with DRF for a feedback platform, implementing JWT authentication for security and Swagger for API documentation.',
    techStack: ['Django REST Framework', 'Simple JWT', 'Swagger (drf-yasg)', 'Docker'],
    githubUrl: 'https://github.com/jainroy',
  },
  {
    title: 'Portfolio API Project',
    description: 'A personal Django REST API with user authentication and model-based endpoints to serve portfolio content dynamically.',
    techStack: ['Django', 'DRF', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/jainroy',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Python Developer (Onsite)',
    company: 'NthIndex Software Solutions',
    period: '2025 July - Present',
    description: [
      'Develop and maintain real-world Django applications for various clients.',
      'Build REST APIs using Django REST Framework and create Swagger documentation.',
      'Implement features like Razorpay payment integration, Firebase push notifications, and JWT authentication modules.',
      'Work with REST APIs, authentication, and database models using PostgreSQL.',
      'Collaborate with frontend developers to integrate APIs and troubleshoot issues.',
      'Participate in the deployment and maintenance of live projects.',
      'Contribute to clean code practices, version control (Git), and team collaboration.',
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of Calicut',
    period: '2021 - 2023',
    description: 'Focused on advanced software engineering principles, database management, and system design, strengthening my analytical and problem-solving skills.',
  },
  {
    degree: 'Bachelor of Science (B.Sc.) in Mathematics',
    institution: 'University of Calicut',
    period: '2018 - 2021',
    description: 'My strong mathematical background helps me approach programming with logic, structure, and precision.',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
    { name: 'Python for Everybody', issuer: 'University of Michigan (Coursera)' },
    { name: 'Django REST Framework Mastery', issuer: 'Online Course' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
    { name: 'Software Engineering Fundamentals', issuer: 'Online Course' },
];