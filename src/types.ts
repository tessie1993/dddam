export interface Artist {
  id: string;
  name: string;
  role: string;
  category: 'headliner' | 'dj' | 'comedy' | 'special';
  time: string;
  stage: string;
  description: string;
  bio?: string;
  quote?: string;
  image: string;
  tags: string[];
  links?: {
    instagram?: string;
    soundcloud?: string;
    website?: string;
  };
  audioPreview?: string;
}

export interface Activity {
  id: string;
  title: string;
  formula: string; // e.g. "Karaoke Stage? Mag!"
  description: string;
  icon: string;
  partner?: string;
  tag: string;
  bgColor?: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  isNight: boolean;
  category: 'music' | 'comedy' | 'activity' | 'special';
  description: string;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Suggestion {
  id: string;
  text: string;
  author: string;
  votes: number;
  approved: boolean;
  isCustom?: boolean;
}

export interface Registration {
  id: string;
  name: string;
  email: string;
  guests: number;
  bringingItem?: string;
  registeredAt: string;
  ticketCode: string;
}
