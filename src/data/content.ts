import { SystemCapability, CaseStudy, FAQItem, GlobalTimezone } from '../types';

export const SYSTEM_CAPABILITIES: SystemCapability[] = [
  {
    id: 'software-management systems',
    code: 'SYS.01',
    title: 'Software Management Systems',
    tagline: 'Your Enterprise Backbone for day-to-day Operations',
    description: 'Engineered for high-efficiency, low-latency, and zero single-point failures across integrated features.',
    metrics: ['99.999% Fault Tolerance', '< 8ms Gateway Latency', 'Zero Single-Point Failures'],
    techStack: ['Rust / Go / TypeScript', 'gRPC & WebSockets', 'PostgreSQL / TimescaleDB'],
    bestFor: [
      'Business Management Dashboards And Systems of Records',
      'Human Resources & Document Control Systems',
      'Role-Based Access Control With Attribute Permissions',
    ]
  },
  {
    id: 'saas-platforms',
    code: 'SYS.02',
    title: 'SaaS Platforms',
    tagline: 'Multi-Tenant Isolated Architectures',
    description: 'End-to-end commercial software platforms, strictly isolated tenant partitions, and metered subscription billing.',
    metrics: ['Sub-150ms Cold Starts', 'Automated Tenant Isolation', 'SOC 2 Type II Ready'],
    techStack: ['React 19 / Vite', 'Next.js App Engine', 'Redis Cluster', 'Stripe Enterprise / Billing Engines'],
    bestFor: [
      'Multi-tenant SaaS platforms with strict data isolation and encryption',
      'Enterprise-grade subscription billing and metered usage tracking',
      'High-performance web applications with sub-200ms response times'
    ]
  },
  {
    id: 'operational-systems',
    code: 'SYS.03',
    title: 'Operational Systems',
    tagline: 'Logistics, Command, and Dispatch Infrastructure',
    description: 'Real-time internal tooling and coordination systems that bring together fragmented enterprise workflows into a single command view.',
    metrics: ['85% Reduction in Dispatch Latency', 'Real-Time Telemetry', 'Offline-First Sync'],
    techStack: ['WebSockets / SSE', 'GIS Geospatial Indexing', 'CRDTs for Conflict-Free Sync', 'PWA Core'],
    bestFor: [
      'Transportation, logistics, and supply chain command centers',
      'Operational dashboards with real-time telemetry and alerts',
      'International/local coordination systems with offline-first capabilities and conflict-free data sync'
    ]
  },
  {
    id: 'automation',
    code: 'SYS.04',
    title: 'Automation',
    tagline: 'Autonomous Event Triggers & Orchestration',
    description: 'High-throughput algorithmic pipelines that eliminate manual labor, human triage error, and cross-departmental administrative drag.',
    metrics: ['40x Operational Throughput', '99.98% Hand-off Accuracy', 'Zero Manual Data Entry'],
    techStack: ['Temporal.io Orchestration', 'Kafka Event Queues', 'Headless Browser Clusters', 'REST / GraphQL Sync'],
    bestFor: [
      'Repetitive cross-departmental workflows with strict SLA requirements',
      'Time consuming data reconciliation and validation pipelines',
      'Precise reporting and audit trails for compliance and regulatory purposes'
    ]
  },
  {
    id: 'data-systems',
    code: 'SYS.05',
    title: 'Data Systems',
    tagline: 'Analytical algorithms for high-volume operations',
    description: 'Real time data analytics and event-driven pipelines that ensure automated schema evolution for enterprise-scale operations.',
    metrics: ['10M+ Events / Sec Ingestion', '< 50ms Query Times', 'Automated Schema Evolution'],
    techStack: ['Apache Kafka', 'TimescaleDB / PostgreSQL', 'ClickHouse / Druid', 'Python / Rust Data Pipelines'],
    bestFor: [
      'Continuous incremental materialization of executive KPIs',
      'Automated time-series partitioning and compression algorithms',
      'Row-level security enforcement for enterprise compliance'
    ]
  },
  {
    id: 'mobile-apps',
    code: 'SYS.06',
    title: 'Mobile Apps',
    tagline: 'Native & Progressive Web Applications',
    description: 'Cross-platform mobile applications with seamless integration into existing enterprise ecosystems.',
    metrics: ['95% User Retention', 'Sub-200ms Response Times', 'Offline-First Functionality'],
    techStack: ['React Native', 'Flutter', 'PWA Standards', 'GraphQL / REST APIs'],
    bestFor: [
      'Cross-platform mobile applications for iOS and Android',
      'Progressive Web Apps with offline-first capabilities',
      'Mobile applications integrated with enterprise backend systems'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'gooba-mun-sites',
    client: 'GOOBA MUN Sites',
    title: 'GOOBA MUN Sites: Fully Automated Model United Nations SaaS Platform',
    category: 'Operational Systems & SaaS',
    timeframe: '2026',
    metricHighlight: '5 Weeks → 5 Minutes',
    metricComparison: {
      before: '5 weeks of IT configuration and manual committee allocations for each conference',
      after: '5 minutes for full institutional onboarding, dynamic committee allocations, and instant resolution publishing'
    },
    overview: 'High-stakes Model United Nations conferences host hundreds of international student diplomats across dozens of simultaneous parliamentary committees. Prior to GOOBA MUN Sites, Secretariat staff had to spend month working with IT teams to manually configure committee allocations, delegate credentials, and resolution publishing. We built a fully automated SaaS platform that allows conference organizers to onboard hundreds of delegates in minutes, dynamically allocate them to committees, and instantly publish resolutions with real-time voting results.',
    architecturePoints: [
      'isolated conference partitions with granular role-based access control and audit logging',
      'AI-driven conference SEO content generation with meta tags, social media previews, and automated sitemap generation',
      'browser built in website builder with drag-and-drop committee and delegate management, real-time voting, and resolution publishing',
      'integrated custom slugs and vanity URLs for each conference, with automated SSL certificate provisioning'
    ],
    image: '/assets/1.PNG',
    tags: ['Model United Nations', 'SaaS Platform', 'Real-Time Voting', 'Automated Committee Management'],
    featured: true
  },

  {
    id: 'mianu-sm-iii',
    client: 'MIANU-SM III',
    title: 'MIANU-SM III : International Conference Management System',
    category: 'Software Management Systems & Operational Systems',
    timeframe: 'Oct-2025',
    metricHighlight: '160% Increase in Operational Throughput',
    metricComparison: {
      before: 'Participant ticketing and role assignments were handled manually with spreadsheets and email threads, leading to frequent errors and delays.',
      after: 'Automated ticketing, role assignments, and real-time updates reduced errors and increased throughput by 160%, allowing for a smoother conference experience.'
    },
    overview: 'We developed a comprehensive conference management system for MIANU-SM III, an international academic conference. The system automated participant registration, ticketing, and role assignments, significantly improving operational efficiency and reducing errors.',
    architecturePoints: [
      'Automated participant registration and ticketing system with real-time updates and notifications',
      'Real-Time dashboard for conference organizers to monitor participant engagement and session attendance',
      'Financial tools for logistical operations, including automated invoicing and payment tracking',
      'Integrated a full internet archive for all previous and upcoming MIANU-SM conferences, allowing for easy access to past proceedings and materials'
    ],
    image: '/assets/4.jpeg',
    tags: ['Conference Management', 'Automated Ticketing', 'Real-Time Updates', 'Operational Efficiency'],
    featured: true
  },
  {
    id: 'cmdmnu-i',
    client: 'CMDMNU I',
    title: 'CMDMNU I : The First Digital Model United Nations Conference In Egypt',
    category: 'Software Systems, Operational Systems',
    timeframe: 'May-2025',
    metricHighlight: 'The First Fully Digital MUN Conference in Egypt',
    metricComparison: {
      before: 'Excel sheets and manual email threads for committee allocations and resolution publishing, paper-based voting, and no real-time updates for participants',
      after: 'Fully digital conference with automated committee allocations, real-time resolution publishing, and instant voting results for participants'
    },
    overview: 'CMDMNU I was the first fully digital Model United Nations conference in Egypt. We developed a comprehensive software system that automated committee allocations, resolution publishing, nested amendments, and voting processes, providing a seamless experience for participants and organizers.',
    architecturePoints: [
      'Real-time WebSocket voting quorum calculation and resolution publishing across all committee halls',
      'Zero-latency amendment engine with concurrent multi-author merge handling and conflict resolution and nested 2nd degree amendment support',
      'isolated document control system per committee with granular role-based access control and audit logging',
      'extremely light weight so it can run on low-end devices and in low-bandwidth environments with offline-first caching and automatic sync when connectivity is restored'
    ],
    image: '/assets/5.jpeg',
    tags: ['Digital MUN Conference', 'Real-Time Voting', 'Automated Committee Management', 'Nested Amendments'],
    featured: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01',
    num: '01',
    category: 'Architecture & Migration',
    question: 'How do you handle complex operational migrations without system downtime?',
    answer: 'We employ a multi-phase migration strategy that includes: (1) a comprehensive audit of existing systems, (2) the creation of a parallel architecture for testing and validation, (3) incremental data migration with real-time monitoring, and (4) a final cutover with rollback capabilities. This ensures zero downtime and maintains operational continuity.'
  },
  {
    id: 'faq-02',
    num: '02',
    category: 'Engineering Philosophy',
    question: 'What is GOOBA’s architectural philosophy when designing custom software?',
    answer: 'We adhere to a philosophy of “No Bloat, No Disposable Code.” Every line of code we write is a permanent asset, engineered for longevity, maintainability, and scalability. We prioritize sub-100ms latency, zero single-point failures, and strict adherence to best practices in software architecture to ensure that your systems remain robust and adaptable for decades.'
  },
  {
    id: 'faq-03',
    num: '03',
    category: 'Engagement & Discovery',
    question: 'How do we initiate an architecture and discovery phase?',
    answer: 'Every engagement begins with a focused 2-week Technical Architecture Assessment (TAA). Our senior systems architects audit your current codebases, database bottlenecks, operational workflows, and scaling projections. We deliver an exhaustive Blueprint: system topology diagrams, entity relationship models, latency budgets, and an accurate fixed-milestone execution schedule.'
  },
  {
    id: 'faq-04',
    num: '04',
    category: 'IP & Sovereignty',
    question: 'How does GOOBA ensure proprietary IP ownership and data sovereignty?',
    answer: '100% of all code, architecture documentation, infrastructure configurations, and database schemas developed by GOOBA belong exclusively to you from commit one. We do not vendor-lock you into proprietary runtimes; our solutions run on standard open-source clouds (AWS, GCP, Azure, or bare-metal Linux Kubernetes clusters) with turnkey CI/CD automation.'
  },
  {
    id: 'faq-05',
    num: '05',
    category: 'AI & Intelligence',
    question: 'Can GOOBA integrate modern AI pipelines into established enterprise backbones?',
    answer: 'Yes. We specialize in grounded, deterministic AI integration. Rather than treating LLMs as unpredictable black boxes, we build structured agent frameworks that enforce schema validation, private VPC embeddings, vector retrieval with deterministic fallback logic, and strict cryptographic audit logs on every algorithmic decision.'
  },
  {
    id: 'faq-06',
    num: '06',
    category: 'Scale & SLAs',
    question: 'What performance and uptime guarantees do GOOBA software systems provide?',
    answer: 'Our production architectures are designed to meet or exceed 99.99% uptime SLAs with active-active regional failover capabilities. We implement automated anomaly detection, self-healing pod clusters, distributed tracing via OpenTelemetry, and 24/7 level-3 site reliability engineer escalation pathways.'
  },
  {
    id: 'faq-07',
    num: '07',
    category: 'History & Legacy',
    question: 'When did GOOBA start?',
    answer: 'GOOBA was founded in 2024 by Omar Ouf, with a vision to revolutionize software development by focusing on longevity, maintainability, and scalability.'
  }
];

// export const GLOBAL_TIMEZONES: GlobalTimezone[] = [
//   { city: 'London', code: 'LON', timezone: 'Europe/London' },
//   { city: 'Zurich', code: 'ZRH', timezone: 'Europe/Zurich' },
//   { city: 'New York', code: 'NYC', timezone: 'America/New_York' },
//   { city: 'Cairo', code: 'CAI', timezone: 'Africa/Cairo' },
//   { city: 'Tokyo', code: 'TYO', timezone: 'Asia/Tokyo' }
// ];
