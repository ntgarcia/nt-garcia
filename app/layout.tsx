import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "./components/AnimatedLayout";
import StickyHeader from "./components/StickyHeader";
import StickyFooter from "./components/StickyFooter";
import { HeroLogoProvider } from "./components/HeroLogoProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Garcia",
  description: "Portfolio Website",
  icons: {
    icon: "/n-logo.svg",
  },
  openGraph: {
    title: "Nathan Garcia",
    description: "Portfolio Website",
    url: "https://www.ntns.me/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Garcia",
    description: "Portfolio Website",
  },
  metadataBase: new URL("https://www.ntns.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <HeroLogoProvider>
          <StickyHeader />
          <AnimatedLayout>{children}</AnimatedLayout>
          <StickyFooter />
        </HeroLogoProvider>
      </body>
    </html>
  );
}
