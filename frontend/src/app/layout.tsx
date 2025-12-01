import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webbeezwork | Digital Growth Agency",
  description: "Data-driven digital marketing agency specializing in SEO, Google Ads, and Web Design.",
  icons: {
    icon: "/webbeezwork-fav.webp",
    shortcut: "/webbeezwork-fav.webp",
    apple: "/webbeezwork-fav.webp",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

// ... (imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MagneticCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
