// Section Data Structure Definitions
// This file contains all the TypeScript interfaces for section components

// ============================================================================
// HERO SECTION
// ============================================================================
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    url: string;
    icon?: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
    icon?: string;
  };
  image: {
    src: string;
    alt: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
}

// ============================================================================
// SERVICES SECTION
// ============================================================================
export interface Service {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  bgColor: string;
  capabilities: {
    title: string;
    items: {
      name: string;
      color: string;
    }[];
  }[];
}

export interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
}

// ============================================================================
// TESTIMONIALS SECTION
// ============================================================================
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  palette: {
    primary: string;
    secondary: string;
  };
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

// ============================================================================
// CTA SECTION
// ============================================================================
export interface CTAButton {
  text: string;
  url: string;
  icon: string;
  variant: 'primary' | 'secondary';
}

export interface CTAData {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  trustIndicator?: {
    text: string;
    icon: string;
  };
}

// ============================================================================
// FAQ SECTION
// ============================================================================
export interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
  palette: {
    primary: string;
    secondary: string;
  };
}

// ============================================================================
// BENEFITS SECTION
// ============================================================================
export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface BenefitsData {
  title: string;
  subtitle: string;
  benefits: BenefitItem[];
  palette: {
    primary: string;
    secondary: string;
  };
}

// ============================================================================
// DIFFERENTIATORS SECTION
// ============================================================================
export interface DifferentiatorItem {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface DifferentiatorsData {
  title: string;
  subtitle: string;
  differentiators: DifferentiatorItem[];
  quote: {
    text: string;
    highlight: string;
    author: string;
    role: string;
  };
}

// ============================================================================
// COMMENT SECTION
// ============================================================================
export interface CommentData {
  text: string;
  symbol: string;
}

// ============================================================================
// PROCESS WORKFLOW SECTION
// ============================================================================
export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  duration: string;
}

