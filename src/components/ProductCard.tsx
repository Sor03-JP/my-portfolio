"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import type { Product } from "@/lib/products-data";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type ProductCardProps = {
  product: Product;
  onCardClick: (product: Product) => void;
  isAnimated: boolean;
  onInView: () => void;
  onOutOfView: () => void;
};

const fillVariants = {
  rest: { scale: 0 },
  hover: { scale: 1 },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

const textVariants = {
  rest: { color: "#FAF9F6" },
  hover: { color: "#0D1117" },
};

const ProductCard = ({ product, onCardClick, isAnimated, onInView, onOutOfView  }: ProductCardProps) => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isInView = useInView(ref, { 
    margin: "0px 0px -50% 0px",
    once: false
  });

  useEffect(() => {
    if (isMobile) {
      if (isInView) {
        onInView();
      } else {
        onOutOfView();
      }
    }
  }, [isMobile, isInView, onInView, onOutOfView]);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col gap-4 rounded-lg bg-card p-4 shadow-lg"
      initial="rest"
      onClick={() => onCardClick(product)}
      whileHover={!isMobile ? "hover" : undefined}
      animate={isMobile && isAnimated ? "hover" : "rest"}
    >
      
      <motion.div
        className="absolute inset-0 z-0 rounded-lg bg-foreground"
        variants={fillVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <motion.div
            className="relative h-full w-full"
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
          <p className="text-xs text-gray-600">{product.team}</p>
          <motion.h3
            className="mt-1 font-bold text-3xl"
            variants={textVariants}
            transition={{ duration: 0.2 }}
          >
            {product.title}
          </motion.h3>
          <div className="mt-2 flex flex-col items-start">
            {product.tags.map((tag) => (
              <motion.span
                key={tag}
                className="pb-1 text-xs"
                variants={textVariants}
                transition={{ duration: 0.2 }}
              >
                {`#${tag}`}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;