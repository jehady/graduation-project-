import { analyticsBars, workflowSteps } from "../../data/mockData/marketing";
import ScrollReveal from "./ScrollReveal";

export default function WorkflowSection() {
  return (
    <section className="marketing-workflow" id="about">
      <div className="marketing-workflow-grid">
        <ScrollReveal variant="left">
          <h2>The Seamless Workflow</h2>
          <div className="marketing-workflow-list">
            {workflowSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                className="marketing-workflow-item"
                variant="left"
                delay={140 + index * 120}
              >
                <span>{step.number}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="marketing-analytics-card" variant="scale" delay={120}>
          <div className="marketing-analytics-screen">
            <div className="marketing-analytics-header" />
            <div className="marketing-analytics-chart">
              {analyticsBars.map((bar) => (
                <span key={bar.id} style={{ height: bar.height }} />
              ))}
            </div>
          </div>
          <div className="marketing-insight-banner">
            <span>System Insight</span>
            <p>
              &quot;Orchestrating services has never felt this intuitive.
              Khadmeni transformed our operational logic.&quot;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