export interface ProcessStats {
  metric: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface ProcessWorkflowData {
  title: string;
  subtitle: string;
  processSteps: ProcessStep[];
  stats: ProcessStats[];
}

// ============================================================================
// INDUSTRY SOLUTIONS SECTION
// ============================================================================
export interface IndustrySolution {
  industry: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  solutions: string[];
  benefits: string[];
}

export interface IndustryStats {
  metric: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface IndustrySolutionsData {
  title: string;
  subtitle: string;
  industrySolutions: IndustrySolution[];
  stats: IndustryStats[];
}

// ============================================================================
// CLIENT LOGOS SECTION
// ============================================================================
export interface ClientLogo {
  name: string;
  location: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
    text?: string;
  };
}

export interface ClientLogosData {
  title: string;
  subtitle: string;
  clients: ClientLogo[];
  carousel: {
    autoPlay: boolean;
    interval: number;
    showArrows: boolean;
    showIndicators: boolean;
  };
}

// ============================================================================
// STATS SHOWCASE SECTION
// ============================================================================
export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

export interface StatsShowcaseData {
  title: string;
  subtitle: string;
  stats: StatItem[];
}

// ============================================================================
// TEAM EXPERTISE SECTION
// ============================================================================
export interface TeamMember {
  name: string;
  position: string;
  expertise: string[];
  avatar: string;
  bio: string;
  linkedin: string;
}

export interface TeamExpertiseData {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

// ============================================================================
// TECHNOLOGY STACK SECTION
// ============================================================================
export interface TechnologyItem {
  name: string;
  icon: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface TechnologyStackData {
  title: string;
  subtitle: string;
  technologies: TechnologyItem[];
}

// ============================================================================
// BUSINESS SLIDER SECTION
// ============================================================================
export interface BusinessSolution {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface BusinessSliderData {
  title: string;
  subtitle: string;
  solutions: BusinessSolution[];
}

// ============================================================================
// CLIENT SUCCESS STORIES SECTION
// ============================================================================
export interface SuccessStory {
  client: string;
  result: string;
  summary: string;
}

export interface ClientSuccessStoriesData {
  title: string;
  subtitle: string;
  stories: SuccessStory[];
}

// ============================================================================
// GLOBAL PRESENCE SECTION (Updated)
// ============================================================================
export interface GlobalLocation {
  city: string;
  country: string;
  timezone: string;
  icon: string;
  color: string;
}

export interface GlobalPresenceData {
  title: string;
  subtitle: string;
  locations: GlobalLocation[];
}

// ============================================================================
// CONTACT INFO SECTION (Updated)
// ============================================================================
export interface ContactMethodSimple {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface ContactForm {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
}

export interface ContactInfoData {
  title: string;
  contactMethods: ContactMethodSimple[];
  form: ContactForm;
}

// ============================================================================
// SUPPORT SERVICES SECTION
// ============================================================================
export interface SupportTier {
  name: string;
  description: string;
  responseTime: string;
  availability: string;
  features: string[];
  price: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface SupportService {
  service: string;
  description: string;
  responseTime: string;
  coverage: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface SupportStat {
  metric: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface SupportCommitment {
  title: string;
  description: string;
  commitments: {
    value: string;
    label: string;
  }[];
}

export interface SupportServicesData {
  title: string;
  subtitle: string;
  supportStats: SupportStat[];
  supportTiers: SupportTier[];
  supportServices: SupportService[];
  supportCommitment: SupportCommitment;
}

// ============================================================================
// RESOURCE CENTER SECTION
// ============================================================================
export interface Resource {
  title: string;
  type: string;
  category: string;
  description: string;
  duration: string;
  downloads: number;
  rating: number;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  type: string;
  attendees: number;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface ResourceCategory {
  category: string;
  count: number;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface ResourceStats {
  resources: string;
  downloads: string;
  rating: string;
  learners: string;
}

export interface ResourceCenterData {
  title: string;
  subtitle: string;
  resourceCategories: ResourceCategory[];
  resources: Resource[];
  upcomingEvents: UpcomingEvent[];
  resourceStats: ResourceStats;
}

// ============================================================================
// PARTNERSHIPS SECTION
// ============================================================================
export interface StrategicPartner {
  name: string;
  category: string;
  level: string;
  description: string;
  benefits: string[];
  projects: number;
  years: number;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface PartnershipCategory {
  category: string;
  count: number;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface PartnershipBenefit {
  title: string;
  benefits: string[];
}

export interface PartnershipStats {
  partners: string;
  projects: string;
  years: string;
  satisfaction: string;
}

export interface PartnershipsData {
  title: string;
  subtitle: string;
  partnershipCategories: PartnershipCategory[];
  strategicPartners: StrategicPartner[];
  partnershipBenefits: PartnershipBenefit[];
  partnershipStats: PartnershipStats;
}

// ============================================================================
// SECURITY COMPLIANCE SECTION
// ============================================================================
export interface SecurityMeasure {
  category: string;
  description: string;
  features: string[];
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface ComplianceCertification {
  name: string;
  organization: string;
  status: string;
  validity: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface SecurityStat {
  metric: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface SecurityCommitment {
  title: string;
  description: string;
  commitments: {
    value: string;
    label: string;
  }[];
}

export interface SecurityComplianceData {
  title: string;
  subtitle: string;
  securityStats: SecurityStat[];
  securityMeasures: SecurityMeasure[];
  complianceCertifications: ComplianceCertification[];
  securityCommitment: SecurityCommitment;
}

// ============================================================================
// INNOVATION LAB SECTION
// ============================================================================
export interface InnovationProject {
  title: string;
  description: string;
  status: string;
  progress: number;
  team: string;
  timeline: string;
  technologies: string[];
  impact: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface ResearchArea {
  area: string;
  focus: string;
  publications: number;
  patents: number;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface InnovationStats {
  papers: string;
  patents: string;
  projects: string;
  researchers: string;
}

export interface InnovationLabData {
  title: string;
  subtitle: string;
  innovationProjects: InnovationProject[];
  researchAreas: ResearchArea[];
  innovationStats: InnovationStats;
}

// ============================================================================
// AWARDS RECOGNITION SECTION
// ============================================================================
export interface Award {
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface Certification {
  name: string;
  level: string;
  year: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface RecognitionStats {
  awards: string;
  certifications: string;
  partnerships: string;
  years: string;
}

export interface AwardsRecognitionData {
  title: string;
  subtitle: string;
  awards: Award[];
  certifications: Certification[];
  recognitionStats: RecognitionStats;
}

// ============================================================================
// SERVICE PRICING SECTION
// ============================================================================
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface ServicePricingData {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

// ============================================================================
// HERO SECTION WITHOUT BUTTON
// ============================================================================
export interface HeroWithoutButtonData {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
}

// ============================================================================
// UNIFIED SECTION DATA TYPE
// ============================================================================
export type SectionData = 
  | { type: 'hero'; data: HeroData }
  | { type: 'services'; data: ServicesData }
  | { type: 'testimonials'; data: TestimonialsData }
  | { type: 'cta'; data: CTAData }
  // | { type: 'faq'; data: FAQData }
  | { type: 'benefits'; data: BenefitsData }
  | { type: 'differentiators'; data: DifferentiatorsData }
  | { type: 'comment'; data: CommentData }
  | { type: 'process-workflow'; data: ProcessWorkflowData }
  // | { type: 'industry-solutions'; data: IndustrySolutionsData }
  | { type: 'global-presence'; data: GlobalPresenceData }
  | { type: 'contact-info'; data: ContactInfoData }
  // | { type: 'support-services'; data: SupportServicesData }
  | { type: 'resource-center'; data: ResourceCenterData }
  // | { type: 'partnerships'; data: PartnershipsData }
  // | { type: 'security-compliance'; data: SecurityComplianceData }
  | { type: 'innovation-lab'; data: InnovationLabData }
  | { type: 'awards-recognition'; data: AwardsRecognitionData }
  // | { type: 'service-pricing'; data: ServicePricingData }
  | { type: 'hero_section_without_button'; data: HeroWithoutButtonData }
  | { type: 'client-logos'; data: ClientLogosData }
  | { type: 'stats-showcase'; data: StatsShowcaseData }
  | { type: 'team-expertise'; data: TeamExpertiseData }
  | { type: 'technology-stack'; data: TechnologyStackData }
  | { type: 'business-slider'; data: BusinessSliderData }
  | { type: 'client-success-stories'; data: ClientSuccessStoriesData };

// ============================================================================
// PAGE DATA STRUCTURE
// ============================================================================
export interface PageData {
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
  };
  sections: SectionData[];
}

// ============================================================================
// COMPONENT MAPPING
// ============================================================================
export const COMPONENT_MAP: Record<string, string> = {
  'hero': 'Hero',
  'services': 'Services',
  'testimonials': 'Testimonials',
  'cta': 'CTA',
  'faq': 'FAQ',
  'benefits': 'Benefits',
  'differentiators': 'Differentiators',
  'comment': 'Comment',
  'process-workflow': 'ProcessWorkflow',
  'industry-solutions': 'IndustrySolutions',
  'global-presence': 'GlobalPresence',
  'contact-info': 'ContactInfo',
  'support-services': 'SupportServices',
  'resource-center': 'ResourceCenter',
  'partnerships': 'Partnerships',
  'security-compliance': 'SecurityCompliance',
  'innovation-lab': 'InnovationLab',
  'awards-recognition': 'AwardsRecognition',
  'service-pricing': 'ServicePricing',
  'hero_section_without_button': 'HeroSectionWithoutButton',
  'client-logos': 'ClientLogos',
  'stats-showcase': 'StatsShowcase',
  'team-expertise': 'TeamExpertise',
  'technology-stack': 'TechnologyStack',
  'business-slider': 'BusinessSlider',
  'client-success-stories': 'ClientSuccessStories'
};
