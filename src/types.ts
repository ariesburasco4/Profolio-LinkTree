export type TabType = 'links' | 'works' | 'press' | 'connect';

export interface Project {
  id: string;
  title: string;
  category: 'Web & SaaS' | 'Mobile' | 'Design Systems';
  tagline: string;
  description: string;
  metrics?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface PressItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  category: 'Article' | 'Talk' | 'Award' | 'Feature';
  readTime?: string;
  summary: string;
  url: string;
  featured?: boolean;
}

export interface QuickLinkItem {
  id: string;
  title: string;
  badge?: string;
  subtitle: string;
  iconType: 'resume' | 'linkedin' | 'email' | 'portfolio' | 'github' | 'calendar';
  actionType: 'modal' | 'external' | 'copy' | 'email';
  actionPayload?: string;
  isFeatured?: boolean;
}
