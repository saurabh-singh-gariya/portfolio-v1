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

export type Discipline = {
  label: string;
  blurb: string;
};

export type FreelanceProject = {
  name: string;
  role: string;
  period: string;
  blurb: string;
  highlights: string[];
  stack: string[];
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
      'POS platform for a Fortune 50 retailer, live in **200+ stores** — checkout **~20% faster**.',
      'Node.js BFF folding **15+ microservices** into one façade, RabbitMQ driving live UI updates.',
      'Shared UI package across 5+ screens — **~1,200 duplicate lines** gone, **~30% faster** to build.',
      'AI-assist plugin on NestJS; core library cut new-LLM onboarding **from a week to a day**.',
      'Led **3 engineers** to a chatbot MVP in **2 months** — contract processing **~40% faster**.',
      'Agentic report builder (AutoGen, MCP) answering plain-English questions over PostgreSQL.',
      'Real-time WebSocket services on Kubernetes, Redis state with **leader election** across pods.',
    ],
    stack: ['React', 'NestJS', 'TypeScript', 'Redis', 'RabbitMQ', 'Kafka', 'Kubernetes', 'PostgreSQL'],
  },
  {
    company: 'Amdocs',
    title: 'Software Developer — Front-End',
    location: 'Pune, India',
    period: 'Jul 2022 — Jul 2024',
    highlights: [
      '**20+ reusable React components** in Redux, TypeScript and Material-UI.',
      'Built the shared **CORE-UI library** the wider team developed against.',
      'Jest and React Testing Library suites, lifting coverage **past 85%**.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Material-UI', 'Jest'],
  },
];

export const disciplines: Discipline[] = [
  {
    label: 'Front-End Engineer',
    blurb: 'Component-driven React apps, and the reusable UI libraries other teams build on top of.',
  },
  {
    label: 'Back-End Engineer',
    blurb:
      'Event-driven NestJS microservices, real-time WebSocket services, and the data layer beneath them.',
  },
  {
    label: 'AI Engineer',
    blurb: 'LLM integrations, agentic tooling with AutoGen and MCP, and the APIs that serve them.',
  },
  {
    label: 'Platform',
    blurb: 'Docker and Kubernetes, GitHub Actions pipelines, Grafana observability and load testing.',
  },
];

// DRAFT — inferred from the workspace; confirm dates and ownership before this ships.
// Written to foreground the engineering, not the domain. Keep it that way.
export const freelanceProjects: FreelanceProject[] = [
  {
    name: 'Real-time session platform',
    role: 'Backend engineer',
    period: '2026',
    blurb:
      'Distributed backend driving short-lived, high-frequency interactive sessions for thousands of concurrent users.',
    highlights: [
      '**Ten independent services** on a shared TypeScript core library, with strict **transactional and state-consistency guarantees**.',
      'Redis-backed session state with **leader election across pods**, so exactly one node advances each session.',
      'Kubernetes on DigitalOcean, GitHub Actions CI/CD, Grafana/Loki observability and **k6 load testing**.',
    ],
    stack: ['NestJS', 'TypeScript', 'Redis', 'Kafka', 'Kubernetes', 'PostgreSQL'],
  },
  {
    name: 'Live event streaming engine',
    role: 'Full stack',
    period: '2026',
    blurb:
      'Tick-based real-time engine built from scratch against an existing protocol specification and client bundle.',
    highlights: [
      '**Deterministic, independently verifiable** outcomes from a seeded RNG.',
      '**Sub-second** state fan-out to concurrent clients over Centrifugo WebSockets.',
      '**Idempotent** transaction handling against a third-party ledger API — **at-most-once** on every write.',
    ],
    stack: ['NestJS', 'TypeScript', 'Redis', 'PostgreSQL'],
  },
  {
    name: 'Multi-tenant admin console',
    role: 'Full stack',
    period: '2026',
    blurb:
      'Reporting and administration console for partner organisations and their multi-level account hierarchies.',
    highlights: [
      '**Role-based access control** across three distinct permission tiers.',
      '**Cross-database reporting** that merges several product lines into one consistent set of figures.',
      'Found and remediated a **privilege-escalation flaw** during a security review.',
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
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
