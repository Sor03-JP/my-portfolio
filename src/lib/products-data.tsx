import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRemix, SiSupabase, SiPrisma, SiReact, SiShadcnui, SiMapbox, SiMinio, SiDocker, SiFigma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import Image from "next/image";

const tech = {
  NEXT: { icon: <SiNextdotjs />, name: "Next.js" },
  TYPESCRIPT: { icon: <SiTypescript />, name: "TypeScript" },
  TAILWIND: { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  SHADCN: { icon: <SiShadcnui />, name: "shadcn/ui" },
  REACT: { icon: <SiReact />, name: "React" },
  MOTION: { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
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
    developmentPeriod: string;
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
      developmentPeriod: "2025年3月-5月",
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
            <br />そんな悩みを解決するサービスです。
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
    imageSrc: "/Portfolio-product.png",
    team: "Solo Development",
    title: "Portfolio",
    tags: ["Next.js", "Shadcn/ui", "Motion"],
    details: {
      coverImageSrc: "/Portfolio-cover.png",
      liveUrl: "https://sora27eng.vercel.app/",
      githubUrl: "https://github.com/Sor03-JP/my-portfolio",
      developmentPeriod: "2025年8月-9月",
      description: (
        <p>
          自身の技術を体現するために、デザイン/開発/デプロイまで全ての工程を一人で行ったポートフォリオサイトです。PCとモバイルの両方で自分の技術を提供できるよう、完全レスポンシブな設計で構築しました。
        </p>
      ),
      features: [
        "レスポンシブデザイン (PC/モバイル)",
        "Framer MotionによるインタラクティブなUI",
        "コンポーネントベースの設計",
        "データとロジックの分離",
        "クリップボードコピー機能"
      ],
      role: (
        <div className="space-y-6">
          <div>
            <strong>コンポーネント設計とデータの分離</strong>
            <p className="mt-2">
              今後の機能追加や修正を簡単にするため、各セクションを独立したReactコンポーネントに分割しました。また、プロダクト情報や経歴などのテキスト情報は別のデータファイルに分離し、UIのコードと完全に分けて管理しています。
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
              <Image src="/Portfolio-vscode.png" alt="PortfolioのVSCode" fill className="object-contain" />
            </div>
          </div>
          <div>
            <strong>最新技術の採用</strong>
            <p className="mt-2">
              モダンなWeb開発を意識し、Next.jsのApp Routerをベースに構築しました。next/fontを使い、フォント読み込みによるパフォーマンス低下を防ぐなど、表示速度にも配慮しています。
            </p>
          </div>
          <div>
            <strong>UX/UIへのこだわり</strong>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                レスポンシブデザイン: PCでは左右2カラム、モバイルでは1カラムというレイアウトの切り替えだけでなく、SVGのサイズやpaddingの値などを画面幅に応じて複数段階で調整し、どのデバイスでも最適な表示になるよう追求しました。
              </li>
              <div className="relative aspect-video rounded-lg overflow-hidden mt-4 mb-6">
              <video
                src="/Portfolio-responsive.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
              <li>
                Framer Motionを使い、ホバーやクリック時のフィードバックを直感的に伝えるアニメーションを実装しました。フッターの右下にあるロケットなど遊び心のあるアニメーションも取り入れています。
              </li>
              <div className="relative aspect-video rounded-lg overflow-hidden mt-4 mb-6">
              <video
                src="/Portfolio-motion.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
              <li>
                shadcn/uiのDialogではPCサイズ時に右カラムだけに表示するという要件を満たせなかったため、独自のモーダルを実装し、理想のUIを実現しました。
              </li>
            </ul>
          </div>
        </div>
      ),
      techStack: [tech.NEXT, tech.REACT, tech.TYPESCRIPT, tech.TAILWIND, tech.SHADCN, tech.MOTION, tech.GITHUB, tech.FIGMA],
    },
  },
];