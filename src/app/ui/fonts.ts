import { Noto_Sans_JP, Oswald } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const notoSansJPBold = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-oswald",
});
