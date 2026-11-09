import type {
  PersonalMetadata,
  Project,
  CreativeSkill,
  TechnicalSkillCategory,
  ExperienceItem,
  EducationItem,
} from '../types';

export const personalData: PersonalMetadata = {
  name: 'Aatif Hussain Qazi',
  monogram: 'AQ.',
  tagline: 'Exploring technology. Creating digital experiences.',
  roleSubtitle: 'B.Sc. DYOD Student · IUST Awantipora',
  studentStatus: '1st Year B.Sc. DYOD',
  institution: 'Islamic University of Science and Technology (IUST), Awantipora',
  location: 'Sopore, Jammu & Kashmir',
  email: 'aatifhussainqazi@gmail.com',
  availability: 'OPEN TO LEARNING & COLLABORATION',
  bioHeading: 'A little about me.',
  bioParagraphs: [
    "I'm Aatif Hussain Qazi, a first-year B.Sc. DYOD student at the Islamic University of Science and Technology, Awantipora.",
    'My interests sit somewhere between technology, digital creativity, and practical problem-solving.',
    'I explore 3D modelling and animation, video editing, data analysis, and web-based projects. I enjoy learning through experimentation and building things that combine creativity with technology.',
  ],
  socialLinks: [
    {
      platform: 'Email',
      label: 'aatifhussainqazi@gmail.com',
      url: 'mailto:aatifhussainqazi@gmail.com',
      configured: true,
    },
    {
      platform: 'LinkedIn',
      label: 'Connect on LinkedIn',
      url: '#', // User can configure when ready
      configured: false,
    },
    {
      platform: 'Instagram',
      label: 'Creative Showcase',
      url: '#', // User can configure when ready
      configured: false,
    },
    {
      platform: 'X (Twitter)',
      label: 'Follow updates',
      url: '#', // User can configure when ready
      configured: false,
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: 'aquabill',
    title: 'AquaBill',
    category: 'Project / Software',
    tagline: 'Utility and billing application contribution',
    description: 'A project I contributed to, involving the development of AquaBill.',
    role: 'Contributor',
    technologies: ['Software Development', 'System Utility', 'To be confirmed'],
    year: '2025 – 2026',
    statusText: 'Contributor · In Active Development',
    overview:
      'AquaBill is a software initiative focused on water utility billing and management workflows. As a contributor to the project, I assisted with implementation aspects and practical development tasks.',
    problemStatement:
      'Streamlining record-keeping, billing calculation, and user tracking for utility services.',
    contributions: [
      'Contributed to the development workflow and implementation of AquaBill.',
      'Collaborated on practical functionality and feature iteration.',
      'Description and specific module breakdown remain editable as project documentation evolves.',
    ],
    keyHighlights: [
      'Role: Contributor',
      'Area: Software utility & workflow automation',
      'Status: Active development / verification',
    ],
    visualType: 'aquabill',
    isPlaceholderDetail: true,
  },
  {
    id: 'myklyra',
    title: 'MyKlyra',
    category: 'E-Commerce / Digital Marketing',
    tagline: 'Brand operations & digital catalog management',
    description:
      'Worked on marketing and e-commerce activities for a clothing brand, including WordPress product listings, product presentation, descriptions, website content, and social media activities.',
    role: 'Marketing & E-commerce Operations',
    technologies: ['WordPress', 'E-Commerce', 'Digital Marketing', 'Content Creation'],
    year: '2024 – 2025',
    statusText: 'Completed Engagement · 6 Months',
    overview:
      'MyKlyra is a contemporary apparel brand. Over a six-month duration, I coordinated front-facing e-commerce catalog management and digital outreach.',
    problemStatement:
      'Presenting fashion collections with clear visual hierarchy, compelling copy, and consistent product data across web and social channels.',
    contributions: [
      'Managed clothing product listings and catalog uploads through WordPress.',
      'Authored tailored product descriptions and shaped aesthetic web presentation.',
      'Assisted with social media campaigns and audience engagement initiatives.',
      'Maintained consistency between inventory attributes and online store listings.',
    ],
    keyHighlights: [
      'WordPress store & catalog administration',
      'Editorial product writing & visual asset layout',
      'Multi-channel social media integration',
    ],
    visualType: 'myklyra',
    isPlaceholderDetail: false,
  },
  {
    id: 'university-projects',
    title: 'University Projects',
    category: 'Academic Exploration',
    tagline: 'B.Sc. DYOD coursework & computational studies',
    description: 'Practical projects developed or explored as part of my academic journey.',
    role: 'Student Explorer',
    technologies: ['Python', 'Data Analysis', 'Linux', 'Problem Solving'],
    year: '2026 – Present',
    statusText: 'Ongoing Academic Portfolio',
    overview:
      'Practical projects and computational assignments developed during my B.Sc. DYOD curriculum at the Islamic University of Science and Technology (IUST), Awantipora.',
    problemStatement:
      'Applying foundational computing principles, scripting, and analytical thinking to academic assignments and experimental prototypes.',
    contributions: [
      'Experimenting with Python scripts for data manipulation and task automation.',
      'Conducting exploratory data analysis and structured computational exercises.',
      'Navigating and configuring Linux environments for development and coursework.',
      'Space reserved for upcoming semester capstones and research initiatives.',
    ],
    keyHighlights: [
      'Institution: IUST Awantipora',
      'Focus: Applied computing, data pipelines & systems',
      'Modular space designed for new academic milestones',
    ],
    visualType: 'university',
    isPlaceholderDetail: true,
  },
  {
    id: '3d-experiments',
    title: '3D Experiments',
    category: '3D Art & Motion',
    tagline: 'Procedural meshes, hard-surface modelling & animation',
    description:
      'An evolving collection of 3D models, animations, and visual experiments created using Blender.',
    role: '3D Creator',
    technologies: ['Blender', '3D Modelling', '3D Animation', 'Lighting & Shading'],
    year: '2025 – Present',
    statusText: 'Creative Laboratory · Ongoing',
    overview:
      'A personal playground for exploring digital three-dimensional form, animation timing, camera composition, and shading pipelines in Blender.',
    problemStatement:
      'Bridging visual aesthetics with 3D spatial thinking, rigging fundamentals, and procedural creation.',
    contributions: [
      'Modelling organic and hard-surface geometry using Blender toolsets.',
      'Exploring keyframe animation, camera framing, and lighting moods.',
      'Testing materials, roughness maps, and wireframe visualization modes.',
      'Showcase ready to host forthcoming Blender video clips and high-res renders.',
    ],
    keyHighlights: [
      'Software: Blender',
      'Domains: Geometry modelling, scene composition, lighting',
      'Continuously expanded with new creative render sessions',
    ],
    visualType: 'blender',
    isPlaceholderDetail: true,
  },
];

export const creativeSkillsData: CreativeSkill[] = [
  {
    id: 'blender-modelling',
    title: 'Blender 3D Modelling',
    subtitle: 'Form & Geometry',
    description: 'Creating and experimenting with 3D objects, meshes, and geometric compositions in Blender.',
    capabilities: ['Mesh topology', 'Hard-surface modelling', 'Procedural modifiers', 'Shading & materials'],
    tool: 'Blender 4.x',
    category: '3d',
  },
  {
    id: '3d-animation',
    title: '3D Animation',
    subtitle: 'Motion & Timing',
    description: 'Exploring motion principles, keyframing, camera dynamics, and visual storytelling.',
    capabilities: ['Keyframe curves', 'Camera staging', 'Object transitions', 'Scene pacing'],
    tool: 'Blender',
    category: 'motion',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    subtitle: 'Narrative Assembly',
    description: 'Editing video content, synchronizing visual rhythm, and shaping engaging media formats.',
    capabilities: ['Timeline sequencing', 'Audio alignment', 'Color grading basics', 'Export optimization'],
    tool: 'Video Suites',
    category: 'motion',
  },
  {
    id: 'canva-design',
    title: 'Canva',
    subtitle: 'Rapid Visuals',
    description: 'Drafting high-impact promotional collateral, social posts, and editorial design assets.',
    capabilities: ['Social banners', 'Brand templates', 'Presentation decks', 'Typographic layouts'],
    tool: 'Canva Pro',
    category: 'design',
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    subtitle: 'Hierarchy & Aesthetics',
    description: 'Applying typography, balance, whitespace, and color harmony to digital interfaces.',
    capabilities: ['Grid alignment', 'Contrast control', 'Visual hierarchy', 'Asset curation'],
    tool: 'Design Systems',
    category: 'design',
  },
  {
    id: 'digital-content',
    title: 'Digital Content Creation',
    subtitle: 'Media Publishing',
    description: 'Planning, producing, and distributing digital assets optimized for modern social channels.',
    capabilities: ['Cross-platform storytelling', 'Visual hooks', 'Asset formatting', 'Creative direction'],
    tool: 'Multi-platform',
    category: 'content',
  },
];

export const technicalSkillsData: TechnicalSkillCategory[] = [
  {
    category: 'Programming & Data',
    skills: [
      {
        name: 'Python',
        description: 'Core scripting, problem solving, data structures, and automation experiments.',
        context: 'Used for academic coursework, script building, and computational assignments.',
      },
      {
        name: 'Data Analysis',
        description: 'Exploring datasets, pattern identification, data cleaning, and metric summaries.',
        context: 'Applied in DYOD coursework and structured data interpretation exercises.',
      },
    ],
  },
  {
    category: 'Creative Software',
    skills: [
      {
        name: 'Blender',
        description: 'Open-source 3D suite for modelling, rigging, lighting, and visual rendering.',
        context: 'Primary environment for all personal 3D art, geometry studies, and animation.',
      },
      {
        name: 'Canva',
        description: 'Visual layout engine for branding graphics, banners, and digital collateral.',
        context: 'Deployed across client campaigns, social posts, and presentation material.',
      },
      {
        name: 'Video Editing',
        description: 'Post-production assembly, clip cutting, pacing adjustment, and media export.',
        context: 'Used for social video reels, project walk-throughs, and storytelling.',
      },
    ],
  },
  {
    category: 'Web & Systems',
    skills: [
      {
        name: 'WordPress',
        description: 'CMS operations, e-commerce catalog administration, and content publishing.',
        context: 'Direct hands-on experience via MyKlyra clothing brand management.',
      },
      {
        name: 'Linux',
        description: 'Command line navigation, package management, shell basics, and system environment.',
        context: 'Daily operating environment for development, coursework, and system exposure.',
      },
    ],
  },
  {
    category: 'Digital Media',
    skills: [
      {
        name: 'Social Media Management',
        description: 'Post planning, scheduling, engagement, community coordination, and channel consistency.',
        context: 'Demonstrated through active volunteer work at RGPRS J&K and MyKlyra brand.',
      },
      {
        name: 'Content Publishing',
        description: 'Multi-channel distribution across Instagram, Facebook, X, and web stores.',
        context: 'End-to-end editorial execution from draft to audience release.',
      },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'rgprs',
    role: 'Social Media Volunteer',
    organization: 'RGPRS J&K',
    period: '2026 – Present',
    location: 'Jammu & Kashmir',
    current: true,
    responsibilities: [
      'Managed and published regular posts across Instagram, Facebook, and X (Twitter).',
      'Performed basic editing, layout formatting, and proofing of social media assets.',
      'Assisted with maintaining regular, reliable social media communication schedules.',
      'Ensured branding and organizational messaging remained consistent across channels.',
    ],
    tags: ['Social Media', 'Content Distribution', 'Community Outreach', 'Graphic Formatting'],
  },
  {
    id: 'myklyra-exp',
    role: 'Marketing & E-commerce Operations',
    organization: 'MyKlyra',
    period: '2024 – 2025',
    duration: '6 Months',
    location: 'Remote / Hybrid',
    current: false,
    responsibilities: [
      'Managed clothing product listings and catalog uploads through WordPress.',
      'Worked on product presentation, writing clear descriptions, and formatting website content.',
      'Assisted with targeted social media campaigns and digital marketing initiatives.',
      'Collaborated on visual merchandising and seasonal collection launches.',
    ],
    tags: ['WordPress', 'E-commerce', 'Catalog Management', 'Digital Marketing'],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'iust',
    institution: 'Islamic University of Science and Technology (IUST)',
    degree: 'B.Sc. Design Your Own Degree (DYOD)',
    period: '2026 – Present',
    status: 'Currently Pursuing (1st Year)',
    location: 'Awantipora, Pulwama, J&K',
    details:
      'Pursuing an innovative, interdisciplinary curriculum combining computer applications, creative technologies, and applied sciences.',
    current: true,
  },
  {
    id: 'ghss',
    institution: 'Government Higher Secondary School',
    degree: 'Class 11 – 12 (Higher Secondary)',
    period: '2022 – 2024',
    status: 'Passed Class 12',
    location: 'Doabgah, Sopore, J&K',
    details: 'Completed senior secondary education with focus on science and fundamentals.',
    current: false,
  },
  {
    id: 'netherfield',
    institution: 'Netherfield School',
    degree: 'Class 10 (Secondary School Examination)',
    period: '2009 – 2021',
    status: 'Passed Class 10',
    location: 'Sopore, Baramulla, J&K',
    grade: 'CGPA: 9.74 / 10',
    details: 'Graduated with high distinction (CGPA: 9.74 / 10).',
    current: false,
  },
];
