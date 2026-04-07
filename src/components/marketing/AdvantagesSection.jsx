import { advantageCards } from "../../data/mockData/marketing";
import ScrollReveal from "./ScrollReveal";

export default function AdvantagesSection() {
  return (
    <section className="marketing-advantages" id="services">
      <div className="marketing-section-head">
        <span>Benefits</span>
        <h2>The Orchestrator&apos;s Advantage</h2>
      </div>
      <div className="marketing-card-grid">
        {advantageCards.map((card, index) => (
          <ScrollReveal
            key={card.title}
            as="article"
            className={
              card.featured
                ? "marketing-benefit-card marketing-benefit-card-featured"
                : "marketing-benefit-card"
            }
            variant={card.featured ? "up-strong" : "up"}
            delay={index * 120}
          >
            <div className={`marketing-benefit-icon marketing-benefit-icon-${card.icon}`} />
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
