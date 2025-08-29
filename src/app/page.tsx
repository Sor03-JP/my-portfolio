import LeftPanel from "@/components/LeftPanel";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProductsSection from "@/components/ProductsSection";
import ProfileSection from "@/components/ProfileSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <main>
      <MobileMenu />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:sticky md:top-0 h-[80vh] md:h-screen">
          <LeftPanel />
        </div>
        <div className="relative">
          <Header />

          {/* ↓ ファーストビュー */}
          <div className="hidden md:h-screen flex-col md:flex">
            {/* --- 上半分 (ロゴ用) --- */}
            <div className="relative h-[65%] md:-mt-[70px]">
              <div className="absolute px-8 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
                  <Image
                    src="/SAWABE.svg"
                    alt="Sawabe"
                    width={440}
                    height={190}
                    className="h-[190px] w-auto"
                  />
                <p className="font-en mt-2 text-sm tracking-wider">
                  focused on UX/UI
                </p>
              </div>
            </div>
            {/* --- 下半分 (スクロールサイン用) --- */}
            <div className="relative md:h-[35%]">
              <div className="flex h-full w-full items-end justify-center pb-10">
                {/* PCでのみ表示するスクロールサイン */}
                <ScrollIndicator />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4 pb-20 md:hidden">
            <ScrollIndicator />
          </div>

          <h2 id="products" className="font-en p-8 text-5xl md:text-6xl font-bold text-primary">PRODUCTS</h2>
          <ProductsSection />
          <h2 id="profile" className="font-en p-8 text-5xl md:text-6xl font-bold text-primary">PROFILE</h2>
          <ProfileSection />
          <h2 id="connect" className="font-en p-8 text-5xl md:text-6xl font-bold text-primary">CONNECT</h2>
          <ConnectSection />

          <Footer />
        </div>
      </div>
    </main>
  );
}