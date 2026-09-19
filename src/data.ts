import { Project, PressItem, QuickLinkItem } from './types';

export const PROFILE = {
  name: 'Aries Burasco',
  initials: 'AB',
  headline: 'Senior Product Designer & Full-Stack Engineer',
  bio: 'Specializing in design systems, high-performance web applications, and intuitive human-computer interfaces. Over 8 years of experience building products used by millions worldwide.',
  email: 'ariesburasco4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aries-burasco-13168b290/',
  portfolio: 'https://ariesburasco4.github.io/Portfolio-Website/',
  github: 'https://github.com/ariesburasco',
  location: 'San Francisco, CA & Remote',
  availability: 'Available for Select Projects & Advisory',
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Products Shipped', value: '38+' },
    { label: 'Design Systems', value: '12' },
    { label: 'Client Satisfaction', value: '99%' }
  ]
};

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
