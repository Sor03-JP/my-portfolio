"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products-data";

type ProductCardProps = {
  product: Product;
};

// 画像用のアニメーションバリアントを定義
const imageVariants = {
  rest: { scale: 1 }, // 通常時の状態
  hover: { scale: 1.05 }, // ホバー時の状態
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    // ↓ div を motion.div に変更し、アニメーションを制御
    <motion.div
      className="group relative flex flex-col gap-4 rounded-lg bg-card p-4 shadow-lg transition-colors duration-300 ease-in-out hover:bg-foreground"
      initial="rest" // 初期状態を 'rest' に設定
      whileHover="hover" // ホバー時に 'hover' バリアントを適用
    >
      {/* 画像エリア (画像の「窓」) */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        {/* ↓ このmotion.divが親のホバーに連動してアニメーションします */}
        <motion.div
          className="h-full w-full"
          variants={imageVariants} // 定義したバリアントを適用
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* テキストエリア */}
      <div>
        <p className="text-xs text-gray-400">{product.team}</p>
        <h3 className="mt-1 font-bold text-3xl text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
          {product.title}
        </h3>
        <div className="mt-2 flex flex-col items-start">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="pb-1 text-xs text-foreground transition-colors duration-300 group-hover:text-primary-foreground"
            >
              {`#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;