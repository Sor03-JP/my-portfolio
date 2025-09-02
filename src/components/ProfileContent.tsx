"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutData, biographyData, techStackData, likesData } from "@/lib/profile-data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// セクション全体を囲むコンポーネント
const Section = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <section className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 mb-4 lg:mb-12">
    <div className="col-span-1">
      <h2 className="hidden lg:block font-en text-2xl font-bold text-primary">{title}</h2>
      <button
        className="lg:hidden flex items-center gap-x-3 w-full mb-6"
        onClick={onToggle}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
        <h2 className="font-en text-2xl font-bold text-primary">{title}</h2>
      </button>
    </div>

    <div className="col-span-1 lg:col-span-3">
      <div className="hidden lg:block">
        {children}
      </div>
      <div className="lg:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </section>
);

// 経歴アイテム用のヘルパーコンポーネント
const BiographyItem = ({ year, event }: { year: string; event: string }) => (
  <div className="flex items-start gap-x-6">
    <p className="w-28 flex-shrink-0 text-sm text-gray-400">{year}</p>
    <p className="flex-1 text-white">{event}</p>
  </div>
);

const ProfileContent = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleToggle = (sectionName: string) => {
    setOpenSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <div className="p-8 text-primary">
      <section className="mb-6 lg:mb-12 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-x-8">
        <div className="relative col-span-1 items-center lg:col-span-2 h-64 w-48 lg:h-auto lg:w-full lg:aspect-[3/4] flex-shrink-0 overflow-hidden rounded-xl mx-auto lg:mx-0">
          <Image src={aboutData.imageSrc} alt={aboutData.name} fill className="object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 text-left">
          <h3 className="text-2xl font-bold text-primary mb-2">{aboutData.name}</h3>
          <p className="leading-relaxed text-gray-300">{aboutData.bio}</p>
        </div>
      </section>

      {/* 経歴セクション */}
      <Section
        title="TECH Biography"
        isOpen={openSections.includes("biography")}
        onToggle={() => handleToggle("biography")}
      >
        <div className="flex flex-col gap-y-6">
          {biographyData.map((item) => (
            <BiographyItem key={item.event} year={item.year} event={item.event} />
          ))}
        </div>
      </Section>

      {/* 技術スタックセクション */}
      <Section
        title="TECH Tool"
        isOpen={openSections.includes("tech")}
        onToggle={() => handleToggle("tech")}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {Object.values(techStackData).map((tech) => (
            <div key={tech.name} className="flex items-center gap-x-3 rounded-md bg-card p-3">
              <span className="text-2xl text-gray-400">{tech.icon}</span>
              <span className="text-primary">{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* LIKESセクション */}
      <Section
        title="LIKES"
        isOpen={openSections.includes("likes")}
        onToggle={() => handleToggle("likes")}
      >
        <div className="space-y-6">
          {likesData.map((like) => (
            <div key={like.title} className="flex items-center gap-x-4">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">{like.icon}</div>
              <div>
                <h4 className="font-bold text-primary">{like.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{like.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProfileContent;