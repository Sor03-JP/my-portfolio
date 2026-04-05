import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRemix, SiTailwindcss, SiShadcnui, SiSupabase, SiVercel, SiGit, SiGithub, SiFigma, SiNetflix } from "react-icons/si";
import Image from "next/image";

// 自己紹介セクションのデータ
export const aboutData = {
  imageSrc: "/Profile-sora.png",
  name: "沢辺 空（Sora SAWABE）",
  bio: (
    <>
      幼い頃からレゴブロックや図工で空間やものをつくり、周りを驚かせることが好きでした。
      <br />
      やがてインターネットが持つより多くの人に驚きや豊かさを与えられる力に惹かれ、ソフトウェアエンジニアに興味を持ちました。
      <br />
      長期インターンやハッカソンでの開発を通して学んだのは、技術はあくまで手段であり、最も大切なのはユーザーにどのような体験を届けるかということです。
      <br />
      目指しているのは、UX/UIと技術の越境者として、日常をアップデートするプロダクトを開発することです。
      <br />
      触れるたびにワクワクし、人々の心を動かすような体験を技術で実現するエンジニアとして、ものづくりの最前線に立ちたいと考えています！
    </>
  ),
};

// 経歴セクションのデータ
export const biographyData = [
  { year: "2023年4月～", event: "東洋大学情報連携学部情報連携学科 (INIAD) に入学。" },
  { year: "2024年6月", event: "人生初ハッカソンに挑戦し、プレゼンを担当。ChefCam.という冷蔵庫の中を写真で撮ることでレシピを提案してくれるWebサービスを開発し最優秀賞を受賞。" },
  { year: "2025年3月", event: "2度目のハッカソンに挑戦し、デザイン/フロントエンド/UXUI改善/プレゼンを担当。NotepiaというWebサービスを開発し最優秀賞を受賞。" },
  { year: "2025年5月", event: "サポーターズ技育博Vol.2にNotepiaを提出し参加。" },
  { year: "2025年6月～12月", event: "株式会社dotbindにて長期インターンに参加。フロントエンドエンジニアとして新規サービス開発に従事し、UIデザインから初期リリースに向けたMVPの開発まで一貫して携わり、ゼロからのプロダクト開発サイクルを経験。" },
  { year: "2025年8月", event: "株式会社GA technologiesにて短期インターン(GIANT LEAP for TECH)に参加。" },
  { year: "2025年9月", event: "Sora's Portfolioを作成。" },
];

// 技術スタックのデータ
export const techStackData = {
  HTML: { icon: <SiHtml5 />, name: "HTML5" },
  CSS: { icon: <SiCss3 />, name: "CSS3" },
  JAVASCRIPT: { icon: <SiJavascript />, name: "JavaScript" },
  TYPESCRIPT: { icon: <SiTypescript />, name: "TypeScript" },
  REACT: { icon: <SiReact />, name: "React" },
  NEXT: { icon: <SiNextdotjs />, name: "Next.js" },
  REMIX: { icon: <SiRemix />, name: "Remix.js" },
  TAILWIND: { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  SHADCN: { icon: <SiShadcnui />, name: "shadcn/ui" },
  SUPABASE: { icon: <SiSupabase />, name: "Supabase" },
  VERCEL: { icon: <SiVercel />, name: "Vercel" },
  GIT: { icon: <SiGit />, name: "Git" },
  GITHUB: { icon: <SiGithub />, name: "GitHub" },
  FIGMA: { icon: <SiFigma />, name: "Figma" },
};

// LIKESセクションのデータ
export const likesData = [
    {
        icon: <SiNetflix className="h-32 w-32 text-red-600"/>,
        title: "Netflix",
        description: "時間が空いているときはいつもなにかしら映画やドラマを観ています。最近ではTHE HOT SPOTにハマっています！"
    },
    {
        icon: <Image src="/Profile-rockstar.svg" alt="Guitar" width={128} height={128} />,
        title: "Guitar",
        description: "サークルや息抜きで弾くことが多いです。ギターはFender Made in Japan Hybrid II Jazzmaster Maple Blackです😍😍"
    }
]
