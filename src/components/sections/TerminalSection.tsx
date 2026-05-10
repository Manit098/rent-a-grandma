"use client";

import { useEffect, useState } from "react";

export function TerminalSection() {
  const threatColors = ['#27c93f', '#ffbd2e', '#ff5f56'];
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIdx((prev) => (prev + 1) % threatColors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [threatColors.length]);

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap overflow-hidden">
      <div className="glass-terminal rounded-[3rem] p-1 overflow-hidden relative group">
        {/* Terminal Header */}
        <div className="flex items-center gap-3 p-8 bg-white/5 border-b border-white/5 relative z-10">
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_15px_rgba(255,95,86,0.4)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_15px_rgba(255,189,46,0.4)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_15px_rgba(39,201,63,0.4)]"></div>
          </div>
          <span className="hidden sm:inline text-white/20 font-mono text-[10px] ml-4 md:ml-10 tracking-[0.4em] uppercase">top_secret // matriarch_v4.2.sh // session_id_9921</span>
        </div>
        {/* Terminal Body */}
        <div className="p-6 sm:p-16 md:p-32 font-mono text-lg md:text-xl lg:text-2xl relative z-10 flicker">
          <div className="mb-8 md:mb-16 flex flex-col md:flex-row gap-2 md:gap-6">
            <span className="text-secondary opacity-60 shrink-0">user@rentagrandma:~$</span>
            <span className="text-white/95">I'm tired.</span>
          </div>
          <div className="mb-20">
            <div className="text-[#ff5f56] font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-4 text-xs md:text-sm tracking-widest uppercase">
              <span className="material-symbols-outlined text-2xl md:text-3xl">emergency_home</span>
              CRITICAL ADVICE INBOUND:
            </div>
            <div className="text-white/90 leading-relaxed max-w-4xl border-l-2 border-[#ff5f56]/30 pl-6 md:pl-12 py-2 md:py-4 text-lg md:text-2xl italic">
              "You’re tired because you sleep at 2AM and drink coffee like a raccoon. If you spent as much time sleeping as you do looking at those 'mimes' on your phone, you'd be energized. Go wash your face and sit in the garden for five minutes. And wear socks."
            </div>
          </div>
          <div className="flex items-center">
            <div className="terminal-cursor bg-[#27c93f] mr-6 shadow-[0_0_15px_rgba(39,201,63,0.6)]"></div>
            <span className="text-lg italic font-bold tracking-tight opacity-90 transition-colors duration-1000" style={{ color: threatColors[colorIdx] }}>Grandma is typing a follow-up about your haircut...</span>
          </div>
        </div>
        {/* Scanning line */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] overflow-hidden">
          <div className="w-full h-2 bg-white/20 blur-xl animate-[scan_6s_linear_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
