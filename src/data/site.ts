import type { L10n, L10nList } from "@/lib/i18n";

export const site = {
  name: "Isaias Duran",
  initials: "ID",
  email: "isaduran644@gmail.com",
  github: "https://github.com/IsaiasDc2",
  githubHandle: "IsaiasDc2",
  location: {
    es: "Argentina · Remoto",
    en: "Argentina · Remote",
  } satisfies L10n,
  role: {
    es: "Desarrollador Full Stack Junior",
    en: "Junior Full Stack Developer",
  } satisfies L10n,
  available: {
    es: "Disponible para trabajar",
    en: "Open to work",
  } satisfies L10n,
  cv: "/cv.pdf",
  year: "2026",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://isaiasduran.vercel.app",
};

export const copy = {
  nav: {
    projects: { es: "Proyectos", en: "Projects" },
    about: { es: "Sobre mí", en: "About" },
    skills: { es: "Skills", en: "Skills" },
    contact: { es: "Contacto", en: "Contact" },
    cv: { es: "Descargar CV", en: "Download CV" },
    menu: { es: "Abrir menú", en: "Open menu" },
    menuTitle: { es: "Menú", en: "Menu" },
    close: { es: "Cerrar menú", en: "Close menu" },
    theme: { es: "Cambiar tema", en: "Toggle theme" },
    language: { es: "Cambiar idioma", en: "Change language" },
    home: { es: "Ir al inicio", en: "Go home" },
    navLabel: { es: "Navegación principal", en: "Main navigation" },
  },
  hero: {
    availability: { es: "Disponible para trabajar", en: "Open to work" },
    location: { es: "Argentina · Remoto", en: "Argentina · Remote" },
    typed: {
      es: [
        "Desarrollador full stack junior",
        "React, Next.js y TypeScript",
        "APIs, PostgreSQL y Supabase",
        "Interfaces que se entienden solas",
      ],
      en: [
        "Junior full stack developer",
        "React, Next.js and TypeScript",
        "APIs, PostgreSQL and Supabase",
        "Interfaces people understand",
      ],
    } satisfies L10nList,
    lead: {
      es: "Construyo aplicaciones web completas, desde la base de datos hasta la interfaz. Me importa que el flujo funcione, que el código se pueda explicar y que la pantalla no obligue a adivinar.",
      en: "I build complete web applications, from the database to the interface. I care about flows that work, code I can explain, and screens that do not make people guess.",
    },
    support: {
      es: "Busco mi primera oportunidad full stack en un equipo con code reviews, donde pueda aportar desde el primer sprint y aprender de gente con más experiencia.",
      en: "I am looking for my first full stack role on a team with code reviews, where I can contribute from the first sprint and learn from people with more experience.",
    },
    ctaProjects: { es: "Ver proyectos", en: "See projects" },
    ctaContact: { es: "Hablemos", en: "Let's talk" },
    cv: { es: "Descargar CV", en: "Download CV" },
    github: { es: "GitHub", en: "GitHub" },
    email: { es: "Email", en: "Email" },
    stackLabel: { es: "Stack principal", en: "Core stack" },
    stack: "Next.js · TypeScript · PostgreSQL · Supabase",
    shotLabel: {
      es: "HefestoTech · demo pública",
      en: "HefestoTech · live demo",
    },
    shotAlt: {
      es: "Captura de la tienda HefestoTech con el catálogo de productos.",
      en: "Screenshot of the HefestoTech store catalog.",
    },
    shotNote: {
      es: "Proyecto en equipo · Práctica Profesionalizante II",
      en: "Team project · Professional Practice II",
    },
    scroll: { es: "Bajar", en: "Scroll" },
  },
  sections: {
    projects: {
      index: "01",
      title: { es: "Proyectos principales", en: "Featured projects" },
      note: {
        es: "Dos sistemas que llevé de la idea al deploy. Abrí cada caso para ver el problema, las decisiones y los resultados.",
        en: "Two systems I took from idea to deploy. Open each case to see the problem, the decisions and the results.",
      },
    },
    other: {
      index: "02",
      title: { es: "Otros proyectos", en: "More projects" },
      note: {
        es: "Trabajos más chicos, sin relleno. Si no puedo explicar una decisión, no lo publico.",
        en: "Smaller projects, no filler. If I cannot explain a decision, I do not publish it.",
      },
    },
    about: {
      index: "03",
      title: { es: "Sobre mí", en: "About me" },
      note: {
        es: "Quién escribe el código y cómo trabaja.",
        en: "Who writes the code and how they work.",
      },
    },
    skills: {
      index: "04",
      title: { es: "Skills", en: "Skills" },
      note: {
        es: "Sin porcentajes. Lo que está acá lo usé en un proyecto y puedo defenderlo en una entrevista.",
        en: "No percentages. Everything here was used in a project and I can defend it in an interview.",
      },
    },
    education: {
      index: "05",
      title: { es: "Formación y experiencia", en: "Education and experience" },
      note: {
        es: "Lo que estudié y los proyectos donde puse las reglas en práctica.",
        en: "What I studied and the projects where I put the rules into practice.",
      },
    },
    contact: {
      index: "06",
      title: { es: "Hablemos", en: "Let's talk" },
      note: {
        es: "Busco mi primera oportunidad full stack. Si tenés un puesto o una pregunta, escribime.",
        en: "I am looking for my first full stack role. If you have a position or a question, write to me.",
      },
    },
  },
  projects: {
    featured: { es: "Proyecto principal", en: "Featured project" },
    demo: { es: "Demo", en: "Live demo" },
    code: { es: "Código", en: "Code" },
    privateRepo: { es: "Repo privado", en: "Private repo" },
    caseStudy: { es: "Ver caso de estudio", en: "Read case study" },
    openCase: { es: "Abrir caso de estudio", en: "Open case study" },
    close: { es: "Cerrar", en: "Close" },
    noDemo: { es: "Sin demo pública", en: "No public demo" },
    requestDemo: { es: "Pedir demo", en: "Request demo" },
    demoOnInterview: {
      es: "Demo disponible en entrevista",
      en: "Demo available on interview",
    },
    aboutProject: { es: "Sobre el proyecto", en: "About the project" },
    problem: { es: "Problema", en: "Problem" },
    solution: { es: "Solución", en: "Solution" },
    role: { es: "Mi rol", en: "My role" },
    architecture: { es: "Stack y arquitectura", en: "Stack and architecture" },
    challenges: { es: "Desafíos técnicos", en: "Technical challenges" },
    learned: { es: "Qué aprendí", en: "What I learned" },
    results: { es: "Resultados", en: "Results" },
    improvements: { es: "Qué mejoraría", en: "What I would improve" },
    links: { es: "Links", en: "Links" },
    diagram: { es: "Diagrama de arquitectura", en: "Architecture diagram" },
    screenshot: { es: "Captura del proyecto", en: "Project screenshot" },
    team: { es: "Equipo", en: "Team" },
    personal: { es: "Personal", en: "Personal" },
  },
  other: {
    allGithub: { es: "Ver todos en GitHub", en: "See all on GitHub" },
    note: {
      es: "El resto de los repos son prácticas de cursada. Estos dos son los que puedo mostrar sin explicar de más.",
      en: "The rest of the repos are coursework. These two are the ones I can show without over-explaining.",
    },
    demo: { es: "Demo", en: "Demo" },
    code: { es: "Código", en: "Code" },
    staticDemo: {
      es: "Demo estática del frontend",
      en: "Static frontend demo",
    },
  },
  about: {
    p1: {
      es: "Soy Isaias, técnico en informática y desarrollador full stack junior. Empecé con HTML, CSS y JavaScript, seguí con React y Next.js, y hoy me siento cómodo armando una pantalla, una API y el esquema de una base de datos en el mismo proyecto.",
      en: "I am Isaias, an IT technician and junior full stack developer. I started with HTML, CSS and JavaScript, moved on to React and Next.js, and today I am comfortable building a screen, an API and a database schema in the same project.",
    },
    p2: {
      es: "Trabajo con TypeScript estricto, PostgreSQL y tests. En HefestoTech, un equipo de cuatro personas, me encargué del frontend, del checkout y de la interfaz del asistente de IA. Después armé un POS multi-sucursal para practicar lo que más me interesa: reglas de negocio, permisos y datos que no se pueden desincronizar.",
      en: "I work with strict TypeScript, PostgreSQL and tests. At HefestoTech, a team of four, I handled the frontend, the checkout and the AI assistant interface. Then I built a multi-branch POS to practice what interests me most: business rules, permissions and data that cannot fall out of sync.",
    },
    looking: {
      es: "Busco un equipo con code reviews y un producto real. Modalidad remota o híbrida en Argentina.",
      en: "I am looking for a team with code reviews and a real product. Remote or hybrid in Argentina.",
    },
    nowLabel: { es: "Ahora", en: "Now" },
    now: {
      es: "Primera oportunidad full stack. Aprendiendo pruebas E2E y patrones de arquitectura.",
      en: "First full stack role. Learning E2E testing and architecture patterns.",
    },
    locationLabel: { es: "Ubicación", en: "Location" },
    location: { es: "Argentina", en: "Argentina" },
    languagesLabel: { es: "Idiomas", en: "Languages" },
    languages: {
      es: "Español nativo · Inglés técnico",
      en: "Native Spanish · Technical English",
    },
    focusLabel: { es: "Enfoque", en: "Focus" },
    focus: { es: "Full stack · Producto", en: "Full stack · Product" },
    photoAlt: {
      es: "Retrato de Isaias Duran con traje y corbata.",
      en: "Portrait of Isaias Duran in a suit and tie.",
    },
    photoCaption: { es: "Isaias Duran · Argentina", en: "Isaias Duran · Argentina" },
  },
  skills: {
    learningLabel: { es: "Aprendiendo ahora", en: "Learning now" },
    learning: {
      es: "Pruebas E2E con Playwright y patrones de arquitectura.",
      en: "E2E testing with Playwright and architecture patterns.",
    },
    groups: {
      languages: { es: "Lenguajes", en: "Languages" },
      frontend: { es: "Frontend", en: "Frontend" },
      backend: { es: "Backend", en: "Backend" },
      data: { es: "Bases de datos", en: "Databases" },
      integrations: { es: "Integraciones", en: "Integrations" },
      tools: { es: "Herramientas", en: "Tools" },
    },
  },
  education: {
    present: { es: "Actualidad", en: "Present" },
  },
  contact: {
    intro: {
      es: "Estoy buscando mi primera oportunidad como desarrollador full stack. Puedo mostrar los proyectos, explicar las decisiones y sumarme a un equipo con code reviews.",
      en: "I am looking for my first full stack developer role. I can show the projects, explain the decisions and join a team with code reviews.",
    },
    emailLabel: { es: "Email", en: "Email" },
    githubLabel: { es: "GitHub", en: "GitHub" },
    locationLabel: { es: "Ubicación", en: "Location" },
    location: { es: "Argentina · Remoto", en: "Argentina · Remote" },
    availabilityLabel: { es: "Disponibilidad", en: "Availability" },
    availability: { es: "Full time · Remoto o híbrido", en: "Full time · Remote or hybrid" },
    response: {
      es: "Te respondo por email. No publico teléfono ni dirección.",
      en: "I reply by email. I do not publish my phone number or address.",
    },
    formTitle: { es: "Mandame un mensaje", en: "Send me a message" },
    formNote: {
      es: "El formulario abre tu cliente de correo con el mensaje listo. No se envía nada desde esta página.",
      en: "The form opens your email client with the message ready. Nothing is sent from this page.",
    },
    name: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    email: { es: "Email", en: "Email" },
    emailPlaceholder: { es: "tu@email.com", en: "you@email.com" },
    message: { es: "Mensaje", en: "Message" },
    messagePlaceholder: {
      es: "Contame qué puesto tenés en mente o qué querés saber.",
      en: "Tell me what role you have in mind or what you want to know.",
    },
    submit: { es: "Abrir email", en: "Open email" },
    copy: { es: "Copiar email", en: "Copy email" },
    copied: { es: "Copiado", en: "Copied" },
    successTitle: { es: "Mensaje listo", en: "Message ready" },
    success: {
      es: "Tu cliente de correo debería estar abierto. Si no pasó, copiá el email o escribime directo.",
      en: "Your email client should be open. If nothing happened, copy the address or email me directly.",
    },
    errors: {
      name: { es: "Escribí tu nombre.", en: "Enter your name." },
      emailRequired: { es: "Escribí tu email.", en: "Enter your email." },
      emailInvalid: { es: "Ese email no parece válido.", en: "That email does not look valid." },
      message: {
        es: "Contame un poco más (mínimo 20 caracteres).",
        en: "Tell me a bit more (at least 20 characters).",
      },
    },
    honeypot: { es: "No completar", en: "Do not fill" },
    again: { es: "Escribir otro mensaje", en: "Write another message" },
    direct: { es: "O escribime directo", en: "Or email me directly" },
  },
  footer: {
    tagline: {
      es: "Desarrollador full stack junior. Construyo, pruebo y explico lo que hago.",
      en: "Junior full stack developer. I build, test and explain what I do.",
    },
    built: {
      es: "Hecho con Next.js, TypeScript y Tailwind CSS.",
      en: "Built with Next.js, TypeScript and Tailwind CSS.",
    },
    backToTop: { es: "Volver arriba", en: "Back to top" },
    rights: { es: "Todos los derechos reservados", en: "All rights reserved" },
  },
  notFound: {
    title: { es: "Página no encontrada", en: "Page not found" },
    heading: { es: "Esta página no existe.", en: "This page does not exist." },
    copy: {
      es: "Puede que el link esté roto o que la página haya cambiado de lugar.",
      en: "The link may be broken or the page may have moved.",
    },
    cta: { es: "Volver al inicio", en: "Back home" },
  },
} as const;
