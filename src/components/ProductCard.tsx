"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products-data";

type ProductCardProps = {
  product: Product;
};

const fillVariants = {
  rest: { scale: 0 },
  hover: { scale: 1 },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      className="group relative flex flex-col gap-4 rounded-lg bg-card p-4 shadow-lg"
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-lg bg-foreground"
        variants={fillVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <motion.div
            className="h-full w-full"
            variants={imageVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
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
      </div>
    </motion.div>
  );
};

export default ProductCard;