"use client";

import { useCopyToClipboard } from "@/lib/useCopyToClipboard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Twitter, Github, Copy } from "lucide-react";

// 各接続情報のリンクをまとめたサブコンポーネント
const ConnectLink = ({
  icon,
  serviceName,
  accountName,
  feedbackText,
  href,
  onClick,
  isCopyable,
}: {
  icon: React.ReactNode;
  serviceName: string;
  accountName: string;
  feedbackText?: string;
  href?: string;
  onClick?: () => void;
  isCopyable?: boolean;
}) => {
  // アカウント名部分をリンクまたはボタンにする
  const AccountInteractive = () => {
    const content = (
      <p className="font-en text-lg text-primary group-hover:underline">
        {accountName}
      </p>
    );
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group">
          {content}
        </a>
      );
    }
    return (
      <button onClick={onClick} className="group text-left">
        {content}
      </button>
    );
  };

  return (
    <div>
      <div className="flex items-center gap-x-3">
        {icon}
        <span className="font-en text-base text-gray-400">{serviceName}</span>
      </div>
      <div className="mt-1 flex items-center gap-x-2">
        <AccountInteractive />
        {isCopyable && (
          <button
            onClick={onClick}
            className="text-gray-400 transition-colors hover:text-primary"
          >
            <Copy className="h-4 w-4" />
          </button>
        )}
        <AnimatePresence>
          {feedbackText && (
            <motion.span
              className="font-en text-xs text-emerald-400"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {feedbackText}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


const ConnectSection = () => {
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const email = "sorasss2025@gmail.com";

  const handleCopy = () => {
    copy(email).then((success) => {
      if (success) {
        setIsCopied(true);
      }
    });
  };
  
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <section
      id="connect"
      className="relative bg-background pl-8 pb-16"
    >
      <div className="max-w-xl">
        <h2 className="font-en text-5xl md:text-6xl font-bold text-primary">CONNECT</h2>

        <div className="mt-12 flex flex-col gap-8">
          <ConnectLink 
            icon={<Mail className="h-5 w-5 text-gray-400"/>}
            serviceName="EMAIL"
            accountName={email}
            onClick={handleCopy}
            feedbackText={isCopied ? "COPIED!" : undefined}
            isCopyable
          />
          <ConnectLink 
            icon={<Twitter className="h-5 w-5 text-gray-400"/>}
            serviceName="X (Twitter)"
            accountName="@Sora27_eng"
            href="https://x.com/Sora27_eng"
          />
          <ConnectLink 
            icon={<Github className="h-5 w-5 text-gray-400"/>}
            serviceName="GITHUB"
            accountName="@Sor03-JP"
            href="https://github.com/Sor03-JP"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;