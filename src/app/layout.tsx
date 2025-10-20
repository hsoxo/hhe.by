import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herbert He — Full-Stack Engineer | AI x Web3",
  description:
    "Full-stack engineer specialized in AI, Web3, and high-performance systems. Passionate about crafting scalable frontend architecture, clean backend APIs, and intelligent user experiences.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Python",
    "FastAPI",
    "AI Agent",
    "Web3",
    "Blockchain",
    "Smart Contract",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "Herbert He — Full-Stack Engineer | AI x Web3",
    description:
      "Portfolio and CV of Herbert He — full-stack engineer focusing on AI systems, Web3 applications, and human-centric design.",
    url: "https://hhe.by",
    siteName: "Herbert He Portfolio",
    images: [
      {
        url: "https://hhe.by/og-image.jpg", // 你可以用自己头像或banner图
        width: 1200,
        height: 630,
        alt: "Herbert He Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Herbert He",
              jobTitle: "Full-Stack Engineer",
              url: "https://hhe.by",
              sameAs: [
                "https://github.com/hsoxo",
                "https://www.linkedin.com/in/bolong-he-b968aa70/",
              ],
              description:
                "Full-stack engineer focused on AI agents, Web3 systems, and scalable infrastructure.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
