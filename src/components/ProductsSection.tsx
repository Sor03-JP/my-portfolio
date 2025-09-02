"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productsData } from "@/lib/products-data";
import type { Product } from "@/lib/products-data";
import ProductModal from "@/components/ProductModal";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const portfolioData = productsData.find(p => p.title === "Portfolio");
  const notepiaData = productsData.find(p => p.title === "Notepia");

  return (
    <>
      <section className="relative bg-background px-8 lg:h-screen">
        <div
          className="absolute top-1/2 left-1/2 w-[60%] -translate-x-[100%] translate-y-[-25%] cursor-pointer md:w-[50%] md:-translate-x-[100%] md:translate-y-[0%]"
          onClick={() => portfolioData && setSelectedProduct(portfolioData)}
        >
          <Image
            src="/Mac-portfolio.png"
            alt="Macbook portfolio"
            width={1500}
            height={1126}
            className="transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-3 hover:opacity-100 opacity-70"
          />
        </div>

        <div 
          className="absolute top-1/2 left-1/2 w-[30%] -translate-x-[-50%] -translate-y-[100%] cursor-pointer md:w-[20%] md:-translate-x-[-90%] md:-translate-y-[110%]"
          onClick={() => notepiaData && setSelectedProduct(notepiaData)}
        >
          <Image
            src="/iPhone-notepia.png"
            alt="iPhone portfolio"
            width={549}
            height={725}
            className="transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:opacity-100 opacity-70"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            variant="outline"
            className="font-en rounded-full border-gray-500 px-8 py-3 text-base"
            asChild
          >
            <Link href="/products">VIEW MORE</Link>
          </Button>
        </div>

        <div className="pt-[120%] lg:hidden" />
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductsSection;