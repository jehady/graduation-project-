import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function CtaSection() {
  return (
    <section className="marketing-cta-banner">
      <ScrollReveal className="marketing-cta-card" variant="up">
        <h2>Ready to start?</h2>
        <p>
          Elevate your service delivery or find the perfect partner today.
        </p>
        <div className="marketing-hero-actions">
          <Link className="marketing-primary-cta marketing-primary-cta-small" to="/register/company">
            Create Account
          </Link>
          <Link className="marketing-dark-cta" to="/company">
            Schedule Demo
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
