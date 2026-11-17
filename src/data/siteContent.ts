import { findLocalizedRoute } from '../i18n/routeMap';

export type Locale = 'en' | 'pt';

export type NavItem = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  tags: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
};

export type Certification = {
  label: string;
  icon: 'cloud' | 'code' | 'pipeline' | 'cube';
};

export type ContactLink = {
  label: string;
  href: string;
  icon: 'email' | 'linkedin';
};

export const profileMetrics = {
  yearsExperience: 8,
  certifications: 4,
  projectsDelivered: 20
} as const;

export const siteContent = {
  en: {
    name: 'Luis Maciel',
    title: 'Technical Lead | Senior Software Engineer',
    description:
      'I help engineering teams design, modernize and build reliable software systems. I also mentor software engineers who want to grow into stronger technical leaders.',
    nav: [
      { label: 'About', href: '/about/' },
      { label: 'Work', href: '/work/' },
      { label: 'Writing', href: '/writing/' },
      { label: 'Services', href: '/services/' }
    ] as NavItem[],
    contactCta: { label: 'Get in touch', href: '/contact/' },
    hero: {
      eyebrow: 'Software Engineering & Technical Leadership',
      title: 'Creating solutions.',
      subtitle: 'Guiding engineers.',
      primaryCta: 'Explore services',
      secondaryCta: 'See selected work',
      primaryHref: '/services/',
      secondaryHref: '/work/'
    },
    intro:
      'Technical Lead with 8+ years of software engineering experience helping teams design resilient systems, simplify delivery and grow stronger engineering habits.',
    stats: {
      heading: 'Experience and credentials',
      items: [
        { value: profileMetrics.yearsExperience, suffix: '+', label: 'Years of Experience' },
        { value: profileMetrics.certifications, suffix: '×', label: 'Certifications' },
        { value: profileMetrics.projectsDelivered, suffix: '+', label: 'Projects Delivered' },
        { value: '∞', suffix: '', label: 'Problems Solved' }
      ]
    },
    services: {
      positioning:
        'Helping engineering teams design, modernize, and build reliable software systems through independent architectural guidance and practical technical assessments.',
      audience:
        'CTOs, technical founders, engineering managers, startups, scale-ups, and teams modernizing legacy systems.',
      areas: [
        {
          title: 'Software Architecture & System Design',
          description:
            'Architecture reviews, system design, distributed systems, API and integration strategies, trade-off analysis, and Architecture Decision Records (ADRs).'
        },
        {
          title: 'Cloud Engineering & Infrastructure',
          description:
            'Cloud architecture assessments, Infrastructure as Code (IaC) practices, migration planning, and cost, security, and reliability reviews.'
        },
        {
          title: 'Application Modernization',
          description:
            'Legacy system assessments, incremental migration strategies, pragmatic monolith decomposition, and technical debt prioritization.'
        },
        {
          title: 'DevOps & Reliability Engineering',
          description:
            'CI/CD improvements, deployment strategy reviews, observability, resilience practices, operational readiness, and developer experience.'
        },
        {
          title: 'Engineering Advisory',
          description:
            'Technical decision support, engineering process reviews, documentation standards, and technical leadership support.'
        }
      ],
      packages: [
        {
          title: 'Architecture Review',
          scope: 'Independent evaluation of an existing system or proposed architecture.',
          deliverables: ['Risk and bottleneck analysis', 'Trade-off evaluation', 'Prioritized recommendations']
        },
        {
          title: 'Technical Assessment',
          scope: 'Targeted diagnostic of an architecture, cloud/IaC, or delivery challenge.',
          deliverables: ['Current-state diagnostic', 'Actionable improvement roadmap']
        },
        {
          title: 'Engineering Advisory',
          scope: 'Recurring technical guidance for ongoing architecture decisions and initiatives.',
          deliverables: ['Regular architecture and design discussions', 'Technical leadership support']
        }
      ],
      mentoring: {
        positioning:
          'Practical 1:1 mentoring for software engineers focused on technical growth, leadership readiness, and international career transitions.',
        credibility:
          'Grounded in {years}+ years of software engineering and Technical Lead experience across distributed systems, cloud infrastructure, production reliability, internal engineering standards (Engineering Handbook and Tech Radar), and firsthand international relocation.',
        groups: [
          {
            id: 'career',
            title: 'Career Growth Mentoring',
            audience:
              'Individual contributors progressing from junior roles to team-level technical leadership.',
            stages: [
              {
                title: 'Junior → Mid-level',
                description:
                  'Become an autonomous contributor through clean code, maintainable design, automated testing, API and database fundamentals, debugging, and structured delivery habits.'
              },
              {
                title: 'Mid-level → Senior Engineer',
                description:
                  'Develop system design judgment, distributed architecture skills, cloud and IaC practices, production observability, incident triage, and written technical proposals such as ADRs and RFCs.'
              },
              {
                title: 'Senior Engineer → Tech Lead',
                description:
                  'Shift from individual delivery to team-level technical leadership: facilitate design decisions, align with Product Owners and stakeholders, mentor peers, and balance technical quality with delivery.'
              }
            ],
            focusAreas: [],
            deliverables: [
              'Annotated code or architecture reviews',
              'Mock system design or leadership scenarios',
              'Structured 30-60-90 day growth roadmap'
            ],
            disclaimer: ''
          },
          {
            id: 'international',
            title: 'International Engineering Career Mentoring',
            audience:
              'Software engineers pursuing cross-border roles or relocation into international engineering teams.',
            stages: [],
            focusAreas: [
              'Positioning CVs and professional profiles for international recruiters and hiring standards.',
              'Preparing for multi-stage technical and behavioral interview loops in English.',
              'Communicating architectural decisions and trade-offs clearly in cross-cultural, distributed teams.'
            ],
            deliverables: [
              'Line-by-line English CV and profile rewrite',
              'Targeted international job-search and interview readiness checklist'
            ],
            disclaimer:
              'Practical career experience sharing only; this does not constitute legal, tax, visa, or immigration advice.'
          }
        ],
        formats: [
          {
            title: 'Diagnostic Session',
            tier: 'Entry',
            cadence: 'Single 60-minute live session, async pre-review, and written action plan.'
          },
          {
            title: '4-Week Focus Sprint',
            tier: 'Kickoff',
            cadence: 'Four 60-minute weekly sessions, async check-ins, and a 30-day milestone plan.'
          },
          {
            title: 'Bi-Weekly Growth Retainer',
            tier: 'Core Continuity',
            cadence: 'Two 60-minute sessions per month plus async reviews; month-to-month, pause or cancel anytime.'
          },
          {
            title: 'Async Continuity Retainer',
            tier: 'Low-Touch',
            cadence: 'Async code, ADR, or CV reviews plus one 30-minute monthly check-in.'
          }
        ],
        boundaries: [
          'Mentoring is grounded strictly in demonstrated Technical Lead experience; it does not claim Staff or Principal Engineer coaching.',
          'No guarantees of job offers, visa approvals, promotions, or salary outcomes.',
          'No ghostwriting take-home coding tests or live interview assistance.'
        ]
      }
    },
    caseStudies: [
      {
        slug: 'platform-modernization',
        title: 'Platform modernization for a product-driven team',
        summary: 'I helped a product team disentangle a growing monolith, define migration boundaries and create a practical path to better delivery.',
        outcome: 'The team reduced deployment friction and recovered confidence in architecture decisions without forcing a high-risk rewrite.',
        tags: ['Architecture', 'Modernization', 'Delivery']
      },
      {
        slug: 'cloud-foundation',
        title: 'Cloud foundation and delivery maturity',
        summary: 'I supported a growing engineering organization with cloud foundations, CI/CD improvements and a more resilient platform strategy.',
        outcome: 'The platform became easier to operate, easier to reason about and more predictable during production changes.',
        tags: ['Azure', 'DevOps', 'Reliability']
      },
      {
        slug: 'technical-leadership',
        title: 'Technical leadership for a distributed engineering team',
        summary: 'I partnered with engineering leaders to clarify design decisions, improve team practices and support delivery through complexity.',
        outcome: 'The team moved faster with clearer ownership, fewer avoidable bottlenecks and a healthier decision-making rhythm.',
        tags: ['Leadership', 'Systems', 'Coaching']
      }
    ] as CaseStudy[],
    articles: [
      {
        slug: 'architecture-decisions-that-scale',
        title: 'Architecture decisions that scale with the team',
        excerpt: 'Good architecture is not just about the diagram. It is about making trade-offs explicit and keeping the system understandable as teams grow.',
        readTime: '6 min read',
        category: 'Architecture'
      },
      {
        slug: 'modernizing-legacy-systems-without-the-chaos',
        title: 'Modernizing legacy systems without the chaos',
        excerpt: 'A stepwise modernization strategy helps teams ship value while reducing delivery risk and technical debt at the same time.',
        readTime: '7 min read',
        category: 'Engineering'
      },
      {
        slug: 'what-technical-leadership-really-looks-like',
        title: 'What technical leadership really looks like',
        excerpt: 'Leadership in engineering is not only about writing the right code. It is about making the right decisions visible and sustainable.',
        readTime: '5 min read',
        category: 'Leadership'
      }
    ] as Article[],
    certifications: [
      { label: 'Microsoft Azure Fundamentals (AZ-900)', icon: 'cloud' },
      { label: 'Microsoft Azure Developer Associate (AZ-204)', icon: 'code' },
      { label: 'Microsoft DevOps Engineer Expert (AZ-400)', icon: 'pipeline' },
      { label: 'HashiCorp Certified: Terraform Associate (003)', icon: 'cube' }
    ] as Certification[],
    contactLinks: [
      { label: 'Email', href: 'mailto:otavioazevedo7@gmail.com', icon: 'email' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisotavioazevedomaciel/', icon: 'linkedin' }
    ] as ContactLink[]
  },
  pt: {
    name: 'Luis Maciel',
    title: 'Lider Técnico | Engenheiro de Software Senior',
    description:
      'Ajudo times de engenharia a desenhar, modernizar e construir sistemas confiáveis. Também mentoro engenheiros que querem crescer em liderança técnica.',
    nav: [
      { label: 'Sobre', href: '/pt/sobre/' },
      { label: 'Projetos', href: '/pt/projetos/' },
      { label: 'Artigos', href: '/pt/artigos/' },
      { label: 'Serviços', href: '/pt/servicos/' }
    ] as NavItem[],
    contactCta: { label: 'Entre em contato', href: '/pt/contato/' },
    hero: {
      eyebrow: 'Engenharia de Software & Liderança Técnica',
      title: 'Criando soluções.',
      subtitle: 'Guiando engenheiros.',
      primaryCta: 'Explorar serviços',
      secondaryCta: 'Ver projetos selecionados',
      primaryHref: '/pt/servicos/',
      secondaryHref: '/pt/projetos/'
    },
    intro:
      'Technical Lead com mais de 8 anos de experiência em engenharia de software, ajudando times a criar sistemas resilientes, simplificar entrega e desenvolver melhores hábitos de engenharia.',
    stats: {
      heading: 'Experiência e credenciais',
      items: [
        { value: profileMetrics.yearsExperience, suffix: '+', label: 'Anos de Experiência' },
        { value: profileMetrics.certifications, suffix: '×', label: 'Certificações' },
        { value: profileMetrics.projectsDelivered, suffix: '+', label: 'Projetos Entregues' },
        { value: '∞', suffix: '', label: 'Problemas Resolvidos' }
      ]
    },
    services: {
      positioning:
        'Apoio equipes de engenharia a projetar, modernizar e construir sistemas de software confiáveis por meio de orientação arquitetural independente e avaliações técnicas práticas.',
      audience:
        'CTOs, fundadores técnicos, gestores de engenharia, startups, scale-ups e equipes modernizando sistemas legados.',
      areas: [
        {
          title: 'Arquitetura de Software e Design de Sistemas',
          description:
            'Revisões de arquitetura, design de sistemas, sistemas distribuídos, estratégias de APIs e integrações, análise de trade-offs e registros de decisão arquitetural (ADRs).'
        },
        {
          title: 'Engenharia em Cloud e Infraestrutura',
          description:
            'Avaliações de arquitetura em cloud, práticas de Infraestrutura como Código (IaC), planejamento de migração e revisões de custos, segurança e confiabilidade.'
        },
        {
          title: 'Modernização de Aplicações',
          description:
            'Avaliações de sistemas legados, estratégias de migração incremental, decomposição pragmática de monólitos e priorização de dívida técnica.'
        },
        {
          title: 'DevOps e Engenharia de Confiabilidade',
          description:
            'Melhorias em CI/CD, revisão de estratégias de deploy, observabilidade, práticas de resiliência, prontidão operacional e experiência de desenvolvimento.'
        },
        {
          title: 'Assessoria em Engenharia',
          description:
            'Apoio a decisões técnicas, revisão de processos de engenharia, padrões de documentação e suporte à liderança técnica.'
        }
      ],
      packages: [
        {
          title: 'Revisão de Arquitetura',
          scope: 'Avaliação independente de um sistema existente ou de uma arquitetura proposta.',
          deliverables: ['Análise de riscos e gargalos', 'Avaliação de trade-offs', 'Recomendações priorizadas']
        },
        {
          title: 'Avaliação Técnica',
          scope: 'Diagnóstico direcionado de um desafio de arquitetura, cloud/IaC ou fluxo de entrega.',
          deliverables: ['Diagnóstico do estado atual', 'Roteiro prático de melhorias']
        },
        {
          title: 'Assessoria em Engenharia',
          scope: 'Orientação técnica recorrente para decisões e iniciativas arquiteturais em andamento.',
          deliverables: ['Conversas regulares sobre arquitetura e design', 'Suporte à liderança técnica']
        }
      ],
      mentoring: {
        positioning:
          'Mentoria prática 1:1 para profissionais de engenharia de software com foco em crescimento técnico, preparação para liderança e transições internacionais de carreira.',
        credibility:
          'Fundamentada em {years}+ anos de experiência em engenharia de software e como Technical Lead em sistemas distribuídos, infraestrutura cloud, confiabilidade em produção, padrões internos de engenharia (Engineering Handbook e Tech Radar) e experiência própria de mudança internacional.',
        groups: [
          {
            id: 'career',
            title: 'Mentoria para crescimento na carreira',
            audience:
              'Profissionais individuais que avançam de posições júnior para responsabilidades de liderança técnica no time.',
            stages: [
              {
                title: 'Júnior → Pleno',
                description:
                  'Torne-se uma pessoa contribuidora autônoma com código limpo, design sustentável, testes automatizados, fundamentos de APIs e bancos de dados, debugging e hábitos estruturados de entrega.'
              },
              {
                title: 'Pleno → Engenheiro(a) Sênior',
                description:
                  'Desenvolva julgamento em design de sistemas, arquitetura distribuída, práticas de cloud e IaC, observabilidade em produção, triagem de incidentes e propostas técnicas escritas, como ADRs e RFCs.'
              },
              {
                title: 'Engenheiro(a) Sênior → Tech Lead',
                description:
                  'Faça a transição da entrega individual para a liderança técnica do time: facilite decisões de design, alinhe-se com Product Owners e stakeholders, mentore colegas e equilibre qualidade técnica com entrega.'
              }
            ],
            focusAreas: [],
            deliverables: [
              'Revisões comentadas de código ou arquitetura',
              'Simulações de design de sistemas ou cenários de liderança',
              'Plano estruturado de crescimento para 30-60-90 dias'
            ],
            disclaimer: ''
          },
          {
            id: 'international',
            title: 'Mentoria para carreira internacional em engenharia',
            audience:
              'Profissionais de engenharia de software que buscam posições em outros países ou uma transição para equipes internacionais.',
            stages: [],
            focusAreas: [
              'Posicionamento de currículos e perfis profissionais para recrutadores internacionais e padrões de contratação globais.',
              'Preparação para processos seletivos técnicos e comportamentais em várias etapas, em inglês.',
              'Comunicação clara de decisões arquiteturais e trade-offs em equipes distribuídas e multiculturais.'
            ],
            deliverables: [
              'Revisão linha a linha de currículo e perfil em inglês',
              'Checklist direcionado de busca de vagas internacionais e preparação para entrevistas'
            ],
            disclaimer:
              'Compartilhamento prático de experiência de carreira; não constitui orientação jurídica, tributária, de visto ou imigração.'
          }
        ],
        formats: [
          {
            title: 'Sessão de Diagnóstico',
            tier: 'Entrada',
            cadence: 'Uma sessão ao vivo de 60 minutos, pré-análise assíncrona e plano de ação por escrito.'
          },
          {
            title: 'Sprint de Foco de 4 Semanas',
            tier: 'Início',
            cadence: 'Quatro sessões semanais de 60 minutos, acompanhamentos assíncronos e plano de marcos para 30 dias.'
          },
          {
            title: 'Acompanhamento de Crescimento Quinzenal',
            tier: 'Continuidade principal',
            cadence: 'Duas sessões de 60 minutos por mês e revisões assíncronas; mensal, com opção de pausar ou cancelar a qualquer momento.'
          },
          {
            title: 'Acompanhamento Assíncrono',
            tier: 'Baixa frequência',
            cadence: 'Revisões assíncronas de código, ADRs ou currículo e uma conversa mensal de 30 minutos.'
          }
        ],
        boundaries: [
          'A mentoria se limita à experiência demonstrada como Technical Lead; não oferece coaching baseado em cargos de Staff ou Principal Engineer.',
          'Não há garantias de ofertas de emprego, aprovação de vistos, promoções ou resultados salariais.',
          'Não inclui escrever testes técnicos para candidatos nem assistência durante entrevistas ao vivo.'
        ]
      }
    },
    caseStudies: [
      {
        slug: 'modernizacao-de-plataforma',
        title: 'Modernização de plataforma para uma equipe orientada a produto',
        summary: 'Ajudei a remover complexidade de um monólito em crescimento, definir fronteiras de migração e criar um caminho prático para melhor entrega.',
        outcome: 'A equipe reduziu atrito de deploy e recuperou confiança na arquitetura sem forçar uma reescrita de alto risco.',
        tags: ['Arquitetura', 'Modernização', 'Entrega']
      },
      {
        slug: 'fundacao-cloud',
        title: 'Fundação cloud e maturidade de delivery',
        summary: 'Apoiei uma organização em crescimento com fundamentos em cloud, melhorias de CI/CD e uma estratégia mais resiliente de plataforma.',
        outcome: 'A plataforma ficou mais fácil de operar, mais previsível em produção e mais simples de raciocinar.',
        tags: ['Azure', 'DevOps', 'Confiabilidade']
      },
      {
        slug: 'lideranca-tecnica',
        title: 'Liderança técnica para uma equipe distribuída',
        summary: 'Colaborei com líderes de engenharia para clarificar decisões de design, melhorar práticas de time e sustentar entrega em cenários complexos.',
        outcome: 'A equipe ganhou velocidade com uma maior clareza de ownership, menos gargalos evitáveis e decisões mais saudáveis.',
        tags: ['Liderança', 'Sistemas', 'Mentoria']
      }
    ] as CaseStudy[],
    articles: [
      {
        slug: 'decisoes-de-arquitetura-que-escalam',
        title: 'Decisões de arquitetura que escalam com o time',
        excerpt: 'Boa arquitetura não é apenas o diagrama; é tornar trade-offs explícitos e manter o sistema compreensível conforme o time cresce.',
        readTime: '6 min de leitura',
        category: 'Arquitetura'
      },
      {
        slug: 'modernizando-sistemas-legados-sem-caos',
        title: 'Modernizando sistemas legados sem caos',
        excerpt: 'Uma estratégia de modernização em etapas ajuda as equipes a entregar valor enquanto reduzem risco e dívida técnica.',
        readTime: '7 min de leitura',
        category: 'Engenharia'
      },
      {
        slug: 'o-que-lideranca-tecnica-realmente-e',
        title: 'O que liderança técnica realmente é',
        excerpt: 'Liderança em engenharia não é apenas escrever o código certo. É tornar as decisões certas visíveis e sustentáveis.',
        readTime: '5 min de leitura',
        category: 'Liderança'
      }
    ] as Article[],
    certifications: [
      { label: 'Microsoft Azure Fundamentals (AZ-900)', icon: 'cloud' },
      { label: 'Microsoft Azure Developer Associate (AZ-204)', icon: 'code' },
      { label: 'Microsoft DevOps Engineer Expert (AZ-400)', icon: 'pipeline' },
      { label: 'HashiCorp Certified: Terraform Associate (003)', icon: 'cube' }
    ] as Certification[],
    contactLinks: [
      { label: 'Email', href: 'mailto:otavioazevedo7@gmail.com', icon: 'email' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisotavioazevedomaciel/', icon: 'linkedin' }
    ] as ContactLink[]
  }
} as const;

export function routeForLocale(path: string, targetLocale: Locale): string {
  const normalized = `/${path.split('/').filter(Boolean).join('/')}`;
  const localizedRoute = findLocalizedRoute(path, targetLocale);
  if (localizedRoute) return localizedRoute;

  const englishPrefix = '/work/';
  const portuguesePrefix = '/pt/projetos/';
  const englishArticlePrefix = '/writing/';
  const portugueseArticlePrefix = '/pt/artigos/';

  const matchDynamicRoute = (
    prefix: string,
    entries: readonly { slug: string }[],
    translatedPrefix: string,
    translatedEntries: readonly { slug: string }[],
  ): string | undefined => {
    if (!normalized.startsWith(prefix)) return undefined;
    const slug = normalized.slice(prefix.length);
    const index = entries.findIndex((entry) => entry.slug === slug);
    return index < 0 || !translatedEntries[index]
      ? undefined
      : `${translatedPrefix}${translatedEntries[index].slug}/`;
  };

  const translated =
    targetLocale === 'pt'
      ? matchDynamicRoute(englishPrefix, siteContent.en.caseStudies, portuguesePrefix, siteContent.pt.caseStudies) ??
      matchDynamicRoute(englishArticlePrefix, siteContent.en.articles, portugueseArticlePrefix, siteContent.pt.articles)
      : matchDynamicRoute(portuguesePrefix, siteContent.pt.caseStudies, englishPrefix, siteContent.en.caseStudies) ??
      matchDynamicRoute(portugueseArticlePrefix, siteContent.pt.articles, englishArticlePrefix, siteContent.en.articles);

  return translated ?? (targetLocale === 'pt' ? '/pt/' : '/');
}
