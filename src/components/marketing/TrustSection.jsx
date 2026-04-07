import { trustItems } from "../../data/mockData/marketing";
import ScrollReveal from "./ScrollReveal";

export default function TrustSection() {
  return (
    <section className="marketing-trust">
      <ScrollReveal as="h2" variant="up">
        The Gold Standard of Trust
      </ScrollReveal>
      <div className="marketing-trust-grid">
        {trustItems.map((item, index) => (
          <ScrollReveal
            key={item.title}
            as="article"
            className="marketing-trust-item"
            variant="pop"
            delay={index * 90}
          >
            <div className={`marketing-trust-icon marketing-trust-icon-${item.icon}`} />
            <h4>{item.title}</h4>
            <p>{item.copy}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
