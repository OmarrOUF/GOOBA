export interface SystemCapability {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  techStack: string[];
  bestFor: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  timeframe: string;
  metricHighlight: string;
  metricComparison: {
    before: string;
    after: string;
  };
  overview: string;
  architecturePoints: string[];
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  num: string;
  question: string;
  answer: string;
  category: string;
}

export interface GlobalTimezone {
  city: string;
  code: string;
  timezone: string;
}
