import Image from "next/image";

const LeftPanel = () => {
  return (
    // position:sticky を適用する要素の直接の親として、高さを100%に
    <div className="relative h-full overflow-hidden">
      {/* 背景グラデーション */}
      <div
        className="absolute inset-0 z-0"
        style={{
          // 上30%を#2C5656の単色にし、そこからグラデーションを開始
          backgroundImage:
            "linear-gradient(to bottom, #2C5656 30%, #6E592E 100%)",
        }}
      />

      {/* コンテンツ全体を重ねる (z-10) */}
      <div className="relative z-10 flex h-full flex-col">
        {/* 上半分：Soraのロゴとテキスト */}
        <div className="flex flex-1 flex-col items-center justify-end pb-8">
          <Image
            src="/Sora.svg"
            alt="Sora"
            width={300}
            height={100}
            className="h-auto"
          />
          <p className="mt-2 text-sm tracking-widest">Frontend Engineer</p>
        </div>

        {/* 下半分：人物の写真 */}
        <div className="relative flex-1">
          <Image
            src="/mono-sora.png"
            alt="人物の写真"
            width={1611}
            height={1698}
            className="absolute bottom-0 left-1/2 w-[90%] max-w-xl -translate-x-1/2"
            priority // ページの主要な画像なので優先的に読み込む
          />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;