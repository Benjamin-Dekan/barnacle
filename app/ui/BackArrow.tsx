"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackArrow() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center justify-center w-11 h-11 rounded-full bg-black/50 backdrop-blur-md ring-1 ring-white/10 hover:bg-black/70 transition-colors active:scale-90"
    >
      <ArrowLeft size={25} />
    </button>
  );
}
