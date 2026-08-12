"use client";

import { useRouter } from "next/navigation";
import { House } from "lucide-react";

export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/discover")}
      className="flex items-center justify-center w-11 h-11 rounded-full bg-black/50 backdrop-blur-md ring-1 ring-white/10 hover:bg-black/70 transition-colors active:scale-90"
    >
      <House size={25} />
    </button>
  );
}
