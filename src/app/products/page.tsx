"use client";

import { useState } from "react";
import LeftPanel from "@/components/LeftPanel";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import { productsData } from "@/lib/products-data";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import type { Product } from "@/lib/products-data";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main>
      <MobileMenu />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block md:sticky md:top-0 md:h-screen">
          <LeftPanel />
        </div>

        {/* 右カラム */}
        <div className="relative">
          <Header />

          <div className="flex md:h-[70vh] flex-col">
            <div className="relative h-[70vh] md:h-[65vh] md:-mt-[70px]">
              <div className="absolute px-8 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
                <Image
                  src="/PRODUCTS.svg"
                  alt="Products"
                  width={440}
                  height={190}
                  className="w-[440px] h-[190px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {productsData.map((product) => (
              <div
                key={product.title}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
    </main>
  );
}