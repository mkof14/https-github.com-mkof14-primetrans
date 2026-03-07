import { 
  Laptop, 
  Brain, 
  Leaf, 
  FlaskConical, 
  ShoppingCart, 
  Layers, 
  BarChart3, 
  ShieldAlert, 
  Zap, 
  Rocket, 
  UserCheck, 
  BrainCircuit, 
  Briefcase,
  LucideIcon
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: 'management-consulting',
    title: 'Management Consulting',
    icon: Briefcase,
    description: 'Strategic business advisory focused on operational efficiency and organizational transformation.',
    fullDescription: 'We help enterprises navigate complex market dynamics through rigorous planning, restructuring, and change management strategies that drive sustainable growth. Our consulting approach combines deep industry knowledge with technical expertise to deliver actionable strategies.',
    features: ['Strategic Business Planning', 'Operational Efficiency Improvement', 'Organizational Restructuring', 'Change Management'],
    image: 'https://picsum.photos/seed/consulting/1200/800',
    benefits: ['Increased profitability', 'Streamlined operations', 'Enhanced organizational agility', 'Clear strategic roadmap']
  },
  {
    id: 'ai-project-management',
    title: 'AI Project Management',
    icon: BrainCircuit,
    description: 'Specialized management of artificial intelligence initiatives from strategy to deployment.',
    fullDescription: 'We focus on defining robust AI strategies, overseeing complex model development, ensuring seamless system integration, and continuously optimizing performance for maximum business impact. We bridge the gap between data science and business value.',
    features: ['AI Strategy', 'Model Development', 'AI Integration', 'Performance Optimization'],
    image: 'https://picsum.photos/seed/ai-pm/1200/800',
    benefits: ['Accelerated AI adoption', 'Reduced technical risk', 'Measurable ROI on AI investments', 'Scalable AI infrastructure']
  },
  {
    id: 'executive-management',
    title: 'Executive Project & Talent Management',
    icon: UserCheck,
    description: 'Strategic leadership and operational oversight for high-stakes organizational initiatives.',
    fullDescription: 'Our expertise extends to placing and managing executive-level talent, ensuring that leadership is perfectly aligned with project objectives and corporate culture during critical transitions. We provide the stability needed for complex transformations.',
    features: ['Executive Placement', 'Strategic Oversight', 'Change Management', 'Leadership Alignment'],
    image: 'https://picsum.photos/seed/executive/1200/800',
    benefits: ['Seamless leadership transitions', 'Aligned organizational goals', 'Expert strategic guidance', 'Reduced executive turnover']
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    icon: Laptop,
    description: 'Enterprise technology management including architecture, development, and cloud migration.',
    fullDescription: 'Our IT management services cover the full spectrum of enterprise technology. We specialize in architecting resilient systems, managing large-scale software development lifecycles, and executing complex cloud migrations that minimize risk while maximizing operational efficiency.',
    features: ['System Architecture', 'Cloud Solutions', 'Software Development', 'IT Infrastructure'],
    image: 'https://picsum.photos/seed/it-solutions/1200/800',
    benefits: ['Modernized IT landscape', 'Reduced infrastructure costs', 'Enhanced system reliability', 'Faster time-to-market']
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    icon: Brain,
    description: 'Building robust data pipelines and scalable model architectures with MLOps best practices.',
    fullDescription: 'We oversee the technical rigor of training and validation, while implementing MLOps best practices to ensure long-term model performance in production environments. We ensure your models stay accurate and relevant.',
    features: ['Data Engineering', 'Model Training', 'MLOps', 'Production Deployment'],
    image: 'https://picsum.photos/seed/ml/1200/800',
    benefits: ['Reliable model performance', 'Automated ML workflows', 'Reduced data debt', 'Faster model iteration']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: ShieldAlert,
    description: 'Proactive defense of critical digital assets through threat modeling and security audits.',
    fullDescription: 'We manage the defense of your most critical digital assets. Our proactive approach includes comprehensive threat modeling, rigorous security audits, and the development of rapid incident response protocols to ensure business continuity.',
    features: ['Threat Assessment', 'Security Audits', 'Incident Response', 'Compliance Management'],
    image: 'https://picsum.photos/seed/security-detail/1200/800',
    benefits: ['Minimized data breach risk', 'Full regulatory compliance', 'Enhanced customer trust', 'Rapid recovery capabilities']
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    icon: Zap,
    description: 'Management of complex sustainable energy projects from planning to grid integration.',
    fullDescription: 'We navigate the intricate technical, regulatory, and environmental landscapes of solar, wind, and storage initiatives, ensuring successful grid integration and long-term operational viability.',
    features: ['Solar Farm Planning', 'Wind Energy Systems', 'Grid Integration', 'Energy Storage'],
    image: 'https://picsum.photos/seed/energy/1200/800',
    benefits: ['Reduced carbon footprint', 'Energy cost stability', 'Sustainable brand image', 'Efficient grid operations']
  },
  {
    id: 'aerospace-defense',
    title: 'Aerospace & Defense',
    icon: Rocket,
    description: 'High-precision oversight for mission-critical aerospace and defense initiatives.',
    fullDescription: 'We manage the rigorous systems engineering and supply chain security required for projects that demand absolute reliability and strict regulatory compliance. We ensure mission success.',
    features: ['Systems Engineering', 'Regulatory Compliance', 'Supply Chain Security', 'R&D Management'],
    image: 'https://picsum.photos/seed/aerospace/1200/800',
    benefits: ['Guaranteed mission reliability', 'Strict compliance adherence', 'Secure supply chains', 'Advanced R&D outcomes']
  }
];
