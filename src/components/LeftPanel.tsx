import Image from "next/image";

const LeftPanel = () => {
  return (
    <div className="relative h-full overflow-hidden">
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
            <div className="relative" style={{ height: 190, width: 228 }}>
              <Image
                src="/Sora.svg"
                alt="Sora"
                width={228 * 4} // 4倍のサイズ
                height={198 * 4} // 4倍のサイズ
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              />
            </div>
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