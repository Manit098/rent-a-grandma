"use client";

import { useEffect, useState } from "react";
import { useTooltip } from "@/context/TooltipContext";

export function MagneticTooltip() {
  const { activeTooltip, tooltipText } = useTooltip();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (activeTooltip) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [activeTooltip]);

  return (
    <div 
      className={`advice-cursor-tooltip bg-surface-container-high text-on-surface p-6 rounded-xl shadow-2xl font-body-md italic border border-outline-variant max-w-xs backdrop-blur-xl ${activeTooltip ? 'opacity-100' : 'opacity-0'}`} 
      style={{ left: mousePos.x, top: mousePos.y }}
    >
      {tooltipText}
    </div>
  );
}
