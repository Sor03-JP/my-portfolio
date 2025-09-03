import type { Metadata } from "next";
import { Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Sora's Portfolio",
  description: "A portfolio created with Next.js",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = `${notoSansJP.variable} ${oswald.variable}`;

  return (
    <html lang="ja">
      <ClientLayout fontClasses={fontClasses}>
        {children}
      </ClientLayout>
    </html>
  );
}