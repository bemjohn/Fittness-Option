export interface GymClass {
  id: string;
  title: string;
  category: 'strength' | 'hiit' | 'combat' | 'mindbody' | 'cycle';
  categoryLabel: string;
  time: string;
  duration: string;
  instructor: string;
  studio: string;
  intensity: 'High' | 'Medium' | 'Extreme';
  capacity: number;
  spotsLeft: number;
  description: string;
  days: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun')[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string[];
  bio: string;
  experience: string;
  certifications: string[];
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  subtitle: string;
  priceNaira: string;
  billingPeriod: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface ClubReview {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  comment: string;
  verifiedMember: boolean;
}

export interface ClubFacilitySpace {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  equipment: string[];
  image: string;
}
