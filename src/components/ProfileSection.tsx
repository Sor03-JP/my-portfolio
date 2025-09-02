import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProfileSection = () => {
  return (
    <section
      className="relative bg-background p-8"
    >
      <div className="max-w-xl">
        <p className="text-base text-gray-300 leading-relaxed">
          2003年11月生まれ、神奈川県在住。
          <br />
          高校卒業後、東洋大学情報連携学部情報連携学科に入学し、
          <br />
          現在同大学3年生として在籍しています。
        </p>
        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          「こんなアプリあったらいいのに」を実現する
          <br />
          フロントエンドエンジニアを目指しています。
        </p>
        <div className="mt-8">
          <Button
            variant="outline"
            className="font-en rounded-full border-gray-500 px-8 py-3 text-base"
            asChild
          >
            <Link href="/profile">VIEW MORE</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;