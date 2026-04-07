import { Link } from "react-router-dom";
import {
  enterpriseHighlights,
  enterprisePanels,
} from "../../data/mockData/marketing";
import ScrollReveal from "./ScrollReveal";

export default function EnterpriseSection() {
  return (
    <section className="marketing-enterprise" id="providers">
      <ScrollReveal className="marketing-enterprise-card" variant="up">
        <ScrollReveal className="marketing-enterprise-copy" variant="left" delay={60}>
          <span>Enterprise Suite</span>
          <h2>Sophisticated Management For Companies</h2>
          <ul>
            {enterpriseHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="marketing-primary-cta marketing-primary-cta-small" to="/company">
            Explore Enterprise
          </Link>
        </ScrollReveal>

        <div className="marketing-enterprise-panels">
          {enterprisePanels.map((panel, index) => (
            <ScrollReveal
              key={panel.title}
              as="article"
              className={panel.shifted ? "marketing-enterprise-panel-shift" : ""}
              variant="pop"
              delay={180 + index * 120}
            >
              <div
                className={`marketing-enterprise-panel-icon marketing-enterprise-panel-icon-${panel.icon}`}
              />
              <h4>{panel.title}</h4>
              <p>{panel.copy}</p>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
