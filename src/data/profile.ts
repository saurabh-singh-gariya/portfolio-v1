export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: 'Saurabh Singh Gariya',
  title: 'Full Stack Engineer',
  location: 'Gurugram, India',
  email: 'sgariya038@gmail.com',
  linkedin: 'https://linkedin.com/in/sgariya',
  resumeUrl: '/Saurabh-Singh-Gariya-Resume.pdf',
  tagline: 'React · Node.js · TypeScript · Microservices',
  summary:
    'Four years designing and shipping scalable web applications — component-driven front-ends and reusable UI libraries on one side, event-driven NestJS microservices on the other. Recently building with LLMs and agentic tooling.',
} as const;

export const roles: Role[] = [
  {
    company: 'HashedIn Technologies',
    title: 'Software Engineer 2 — Full Stack',
    location: 'Gurugram, India',
    period: 'Jul 2024 — Present',
    highlights: [
      'Delivered a next-gen point-of-sale platform for a Fortune 50 US retailer, live across 200+ stores — building the React interfaces store associates use, and shipping end-to-end stories that cut average checkout time ~20%.',
      'Built a Node.js backend-for-frontend consolidating 15+ upstream microservices behind a single façade, with RabbitMQ pub/sub driving real-time updates in the UI.',
      'Extracted tightly-coupled filter, card and list logic into a shared base package now reused across 5+ screens — ~1,200 lines of duplication removed and ~30% off the time to build a new screen.',
      'Built REST APIs on a NestJS microservice powering an AI-assist plugin, and co-designed a reusable core library with a senior architect that cut onboarding a new LLM from a week to a day.',
      'Led a 3-person front-end team to ship a chatbot MVP in 2 months, owning the core components and front-end architecture — cut contract-processing time ~40% and earned Squad of the Quarter.',
      'Built an agentic report builder (Python, AutoGen) where a selector group-chat orchestrates agents that answer natural-language queries with interactive reports, backed by PostgreSQL and an MCP server.',
      'Engineered high-throughput real-time services end to end — NestJS APIs with WebSocket streaming, Redis state with leader election across pods, settlement and state-consistency guarantees, shipped on Kubernetes with GitHub Actions.',
    ],
    stack: ['React', 'NestJS', 'TypeScript', 'Redis', 'RabbitMQ', 'Kafka', 'Kubernetes', 'PostgreSQL'],
  },
  {
    company: 'Amdocs',
    title: 'Software Developer — Front-End',
    location: 'Pune, India',
    period: 'Jul 2022 — Jul 2024',
    highlights: [
      'Developed 20+ reusable React components with Redux, TypeScript, hooks and Material-UI, cutting duplicated UI work across modules.',
      'Designed and delivered the shared CORE-UI components the wider team built on.',
      'Authored test suites with Jest and React Testing Library, lifting coverage past 85%.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Material-UI', 'Jest'],
  },
];

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'SQL'] },
  {
    label: 'Frontend',
    items: ['React', 'Redux', 'React Hooks', 'Material-UI', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  { label: 'Data & Messaging', items: ['PostgreSQL', 'Redis', 'RabbitMQ', 'Kafka'] },
  { label: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Grafana'] },
  { label: 'AI & Tools', items: ['LLM Integration', 'AI Agents (AutoGen)', 'MCP', 'Git', 'Postman'] },
];

export const education = {
  institution: 'Chandigarh University',
  degree: 'Master of Computer Application (MCA)',
  detail: 'CGPA 7.5 / 10',
  period: '2022',
  location: 'Punjab, India',
};

export const awards: string[] = [
  'Rising Star Spot Award',
  'Top Impactor',
  'Squad of the Quarter',
  '300+ DSA problems solved · LeetCode peak 1500',
];
