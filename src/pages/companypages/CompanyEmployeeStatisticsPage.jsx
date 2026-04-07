import { NavLink } from "react-router-dom";
import {
  departmentEfficiency,
  metricCards,
  monthlyPerformance,
  responseByRole,
  statisticsSidebarItems,
  topPerformers,
} from "../../data/mockData/company/statistics";

function CircularProgress({ percent, tone }) {
  const angle = percent * 3.6;

  return (
    <div
      className={`statistics-circle statistics-circle-${tone}`}
      style={{ "--progress-angle": `${angle}deg` }}
    >
      <div className="statistics-circle-inner">{percent}%</div>
    </div>
  );
}

function SidebarLink({ item }) {
  const iconClassName = `statistics-sidebar-icon statistics-sidebar-icon-${item.icon}`;

  return (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        isActive ? "statistics-sidebar-link statistics-sidebar-link-active" : "statistics-sidebar-link"
      }
    >
      <span className={iconClassName} aria-hidden="true" />
      <span>{item.label}</span>
    </NavLink>
  );
}

export default function CompanyEmployeeStatisticsPage() {
  return (
    <div className="statistics-shell">
      <aside className="statistics-sidebar">
        <div>
          <div className="statistics-brand">Khadmeni</div>
          <nav className="statistics-sidebar-nav">
            {statisticsSidebarItems.map((item) => (
              <SidebarLink key={item.to} item={item} />
            ))}
          </nav>
        </div>

        <div className="statistics-sidebar-footer">
          <div className="statistics-company-mark">K</div>
          <div>
            <strong>Khadmeni</strong>
            <span>Enterprise Portal</span>
          </div>
        </div>
      </aside>

      <main className="statistics-main">
        <header className="statistics-topbar">
          <div className="statistics-topbar-title">Company Portal</div>
          <div className="statistics-search">
            <span className="statistics-search-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <path d="M12.5 12.5 17 17" />
              </svg>
            </span>
            <input placeholder="Search analytics..." type="text" />
          </div>
          <div className="statistics-topbar-user">
            <button className="statistics-notification" type="button" aria-label="Notifications">
              <span className="statistics-notification-dot" />
            </button>
            <div className="statistics-user-copy">
              <strong>Alex Rivera</strong>
              <span>Admin</span>
            </div>
            <div className="statistics-user-avatar">A</div>
          </div>
        </header>

        <div className="statistics-page">
          <section className="statistics-header">
            <div>
              <h1>Statistics</h1>
              <p>Real-time performance metrics and operational efficiency overview.</p>
            </div>
            <div className="statistics-header-actions">
              <button className="statistics-outline-button" type="button">
                Last 30 Days
              </button>
              <button className="primary-button" type="button">
                Export Report
              </button>
            </div>
          </section>

          <section className="statistics-metric-grid">
            {metricCards.map((card) => (
              <article
                key={card.label}
                className={`statistics-metric-card statistics-metric-card-${card.tone}`}
              >
                <div className="statistics-metric-head">
                  <div className="statistics-metric-icon" />
                  <span>{card.label}</span>
                </div>
                <strong>{card.value}</strong>
                <p>{card.detail}</p>
                {card.progress ? (
                  <div className="statistics-progress">
                    <div style={{ width: `${card.progress}%` }} />
                  </div>
                ) : null}
              </article>
            ))}
          </section>

          <section className="statistics-chart-grid">
            <article className="panel statistics-chart-panel">
              <div className="statistics-panel-header">
                <h3>Orders per Month</h3>
                <div className="statistics-legend">
                  <span>
                    <i className="statistics-dot statistics-dot-primary" />
                    Completed
                  </span>
                  <span>
                    <i className="statistics-dot statistics-dot-accent" />
                    Requested
                  </span>
                </div>
              </div>
              <div className="statistics-bar-chart">
                {monthlyPerformance.map((item) => (
                  <div key={item.label} className="statistics-bar-group">
                    <div className="statistics-bar-stack">
                      <div className="statistics-bar statistics-bar-requested" style={{ height: `${item.requested}%` }} />
                      <div className="statistics-bar statistics-bar-completed" style={{ height: `${item.completed}%` }} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel statistics-efficiency-panel">
              <h3>Efficiency by Dept.</h3>
              <div className="statistics-efficiency-list">
                {departmentEfficiency.map((item) => (
                  <div key={item.name} className="statistics-efficiency-item">
                    <CircularProgress percent={item.percent} tone={item.tone} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.projects}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="statistics-bottom-grid">
            <article className="panel">
              <div className="statistics-panel-header">
                <h3>Top Performers</h3>
                <button className="statistics-link-button" type="button">
                  View All
                </button>
              </div>
              <div className="statistics-performer-list">
                {topPerformers.map((item) => (
                  <div key={item.name} className="statistics-performer-item">
                    <div className="statistics-performer-row">
                      <div className="statistics-performer-profile">
                        <div className={`mini-avatar mini-avatar-${item.tone}`}>
                          {item.name
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <strong>{item.name}</strong>
                      </div>
                      <span>{item.tasks}</span>
                    </div>
                    <div className="statistics-progress statistics-progress-thin">
                      <div style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel">
              <h3>Avg. Response by Role</h3>
              <div className="statistics-role-table-wrap">
                <table className="statistics-role-table">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Avg. Time</th>
                      <th>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseByRole.map((item) => (
                      <tr key={item.role}>
                        <td>{item.role}</td>
                        <td>{item.time}</td>
                        <td className={`statistics-trend statistics-trend-${item.trendTone}`}>
                          {item.trend}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </section>

          <section className="statistics-insight">
            <div className="statistics-insight-mark">+</div>
            <div className="statistics-insight-copy">
              <h4>Operational Insight</h4>
              <p>
                Predictive modeling suggests a 15% increase in maintenance requests
                for the coming week. Consider mobilizing extra Technicians.
              </p>
            </div>
            <button className="statistics-action-button" type="button">
              Take Action
            </button>
          </section>

          <footer className="statistics-footer">
            (C) 2023 KHADMENI EDITORIAL SYSTEM - PERFORMANCE ORCHESTRATOR V4.2
          </footer>
        </div>
      </main>
    </div>
  );
}


