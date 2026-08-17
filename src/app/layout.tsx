import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

/*
  Fonts are self-hosted from src/fonts (SIL OFL, see LICENSE.md there).
  next/font/local avoids the next/font/google resolver, which fails to build
  EB Garamond under Turbopack on Vercel.
*/
const garamond = localFont({
  src: [
    {
      path: "../fonts/eb-garamond-latin.woff2",
      weight: "400 500",
      style: "normal",
    },
    {
      path: "../fonts/eb-garamond-italic-latin.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-eb-garamond",
  display: "swap",
});

const instrumentSans = localFont({
  src: "../fonts/instrument-sans-latin.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-instrument-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-latin.woff2",
  weight: "400 500",
  style: "normal",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${garamond.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Applies the stored theme before first paint so night mode never flashes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.dataset.theme="dark"}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <div className="mx-auto w-full max-w-[46rem] px-6 sm:px-8">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
