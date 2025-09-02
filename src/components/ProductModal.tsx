"use client";

import type { Product } from "@/lib/products-data";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

// ヘルパーコンポーネント: 各セクションのタイトルと内容を整形
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="font-bold text-lg mb-3 border-b border-gray-700 pb-2">{title}</h3>
    {children}
  </div>
);

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          // オーバーレイ (背景)
          className="fixed inset-0 z-50 bg-black/60 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* PC表示時に左半分を埋めるためのスペーサー */}
          <div className="hidden md:block w-1/2" />

          {/* 右カラム & パディング用のコンテナ */}
          <div className="w-full md:w-1/2 h-full p-4 md:p-12 flex items-center justify-center">
            <motion.div
              // モーダル本体
              className="
                bg-background text-white w-full h-full
                border border-primary rounded-lg
                flex flex-col overflow-hidden relative
              "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* --- モーダルコンテンツ --- */}
              <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                {/* 1. タイトルを一番上に配置 */}
                <h2 className="font-en text-4xl font-bold text-left mb-2">{product.title}</h2>

                <div className="flex gap-4 items-center mb-6">
                  {product.details.liveUrl && (
                    <a href={product.details.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                      {product.details.liveUrl.replace('https://', '')} <ExternalLink size={14} />
                    </a>
                  )}
                  <a href={product.details.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <Github size={14} /> GitHub
                  </a>
                </div>

                {product.details.coverImageSrc && (
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                    <Image src={product.details.coverImageSrc} alt={`${product.title} cover image`} fill className="object-cover" />
                  </div>
                )}

                <Section title="サービス内容">
                  <div className="text-gray-300 leading-relaxed space-y-4">{product.details.description}</div>
                </Section>

                <Section title="主な機能">
                  <ul className="list-disc list-inside text-gray-300 leading-relaxed">
                    {product.details.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </Section>

                <Section title="担当 & こだわり">
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    {product.details.role}
                  </div>
                </Section>

                <Section title="技術スタック">
                  <div className="flex flex-wrap gap-4">
                    {product.details.techStack.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-2 rounded-md">
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                <Button variant="secondary" onClick={onClose} className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
                  <X className="h-8 w-8" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;