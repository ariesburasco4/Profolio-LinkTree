import { Project, PressItem, QuickLinkItem, ResumeEducationItem, ResumeExperienceItem, ResumeAccoladeItem } from './types';

export const PROFILE = {
  name: 'Aries Burasco',
  initials: 'AB',
  headline: "Procurement & Analytics Specialist | Master's in Information Systems Candidate",
  bio: "Information Systems Master's candidate with proven industry impact in vendor procurement, cost-reduction negotiations, automated database modeling, and enterprise business analytics. Proven track record leading high-performance collegiate teams and optimizing technical training.",
  email: 'ariesburasco4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aries-burasco-13168b290/',
  portfolio: 'https://ariesburasco4.github.io/Portfolio-Website/',
  github: 'https://github.com/ariesburasco',
  location: 'Rogers, AR',
  affiliation: 'University of Arkansas — Sam M. Walton College of Business',
  availability: 'Open to Analytics & Procurement Roles',
  stats: [
    { label: "Master's GPA", value: '4.0' },
    { label: 'Undergrad GPA', value: '3.94' },
    { label: 'Cost Savings', value: '25%+' },
    { label: 'On-Time Delivery', value: '90%+' }
  ]
};

export const RESUME_EDUCATION: ResumeEducationItem[] = [
  {
    id: 'pmis',
    degree: "Professional Master of Information Systems",
    institution: 'University of Arkansas — Sam M. Walton College of Business',
    gpa: '4.0 / 4.0',
    status: 'Expected May 2027',
    concentration: 'Emerging Technology (Enterprise Cloud Systems, Big Data Orchestration & Predictive Analytics)'
  },
  {
    id: 'bsba',
    degree: 'Bachelor of Science in Business Administration',
    institution: 'University of Arkansas — Fayetteville, AR',
    gpa: '3.94 / 4.0',
    status: 'Completing May 2025',
    concentration: 'Major: Information Systems (Business Analytics & Enterprise Data Models)',
    minor: 'Minor: Supply Chain Management (Logistics Optimization, Procurement Strategy & Vendor Analytics)'
  },
  {
    id: 'asba',
    degree: 'Associate of Science in Business Administration',
    institution: 'Northwest Arkansas Community College (NWACC) — Bentonville, AR',
    gpa: '3.80 / 4.0',
    status: 'Conferred May 2023',
    concentration: 'Concentrated Major: Information Systems',
    honors: 'Summa Cum Laude Honors • Varsity Cross-Country Scholar Athlete'
  }
];

export const RESUME_EXPERIENCE: ResumeExperienceItem[] = [
  {
    id: 'wilshar-steel',
    role: 'Procurement Coordinator',
    company: 'Wilshar Steel',
    location: 'Lowell, AR',
    period: 'July 2025 – Present',
    current: true,
    highlights: [
      'Achieved over 25% cost savings through periodic vendor pricing reviews.',
      'Coordinated on-time delivery shipments for 90%+ of purchase orders.'
    ],
    tags: ['Vendor Management', 'Procurement Strategy', 'Logistics', 'Cost Optimization']
  },
  {
    id: 'uark-testing',
    role: 'Testing Services Administrator',
    company: 'University of Arkansas',
    location: 'Fayetteville, AR',
    period: 'February 2025 – May 2025',
    highlights: [
      'Cut test completion time by 15% via optimized scheduling and resource allocation.',
      'Managed exam intake workflows for 100+ tests weekly with zero compliance incidents.'
    ],
    tags: ['Process Control', 'Higher Ed Operations', 'Compliance', 'Resource Allocation']
  },
  {
    id: 'nwacc-trainer',
    role: 'Microsoft Office Suite Trainer',
    company: 'Northwest Arkansas Community College (NWACC)',
    location: 'Bentonville, AR',
    period: 'May 2024 – January 2025',
    highlights: [
      'Drove a 40% Excel & SQL proficiency increase through hands-on analytics training.',
      'Integrated Copilot AI workflows, boosting student output drafting and reporting by 45%.'
    ],
    tags: ['Advanced Excel', 'SQL & Access', 'Copilot AI', 'Analytics Training']
  },
  {
    id: 'jones-center',
    role: 'Member Representative',
    company: 'The Jones Center',
    location: 'Springdale, AR',
    period: 'February 2023 – August 2023',
    highlights: [
      'Delivered 13% membership growth and generated 20% monthly event revenue.'
    ],
    tags: ['Operations', 'Community Leadership', 'Revenue Growth']
  }
];

export const RESUME_ACCOLADES: ResumeAccoladeItem[] = [
  {
    id: 'procurement-impact',
    category: 'Procurement Impact',
    title: '25%+ Vendor Cost Optimization',
    badge: 'Cost Savings',
    description: 'Reduced procurement costs by over 25% through periodic vendor pricing reviews and supplier evaluation.'
  },
  {
    id: 'cross-country-captain',
    category: 'Collegiate Leadership',
    title: 'Team Captain — Cross-Country',
    badge: 'Collegiate Captain',
    description: 'Led 10-member squad throughout training, setting the standard that led to a historic 5th place finish at Nationals for NWACC.'
  },
  {
    id: 'letter-award',
    category: 'Athletic Distinction',
    title: 'NWACC Cross-Country Letter Award',
    badge: 'Dual-Year Varsity',
    description: 'Two-time recipient recognized for athletic excellence, stamina, peer mentorship, and collegiate dedication (2022, 2023).'
  },
  {
    id: 'scholarship',
    category: 'Academic Honor',
    title: "Chancellor's Transfer Scholarship",
    badge: 'Honors Scholarship',
    description: "Awarded Chancellor's Transfer Scholarship for the Sam M. Walton College of Business at the University of Arkansas."
  }
];

export const RESUME_SKILLS: string[] = [
  'Procurement Strategy',
  'Vendor Negotiations',
  'Cost Reduction Analysis',
  'Supply Chain Analytics',
  'Logistics Optimization',
  'Advanced Excel & Solver',
  'SQL & Database Modeling',
  'SAP Analytics',
  'ERP Simulation',
  'Copilot AI Workflows',
  'Enterprise Cloud Systems',
  'Predictive Analytics'
];

export const RESUME_PLAIN_TEXT = `ARIES BURASCO
Procurement & Analytics Specialist | Master's in Information Systems Candidate
Rogers, AR • ariesburasco4@gmail.com • linkedin.com/in/aries-burasco-13168b290 • ariesburasco4.github.io/Portfolio-Website

EDUCATION
- Professional Master of Information Systems (GPA: 4.0/4.0)
  University of Arkansas — Sam M. Walton College of Business (Expected May 2027)
  Concentration: Emerging Technology (Enterprise Cloud, Big Data, Predictive Analytics)
- Bachelor of Science in Business Administration (GPA: 3.94/4.0)
  University of Arkansas — Fayetteville, AR (Completing May 2025)
  Major: Information Systems (Business Analytics) | Minor: Supply Chain Management
- Associate of Science in Business Administration (GPA: 3.80/4.0)
  Northwest Arkansas Community College — Bentonville, AR (May 2023)
  Honors: Summa Cum Laude | Concentration: Information Systems

EXPERIENCE
- Procurement Coordinator | Wilshar Steel, Lowell, AR (July 2025 - Present)
  * Achieved over 25% cost savings through periodic vendor pricing reviews.
  * Coordinated on-time delivery shipments for 90%+ of purchase orders.
- Testing Services Administrator | University of Arkansas, Fayetteville, AR (Feb 2025 - May 2025)
  * Cut test completion time by 15% via optimized scheduling and resource allocation.
  * Managed exam intake workflows for 100+ tests weekly with zero compliance incidents.
- Microsoft Office Suite Trainer | NWACC, Bentonville, AR (May 2024 - Jan 2025)
  * Drove a 40% Excel & SQL proficiency increase through hands-on analytics training.
  * Integrated Copilot AI workflows, boosting student output drafting and reporting by 45%.
- Member Representative | The Jones Center, Springdale, AR (Feb 2023 - Aug 2023)
  * Delivered 13% membership growth and generated 20% monthly event revenue.

ACCOLADES & DISTINCTIONS
- Chancellor's Transfer Scholarship (Jul 2023) - U of A Walton College
- Team Captain — Cross-Country (Aug 2021 - Nov 2022) - Led team to historic 5th place at Nationals
- NWACC Cross-Country Letter Award (2022, 2023) - Dual-year varsity recognition
- Procurement Impact: 25%+ cost savings through vendor reviews & evaluation

CORE COMPETENCIES
- Procurement Strategy, Vendor Negotiations, SCM Optimization, Purchase Order Logistics
- Enterprise Systems, SQL, Database Modeling, Advanced Excel & Solver, SAP Analytics, ERP Simulation
- Emerging Tech, Copilot AI Workflows, Cloud Systems, Predictive Analytics`;


