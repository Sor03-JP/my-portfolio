import type { Metadata } from "next";
// ↓ fonts.tsからnotoSansJPとoswaldを正しくインポート
import { notoSansJP, oswald } from '@/app/ui/fonts';
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Sora's Portfolio",
  description: "A portfolio created with Next.js",
};

// ↓↓ ここにあった const notoSansJP = ... と const oswald = ... の定義を丸ごと削除します

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