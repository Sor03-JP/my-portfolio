import type { Metadata } from "next";
import { notoSansJP, oswald } from '@/app/ui/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Sora's Portfolio",
  description: "A portfolio created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
