import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import ScrollIndicator from "@/components/ScrollIndicator"; // ← インポート

const LeftPanel = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <MobileMenu />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #204544 30%, #B39758 100%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative h-[65%]">
          <div className="absolute z-20 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
            <Image
              src="/Sora.svg"
              alt="Sora"
              width={228}
              height={198}
              className="h-[190px] w-auto"
            />
            <p className="font-en font-bold mt-0 md:mt-2 text-sm tracking-widest">
              Frontend Engineer
            </p>
            {/* ↓ モバイルでのみ表示するテキストを追加 */}
            <p className="font-en mt-0 text-sm tracking-wider md:hidden">
              focused on UX/UI
            </p>
          </div>
        </div>
        <div className="relative h-[35%]">
          <Image
            src="/mono-sora.png"
            alt="Sora's picture"
            width={1611}
            height={1698}
            className="absolute bottom-0 left-1/2 h-auto w-auto max-h-[600px] -translate-x-[40%] translate-y-[35%] filter brightness-60"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;