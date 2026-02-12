import React from 'react';
import { ShieldAlert, Train, BadgeCheck, Gavel, Scale, Siren, Mail, Phone, FileSearch, CheckCircle, Newspaper, UserCheck, Gavel as GavelIcon } from 'lucide-react';
import { NavItem, Service, Testimonial, SuccessStory, NewsItem, ExplainerStep } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Expertise', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'fare-evasion',
    title: 'Fare Evasion',
    description: 'Specialist defense against TFL and Train Operating Company prosecutions. Avoid criminal records.',
    icon: <Train className="w-8 h-8 text-white" />,
    details: [
      'Settlement negotiation (Out of Court)',
      'Single Justice Procedure Notice advice',
      'Court representation',
      'Avoiding criminal convictions'
    ]
  },
  {
    id: 'blue-badge',
    title: 'Blue Badge Fraud',
    description: 'Expert representation for council prosecutions regarding misuse of disabled parking badges.',
    icon: <BadgeCheck className="w-8 h-8 text-white" />,
    details: [
      'Council interview representation',
      'Mitigation strategies',
      'Court defense',
      'Preserving your reputation'
    ]
  },
  {
    id: 'criminal-defense',
    title: 'Criminal Defense',
    description: 'Robust defense for all criminal matters including theft, assault, and driving offenses.',
    icon: <Gavel className="w-8 h-8 text-white" />,
    details: [
      'Police station representation',
      'Magistrates Court advocacy',
      'Crown Court defense',
      'Appeals'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Fare Evasion Client",
    content: "I was terrified of getting a criminal record for a stupid mistake on the train. Makwana Solicitors negotiated a settlement out of court. Life saver.",
    rating: 5
  },
  {
    id: 2,
    name: "David P.",
    role: "Blue Badge Case",
    content: "Professional, discreet, and incredibly effective. They handled the council so I didn't have to stress. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael T.",
    role: "Driving Offense",
    content: "Kept my license when I thought all was lost. The communication was excellent throughout the whole process.",
    rating: 5
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    title: "TFL Fare Evasion Settled",
    category: "Fare Evasion",
    challenge: "Client faced prosecution for multiple unpaid journeys totaling £400.",
    outcome: "Negotiated out-of-court settlement. No criminal record. Client paid fare + admin costs only.",
    icon: <Train className="w-6 h-6 text-white" />
  },
  {
    id: 2,
    title: "Blue Badge Case Dropped",
    category: "Blue Badge",
    challenge: "Client accused of using a relative's badge while relative was not present.",
    outcome: "Successfully argued mitigation regarding the 'pickup' rule. Prosecution withdrawn.",
    icon: <BadgeCheck className="w-6 h-6 text-white" />
  },
  {
    id: 3,
    title: "Assault Charge Acquittal",
    category: "Criminal Defense",
    challenge: "Client charged with common assault after a misunderstanding in a public place.",
    outcome: "CCTV evidence analyzed by our team proved self-defense. Case dismissed before trial.",
    icon: <GavelIcon className="w-6 h-6 text-white" />
  }
];

export const EXPLAINER_STEPS: ExplainerStep[] = [
  {
    id: 1,
    title: "The Letter Arrives",
    description: "You receive a Single Justice Procedure Notice or a letter from TFL/Council. Panic sets in.",
    icon: <Mail className="w-10 h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Stop & Contact Us",
    description: "Do not reply immediately without advice. Contact Makwana Solicitors for a free initial assessment.",
    icon: <Phone className="w-10 h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Case Analysis",
    description: "We review the evidence, check for procedural errors, and formulate a defense strategy.",
    icon: <FileSearch className="w-10 h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Representation",
    description: "We correspond directly with the prosecutor to negotiate a settlement or represent you in court.",
    icon: <UserCheck className="w-10 h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Outcome Secured",
    description: "Our goal is achieved: Prosecution withdrawn, settlement reached, or acquittal.",
    icon: <CheckCircle className="w-10 h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "TFL Cracks Down on Fare Evasion",
    date: "2 Days Ago",
    category: "Transport Law",
    summary: "Transport for London announces new automated detection systems for fare dodgers."
  },
  {
    id: 2,
    title: "Blue Badge Misuse Penalties Increase",
    date: "1 Week Ago",
    category: "Council Updates",
    summary: "Councils across London are adopting stricter prosecution policies for badge misuse."
  },
  {
    id: 3,
    title: "Magistrates Court Sentencing Guidelines Update",
    date: "2 Weeks Ago",
    category: "Criminal Law",
    summary: "New guidelines for minor offenses emphasize out-of-court disposals where appropriate."
  }
];

export const CONTACT_EMAIL = "info@makwanasolicitors.co.uk";
export const CONTACT_PHONE = "020 1234 5678";