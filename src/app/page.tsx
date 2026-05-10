import { TooltipProvider } from "@/context/TooltipContext";
import { MagneticTooltip } from "@/components/ui/MagneticTooltip";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MatriarchsSection } from "@/components/sections/MatriarchsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <TooltipProvider>
      <main>
        <div className="grain-overlay"></div>
        <MagneticTooltip />
        <TopNavBar />
        <HeroSection />
        <MatriarchsSection />
        <FeaturesSection />
        <TerminalSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </TooltipProvider>
  );
}
