import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import localFont from 'next/font/local'
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: "light",
};

export const metadata: Metadata = {
  title: "MotionMagic Blog",
  description:
    "Designed by @uncoverlab, expanded by @magicui, implemented by @jonpadven",
  openGraph: {
    title: "MotionMagic Blog",
    images: [ "/blogog.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotionMagic Blog",
    description: "Designed by @uncoverlab, expanded by @magicui, implemented by @jonpadven",
    images: ["/blogog.png"],
  },
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
      <body className="w-screen h-full ">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
