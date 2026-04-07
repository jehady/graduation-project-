import AdvantagesSection from "../components/marketing/AdvantagesSection";
import CtaSection from "../components/marketing/CtaSection";
import EnterpriseSection from "../components/marketing/EnterpriseSection";
import MarketingFooter from "../components/marketing/MarketingFooter";
import MarketingNav from "../components/marketing/MarketingNav";
import HeroSection from "../components/marketing/HeroSection";
import TrustSection from "../components/marketing/TrustSection";
import WorkflowSection from "../components/marketing/WorkflowSection";

export default function HomePage() {
  return (
    <div className="marketing-shell">
      <MarketingNav />

      <main className="marketing-main">
        <HeroSection />
        <AdvantagesSection />
        <WorkflowSection />
        <EnterpriseSection />
        <TrustSection />
        <CtaSection />
      </main>

      <MarketingFooter />
    </div>
  );
}
