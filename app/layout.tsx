import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "./metadata";
import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import localFont from 'next/font/local'
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,  
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export const fontCommitMono = localFont({
  src: '../public/fonts/CommitMono-700-Regular.otf',
  variable: '--commit-mono'
})

export const fontPPNeuebit = localFont({
  src: '../public/fonts/ppneuebit-bold.otf',
  variable: '--pp-neuebit'
})

export const fontPPMondwest = localFont({
  src: '../public/fonts/ppmondwest-regular.otf',
  variable: '--pp-mondwest'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fontCommitMono.variable}  ${fontPPNeuebit.variable} ${fontPPMondwest.variable} antialiased `}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
