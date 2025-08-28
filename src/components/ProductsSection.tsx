import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  return (
    <section id="products" className="relative bg-background px-8 pt-8 lg:h-screen">
      
        {/* Mac画像のコンテナ */}
        <div className="absolute top-1/2 left-1/2 w-[60%] -translate-x-[100%] translate-y-[-25%] md:w-[50%] md:-translate-x-[100%] md:translate-y-[0%]">
          <Image
            src="/Mac-portfolio.png"
            alt="Macbook portfolio"
            width={1500}
            height={1126}
            className="transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-3 hover:opacity-100 opacity-70"
          />
        </div>
        {/* iPhone画像のコンテナ */}
        <div className="absolute top-1/2 left-1/2 w-[30%] -translate-x-[-50%] -translate-y-[100%] md:w-[20%] md:-translate-x-[-90%] md:-translate-y-[110%]">
          <Image
            src="/iPhone-notepia.png"
            alt="iPhone portfolio"
            width={549}
            height={725}
            className="transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:opacity-100 opacity-70"
          />
        </div>
        {/* VIEW MORE ボタン */}
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
  );
};

export default ProductsSection;