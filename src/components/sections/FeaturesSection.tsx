"use client";

import { useTooltip } from "@/context/TooltipContext";

export function FeaturesSection() {
  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <section className="bg-surface-container py-section-gap relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-48">
          <span className="font-label-sm text-secondary uppercase tracking-[0.5em] block mb-12 opacity-40">Useless Proprietary Tech</span>
          <h2 
            className="font-display-lg text-display-lg leading-tight tracking-tighter mx-auto max-w-4xl"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            Features you'll regret.
          </h2>
          <div className="w-px h-32 bg-secondary/30 mx-auto mt-20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-start">
          {/* Feature 1 */}
          <div className="group py-12" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <span className="material-symbols-outlined text-secondary text-5xl font-extralight mb-12 block group-hover:scale-110 transition-transform duration-700">sentiment_dissatisfied</span>
            <h3 className="font-headline-lg text-3xl mb-8 tracking-tight">AI-generated disappointment</h3>
            <p className="font-body-lg text-on-surface-variant/70 leading-relaxed max-w-xs">Our LLMs (Large Loving Mothers) can detect flaws in your lifestyle you didn't even know existed.</p>
          </div>
          {/* Feature 2 */}
          <div className="group py-12 border-t md:border-t-0 md:border-l border-outline-variant/30 md:pl-16" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <span className="material-symbols-outlined text-secondary text-5xl font-extralight mb-12 block group-hover:scale-110 transition-transform duration-700">apparel</span>
            <h3 className="font-headline-lg text-3xl mb-8 tracking-tight">Sweater reminders</h3>
            <p className="font-body-lg text-on-surface-variant/70 leading-relaxed max-w-xs">Real-time local weather tracking that triggers an automated "You'll catch your death" call if it's below 65°F.</p>
          </div>
          {/* Feature 3 */}
          <div className="group py-12 border-t lg:border-t-0 lg:border-l border-outline-variant/30 lg:pl-16" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <span className="material-symbols-outlined text-secondary text-5xl font-extralight mb-12 block group-hover:scale-110 transition-transform duration-700">notifications_active</span>
            <h3 className="font-headline-lg text-3xl mb-8 tracking-tight">Passive aggressive pings</h3>
            <p className="font-body-lg text-on-surface-variant/70 leading-relaxed max-w-xs">Notifications that say things like "Don't worry about me, I'm just sitting here in the dark."</p>
          </div>
          {/* Feature 4 */}
          <div className="group py-12 border-t border-outline-variant/30" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <span className="material-symbols-outlined text-secondary text-5xl font-extralight mb-12 block group-hover:scale-110 transition-transform duration-700">soup_kitchen</span>
            <h3 className="font-headline-lg text-3xl mb-8 tracking-tight">Soup recommendation engine</h3>
            <p className="font-body-lg text-on-surface-variant/70 leading-relaxed max-w-xs">Proprietary broth-based analytics that solve 99% of your problems with leeks and love.</p>
          </div>
          {/* Feature 5 - Double Span */}
          <div className="lg:col-span-2 group py-12 border-t lg:border-l border-outline-variant/30 lg:pl-16" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <span className="material-symbols-outlined text-secondary text-7xl font-extralight group-hover:scale-110 transition-transform duration-700">analytics</span>
              <div>
                <h3 className="font-headline-lg text-3xl mb-8 tracking-tight">Emotional damage analytics</h3>
                <p className="font-body-lg text-on-surface-variant/70 leading-relaxed max-w-2xl">A sleek dashboard showing exactly how many sighs you've caused this quarter, visualized with beautiful heatmaps of maternal worry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
