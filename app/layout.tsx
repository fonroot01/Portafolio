import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";

import { Analytics } from "@/components/common/analytics";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";

const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Portafolio de Alfonso",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.username,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: "Portafolio de Alfonso",
    description: siteConfig.description,
    siteName: "Portafolio de Alfonso",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Portafolio de Alfonso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfonso | Web Personal",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.username}`,
  },
  icons: {
    icon: siteConfig.iconIco,
    shortcut: siteConfig.logoIcon,
    apple: siteConfig.logoIcon,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "hZ0s0SPBF2iVW3cNfUNMTIg1L2V19jW50fDXRyk3sBY",
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
};

export default function RootLayout({ children }: RootLayoutProps) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Favicon principal */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Puedes agregar otros tamaños/formatos si lo deseas */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={[
            "light",
            "dark",
            "retro",
            "cyberpunk",
            "paper",
            "aurora",
            "synthwave",
          ]}
        >
          {children}
          <Analytics />
          <Toaster />
          <ModalProvider />
        </ThemeProvider>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}