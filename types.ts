import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export type Theme = 'light' | 'dark';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}
