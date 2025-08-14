import LeftPanel from "@/components/LeftPanel";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 左カラム */}
        <div className="sticky top-0 h-screen">
          <LeftPanel />
        </div>

        {/* 右カラム */}
        {/* スクロールを試すために高さを長くし、デバッグ用に背景色を付けています */}
        <div className="h-[200vh]">
          {/* ここに右側のコンテンツ（SAWABEなど）が入ります */}
        </div>
      </div>
    </main>
  );
}