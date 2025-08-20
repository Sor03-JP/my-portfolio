import LeftPanel from "@/components/LeftPanel";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProductsSection from "@/components/ProductsSection";
import ProfileSection from "@/components/ProfileSection";
import ConnectSection from "@/components/ConnectSection"; 
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Image from "next/image";

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

          {/* ↓ コンテンツ */}
          <ProductsSection />
          <ProfileSection />
          <ConnectSection />
          
          {/* ↓ フッター */}
          <Footer />
        </div>
      </div>
    </main>
  );
}