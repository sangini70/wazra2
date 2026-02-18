export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface PatentStat {
  label: string;
  value: number;
  suffix: string;
}

export enum PageRoutes {
  HOME = '/',
  STORY = '/story',
  TECHNOLOGY = '/technology',
  PRODUCT = '/product',
  FAQ = '/faq',
  CONTACT = '/contact'
}