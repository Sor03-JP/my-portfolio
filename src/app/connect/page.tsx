import LeftPanel from "@/components/LeftPanel";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";
import Image from "next/image";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

export default function ConnectPage() {
  return (
    <main>
      <MobileMenu />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 左カラム (モバイルでは非表示) */}
        <div className="hidden md:block md:sticky md:top-0 md:h-screen">
          <LeftPanel />
        </div>

        {/* 右カラム */}
        <div className="relative">
          <Header />
          
          {/* ファーストビュー */}
          <div className="flex h-[70vh] md:h-screen flex-col">
            {/* --- 上半分 (ロゴ用) --- */}
            <div className="relative h-[40%] md:h-[65%] md:-mt-[70px]">
              <div className="absolute px-8 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
                <Image
                  src="/CONNECT.svg"
                  alt="Connect"
                  width={440}
                  height={190}
                  className="h-[190px] w-auto"
                />
              </div>
            </div>
            {/* --- 下半分 (スクロールサイン用) --- */}
            <div className="relative h-[35%] pb-16">
              <ConnectSection />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}