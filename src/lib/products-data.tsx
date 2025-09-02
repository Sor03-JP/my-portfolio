import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRemix, SiSupabase, SiPrisma, SiReact, SiShadcnui, SiMapbox, SiMinio, SiDocker, SiFigma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const tech = {
  NEXT: { icon: <SiNextdotjs />, name: "Next.js" },
  TYPESCRIPT: { icon: <SiTypescript />, name: "TypeScript" },
  TAILWIND: { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  SHADCN: { icon: <SiShadcnui />, name: "shadcn/ui" },
  REACT: { icon: <SiReact />, name: "React" },
  REMIX: { icon: <SiRemix />, name: "Remix.js" },
  PRISMA: { icon: <SiPrisma />, name: "Prisma" },
  MINIO: { icon: <SiMinio />, name: "MinIO" },
  SUPABASE: { icon: <SiSupabase />, name: "Supabase" },
  DOCKER: { icon: <SiDocker />, name: "Docker" },
  GITHUB: { icon: <FaGithub />, name: "GitHub" },
  MAPBOX: { icon: <SiMapbox />, name: "Mapbox" },
  FIGMA: { icon: <SiFigma />, name: "Figma" },
};

export type Product = {
  imageSrc: string;
  team: string;
  title: string;
  tags: string[];
  details: {
    coverImageSrc: string;
    liveUrl?: string;
    githubUrl: string;
    description: React.ReactNode;
    features: string[];
    role: React.ReactNode;
    techStack: { icon: React.ReactNode; name: string }[];
  };
};

export const productsData: Product[] = [
  {
    imageSrc: "/Notepia-product.png",
    team: "Team Development",
    title: "Notepia",
    tags: ["UXUI", "Frontend", "技育CAMPハッカソン2025 Vol.1", "最優秀賞"],
    details: {
      coverImageSrc: "/Notepia-cover.png",
      liveUrl: "https://notepia.cyberhub.jp/",
      githubUrl: "https://github.com/Hal-93/Notepia",
      description: "グループで旅行の計画を立てるWebサービスです。リアルタイムでの共同編集機能や、地図上でのスポット管理など、旅行計画の手間を解消し、楽しさを最大化することを目指しました。",
      features: ["リアルタイム共同編集", "インタラクティブマップ (Mapbox API)", "Webプッシュ通知"],
      role: (
        <p>
          フロントエンド開発を担当しました。特に、ユーザーが直感的に操作できるUIの設計と、地図APIと連携したインタラクションの実装に注力しました。
          {/* ここに後から画像や動画を追加できます */}
        </p>
      ),
      techStack: [tech.REMIX, tech.REACT, tech.TYPESCRIPT, tech.TAILWIND, tech.SHADCN, tech.PRISMA, tech.MINIO, tech.DOCKER, tech.GITHUB, tech.FIGMA, tech.MAPBOX],
    },
  },
  {
    imageSrc: "/Notepia-product.png",
    team: "Solo Development",
    title: "Portfolio",
    tags: ["Next.js", "Supabase", "shadcn/ui"],
    details: {
      coverImageSrc: "/portfolio-cover.png",
      liveUrl: "https://sora27eng.vercel.app/",
      githubUrl: "https://github.com/Sor03-JP/my-portfolio",
      description: "グループで旅行の計画を立てるWebサービスです。リアルタイムでの共同編集機能や、地図上でのスポット管理など、旅行計画の手間を解消し、楽しさを最大化することを目指しました。",
      features: ["リアルタイム共同編集", "インタラクティブマップ (Mapbox API)", "Webプッシュ通知"],
      role: (
        <p>
          フロントエンド開発を担当しました。特に、ユーザーが直感的に操作できるUIの設計と、地図APIと連携したインタラクションの実装に注力しました。
          {/* ここに後から画像や動画を追加できます */}
        </p>
      ),
      techStack: [tech.NEXT],
    },
  },
];