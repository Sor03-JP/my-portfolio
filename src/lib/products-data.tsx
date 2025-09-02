import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRemix, SiSupabase, SiPrisma, SiReact, SiShadcnui, SiMapbox, SiMinio, SiDocker, SiFigma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

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
      description: (
        <>
          <p className="mb-4">
            グループで地図上にメモがおけるWebサービス。
            <br />
            技育CAMPハッカソン2025 Vol.1 にて4人チームで開発し、最優秀賞を受賞しました。
          </p>
          <p className="mb-4">
            ・打ち上げなどで複数の友人や家族からお使いを頼まれたとき
            <br />
            ・いくつかの場所を経由して買い物をするときに、目的を忘れてしまうとき
            <br />
            ・お気に入りの飲食店やカフェを見つけたとき
          </p>
          <p>「ただのメモではなく、地図にメモがおければもっと見やすいのに」
            <br/>そんな悩みを解決するサービスです。
          </p>
        </>
      ),
      features: [
        "ログイン機能",
        "フォロー機能",
        "地図上のメモの作成&編集",
        "グループ機能（閲覧者や編集者などの権限付与あり）",
        "マップの低負荷/高負荷切り替え機能",
        "プロフィール編集",
        "通知機能",
      ],
      role: (
        <div className="space-y-6">
          <div>
            <strong>ロゴの作成</strong>
            <p className="mt-2">
              「マップ感」を出すことを意識し、チーム内で何度も修正を重ね、最終的に全員が納得できるロゴを完成。
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
              <Image src="/Notepia-design.png" alt="Notepiaのロゴ" fill className="object-contain" />
            </div>
          </div>
          <div>
            <strong>ワイヤーフレームの作成</strong>
            <p className="mt-2">
              初めてFigmaを使用し、ワイヤーフレームを制作。UX/UI規定を設け、カラーや余白のサイズを統一。サービス内で使用するコンパスのデザインもFigmaで作成。
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
              <Image src="/Notepia-wireframe.png" alt="Notepiaのワイヤーフレーム" fill className="object-contain" />
            </div>
          </div>
          <div>
            <strong>Mapbox Studioを用いた時間帯別地図スタイルの実装</strong>
            <p className="mt-2">
              ランドマークの視認性が高いため、地図サービスにMapboxを採用。日本のランドマークも3D表示されるため、知らない土地でも目印を探しやすくなる。夜間に画面がまぶしくならないよう、4段階の時間帯別地図スタイルを導入。時間帯に合わせて場所のカラーも変更し、使いやすさを向上。
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
              <Image src="/Notepia-mapbox.png" alt="時間帯別Mapboxスタイル" fill className="object-contain" />
            </div>
          </div>
          <div>
            <strong>ユーザーヒアリングに基づくUI/UX改善（50回以上）</strong>
            <p className="mt-2">
              友人や家族に利用してもらい、フィードバックを反映。
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>「ボタンの位置が分かりづらい」 → ボタン配置の調整</li>
              <li>「方角がわからない」 → コンパスの設置</li>
              <li>「4G接続時に読み込みが遅い」 → 低負荷マップの導入</li>
            </ul>
            <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
              <Image src="/Notepia-mobile-ui.png" alt="NotepiaのモバイルUI" fill className="object-contain" />
            </div>
          </div>
        </div>
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