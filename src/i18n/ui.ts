import type { Locale } from '../data/siteContent';

export const ui = {
  en: {
    contact: {
      title: 'Contact — Luís Maciel',
      description:
        'Get in touch with Luís Maciel for architecture consulting, engineering mentoring, or professional opportunities.',
      eyebrow: 'CONTACT',
      headline: 'Let’s start a conversation.',
      subheadline:
        'Whether you want to discuss consulting, 1:1 mentoring, or a professional opportunity, feel free to reach out with a brief note on your context.',
      emailLabel: 'EMAIL',
      copy: 'Copy',
      copied: 'Copied!',
      copyError: 'Copy failed. Please copy the address manually.',
      sendEmail: 'Send email',
      linkedinLabel: 'LINKEDIN',
      helper:
        'Include a few lines on your goals or timeline — I typically respond within 24–48 business hours.'
    },
    services: {
      title: 'Services — Luís Maciel',
      description:
        'Architecture consulting and practical software engineering mentoring for teams and individual engineers.',
      eyebrow: 'SERVICES',
      headline: 'Practical support for engineering challenges.',
      consultingTrack: 'TRACK 1 · B2B',
      consultingTitle: 'Engineering & Architecture Consulting',
      mentoringTrack: 'TRACK 2 · B2C',
      mentoringTitle: 'Software Engineering Mentoring',
      positioning: 'Positioning',
      audience: 'Who it is for',
      serviceAreas: 'Service areas',
      packages: 'Initial engagement packages',
      scope: 'Scope',
      deliverables: 'Deliverables',
      careerGrowth: 'Group 1 — Career Growth Mentoring',
      international: 'Group 2 — International Engineering Career Mentoring',
      focusAreas: 'Focus areas',
      engagementFormats: 'Engagement formats',
      boundaries: 'Mentoring boundaries',
      disclaimer: 'Scope note',
      consultingCta: 'Get in touch',
      mentoringCta: 'Get in touch'
    }
  },
  pt: {
    contact: {
      title: 'Contato — Luís Maciel',
      description:
        'Entre em contato com Luís Maciel para consultoria em arquitetura, mentoria em engenharia ou oportunidades profissionais.',
      eyebrow: 'CONTATO',
      headline: 'Vamos conversar.',
      subheadline:
        'Seja para conversar sobre consultoria, mentoria 1:1 ou uma oportunidade profissional, entre em contato com um breve resumo do seu contexto.',
      emailLabel: 'E-MAIL',
      copy: 'Copiar',
      copied: 'Copiado!',
      copyError: 'Não foi possível copiar. Copie o endereço manualmente.',
      sendEmail: 'Enviar e-mail',
      linkedinLabel: 'LINKEDIN',
      helper:
        'Compartilhe algumas linhas sobre seus objetivos ou prazos — costumo responder em até 24–48 horas úteis.'
    },
    services: {
      title: 'Serviços — Luís Maciel',
      description:
        'Consultoria em arquitetura e mentoria prática em engenharia de software para equipes e profissionais.',
      eyebrow: 'SERVIÇOS',
      headline: 'Apoio prático para desafios de engenharia.',
      consultingTrack: 'TRILHA 1 · B2B',
      consultingTitle: 'Consultoria em Engenharia e Arquitetura',
      mentoringTrack: 'TRILHA 2 · B2C',
      mentoringTitle: 'Mentoria em Engenharia de Software',
      positioning: 'Posicionamento',
      audience: 'Para quem',
      serviceAreas: 'Áreas de serviço',
      packages: 'Pacotes iniciais de trabalho',
      scope: 'Escopo',
      deliverables: 'Entregáveis',
      careerGrowth: 'Grupo 1 — Mentoria para crescimento na carreira',
      international: 'Grupo 2 — Mentoria para carreira internacional em engenharia',
      focusAreas: 'Áreas de foco',
      engagementFormats: 'Formatos de acompanhamento',
      boundaries: 'Limites da mentoria',
      disclaimer: 'Nota de escopo',
      consultingCta: 'Entrar em contato',
      mentoringCta: 'Entrar em contato'
    }
  }
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}
