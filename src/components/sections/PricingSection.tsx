"use client";

import { useTooltip } from "@/context/TooltipContext";

export function PricingSection() {
  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="text-center mb-48">
        <h2 
          className="font-display-lg text-4xl sm:text-5xl md:text-display-lg tracking-tighter"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          Investment in your guilt.
        </h2>
        <div className="w-px h-24 bg-primary/20 mx-auto mt-12"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
        {/* Free */}
        <div className="heirloom-border p-14 flex flex-col items-center text-center rounded-[0.5rem] bg-surface-container-lowest/50 backdrop-blur-sm">
          <span className="font-label-sm uppercase tracking-[0.4em] text-outline mb-12 block border-b border-outline-variant/30 pb-4">The Grand-Child</span>
          <div className="font-display-lg text-6xl mb-12">$0<span className="text-xl font-light opacity-30">/mo</span></div>
          <ul className="font-body-md text-on-surface-variant/80 space-y-8 mb-20 flex-grow italic">
            <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Occasional guilt</li>
            <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Weekly "I'm fine" texts</li>
            <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Basic cookie recipes</li>
          </ul>
          <button className="w-full py-6 rounded-full border border-primary text-primary font-label-sm hover:bg-primary hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-xs">Begin Contract</button>
        </div>
        {/* Pro (The Heirloom) */}
        <div className="bg-secondary-container p-1 rounded-[1rem] shadow-[0_60px_120px_rgba(73,102,64,0.15)] md:scale-105 z-10">
          <div className="bg-secondary-container p-14 h-full flex flex-col items-center text-center rounded-[0.8rem] border-2 border-secondary/20 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">The Favored Heir</div>
            <span className="font-label-sm uppercase tracking-[0.4em] text-secondary mb-12 block border-b border-secondary/20 pb-4 w-full">The Favorite</span>
            <div className="font-display-lg text-5xl md:text-7xl mb-12 text-on-secondary-container">$49<span className="text-xl font-light opacity-30">/mo</span></div>
            <ul className="font-body-lg text-on-secondary-container space-y-8 mb-20 flex-grow font-medium">
              <li className="flex items-center justify-center gap-2" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Daily emotional surveillance
              </li>
              <li className="flex items-center justify-center gap-2" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Live sweater checking
              </li>
              <li className="flex items-center justify-center gap-2" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Unsolicited dating advice
              </li>
              <li className="flex items-center justify-center gap-2" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Vocal disappointment alerts
              </li>
            </ul>
            <button className="w-full py-7 rounded-full bg-secondary text-on-secondary font-label-sm shadow-2xl hover:brightness-110 transition-all duration-700 uppercase tracking-[0.3em] text-xs font-bold">Accept Discipline</button>
          </div>
        </div>
        {/* Enterprise */}
        <div className="heirloom-border p-14 flex flex-col items-center text-center rounded-[0.5rem] bg-surface-container-lowest/50 backdrop-blur-sm">
          <span className="font-label-sm uppercase tracking-[0.4em] text-outline mb-12 block border-b border-outline-variant/30 pb-4">The Matriarch</span>
          <div className="font-display-lg text-6xl mb-12">$499<span className="text-xl font-light opacity-30">/mo</span></div>
          <ul className="font-body-md text-on-surface-variant/80 space-y-8 mb-20 flex-grow italic">
            <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Grandma joins board meetings</li>
            <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Maternal M&amp;A due diligence</li>
            <li onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Quarterly home-cooked air drops</li>
          </ul>
          <button className="w-full py-6 rounded-full border border-primary text-primary font-label-sm hover:bg-primary hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-xs">Hire Your Boss</button>
        </div>
      </div>
    </section>
  );
}
