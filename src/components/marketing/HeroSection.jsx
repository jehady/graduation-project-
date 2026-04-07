import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="marketing-hero" id="home">
      <div className="marketing-hero-grid">
        <ScrollReveal className="marketing-hero-copy" variant="up" delay={40}>
          <h1>
            Your Professional Service Partner,
            <span> Orchestrated.</span>
          </h1>
          <p>
            Connect with top-tier providers or manage your workforce with
            executive precision. The modern marketplace for the discerning
            professional.
          </p>
          <div className="marketing-hero-actions">
            <Link className="marketing-primary-cta" to="/company/login">
              Find a Service
            </Link>
            <Link className="marketing-secondary-cta" to="/register/company">
              Join as Provider
            </Link>
          </div>
        </ScrollReveal>

        <div className="marketing-hero-media">
          <ScrollReveal className="marketing-device-card" variant="hero-card" delay={120}>
            <div className="marketing-device-screen" />
            <div className="marketing-device-base" />
            <div className="marketing-device-bottle" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
