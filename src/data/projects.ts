import hefestotechShot from "@/assets/images/hefestotech-home.webp";
import forjaShot from "@/assets/images/forjagym.webp";
import posDiagram from "@/assets/images/pos-arquitectura.webp";
import tgamxShot from "@/assets/images/tgamx.webp";
import type { FeaturedProject, OtherProject } from "./types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "hefestotech",
    index: "01",
    name: "HefestoTech",
    year: "2026",
    context: {
      es: "Equipo de 4 · Práctica Profesionalizante II",
      en: "Team of 4 · Professional Practice II",
    },
    tagline: {
      es: "Tienda de hardware y gaming con armador de PC, checkout y asistente de IA.",
      en: "Hardware and gaming store with a PC builder, checkout and AI assistant.",
    },
    pitch: {
      es: "E-commerce para Argentina: catálogo con filtros, armador con chequeo de compatibilidad, carrito, checkout con Mercado Pago y panel de administración.",
      en: "E-commerce for Argentina: filterable catalog, compatibility-checked PC builder, cart, Mercado Pago checkout and an admin panel.",
    },
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Zustand",
      "Supabase",
      "FastAPI",
      "Mercado Pago",
      "Gemini",
    ],
    image: {
      src: hefestotechShot,
      kind: "screenshot",
      alt: {
        es: "Captura de la home de HefestoTech con el catálogo de productos y el armador de PC.",
        en: "HefestoTech home screenshot with the product catalog and PC builder.",
      },
    },
    links: [
      {
        kind: "demo",
        label: { es: "Demo", en: "Live demo" },
        href: "https://hefestotech.vercel.app",
      },
      {
        kind: "code",
        label: { es: "Código", en: "Code" },
        href: "https://github.com/IsaiasDc2/hefestotech",
      },
    ],
    caseStudy: {
      problem: {
        es: "Comprar una PC por partes obliga a cruzar compatibilidad, stock y precios que cambian. La tienda tenía que resolver esa duda antes del checkout, no después de la compra.",
        en: "Buying a PC part by part means checking compatibility, stock and changing prices. The store had to answer that question before checkout, not after the purchase.",
      },
      solution: {
        es: [
          "Catálogo con filtros por categoría, precio y disponibilidad.",
          "Armador de PC que valida CPU, motherboard, RAM, GPU, fuente y gabinete.",
          "Carrito, checkout con Mercado Pago y panel de administración para productos y pedidos.",
          "Asistente de IA con Gemini y modo mock, conectado al catálogo y al motor de compatibilidad.",
          "Tema claro/oscuro, traducción ES/EN y modo demo sin credenciales.",
        ],
        en: [
          "Catalog with filters by category, price and availability.",
          "PC builder that validates CPU, motherboard, RAM, GPU, power supply and case.",
          "Cart, Mercado Pago checkout and an admin panel for products and orders.",
          "AI assistant with Gemini and a mock mode, connected to the catalog and the compatibility engine.",
          "Light/dark theme, ES/EN translation and a demo mode without credentials.",
        ],
      },
      role: {
        es: "Equipo de cuatro personas. Me encargué del frontend: catálogo, carrito, cuenta, panel de administración, tema claro/oscuro, traducción ES/EN y la interfaz del asistente de IA. También escribí pruebas con Vitest y mantuve el lint y el build en verde.",
        en: "Team of four. I handled the frontend: catalog, cart, account, admin panel, light/dark theme, ES/EN translation and the AI assistant interface. I also wrote Vitest tests and kept lint and build green.",
      },
      architecture: {
        es: "React 19 y Vite en el frontend. FastAPI para checkout, webhook, comprobantes y asistente. Supabase para Postgres, auth, storage y RLS. Gemini detrás de una interfaz LLMProvider con modo mock. Deploy en GitHub Pages y Render, con GitHub Actions para lint, tests y build.",
        en: "React 19 and Vite on the frontend. FastAPI for checkout, webhook, receipts and the assistant. Supabase for Postgres, auth, storage and RLS. Gemini behind an LLMProvider interface with a mock mode. Deployed on GitHub Pages and Render, with GitHub Actions for lint, tests and build.",
      },
      challenges: [
        {
          title: {
            es: "El motor de compatibilidad en dos lenguajes",
            en: "The compatibility engine in two languages",
          },
          detail: {
            es: "El frontend validaba compatibilidad en TypeScript y el asistente necesitaba las mismas reglas en Python. Porté el motor y armé un fixture de paridad que corre en ambos lados.",
            en: "The frontend validated compatibility in TypeScript and the assistant needed the same rules in Python. I ported the engine and built a parity fixture that runs on both sides.",
          },
          learned: {
            es: "A comparar dos implementaciones con los mismos casos, no a ojo.",
            en: "To compare two implementations with the same cases, not by eye.",
          },
        },
        {
          title: {
            es: "Modo demo sin claves ni backend",
            en: "Demo mode without keys or a backend",
          },
          detail: {
            es: "El cliente de Supabase tenía que funcionar sin credenciales. Separé una implementación en memoria y dejé errores explícitos para las acciones que no existen en demo.",
            en: "The Supabase client had to work without credentials. I separated an in-memory implementation and left explicit errors for actions that do not exist in demo.",
          },
          learned: {
            es: "A diseñar caminos de datos que se pueden sustituir.",
            en: "To design data paths that can be swapped.",
          },
        },
        {
          title: {
            es: "Un webhook que se puede repetir",
            en: "A webhook that can repeat",
          },
          detail: {
            es: "El checkout depende del webhook de Mercado Pago. Validé la firma, hice el flujo idempotente y probé los estados de pago.",
            en: "Checkout depends on the Mercado Pago webhook. I validated the signature, made the flow idempotent and tested payment states.",
          },
          learned: {
            es: "Que un webhook no es un evento de UI: tiene que poder repetirse sin duplicar pedidos.",
            en: "That a webhook is not a UI event: it must be able to repeat without duplicating orders.",
          },
        },
      ],
      results: {
        es: [
          "69 productos y 16 categorías en el catálogo demo.",
          "Pruebas de armador, carrito, dinero, URLs de pago y modo demo con Vitest.",
          "CI con lint, tests, build y pytest en cada push.",
          "Demo pública en Vercel y código abierto en GitHub.",
        ],
        en: [
          "69 products and 16 categories in the demo catalog.",
          "Vitest coverage for the builder, cart, money, payment URLs and demo mode.",
          "CI with lint, tests, build and pytest on every push.",
          "Public demo on Vercel and open source code on GitHub.",
        ],
      },
      improvements: {
        es: [
          "Migrar el frontend a Next.js para tener metadata por producto y mejorar el SEO.",
          "Sumar pruebas E2E del checkout con Playwright.",
          "Separar el panel de administración en rutas con carga diferida.",
        ],
        en: [
          "Migrate the frontend to Next.js for per-product metadata and better SEO.",
          "Add Playwright E2E tests for checkout.",
          "Split the admin panel into lazy-loaded routes.",
        ],
      },
      note: {
        es: "Proyecto en equipo de la Práctica Profesionalizante II. El repositorio y la demo son públicos.",
        en: "Team project from Professional Practice II. The repository and demo are public.",
      },
    },
  },
  {
    id: "pos-multi",
    index: "02",
    name: "POS Multi-Sucursal",
    year: "2026",
    context: {
      es: "Proyecto personal · En desarrollo activo",
      en: "Personal project · Active development",
    },
    tagline: {
      es: "Punto de venta para una mueblería con tres sucursales, caja, stock y facturación.",
      en: "Point of sale for a furniture store with three branches, cash register, stock and invoicing.",
    },
    pitch: {
      es: "Sistema para una mueblería: pedidos, caja, stock por sucursal, entregas, reportes y facturación electrónica, con permisos por rol y RLS en PostgreSQL.",
      en: "System for a furniture store: orders, cash register, stock per branch, deliveries, reports and e-invoicing, with role permissions and PostgreSQL RLS.",
    },
    stack: [
      "Next.js 16",
      "TypeScript",
      "Server Actions",
      "Zod",
      "Drizzle ORM",
      "PostgreSQL",
      "Supabase",
      "Vitest",
      "Playwright",
    ],
    image: {
      src: posDiagram,
      kind: "diagram",
      alt: {
        es: "Diagrama de arquitectura del POS: cliente, Server Actions, servicios, repositorios, PostgreSQL con RLS y servicios externos.",
        en: "POS architecture diagram: client, Server Actions, services, repositories, PostgreSQL with RLS and external services.",
      },
    },
    links: [
      {
        kind: "email",
        label: { es: "Pedir demo", en: "Request demo" },
        href: "mailto:isaduran644@gmail.com?subject=Demo%20POS%20Multi-Sucursal",
      },
      {
        kind: "private",
        label: { es: "Repo privado", en: "Private repo" },
      },
    ],
    caseStudy: {
      problem: {
        es: "Una mueblería no vende un producto suelto: vende un pedido con seña, saldo, entrega y a veces financiación. Si tres sucursales comparten stock y precios, la caja no puede confiar en una planilla.",
        en: "A furniture store does not sell a single product: it sells an order with a deposit, balance, delivery and sometimes financing. If three branches share stock and prices, the register cannot rely on a spreadsheet.",
      },
      solution: {
        es: [
          "Pedido armado por el vendedor y cobrado por caja, con descuento de stock y comprobante.",
          "Stock por sucursal y depósito central, con transferencias y alertas de mínimo.",
          "Caja diaria con apertura, cierre y arqueo por sucursal.",
          "Roles con permisos, MFA para administradores y sesiones que vencen por inactividad.",
          "Facturación electrónica con ARCA WSFEv1 y pagos con Mercado Pago.",
        ],
        en: [
          "Order prepared by the salesperson and charged by the register, with stock deduction and receipt.",
          "Stock per branch and central warehouse, with transfers and minimum-stock alerts.",
          "Daily cash register with opening, closing and reconciliation per branch.",
          "Roles with permissions, MFA for administrators and sessions that expire after inactivity.",
          "E-invoicing with ARCA WSFEv1 and Mercado Pago payments.",
        ],
      },
      role: {
        es: "Proyecto personal. Diseñé la arquitectura, el modelo de datos, las reglas de negocio y la interfaz. Escribí las migraciones, las pruebas de RLS y la documentación técnica.",
        en: "Personal project. I designed the architecture, the data model, the business rules and the interface. I wrote the migrations, the RLS tests and the technical documentation.",
      },
      architecture: {
        es: "Monolito modular con Next.js 16, App Router y Server Actions. Zod valida cada entrada, los permisos se verifican en el servidor y los servicios llaman a repositorios. PostgreSQL con RLS aísla las sucursales. Drizzle ORM y migraciones versionadas. Pruebas con Vitest, PGlite y Playwright.",
        en: "Modular monolith with Next.js 16, App Router and Server Actions. Zod validates every input, permissions are checked on the server and services call repositories. PostgreSQL with RLS isolates branches. Drizzle ORM and versioned migrations. Tests with Vitest, PGlite and Playwright.",
      },
      challenges: [
        {
          title: {
            es: "Aislar sucursales sin repetir filtros",
            en: "Isolating branches without repeating filters",
          },
          detail: {
            es: "Cada consulta necesitaba respetar la sucursal del usuario. Lo resolví con RLS en PostgreSQL y políticas por rol, más pruebas que inician sesión como cada usuario demo.",
            en: "Every query had to respect the user's branch. I solved it with PostgreSQL RLS and role policies, plus tests that sign in as each demo user.",
          },
          learned: {
            es: "Que la seguridad tiene que estar en la base, no solo en la Server Action.",
            en: "That security has to live in the database, not only in the Server Action.",
          },
        },
        {
          title: {
            es: "Cobrar sin descuadrar stock ni caja",
            en: "Charging without breaking stock or cash",
          },
          detail: {
            es: "La venta corre en una transacción: se registra el pago, se descuenta stock, se emite el comprobante y se audita. Probé el camino feliz y los fallos.",
            en: "The sale runs in a transaction: payment is recorded, stock is deducted, the receipt is issued and the action is audited. I tested the happy path and the failures.",
          },
          learned: {
            es: "A ordenar efectos y a probar lo que pasa cuando algo falla en el medio.",
            en: "To order side effects and test what happens when something fails in the middle.",
          },
        },
        {
          title: {
            es: "Integrar ARCA sin acoplar el sistema",
            en: "Integrating ARCA without coupling the system",
          },
          detail: {
            es: "La facturación electrónica tiene estados y errores propios de ARCA. Encapsulé el cliente WSFEv1, guardé la respuesta y dejé reintentos controlados.",
            en: "E-invoicing has ARCA-specific states and errors. I encapsulated the WSFEv1 client, stored the response and left controlled retries.",
          },
          learned: {
            es: "A integrar un servicio externo detrás de una frontera clara.",
            en: "To integrate an external service behind a clear boundary.",
          },
        },
      ],
      results: {
        es: [
          "3 sucursales, 30 productos y 6 usuarios demo en el seed.",
          "9 verificaciones de seguridad RLS en verde.",
          "9 ADRs documentando decisiones de arquitectura.",
          "Suite con Vitest, PGlite y Playwright; pnpm check antes de cada cambio.",
        ],
        en: [
          "3 branches, 30 products and 6 demo users in the seed.",
          "9 RLS security checks passing.",
          "9 ADRs documenting architecture decisions.",
          "Vitest, PGlite and Playwright suite; pnpm check before every change.",
        ],
      },
      improvements: {
        es: [
          "Agregar un modo demo público con datos de solo lectura.",
          "Sumar reportes exportables y conciliación de pagos.",
          "Medir la venta de contado con una prueba de usabilidad.",
        ],
        en: [
          "Add a public read-only demo mode.",
          "Add exportable reports and payment reconciliation.",
          "Measure the cash sale flow with a usability test.",
        ],
      },
      note: {
        es: "El código es privado. Puedo mostrar el sistema y el repositorio en una entrevista.",
        en: "The code is private. I can show the system and the repository in an interview.",
      },
    },
  },
];

