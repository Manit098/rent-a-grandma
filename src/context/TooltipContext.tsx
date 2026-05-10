"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TooltipContextType {
  activeTooltip: boolean;
  tooltipText: string;
  showTooltip: () => void;
  hideTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

const adviceList = [
  "Don't trust people with tiny backpacks.",
  "Always wear clean underwear, you never know.",
  "The tea is getting cold. Drink it.",
  "You haven't called your mother in 3 days.",
  "Wear a sweater. It's breezy.",
  "Eat some ginger for that stomach.",
  "Your posture looks like a question mark.",
  "That haircut... are you sure about it?"
];

export function TooltipProvider({ children }: { children: ReactNode }) {
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const showTooltip = () => {
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    setTooltipText(`"${randomAdvice}"`);
    setActiveTooltip(true);
    document.body.classList.add("cursor-active");
  };

  const hideTooltip = () => {
    setActiveTooltip(false);
    document.body.classList.remove("cursor-active");
  };

  return (
    <TooltipContext.Provider value={{ activeTooltip, tooltipText, showTooltip, hideTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (context === undefined) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
}
