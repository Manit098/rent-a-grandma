"use client";

import { ReactNode } from "react";
import { useTooltip } from "@/context/TooltipContext";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
  const { showTooltip, hideTooltip } = useTooltip();

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = `translate(0px, 0px) scale(1)`;
    hideTooltip();
  };

  return (
    <button
      className={`magnetic-btn ${className}`}
      onMouseEnter={showTooltip}
      onMouseMove={handleMagneticMove}
      onMouseLeave={handleMagneticLeave}
      {...props}
    >
      {children}
    </button>
  );
}
