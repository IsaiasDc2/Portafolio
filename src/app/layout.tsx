import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Isaias Duran | Desarrollador Full Stack Junior";
const description =
  "Portafolio de Isaias Duran, desarrollador full stack junior en Argentina. Proyectos con Next.js, React, TypeScript, PostgreSQL y Supabase. Disponible para trabajar.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Isaias Duran",
  },
  description,
  keywords: [
    "Isaias Duran",
    "desarrollador full stack",
    "desarrollador junior",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "portafolio",
    "Argentina",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isaias Duran, desarrollador full stack junior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
};

const themeScript = `(function(){try{document.documentElement.dataset.theme="light";document.documentElement.style.colorScheme="light";}catch(e){document.documentElement.dataset.theme="light";document.documentElement.style.colorScheme="light";}try{var l=localStorage.getItem("locale");if(l==="es"||l==="en"){document.documentElement.lang=l;}}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Desarrollador Full Stack Junior",
  description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  sameAs: [site.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "FastAPI",
    "Tailwind CSS",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} | Portafolio`,
  url: site.url,
  inLanguage: ["es", "en"],
  author: {
    "@type": "Person",
    name: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body className="min-h-svh bg-bg text-text antialiased">
        <Providers>
          <a className="skip-link" href="#contenido">
            Saltar al contenido / Skip to content
          </a>
          <Navbar />
          <main id="contenido">{children}</main>
          <Footer />
        </Providers>
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
