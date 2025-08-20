import LeftPanel from "@/components/LeftPanel";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:sticky md:top-0 h-[80vh] md:h-screen">
          <LeftPanel />
        </div>
        <div className="relative">
          <Header />

          {/* ↓ ファーストビュー全体を囲むdivに hidden と md:flex を追加 */}
          <div className="hidden h-screen flex-col md:flex">
            {/* --- 上半分 (ロゴ用) --- */}
            <div className="relative h-[65%] md:-mt-[70px]">
              <div className="absolute top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
                <Image
                  src="/sawabe.svg"
                  alt="Sawabe"
                  width={400}
                  height={190}
                  className="h-[190px] w-auto"
                />
                <p className="font-en mt-2 text-sm tracking-wider">
                  focused on UX/UI
                </p>
              </div>
            </div>
            {/* --- 下半分 (スクロールサイン用) --- */}
            <div className="relative h-[35%]">
              <div className="flex h-full w-full items-end justify-center pb-10">
                {/* PCでのみ表示するスクロールサイン */}
                <ScrollIndicator />
              </div>
            </div>
          </div>

          <div className="flex justify-center py-10 md:hidden">
            <ScrollIndicator />
          </div>

          {/* ↓ PRODUCTSコンテンツ */}
          <section
            id="products"
            className="relative h-screen bg-background p-8"
          >
            <h2 className="absolute top-8 left-4 md:left-8 font-en text-5xl md:text-6xl font-bold text-white">
              PRODUCTS
            </h2>


            <div className="absolute top-1/3 lg:top-1/2 left-1/2 h-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2">

              {/* Mac画像のコンテナ */}
              <div className="absolute top-1/2 left-1/2 w-[80%] -translate-x-[100%] translate-y-[-25%] md:w-[70%] md:-translate-x-[100%] md:translate-y-[0%]">
                <Image
                  src="/Mac-portfolio.png"
                  alt="Macbook portfolio"
                  width={1500}
                  height={1126}
                  className="transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-3 hover:opacity-100 opacity-70"
                />
              </div>

              {/* iPhone画像のコンテナ */}
              <div className="absolute top-1/2 left-1/2 w-[40%] -translate-x-[-50%] -translate-y-[100%] md:w-[30%] md:-translate-x-[-90%] md:-translate-y-[110%]">
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}