import LeftPanel from "@/components/LeftPanel";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProfileContent from "@/components/ProfileContent"; 

export default function ProfilePage() {
  return (
    <main>
      <MobileMenu />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block md:sticky md:top-0 md:h-screen">
          <LeftPanel />
        </div>

        {/* 右カラム */}
        <div className="relative">
          <Header />

          <div className="flex md:h-[70vh] flex-col">
            <div className="relative h-[70vh] md:h-[65vh] md:-mt-[70px]">
              <div className="absolute px-8 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
                <Image
                  src="/PROFILE.svg"
                  alt="Profile"
                  width={440}
                  height={190}
                  className="w-[440px] h-[190px]"
                />
              </div>
            </div>
          </div>

          <ProfileContent />

          <Footer />
        </div>
      </div>
    </main>
  );
}