export const QUICK_LINKS: QuickLinkItem[] = [
  {
    id: 'resume',
    title: 'Download Resume',
    badge: 'PDF',
    subtitle: 'Direct access to verified credentials & experience',
    iconType: 'resume',
    actionType: 'modal',
    isFeatured: true
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Profile',
    subtitle: 'linkedin.com/in/aries-burasco-13168b290...',
    iconType: 'linkedin',
    actionType: 'external',
    actionPayload: 'https://www.linkedin.com/in/aries-burasco-13168b290/'
  },
  {
    id: 'email',
    title: 'Email Address',
    subtitle: 'ariesburasco4@gmail.com',
    iconType: 'email',
    actionType: 'email',
    actionPayload: 'ariesburasco4@gmail.com'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    subtitle: 'Explore Full Portfolio & Projects',
    iconType: 'portfolio',
    actionType: 'modal',
    actionPayload: 'https://ariesburasco4.github.io/Portfolio-Website/'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'clean-web-design',
    title: 'Clean Web Design System',
    category: 'Design Systems',
    tagline: 'Enterprise UI kit & tokenized component system',
    description: 'A comprehensive multi-platform design system engineered with Tailwind CSS, React, and Figma Tokens. Adopted by over 45 product teams.',
    metrics: 'Used by 45+ enterprise teams',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Design System', 'React', 'Tailwind', 'Tokens', 'WCAG AA'],
    liveUrl: 'https://cleanwebdesign.dev',
    featured: true
  },
  {
    id: 'novaflow-analytics',
    title: 'NovaFlow Analytics Suite',
    category: 'Web & SaaS',
    tagline: 'Real-time telemetry and revenue orchestration',
    description: 'High-density observability platform featuring live time-series charts, automated anomaly detection, and sub-100ms dashboard refreshes.',
    metrics: '+42% operational efficiency',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind'],
    liveUrl: 'https://novaflow.io',
    featured: true
  },
  {
    id: 'pulse-wallet',
    title: 'Pulse Financial Wallet',
    category: 'Mobile',
    tagline: 'Consumer micro-investing and cross-border transfers',
    description: 'Mobile-first banking app designed for friction-free remittances, biometric authentication, and instant card freezing controls.',
    metrics: '4.9★ rating from 120k+ reviews',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Fintech', 'Security', 'iOS/Android'],
    liveUrl: 'https://pulsewallet.app',
    featured: false
  },
  {
    id: 'horizon-ai-studio',
    title: 'Horizon Creative Studio',
    category: 'Web & SaaS',
    tagline: 'AI-assisted interface generation canvas',
    description: 'Infinite-canvas node editor allowing product designers to prototype reactive layouts with real-time AI code generation.',
    metrics: 'Featured #1 on Product Hunt',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Generative AI', 'Canvas API', 'TypeScript', 'GraphQL'],
    liveUrl: 'https://horizonstudio.ai',
    featured: true
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: 'press-1',
    title: 'Designing High-Clarity Editorial Portfolios for Tech Leaders',
    outlet: 'Clean Web Design Journal',
    date: 'August 2026',
    category: 'Article',
    readTime: '6 min read',
    summary: 'A deep dive into typographical rhythm, negative space mathematics, and creating unforgettable personal brand hubs in an age of automated design.',
    url: '#',
    featured: true
  },
  {
    id: 'press-2',
    title: 'Keynote: Scalable Component Architecture & Token Pipelines',
    outlet: 'Modern Web Summit • San Francisco',
    date: 'June 2026',
    category: 'Talk',
    readTime: '32 min keynote',
    summary: 'Presented to 1,400+ frontend engineers on bridging design tokens from Figma directly to zero-runtime CSS builds with strict accessibility.',
    url: '#',
    featured: true
  },
  {
    id: 'press-3',
    title: 'Best Personal Portfolio of the Year Nominee',
    outlet: 'Clean Design Awards 2026',
    date: 'April 2026',
    category: 'Award',
    readTime: 'Editorial Feature',
    summary: 'Recognized for visual hierarchy, swift mobile performance (100 Lighthouse score), and purposeful interactive craftsmanship.',
    url: '#',
    featured: false
  },
  {
    id: 'press-4',
    title: 'The Psychology of Micro-Interactions in Mobile Workflows',
    outlet: 'Design Systems Collective',
    date: 'January 2026',
    category: 'Article',
    readTime: '8 min read',
    summary: 'How subtle haptic cues, spring kinematics, and tactile state changes reinforce user confidence in enterprise tools.',
    url: '#',
    featured: false
  }
];
