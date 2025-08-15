import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

const LeftPanel = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <MobileMenu />
      
      {/* 背景グラデーション */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #204544 30%, #B39758 100%)",
        }}
      />

      {/* コンテンツ (z-10) */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative z-20 flex flex-1 flex-col items-center justify-end pt-16 lg:pt-0 pb-16">
          <Image
            src="/Sora.svg"
            alt="Sora"
            width={180}
            height={60}
            className="h-auto"
          />
          <p className="font-en font-bold mt-2 text-sm tracking-widest">Frontend Engineer</p>
        </div>

        <div className="relative flex-1">
          <Image
            src="/mono-sora.png"
            alt="Sora's picture"
            width={1611}
            height={1698}
            className="absolute bottom-0 left-1/2 -translate-x-[40%] w-auto max-h-[600px] h-auto translate-y-[35%] pt-8 filter brightness-60"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;