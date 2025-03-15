import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import AnimatedLayout from "./components/AnimatedLayout";

<!-- HTML Meta Tags -->
<title>Nathan Garcia</title>
<meta name="description" content="Portfolio Website">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://www.ntns.me/">
<meta property="og:type" content="website">
<meta property="og:title" content="Nathan Garcia">
<meta property="og:description" content="Portfolio Website">
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/10f8cc86-d7d5-4f1a-97d9-13fd052b1f4a.png?token=0uCnjxNUDHz83eNyTxuvECqskQJ19_zCLmr4jPQyY5Q&height=735&width=1200&expires=33278011415">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="ntns.me">
<meta property="twitter:url" content="https://www.ntns.me/">
<meta name="twitter:title" content="Nathan Garcia">
<meta name="twitter:description" content="Portfolio Website">
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/10f8cc86-d7d5-4f1a-97d9-13fd052b1f4a.png?token=0uCnjxNUDHz83eNyTxuvECqskQJ19_zCLmr4jPQyY5Q&height=735&width=1200&expires=33278011415">

<!-- Meta Tags Generated via https://www.opengraph.xyz --></meta>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Garcia",
  description: "Portfolio Website",
  openGraph: {
    title: "Nathan Garcia",
    description: "Portfolio Website",
    url: "https://www.ntns.me/",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/10f8cc86-d7d5-4f1a-97d9-13fd052b1f4a.png?token=0uCnjxNUDHz83eNyTxuvECqskQJ19_zCLmr4jPQyY5Q&height=735&width=1200&expires=33278011415",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Garcia",
    description: "Portfolio Website",
    images: ["https://opengraph.b-cdn.net/production/images/10f8cc86-d7d5-4f1a-97d9-13fd052b1f4a.png?token=0uCnjxNUDHz83eNyTxuvECqskQJ19_zCLmr4jPQyY5Q&height=735&width=1200&expires=33278011415"],
  },
  metadataBase: new URL("https://www.ntns.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <CustomCursor />
          <AnimatedLayout>{children}</AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
