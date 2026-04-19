const fs = require('fs');
const path = require('path');

// Module configs
const modules = [
  {
    dir: 'AI', key: 'ai', exportName: 'AIPage',
    heroIcons: ['Brain', 'Zap', 'TrendingUp', 'Award'],
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['predictive', 'automation', 'nlp', 'vision', 'recommendation', 'reports'],
    featureIcons: ['TrendingUp', 'Zap', 'MessageSquare', 'Eye', 'Sparkles', 'FileText'],
    screenshotKeys: ['dashboard', 'insights', 'automation'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['efficiency', 'accuracy', 'cost', 'speed'],
    benefitIcons: ['Clock', 'Award', 'TrendingDown', 'Zap'],
    keywords: 'AI platform, artificial intelligence, business automation, predictive analytics, ML platform, Indonesia AI software, machine learning, AI bisnis, otomatisasi AI',
    statsKeys: ['users', 'uptime', 'automation', 'accuracy'],
    heroBoostKey: 'automationBoost',
    heroBoostStat: '+70%',
    statBigNumbers: ['5,000+', '99.9%', '24/7'],
  },
  {
    dir: 'BookingEngine', key: 'bookingEngine', exportName: 'BookingEnginePage',
    heroIcons: ['Calendar', 'Clock', 'CheckCircle', 'Users'],
    heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['online', 'calendar', 'resources', 'payments', 'notifications', 'analytics'],
    featureIcons: ['Globe', 'Calendar', 'Layers', 'CreditCard', 'Bell', 'BarChart'],
    screenshotKeys: ['dashboard', 'calendar', 'customer'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['efficiency', 'revenue', 'satisfaction', 'noshow'],
    benefitIcons: ['Clock', 'TrendingUp', 'Award', 'CheckCircle'],
    keywords: 'Booking Engine, Reservation System, Online Booking, Hotel Booking Software, Appointment Scheduling, Indonesia booking, sistem reservasi, aplikasi booking online',
    statsKeys: ['users', 'uptime', 'bookings', 'satisfaction'],
    heroBoostKey: 'bookingBoost',
    heroBoostStat: '+60%',
    statBigNumbers: ['8,000+', '99.9%', '24/7'],
  },
  {
    dir: 'Customers', key: 'customers', exportName: 'CustomersPage',
    heroIcons: ['Users', 'UserCheck', 'TrendingUp', 'Award'],
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['profiles', 'segmentation', 'history', 'loyalty', 'communication', 'analytics'],
    featureIcons: ['Users', 'Filter', 'Clock', 'Gift', 'MessageSquare', 'BarChart'],
    screenshotKeys: ['dashboard', 'profile', 'analytics'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['retention', 'revenue', 'satisfaction', 'efficiency'],
    benefitIcons: ['Users', 'TrendingUp', 'Award', 'Clock'],
    keywords: 'Customer Management, CRM, Customer Data Platform, Customer Profiles, Loyalty Program, Indonesia CRM, manajemen pelanggan, aplikasi CRM',
    statsKeys: ['users', 'uptime', 'customers', 'retention'],
    heroBoostKey: 'retentionBoost',
    heroBoostStat: '+25%',
    statBigNumbers: ['12,000+', '99.9%', '24/7'],
  },
  {
    dir: 'ECF', key: 'ecf', exportName: 'ECFPage',
    heroIcons: ['Coins', 'Users', 'TrendingUp', 'Shield'],
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['projects', 'investors', 'distribution', 'kyc', 'documents', 'transactions'],
    featureIcons: ['Briefcase', 'Users', 'Coins', 'Shield', 'FileText', 'BarChart'],
    screenshotKeys: ['dashboard', 'investor', 'reports'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['transparency', 'compliance', 'speed', 'reach'],
    benefitIcons: ['Eye', 'Shield', 'Zap', 'Globe'],
    keywords: 'Equity Crowdfunding, ECF Platform, Investment Platform, Project Funding, Profit Sharing, Indonesia ECF, crowdfunding, pendanaan proyek',
    statsKeys: ['users', 'uptime', 'funded', 'distributed'],
    heroBoostKey: 'fundingBoost',
    heroBoostStat: '3x',
    statBigNumbers: ['3,000+', '99.9%', '24/7'],
  },
  {
    dir: 'EventTicketing', key: 'eventTicketing', exportName: 'EventTicketingPage',
    heroIcons: ['Ticket', 'QrCode', 'Users', 'CheckCircle'],
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['events', 'checkin', 'attendees', 'payments', 'communications', 'analytics'],
    featureIcons: ['Calendar', 'QrCode', 'Users', 'CreditCard', 'Mail', 'BarChart'],
    screenshotKeys: ['dashboard', 'checkin', 'reports'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['speed', 'revenue', 'satisfaction', 'efficiency'],
    benefitIcons: ['Zap', 'TrendingUp', 'Award', 'Clock'],
    keywords: 'Event Ticketing, QR Code Check-in, Event Management, Ticket Sales, Event Registration, Indonesia event, tiket acara, sistem tiket',
    statsKeys: ['users', 'uptime', 'tickets', 'satisfaction'],
    heroBoostKey: 'checkInBoost',
    heroBoostStat: '5x',
    statBigNumbers: ['6,000+', '99.9%', '24/7'],
  },
  {
    dir: 'Habitat', key: 'habitat', exportName: 'HabitatPage',
    heroIcons: ['Home', 'Users', 'Bell', 'CheckCircle'],
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['members', 'facilities', 'announcements', 'billing', 'visitors', 'reports'],
    featureIcons: ['Users', 'Calendar', 'Bell', 'CreditCard', 'Shield', 'BarChart'],
    screenshotKeys: ['dashboard', 'resident', 'reports'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['collection', 'satisfaction', 'efficiency', 'security'],
    benefitIcons: ['CreditCard', 'Award', 'Clock', 'Shield'],
    keywords: 'Community Management, Apartment Management, Residential Management, Housing Estate, Indonesia community, manajemen komunitas, manajemen perumahan',
    statsKeys: ['users', 'uptime', 'communities', 'satisfaction'],
    heroBoostKey: 'engagementBoost',
    heroBoostStat: '+92%',
    statBigNumbers: ['2,000+', '99.9%', '24/7'],
  },
  {
    dir: 'Helpdesk', key: 'helpdesk', exportName: 'HelpdeskPage',
    heroIcons: ['Headphones', 'MessageSquare', 'Clock', 'Award'],
    heroImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['tickets', 'multichannel', 'sla', 'knowledge', 'collaboration', 'reports'],
    featureIcons: ['Inbox', 'MessageSquare', 'Clock', 'Book', 'Users', 'BarChart'],
    screenshotKeys: ['dashboard', 'inbox', 'analytics'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['speed', 'satisfaction', 'deflection', 'efficiency'],
    benefitIcons: ['Zap', 'Award', 'Inbox', 'Clock'],
    keywords: 'Helpdesk Software, Customer Support, Ticket Management, SLA Management, Knowledge Base, Indonesia helpdesk, aplikasi helpdesk, sistem support',
    statsKeys: ['users', 'uptime', 'tickets', 'satisfaction'],
    heroBoostKey: 'resolutionBoost',
    heroBoostStat: '-60%',
    statBigNumbers: ['7,000+', '99.9%', '24/7'],
  },
  {
    dir: 'Profilex', key: 'profilex', exportName: 'ProfilexPage',
    heroIcons: ['Brain', 'Users', 'BarChart', 'Award'],
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['mbti', 'disc', 'custom', 'grading', 'analytics', 'reports'],
    featureIcons: ['Brain', 'Compass', 'Settings', 'CheckCircle', 'BarChart', 'FileText'],
    screenshotKeys: ['dashboard', 'assessment', 'reports'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['speed', 'accuracy', 'insights', 'cost'],
    benefitIcons: ['Zap', 'Award', 'TrendingUp', 'TrendingDown'],
    keywords: 'Psychological Assessment, MBTI, DISC, HR Assessment, Personality Test, Indonesia HR, asesmen psikologi, tes kepribadian',
    statsKeys: ['users', 'uptime', 'assessments', 'accuracy'],
    heroBoostKey: 'assessmentBoost',
    heroBoostStat: '10x',
    statBigNumbers: ['4,000+', '99.9%', '24/7'],
  },
  {
    dir: 'PropertyManagement', key: 'propertyManagement', exportName: 'PropertyManagementPage',
    heroIcons: ['Building', 'Users', 'CreditCard', 'Wrench'],
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['listings', 'tenants', 'leases', 'maintenance', 'payments', 'reports'],
    featureIcons: ['Building', 'Users', 'FileText', 'Wrench', 'CreditCard', 'BarChart'],
    screenshotKeys: ['dashboard', 'tenant', 'reports'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['collection', 'efficiency', 'occupancy', 'satisfaction'],
    benefitIcons: ['CreditCard', 'Clock', 'Building', 'Award'],
    keywords: 'Property Management System, PMS, Real Estate Software, Landlord Software, Tenant Management, Indonesia property, manajemen properti, software properti',
    statsKeys: ['users', 'uptime', 'units', 'collection'],
    heroBoostKey: 'collectionBoost',
    heroBoostStat: '+98%',
    statBigNumbers: ['3,500+', '99.9%', '24/7'],
  },
  {
    dir: 'SIMKlinik', key: 'simklinik', exportName: 'SIMKlinikPage',
    heroIcons: ['HeartPulse', 'Users', 'FileText', 'Pill'],
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    featureKeys: ['patients', 'appointments', 'records', 'pharmacy', 'billing', 'doctors'],
    featureIcons: ['Users', 'Calendar', 'FileText', 'Pill', 'CreditCard', 'Stethoscope'],
    screenshotKeys: ['dashboard', 'emr', 'reports'],
    screenshotImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    ],
    benefitKeys: ['efficiency', 'accuracy', 'satisfaction', 'revenue'],
    benefitIcons: ['Clock', 'Award', 'Users', 'TrendingUp'],
    keywords: 'Clinic Management System, Hospital Management, EMR, SIMKlinik, Healthcare Software, Indonesia clinic, sistem klinik, SIMRS',
    statsKeys: ['users', 'uptime', 'patients', 'satisfaction'],
    heroBoostKey: 'efficiencyBoost',
    heroBoostStat: '+60%',
    statBigNumbers: ['1,500+', '99.9%', '24/7'],
  },
];

const outputBase = path.join(__dirname, '..', 'src', 'pages', 'modules');

function heroSection(m) {
  return `import {
\tArrowRight,
\t${m.heroIcons.join(',\n\t')},
\tCheckCircle,
\tPlay,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
\tconst { t } = useTranslation();

\treturn (
\t\t<section className="section-hero">
\t\t\t<div className="container-enterprise">
\t\t\t\t<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
\t\t\t\t\t<div className="space-y-8 animate-fade-in-left">
\t\t\t\t\t\t<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
\t\t\t\t\t\t\t<CheckCircle className="h-4 w-4 mr-2" />
\t\t\t\t\t\t\t{t("${m.key}.badge")}
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<h1 className="text-enterprise-primary">{t("${m.key}.title")}</h1>

\t\t\t\t\t\t<p className="text-xl text-enterprise-secondary max-w-2xl">
\t\t\t\t\t\t\t{t("${m.key}.subtitle")}
\t\t\t\t\t\t</p>

\t\t\t\t\t\t<div className="flex flex-col sm:flex-row gap-4">
\t\t\t\t\t\t\t<button className="btn-primary group">
\t\t\t\t\t\t\t\t{t("${m.key}.hero.scheduleDemo")}
\t\t\t\t\t\t\t\t<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t<button className="btn-secondary group">
\t\t\t\t\t\t\t\t<Play className="mr-2 h-5 w-5" />
\t\t\t\t\t\t\t\t{t("${m.key}.hero.watchOverview")}
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
${m.heroIcons.map((icon, i) => `\t\t\t\t\t\t\t<div className="text-center">
\t\t\t\t\t\t\t\t<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
\t\t\t\t\t\t\t\t\t<${icon} className="h-6 w-6 text-blue-600" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div className="text-2xl font-bold text-blue-600">${['10K+', '99.9%', '50%', '95%'][i]}</div>
\t\t\t\t\t\t\t\t<div className="text-sm text-enterprise-muted">
\t\t\t\t\t\t\t\t\t{t("${m.key}.hero.stats.${m.statsKeys[i]}")}
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>`).join('\n')}
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div className="relative animate-fade-in-right">
\t\t\t\t\t\t<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
\t\t\t\t\t\t<img
\t\t\t\t\t\t\tsrc="${m.heroImage}"
\t\t\t\t\t\t\talt={t("${m.key}.hero.imageAlt")}
\t\t\t\t\t\t\tclassName="relative rounded-3xl shadow-enterprise-lg"
\t\t\t\t\t\t/>
\t\t\t\t\t\t<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-enterprise">
\t\t\t\t\t\t\t<div className="flex items-center space-x-4">
\t\t\t\t\t\t\t\t<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
\t\t\t\t\t\t\t\t\t<CheckCircle className="h-6 w-6 text-blue-600" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<div className="font-semibold text-enterprise-primary">
\t\t\t\t\t\t\t\t\t\t{t("${m.key}.hero.${m.heroBoostKey}")}
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div className="text-2xl font-bold text-blue-600">${m.heroBoostStat}</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</section>
\t);
}
`;
}

function featuresSection(m) {
  const featureColors = [
    'from-blue-500 to-blue-600',
    'from-indigo-500 to-indigo-600',
    'from-sky-500 to-sky-600',
    'from-cyan-500 to-cyan-600',
    'from-blue-400 to-indigo-500',
    'from-indigo-400 to-sky-500',
  ];
  return `import {
\tCheckCircle,
\t${[...new Set(m.featureIcons)].join(',\n\t')},
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featureKeys = ${JSON.stringify(m.featureKeys)};
const featureIcons = [${m.featureIcons.join(', ')}];
const featureColors = ${JSON.stringify(featureColors, null, 2).replace(/"/g, '"')};

export default function Features() {
\tconst { t } = useTranslation();

\treturn (
\t\t<section className="section-enterprise bg-white">
\t\t\t<div className="container-enterprise">
\t\t\t\t<div className="text-center mb-16">
\t\t\t\t\t<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
\t\t\t\t\t\t<CheckCircle className="h-4 w-4 mr-2" />
\t\t\t\t\t\t{t("${m.key}.features.badge")}
\t\t\t\t\t</div>
\t\t\t\t\t<h2 className="text-enterprise-primary mb-6">
\t\t\t\t\t\t{t("${m.key}.features.title")}
\t\t\t\t\t</h2>
\t\t\t\t\t<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
\t\t\t\t\t\t{t("${m.key}.features.subtitle")}
\t\t\t\t\t</p>
\t\t\t\t</div>

\t\t\t\t<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
\t\t\t\t\t{featureKeys.map((featureKey, index) => {
\t\t\t\t\t\tconst Icon = featureIcons[index];
\t\t\t\t\t\tconst color = featureColors[index];
\t\t\t\t\t\tconst benefits = t(\`${m.key}.features.\${featureKey}.benefits\`, {
\t\t\t\t\t\t\treturnObjects: true,
\t\t\t\t\t\t});
\t\t\t\t\t\tconst benefitsArray = Array.isArray(benefits) ? benefits : [];

\t\t\t\t\t\treturn (
\t\t\t\t\t\t\t<div key={featureKey} className="card-feature group">
\t\t\t\t\t\t\t\t<div
\t\t\t\t\t\t\t\t\tclassName={\`inline-flex p-4 rounded-2xl bg-gradient-to-r \${color} mb-6 group-hover:scale-110 transition-transform duration-300\`}
\t\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t\t<Icon className="h-8 w-8 text-white" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
\t\t\t\t\t\t\t\t\t{t(\`${m.key}.features.\${featureKey}.title\`)}
\t\t\t\t\t\t\t\t</h3>
\t\t\t\t\t\t\t\t<p className="text-enterprise-secondary leading-relaxed mb-4">
\t\t\t\t\t\t\t\t\t{t(\`${m.key}.features.\${featureKey}.description\`)}
\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t<ul className="space-y-2">
\t\t\t\t\t\t\t\t\t{benefitsArray.map((benefit: string, idx: number) => (
\t\t\t\t\t\t\t\t\t\t<li
\t\t\t\t\t\t\t\t\t\t\tkey={idx}
\t\t\t\t\t\t\t\t\t\t\tclassName="flex items-center text-sm text-enterprise-muted"
\t\t\t\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t\t\t\t<CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
\t\t\t\t\t\t\t\t\t\t\t{benefit}
\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t))}
\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t<div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
\t\t\t\t\t\t\t\t\t{t("common.learnMore")} →
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t);
\t\t\t\t\t})}
\t\t\t\t</div>
\t\t\t</div>
\t\t</section>
\t);
}
`;
}

function screenshotsSection(m) {
  return `import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useTranslation } from "react-i18next";

const screenshotKeys = ${JSON.stringify(m.screenshotKeys)};

export default function Screenshots() {
\tconst { t } = useTranslation();

\tconst screenshots = [
${m.screenshotImages.map(img => `\t\t{ image: "${img}" }`).join(',\n')}
\t];

\treturn (
\t\t<section className="section-enterprise bg-white">
\t\t\t<div className="container-enterprise">
\t\t\t\t<div className="text-center mb-16">
\t\t\t\t\t<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
\t\t\t\t\t\t<Monitor className="h-4 w-4 mr-2" />
\t\t\t\t\t\t{t("${m.key}.screenshots.badge")}
\t\t\t\t\t</div>
\t\t\t\t\t<h2 className="text-enterprise-primary mb-6">
\t\t\t\t\t\t{t("${m.key}.screenshots.title")}
\t\t\t\t\t</h2>
\t\t\t\t\t<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
\t\t\t\t\t\t{t("${m.key}.screenshots.subtitle")}
\t\t\t\t\t</p>
\t\t\t\t</div>

\t\t\t\t<div className="space-y-20">
\t\t\t\t\t{screenshotKeys.map((screenshotKey, index) => {
\t\t\t\t\t\tconst features = t(\`${m.key}.screenshots.\${screenshotKey}.features\`, {
\t\t\t\t\t\t\treturnObjects: true,
\t\t\t\t\t\t});
\t\t\t\t\t\tconst featuresArray = Array.isArray(features) ? features : [];

\t\t\t\t\t\treturn (
\t\t\t\t\t\t\t<div
\t\t\t\t\t\t\t\tkey={index}
\t\t\t\t\t\t\t\tclassName={\`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center \${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}\`}
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t<div className={\`\${index % 2 === 1 ? "lg:col-start-2" : ""}\`}>
\t\t\t\t\t\t\t\t\t<div className="relative">
\t\t\t\t\t\t\t\t\t\t<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-700/10 rounded-3xl transform rotate-2"></div>
\t\t\t\t\t\t\t\t\t\t<img
\t\t\t\t\t\t\t\t\t\t\tsrc={screenshots[index].image}
\t\t\t\t\t\t\t\t\t\t\talt={t(\`${m.key}.screenshots.\${screenshotKey}.title\`)}
\t\t\t\t\t\t\t\t\t\t\tclassName="relative rounded-3xl shadow-enterprise-lg w-full"
\t\t\t\t\t\t\t\t\t\t/>
\t\t\t\t\t\t\t\t\t\t<div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-enterprise">
\t\t\t\t\t\t\t\t\t\t\t<div className="flex space-x-2">
\t\t\t\t\t\t\t\t\t\t\t\t<Monitor className="h-5 w-5 text-blue-600" />
\t\t\t\t\t\t\t\t\t\t\t\t<Tablet className="h-5 w-5 text-indigo-600" />
\t\t\t\t\t\t\t\t\t\t\t\t<Smartphone className="h-5 w-5 text-sky-600" />
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div
\t\t\t\t\t\t\t\t\tclassName={\`\${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-6\`}
\t\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t\t<h3 className="text-3xl font-bold text-enterprise-primary mb-4">
\t\t\t\t\t\t\t\t\t\t\t{t(\`${m.key}.screenshots.\${screenshotKey}.title\`)}
\t\t\t\t\t\t\t\t\t\t</h3>
\t\t\t\t\t\t\t\t\t\t<p className="text-xl text-enterprise-secondary leading-relaxed">
\t\t\t\t\t\t\t\t\t\t\t{t(\`${m.key}.screenshots.\${screenshotKey}.description\`)}
\t\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div className="grid grid-cols-2 gap-4">
\t\t\t\t\t\t\t\t\t\t{featuresArray.map((feature: string, idx: number) => (
\t\t\t\t\t\t\t\t\t\t\t<div key={idx} className="flex items-center space-x-3">
\t\t\t\t\t\t\t\t\t\t\t\t<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
\t\t\t\t\t\t\t\t\t\t\t\t<span className="text-enterprise-muted font-medium">
\t\t\t\t\t\t\t\t\t\t\t\t\t{feature}
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t))}
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<button className="btn-primary">
\t\t\t\t\t\t\t\t\t\t{t("${m.key}.screenshots.exploreFeature")}
\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t);
\t\t\t\t\t})}
\t\t\t\t</div>
\t\t\t</div>
\t\t</section>
\t);
}
`;
}

function benefitsSection(m) {
  const benefitColors = [
    'from-blue-500 to-blue-600',
    'from-indigo-500 to-indigo-600',
    'from-sky-500 to-sky-600',
    'from-cyan-500 to-cyan-600',
  ];
  return `import { Award, ${[...new Set(m.benefitIcons)].filter(i => i !== 'Award').join(', ')} } from "lucide-react";
import { useTranslation } from "react-i18next";

const benefitKeys = ${JSON.stringify(m.benefitKeys)};
const benefitIcons = [${m.benefitIcons.join(', ')}];
const benefitColors = ${JSON.stringify(benefitColors)};

export default function Benefits() {
\tconst { t } = useTranslation();

\treturn (
\t\t<section className="section-enterprise gradient-secondary">
\t\t\t<div className="container-enterprise">
\t\t\t\t<div className="text-center mb-16">
\t\t\t\t\t<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
\t\t\t\t\t\t<Award className="h-4 w-4 mr-2" />
\t\t\t\t\t\t{t("${m.key}.benefits.badge")}
\t\t\t\t\t</div>
\t\t\t\t\t<h2 className="text-enterprise-primary mb-6">
\t\t\t\t\t\t{t("${m.key}.benefits.title")}
\t\t\t\t\t</h2>
\t\t\t\t\t<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
\t\t\t\t\t\t{t("${m.key}.benefits.subtitle")}
\t\t\t\t\t</p>
\t\t\t\t</div>

\t\t\t\t<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
\t\t\t\t\t{benefitKeys.map((benefitKey, index) => {
\t\t\t\t\t\tconst Icon = benefitIcons[index];
\t\t\t\t\t\tconst color = benefitColors[index];
\t\t\t\t\t\treturn (
\t\t\t\t\t\t\t<div key={benefitKey} className="card-enterprise p-8 text-center group">
\t\t\t\t\t\t\t\t<div
\t\t\t\t\t\t\t\t\tclassName={\`inline-flex p-4 rounded-2xl bg-gradient-to-r \${color} mb-6 group-hover:scale-110 transition-transform duration-300\`}
\t\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t\t<Icon className="h-8 w-8 text-white" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div className="text-3xl font-bold text-blue-600 mb-2">
\t\t\t\t\t\t\t\t\t{t(\`${m.key}.benefits.\${benefitKey}.stat\`)}
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<h3 className="text-xl font-bold text-enterprise-primary mb-3">
\t\t\t\t\t\t\t\t\t{t(\`${m.key}.benefits.\${benefitKey}.title\`)}
\t\t\t\t\t\t\t\t</h3>
\t\t\t\t\t\t\t\t<p className="text-enterprise-secondary leading-relaxed">
\t\t\t\t\t\t\t\t\t{t(\`${m.key}.benefits.\${benefitKey}.description\`)}
\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t);
\t\t\t\t\t})}
\t\t\t\t</div>

\t\t\t\t<div className="mt-16 text-center">
\t\t\t\t\t<div className="card-enterprise p-12 max-w-4xl mx-auto">
\t\t\t\t\t\t<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
\t\t\t\t\t\t\t<div className="text-center">
\t\t\t\t\t\t\t\t<div className="text-4xl font-bold text-blue-600 mb-2">${m.statBigNumbers[0]}</div>
\t\t\t\t\t\t\t\t<p className="text-enterprise-muted">
\t\t\t\t\t\t\t\t\t{t("${m.key}.benefits.organizations")}
\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div className="text-center">
\t\t\t\t\t\t\t\t<div className="text-4xl font-bold text-indigo-600 mb-2">${m.statBigNumbers[1]}</div>
\t\t\t\t\t\t\t\t<p className="text-enterprise-muted">
\t\t\t\t\t\t\t\t\t{t("${m.key}.benefits.uptime")}
\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div className="text-center">
\t\t\t\t\t\t\t\t<div className="text-4xl font-bold text-blue-600 mb-2">${m.statBigNumbers[2]}</div>
\t\t\t\t\t\t\t\t<p className="text-enterprise-muted">
\t\t\t\t\t\t\t\t\t{t("${m.key}.benefits.support")}
\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</section>
\t);
}
`;
}

function testimonialsSection(m) {
  return `import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
\tconst { t } = useTranslation();
\tconst testimonials = t("${m.key}.testimonials.items", {
\t\treturnObjects: true,
\t}) as Array<{
\t\tquote: string;
\t\tauthor: string;
\t\tposition: string;
\t\tcompany: string;
\t\trating: number;
\t\timage: string;
\t}>;

\treturn (
\t\t<section className="section-enterprise gradient-secondary">
\t\t\t<div className="container-enterprise">
\t\t\t\t<div className="text-center mb-16">
\t\t\t\t\t<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
\t\t\t\t\t\t<Star className="h-4 w-4 mr-2" />
\t\t\t\t\t\t{t("${m.key}.testimonials.badge")}
\t\t\t\t\t</div>
\t\t\t\t\t<h2 className="text-enterprise-primary mb-6">
\t\t\t\t\t\t{t("${m.key}.testimonials.title")}
\t\t\t\t\t</h2>
\t\t\t\t\t<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
\t\t\t\t\t\t{t("${m.key}.testimonials.subtitle")}
\t\t\t\t\t</p>
\t\t\t\t</div>

\t\t\t\t<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
\t\t\t\t\t{testimonials.map((testimonial, index) => (
\t\t\t\t\t\t<div key={index} className="card-enterprise p-8 relative">
\t\t\t\t\t\t\t<div className="absolute top-6 right-6 text-blue-200">
\t\t\t\t\t\t\t\t<Quote className="h-8 w-8" />
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<div className="flex items-center mb-4">
\t\t\t\t\t\t\t\t{[...Array(testimonial.rating)].map((_, i) => (
\t\t\t\t\t\t\t\t\t<Star
\t\t\t\t\t\t\t\t\t\tkey={i}
\t\t\t\t\t\t\t\t\t\tclassName="h-5 w-5 text-yellow-400 fill-current"
\t\t\t\t\t\t\t\t\t/>
\t\t\t\t\t\t\t\t))}
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<blockquote className="text-enterprise-secondary mb-6 leading-relaxed italic">
\t\t\t\t\t\t\t\t"{testimonial.quote}"
\t\t\t\t\t\t\t</blockquote>

\t\t\t\t\t\t\t<div className="flex items-center space-x-4">
\t\t\t\t\t\t\t\t<img
\t\t\t\t\t\t\t\t\tsrc={testimonial.image}
\t\t\t\t\t\t\t\t\talt={testimonial.author}
\t\t\t\t\t\t\t\t\tclassName="w-12 h-12 rounded-full object-cover"
\t\t\t\t\t\t\t\t/>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<p className="font-bold text-enterprise-primary">
\t\t\t\t\t\t\t\t\t\t{testimonial.author}
\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t<p className="text-sm text-enterprise-muted">
\t\t\t\t\t\t\t\t\t\t{testimonial.position}
\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t<p className="text-sm text-blue-600 font-medium">
\t\t\t\t\t\t\t\t\t\t{testimonial.company}
\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t))}
\t\t\t\t</div>

\t\t\t\t<div className="mt-16 text-center">
\t\t\t\t\t<div className="card-enterprise p-8 max-w-2xl mx-auto">
\t\t\t\t\t\t<h3 className="text-2xl font-bold text-enterprise-primary mb-4">
\t\t\t\t\t\t\t{t("${m.key}.testimonials.joinSuccess.title")}
\t\t\t\t\t\t</h3>
\t\t\t\t\t\t<p className="text-enterprise-secondary mb-6">
\t\t\t\t\t\t\t{t("${m.key}.testimonials.joinSuccess.description")}
\t\t\t\t\t\t</p>
\t\t\t\t\t\t<button className="btn-primary">
\t\t\t\t\t\t\t{t("${m.key}.testimonials.joinSuccess.scheduleDemo")}
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</section>
\t);
}
`;
}

function ctaSection(m) {
  return `import { ArrowRight, Award, CheckCircle, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
\tgetCurrentLocaleFromPath,
\tgetLangPrefix,
\ttrackCTAEvent,
} from "../../../../lib/website";

export default function CTASection() {
\tconst { t } = useTranslation();
\tconst location = useLocation();
\tconst currentLang = getCurrentLocaleFromPath(location.pathname);
\tconst langPrefix = getLangPrefix(currentLang);

\tconst handlePrimaryCTA = () => {
\t\tvoid trackCTAEvent({
\t\t\tctaKey: "${m.key}_cta_schedule_demo",
\t\t\tlocale: currentLang,
\t\t\tmoduleKey: "${m.key}",
\t\t}).catch(() => undefined);
\t};

\tconst handleSecondaryCTA = () => {
\t\tvoid trackCTAEvent({
\t\t\tctaKey: "${m.key}_cta_contact_sales",
\t\t\tlocale: currentLang,
\t\t\tmoduleKey: "${m.key}",
\t\t}).catch(() => undefined);
\t};

\treturn (
\t\t<section className="section-enterprise gradient-dark text-white">
\t\t\t<div className="container-enterprise">
\t\t\t\t<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
\t\t\t\t\t<div>
\t\t\t\t\t\t<div className="inline-flex items-center px-4 py-2 bg-blue-800 text-blue-100 rounded-full text-sm font-semibold mb-6">
\t\t\t\t\t\t\t<CheckCircle className="h-4 w-4 mr-2" />
\t\t\t\t\t\t\t{t("${m.key}.cta.badge")}
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<h2 className="text-white mb-6">{t("${m.key}.cta.title")}</h2>
\t\t\t\t\t\t<p className="text-blue-100 mb-8 text-xl leading-relaxed">
\t\t\t\t\t\t\t{t("${m.key}.cta.subtitle")}
\t\t\t\t\t\t</p>
\t\t\t\t\t\t<div className="flex flex-col sm:flex-row gap-4 mb-8">
\t\t\t\t\t\t\t<Link
\t\t\t\t\t\t\t\tto={\`\${langPrefix}/contact\`}
\t\t\t\t\t\t\t\tonClick={handlePrimaryCTA}
\t\t\t\t\t\t\t\tclassName="btn-cta-light group"
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t{t("${m.key}.cta.scheduleDemo")}
\t\t\t\t\t\t\t\t<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
\t\t\t\t\t\t\t</Link>
\t\t\t\t\t\t\t<Link
\t\t\t\t\t\t\t\tto={\`\${langPrefix}/contact\`}
\t\t\t\t\t\t\t\tonClick={handleSecondaryCTA}
\t\t\t\t\t\t\t\tclassName="btn-cta-outline"
\t\t\t\t\t\t\t>
\t\t\t\t\t\t\t\t{t("${m.key}.cta.contactSales")}
\t\t\t\t\t\t\t</Link>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div className="flex items-center space-x-6 text-blue-100">
\t\t\t\t\t\t\t<div className="flex items-center">
\t\t\t\t\t\t\t\t<CheckCircle className="h-4 w-4 mr-2" />
\t\t\t\t\t\t\t\t<span className="text-sm">{t("${m.key}.cta.features.trial")}</span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div className="flex items-center">
\t\t\t\t\t\t\t\t<CheckCircle className="h-4 w-4 mr-2" />
\t\t\t\t\t\t\t\t<span className="text-sm">{t("${m.key}.cta.features.setup")}</span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div className="flex items-center">
\t\t\t\t\t\t\t\t<CheckCircle className="h-4 w-4 mr-2" />
\t\t\t\t\t\t\t\t<span className="text-sm">
\t\t\t\t\t\t\t\t\t{t("${m.key}.cta.features.support")}
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div className="space-y-6">
\t\t\t\t\t\t<div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
\t\t\t\t\t\t\t<div className="flex items-center space-x-4">
\t\t\t\t\t\t\t\t<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
\t\t\t\t\t\t\t\t\t<Users className="h-6 w-6 text-white" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<div className="text-2xl font-bold text-white">${m.statBigNumbers[0]}</div>
\t\t\t\t\t\t\t\t\t<div className="text-blue-100">
\t\t\t\t\t\t\t\t\t\t{t("${m.key}.cta.stats.users")}
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
\t\t\t\t\t\t\t<div className="flex items-center space-x-4">
\t\t\t\t\t\t\t\t<div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
\t\t\t\t\t\t\t\t\t<Award className="h-6 w-6 text-white" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<div className="text-2xl font-bold text-white">99.9%</div>
\t\t\t\t\t\t\t\t\t<div className="text-blue-100">
\t\t\t\t\t\t\t\t\t\t{t("${m.key}.cta.stats.uptime")}
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
\t\t\t\t\t\t\t<div className="flex items-center space-x-4">
\t\t\t\t\t\t\t\t<div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
\t\t\t\t\t\t\t\t\t<TrendingUp className="h-6 w-6 text-white" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div>
\t\t\t\t\t\t\t\t\t<div className="text-2xl font-bold text-white">${m.heroBoostStat}</div>
\t\t\t\t\t\t\t\t\t<div className="text-blue-100">
\t\t\t\t\t\t\t\t\t\t{t("${m.key}.cta.stats.reduction")}
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</section>
\t);
}
`;
}

function indexFile(m) {
  return `import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";

export default function ${m.exportName}() {
\tconst { t } = useTranslation();

\tuseEffect(() => {
\t\twindow.scrollTo(0, 0);
\t}, []);

\treturn (
\t\t<>
\t\t\t<SEOHead
\t\t\t\ttitle={t("${m.key}.title")}
\t\t\t\tdescription={t("${m.key}.subtitle")}
\t\t\t\tkeywords="${m.keywords}"
\t\t\t\ttype="website"
\t\t\t/>
\t\t\t<StructuredData
\t\t\t\ttype="SoftwareApplication"
\t\t\t\tdata={{
\t\t\t\t\tname: "Omniflow ${m.exportName.replace('Page', '')}",
\t\t\t\t\tdescription: t("${m.key}.subtitle"),
\t\t\t\t\tapplicationCategory: "BusinessApplication",
\t\t\t\t\toperatingSystem: "Web Browser",
\t\t\t\t\toffers: {
\t\t\t\t\t\t"@type": "Offer",
\t\t\t\t\t\tprice: "0",
\t\t\t\t\t\tpriceCurrency: "USD",
\t\t\t\t\t\tdescription: t("${m.key}.cta.features.trial"),
\t\t\t\t\t},
\t\t\t\t\tfeatureList: [
${m.featureKeys.map(fk => `\t\t\t\t\t\tt("${m.key}.features.${fk}.title"),`).join('\n')}
\t\t\t\t\t],
\t\t\t\t}}
\t\t\t/>

\t\t\t<div className="min-h-screen bg-white">
\t\t\t\t<HeroSection />
\t\t\t\t<Features />
\t\t\t\t<Screenshots />
\t\t\t\t<Benefits />
\t\t\t\t<Testimonials />
\t\t\t\t<CTASection />
\t\t\t</div>
\t\t</>
\t);
}
`;
}

for (const m of modules) {
  const moduleDir = path.join(outputBase, m.dir);
  const componentsDir = path.join(moduleDir, 'components');
  if (!fs.existsSync(moduleDir)) fs.mkdirSync(moduleDir, { recursive: true });
  if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

  fs.writeFileSync(path.join(moduleDir, 'index.tsx'), indexFile(m));
  fs.writeFileSync(path.join(componentsDir, 'HeroSection.tsx'), heroSection(m));
  fs.writeFileSync(path.join(componentsDir, 'Features.tsx'), featuresSection(m));
  fs.writeFileSync(path.join(componentsDir, 'Screenshots.tsx'), screenshotsSection(m));
  fs.writeFileSync(path.join(componentsDir, 'Benefits.tsx'), benefitsSection(m));
  fs.writeFileSync(path.join(componentsDir, 'Testimonials.tsx'), testimonialsSection(m));
  fs.writeFileSync(path.join(componentsDir, 'CTASection.tsx'), ctaSection(m));

  console.log('Created:', m.dir);
}

console.log('\nAll modules generated!');
