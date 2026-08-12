import {
  SiApachekafka,
  SiAnthropic,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { Bot, Database, Network, Puzzle, Waypoints, type LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';

type IconComponent = ComponentType<{ className?: string }> | LucideIcon;

const byName: Record<string, IconComponent> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: SiOpenjdk,
  SQL: Database,

  React: SiReact,
  Redux: SiRedux,
  'React Hooks': Puzzle,
  'Material-UI': SiMui,
  'Tailwind CSS': SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss,

  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  'Spring Boot': SiSpringboot,
  'REST APIs': Network,
  Microservices: Waypoints,

  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  RabbitMQ: SiRabbitmq,
  Kafka: SiApachekafka,

  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  'GitHub Actions': SiGithubactions,
  Grafana: SiGrafana,

  'LLM Integration': SiAnthropic,
  'AI Agents (AutoGen)': Bot,
  MCP: SiAnthropic,
  Git: SiGit,
  Postman: SiPostman,
  Jest: SiJest,
};

export function iconFor(name: string): IconComponent | null {
  return byName[name] ?? null;
}
