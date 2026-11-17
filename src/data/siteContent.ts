export type Locale = 'en' | 'pt';

export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  description: string;
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
    services: [
      {
        title: 'Software Architecture & System Design',
        description: 'Architecture reviews, API and system design guidance, trade-off analysis and ADRs for teams navigating complexity.'
      },
      {
        title: 'Cloud Engineering & Infrastructure',
        description: 'Azure-focused architecture, Terraform practices, migration planning and operational resilience reviews.'
      },
      {
        title: 'Application Modernization',
        description: 'Legacy assessments, incremental migration strategies and technical debt prioritization grounded in business realities.'
      },
      {
        title: 'DevOps & Reliability Engineering',
        description: 'CI/CD improvements, observability strategy, deployment readiness and developer experience enhancements.'
      },
      {
        title: 'Engineering Advisory',
        description: 'Technical decision support for founders, managers and teams who need practical guidance without heavy process overhead.'
      }
    ] as Highlight[],
    packages: [
      {
        title: 'Architecture Review',
        description: 'Review an existing system or proposed architecture, highlight risks and deliver a prioritized recommendation set.'
      },
      {
        title: 'Technical Assessment',
        description: 'Assess a specific engineering challenge across architecture, cloud or delivery workflows and propose an action roadmap.'
      },
      {
        title: 'Engineering Advisory',
        description: 'Ongoing technical guidance for product and engineering leaders who need a trusted technical sounding board.'
      }
    ],
    mentoringStages: [
      {
        title: 'Junior → Mid-level',
        description: 'Building maintenance-friendly software, good testing practices, backend fundamentals and stronger engineering workflows.'
      },
      {
        title: 'Mid-level → Senior',
        description: 'Developing system design judgment, cloud fluency, architecture trade-offs and technical ownership.'
      },
      {
        title: 'Senior → Tech Lead',
        description: 'Preparing for technical leadership through design facilitation, risk communication and team-level engineering practices.'
      }
    ],
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
    services: [
      {
        title: 'Arquitetura de Software e Design de Sistemas',
        description: 'Revisões de arquitetura, orientação em APIs e design de sistemas, análise de trade-offs e ADRs para times que lidam com complexidade.'
      },
      {
        title: 'Engenharia em Cloud e Infraestrutura',
        description: 'Arquitetura em Azure, práticas de Terraform, planejamento de migração e revisões de resiliência operacional.'
      },
      {
        title: 'Modernização de Aplicações',
        description: 'Avaliações de sistemas legados, estratégias de migração incremental e priorização de dívidas técnicas com foco em negócios.'
      },
      {
        title: 'DevOps & Engenharia de Confiabilidade',
        description: 'Melhorias em CI/CD, estratégia de observabilidade, readiness de deploy e experiência de desenvolvimento.'
      },
      {
        title: 'Assessoria em Engenharia',
        description: 'Suporte técnico para fundadores, gestores e times que precisam de orientação prática sem excesso de processo.'
      }
    ] as Highlight[],
    packages: [
      {
        title: 'Revisão de Arquitetura',
        description: 'Avalie um sistema existente ou uma arquitetura proposta, identifique riscos e entregue recomendações priorizadas.'
      },
      {
        title: 'Avaliação Técnica',
        description: 'Avalie um desafio específico de engenharia em arquitetura, cloud ou fluxo de entrega e proponha um roteiro de ações.'
      },
      {
        title: 'Assessoria em Engenharia',
        description: 'Orientação técnica contínua para líderes de produto e engenharia que precisam de um apoio confiável.'
      }
    ],
    mentoringStages: [
      {
        title: 'Júnior → Pleno',
        description: 'Construir software mais sustentável, boas práticas de testes, fundamentos de backend e fluxos de engenharia mais fortes.'
      },
      {
        title: 'Pleno → Senior',
        description: 'Desenvolver julgamento de design de sistema, fluência em cloud, trade-offs arquiteturais e responsabilidade técnica.'
      },
      {
        title: 'Senior → Tech Lead',
        description: 'Preparar a transição para liderança técnica com facilitação de design, comunicação de riscos e práticas de engenharia em time.'
      }
    ],
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
  const englishToPortuguese: Record<string, string> = {
    '/': '/pt/',
    '/about': '/pt/sobre/',
    '/work': '/pt/projetos/',
    '/writing': '/pt/artigos/',
    '/services': '/pt/servicos/',
    '/contact': '/pt/contato/',
  };

  if (targetLocale === 'pt' && englishToPortuguese[normalized]) {
    return englishToPortuguese[normalized];
  }
  if (targetLocale === 'en') {
    const englishRoute = Object.entries(englishToPortuguese).find(
      ([, translated]) => translated.replace(/\/+$/, '') === normalized,
    )?.[0];
    if (englishRoute) return englishRoute === '/' ? '/' : `${englishRoute}/`;
  }

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
