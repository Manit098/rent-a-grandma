"use client";

import { useTooltip } from "@/context/TooltipContext";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function TopNavBar() {
  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[94%] max-w-container-max rounded-full bg-surface/60 backdrop-blur-3xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.04)] z-[100] flex justify-between items-center px-10 py-5">
      <div 
        className="font-headline-lg text-2xl tracking-tighter text-on-surface"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        Rent-A-Grandma.ai
      </div>
      <div className="hidden md:flex gap-10">
        {["The Matriarchs", "Heritage", "Experience", "Journal"].map((item) => (
          <a key={item} className={`font-body-md transition-all duration-300 relative group ${item === "The Matriarchs" ? "text-primary hover:text-primary" : "text-on-surface-variant hover:text-primary"}`} href="#">
            {item}
            <span className={`absolute -bottom-1 left-0 w-full h-px bg-primary origin-left transition-transform ${item === "The Matriarchs" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </a>
        ))}
      </div>
      <MagneticButton className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-sm shadow-lg hover:shadow-secondary/20 active:scale-95 transition-all">
        Find Your Grandma
      </MagneticButton>
    </nav>
  );
}
