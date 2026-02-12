export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface SuccessStory {
  id: number;
  title: string;
  category: string;
  challenge: string;
  outcome: string;
  icon: React.ReactNode;
}

export interface ExplainerStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
}
