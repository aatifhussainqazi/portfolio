export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  year: string;
  badge?: string;
  statusText: string;
  overview: string;
  problemStatement?: string;
  contributions: string[];
  keyHighlights: string[];
  visualType: 'aquabill' | 'myklyra' | 'university' | 'blender';
  isPlaceholderDetail?: boolean;
}

export interface CreativeSkill {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  tool: string;
  category: '3d' | 'motion' | 'design' | 'content';
}

export interface TechnicalSkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
    iconName?: string;
    context: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration?: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  grade?: string;
  details?: string;
  current?: boolean;
}

export interface PersonalMetadata {
  name: string;
  monogram: string;
  tagline: string;
  roleSubtitle: string;
  studentStatus: string;
  institution: string;
  location: string;
  email: string;
  availability: string;
  bioHeading: string;
  bioParagraphs: string[];
  socialLinks: {
    platform: string;
    label: string;
    url: string;
    configured: boolean;
  }[];
}