export const otherProjects: readonly OtherProject[] = [
  {
    id: "forja-gym",
    name: "Forja Gym",
    year: "2026",
    context: { es: "10 entregas de cursada", en: "10 coursework assignments" },
    summary: {
      es: "Sitio de gimnasio con planes, clases, instructores y contacto. Lo armé en diez entregas: HTML y Bootstrap, después JavaScript, PHP/MySQL y al final Laravel con MVC.",
      en: "Gym site with plans, classes, instructors and contact. I built it across ten assignments: HTML and Bootstrap, then JavaScript, PHP/MySQL and finally Laravel with MVC.",
    },
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "Laravel"],
    image: {
      src: forjaShot,
      kind: "screenshot",
      alt: {
        es: "Captura de la home de Forja Gym con el menú, el título y los planes.",
        en: "Forja Gym home screenshot with the menu, headline and plans.",
      },
    },
    links: [
      {
        kind: "demo",
        label: { es: "Demo estática", en: "Static demo" },
        href: "https://isaiasdc2.github.io/PW_GYM/",
      },
      {
        kind: "code",
        label: { es: "Código", en: "Code" },
        href: "https://github.com/IsaiasDc2/PW_GYM",
      },
    ],
  },
  {
    id: "tgamx",
    name: "Tgamx",
    year: "2026",
    context: { es: "Práctica de React", en: "React practice" },
    summary: {
      es: "Tienda de teclados mecánicos con carrito, contador y lista de tareas. Práctica de React con Vite: componentes, estado y eventos.",
      en: "Mechanical keyboard store with a cart, counter and to-do list. React practice with Vite: components, state and events.",
    },
    stack: ["React", "Vite", "JavaScript", "CSS"],
    image: {
      src: tgamxShot,
      kind: "screenshot",
      alt: {
        es: "Captura de Tgamx con tres teclados mecánicos y botones de compra.",
        en: "Tgamx screenshot with three mechanical keyboards and buy buttons.",
      },
    },
    links: [
      {
        kind: "demo",
        label: { es: "Demo", en: "Demo" },
        href: "https://isaiasdc2.github.io/TP_N-6_PracticasProfesionalizanteII/",
      },
      {
        kind: "code",
        label: { es: "Código", en: "Code" },
        href: "https://github.com/IsaiasDc2/TP_N-6_PracticasProfesionalizanteII",
      },
    ],
  },
];
