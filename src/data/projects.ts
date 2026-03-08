import { Clock, TrendingUp, ShieldCheck, Users, LucideIcon } from 'lucide-react';

export interface ProjectMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProjectTimeline {
  date: string;
  event: string;
  description: string;
}

export interface ProjectTechnicalSpec {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  status: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: ProjectMetric[];
  image: string;
  gallery: string[];
  timeline?: ProjectTimeline[];
  technicalSpecs?: ProjectTechnicalSpec[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'ai-supply-chain',
    title: 'AI-Powered Supply Chain Optimization',
    category: 'Logistics',
    status: 'Active',
    description: 'Implemented machine learning models to optimize warehouse operations and reduce delivery times by 40%.',
    fullDescription: 'Our client, a global logistics provider, faced significant inefficiencies in their warehouse operations and last-mile delivery. We managed the implementation of an end-to-end AI solution that revolutionized their supply chain management.',
    challenge: 'The client struggled with unpredictable demand spikes, inefficient route planning, and high operational costs due to manual warehouse sorting processes.',
    solution: 'We oversaw the development of a custom ML model that predicts demand with 95% accuracy. Additionally, we integrated an automated sorting system and a real-time route optimization engine.',
    results: [
      '40% reduction in average delivery times.',
      '25% decrease in overall operational costs.',
      '99.5% accuracy in inventory management.',
      'Successful integration with existing legacy ERP systems.'
    ],
    metrics: [
      { label: 'Faster Delivery', value: '40%', icon: Clock },
      { label: 'Cost Reduction', value: '25%', icon: TrendingUp },
      { label: 'Accuracy', value: '99.5%', icon: ShieldCheck }
    ],
    image: 'https://picsum.photos/seed/logistics1/1200/800',
    gallery: [
      'https://picsum.photos/seed/logistics-g1/800/600',
      'https://picsum.photos/seed/logistics-g2/800/600',
      'https://picsum.photos/seed/logistics-g3/800/600'
    ],
    timeline: [
      { date: 'Q1 2025', event: 'Initial Audit', description: 'Comprehensive analysis of existing warehouse workflows and delivery bottlenecks.' },
      { date: 'Q2 2025', event: 'Model Development', description: 'Training machine learning models on 5 years of historical logistics data.' },
      { date: 'Q3 2025', event: 'Pilot Program', description: 'Deployment of AI sorting in the primary regional distribution center.' },
      { date: 'Q4 2025', event: 'Global Rollout', description: 'Full integration across all 15 international hubs.' }
    ],
    technicalSpecs: [
      { label: 'AI Framework', value: 'TensorFlow / PyTorch' },
      { label: 'Data Processing', value: 'Apache Spark' },
      { label: 'Infrastructure', value: 'AWS SageMaker' },
      { label: 'Integration', value: 'SAP ERP / Oracle' }
    ]
  },
  {
    id: 2,
    slug: 'enterprise-cloud-migration',
    title: 'Enterprise Cloud Migration',
    category: 'Finance',
    status: 'Completed',
    description: 'Managed complete cloud infrastructure migration for a major financial institution with zero downtime.',
    fullDescription: 'A leading regional bank required a transition from on-premise servers to a secure, scalable cloud environment. We provided the strategic oversight and technical management to ensure a seamless migration.',
    challenge: 'The primary concern was data security and maintaining 100% uptime for banking services during the transition of petabytes of sensitive financial data.',
    solution: 'We implemented a phased migration strategy using a hybrid cloud approach. Our team managed the rigorous security audits and automated failover protocols to ensure zero service interruption.',
    results: [
      'Zero downtime achieved during the entire migration process.',
      '60% reduction in IT infrastructure maintenance costs.',
      'Enhanced security posture meeting all regulatory compliance standards.',
      'Improved system scalability for future digital banking features.'
    ],
    metrics: [
      { label: 'Downtime', value: 'Zero', icon: Clock },
      { label: 'Cost Savings', value: '60%', icon: TrendingUp },
      { label: 'Security', value: 'Enhanced', icon: ShieldCheck }
    ],
    image: 'https://picsum.photos/seed/finance1/1200/800',
    gallery: [
      'https://picsum.photos/seed/finance-g1/800/600',
      'https://picsum.photos/seed/finance-g2/800/600',
      'https://picsum.photos/seed/finance-g3/800/600'
    ]
  },
  {
    id: 3,
    slug: 'precision-agriculture',
    title: 'Precision Agriculture Platform',
    category: 'Agriculture',
    status: 'Active',
    description: 'Developed IoT-based precision farming system increasing crop yield and reducing water usage.',
    fullDescription: 'We managed the development of a comprehensive IoT platform for a large-scale agricultural enterprise, enabling data-driven decisions for crop management.',
    challenge: 'The client needed to reduce resource waste (water and fertilizer) while maximizing yields across 10,000 acres of diverse terrain.',
    solution: 'We oversaw the deployment of thousands of soil sensors and integrated them with satellite imagery and weather data. The platform provides real-time alerts and automated irrigation control.',
    results: [
      '30% increase in average crop yield.',
      '40% reduction in water consumption.',
      'Real-time monitoring of 10,000+ acres.',
      'Significant reduction in fertilizer runoff and environmental impact.'
    ],
    metrics: [
      { label: 'Yield Increase', value: '30%', icon: TrendingUp },
      { label: 'Water Savings', value: '40%', icon: Clock },
      { label: 'Monitored', value: '10K Acres', icon: Users }
    ],
    image: 'https://picsum.photos/seed/agro2/1200/800',
    gallery: [
      'https://picsum.photos/seed/agro-g1/800/600',
      'https://picsum.photos/seed/agro-g2/800/600',
      'https://picsum.photos/seed/agro-g3/800/600'
    ]
  },
  {
    id: 4,
    slug: 'pharma-research',
    title: 'Pharmaceutical Research Platform',
    category: 'Healthcare',
    status: 'Active',
    description: 'Built collaborative research platform accelerating drug discovery through advanced data analytics.',
    fullDescription: 'Management of a high-security research environment for a pharmaceutical consortium, facilitating global collaboration on drug discovery.',
    challenge: 'Researchers across different continents needed a secure way to share and analyze massive genomic datasets while maintaining strict FDA compliance.',
    solution: 'We managed the development of a blockchain-secured data sharing protocol and integrated high-performance computing clusters for rapid genomic analysis.',
    results: [
      '50% reduction in time required for initial drug candidate analysis.',
      'Seamless collaboration for 100+ global researchers.',
      'Full compliance with FDA and international data privacy regulations.',
      'Successful identification of 3 new potential drug targets within the first year.'
    ],
    metrics: [
      { label: 'Faster Analysis', value: '50%', icon: Clock },
      { label: 'Researchers', value: '100+', icon: Users },
      { label: 'Compliance', value: 'FDA', icon: ShieldCheck }
    ],
    image: 'https://picsum.photos/seed/health1/1200/800',
    gallery: [
      'https://picsum.photos/seed/health-g1/800/600',
      'https://picsum.photos/seed/health-g2/800/600',
      'https://picsum.photos/seed/health-g3/800/600'
    ]
  },
  {
    id: 5,
    slug: 'multi-vendor-marketplace',
    title: 'Multi-Vendor Marketplace',
    category: 'Retail',
    status: 'Active',
    description: 'Launched comprehensive e-commerce platform supporting 5000+ vendors with real-time inventory.',
    fullDescription: 'Management of a large-scale digital transformation for a retail conglomerate, creating a unified marketplace for thousands of independent vendors.',
    challenge: 'The client needed to synchronize inventory across 5000+ disparate systems while maintaining sub-second search latency and secure payment processing.',
    solution: 'We oversaw the development of a microservices architecture with a centralized inventory hub and integrated a global payment gateway supporting 20+ currencies.',
    results: [
      'Successful launch with 5000+ active vendors.',
      'Achieved $50M GMV within the first year.',
      '99.9% platform uptime during peak sales events.',
      'Reduced vendor onboarding time from weeks to days.'
    ],
    metrics: [
      { label: 'Vendors', value: '5000+', icon: Users },
      { label: 'GMV', value: '$50M', icon: TrendingUp },
      { label: 'Uptime', value: '99.9%', icon: Clock }
    ],
    image: 'https://picsum.photos/seed/retail1/1200/800',
    gallery: [
      'https://picsum.photos/seed/retail-g1/800/600',
      'https://picsum.photos/seed/retail-g2/800/600'
    ]
  },
  {
    id: 6,
    slug: 'advanced-composite-materials',
    title: 'Advanced Composite Materials',
    category: 'Manufacturing',
    status: 'Research',
    description: 'Coordinated development and testing of next-generation lightweight composite materials for aerospace.',
    fullDescription: 'Strategic oversight of a high-tech materials science project aimed at reducing spacecraft weight through novel composite structures.',
    challenge: 'Developing materials that meet NASA safety standards while achieving a 40% weight reduction over traditional aluminum alloys.',
    solution: 'We managed the R&D lifecycle, coordinating between academic researchers and industrial manufacturers to implement automated quality control systems.',
    results: [
      'Achieved 40% weight reduction in structural components.',
      'Successfully passed initial NASA flight-readiness tests.',
      'Secured 3 international patents for the client.',
      'Established a scalable manufacturing process for the new material.'
    ],
    metrics: [
      { label: 'Weight Reduction', value: '40%', icon: TrendingUp },
      { label: 'Certification', value: 'NASA', icon: ShieldCheck },
      { label: 'Status', value: 'Patent Pending', icon: Clock }
    ],
    image: 'https://picsum.photos/seed/manufacture1/1200/800',
    gallery: [
      'https://picsum.photos/seed/manufacture-g1/800/600',
      'https://picsum.photos/seed/manufacture-g2/800/600'
    ]
  },
  {
    id: 7,
    slug: 'predictive-maintenance-ai',
    title: 'Predictive Maintenance AI',
    category: 'Manufacturing',
    status: 'Active',
    description: 'Deployed ML models for predictive maintenance reducing equipment downtime across 20 facilities.',
    fullDescription: 'Implementation of an AI-driven maintenance strategy for a global manufacturing firm, covering 20 production facilities.',
    challenge: 'Unscheduled equipment failures were costing the client millions in lost production time and emergency repairs.',
    solution: 'We managed the deployment of vibration and thermal sensors across critical machinery and developed an AI model that predicts failures up to 72 hours in advance.',
    results: [
      '70% reduction in unscheduled equipment downtime.',
      'Estimated annual savings of $2M in maintenance costs.',
      '95% accuracy in failure prediction models.',
      'Improved overall equipment effectiveness (OEE) by 15%.'
    ],
    metrics: [
      { label: 'Less Downtime', value: '70%', icon: Clock },
      { label: 'Savings', value: '$2M', icon: TrendingUp },
      { label: 'Accuracy', value: '95%', icon: ShieldCheck }
    ],
    image: 'https://picsum.photos/seed/manufacture2/1200/800',
    gallery: [
      'https://picsum.photos/seed/manufacture-g3/800/600'
    ]
  }
];
