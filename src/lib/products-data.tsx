export type Product = {
  imageSrc: string;
  team: string;
  title: string;
  tags: string[];
};

export const productsData: Product[] = [
  {
    imageSrc: "/Notepia_product.png",
    team: "Team Development",
    title: "Notepia",
    tags: ["UXUI", "Frontend", "技育CAMPハッカソン2025 Vol.1", "最優秀賞"],
  },
  {
    imageSrc: "/Notepia_product.png",
    team: "Solo Development",
    title: "Portfolio",
    tags: ["Remix.js", "Supabase", "shadcn/ui"],
  },
  // 新しいカードを追加する場合は、ここにオブジェクトを追加します
  // {
  //   imageSrc: "/path/to/your/image.png",
  //   team: "個人開発",
  //   title: "新しいプロジェクト",
  //   tags: ["React", "Firebase"],
  // },
];