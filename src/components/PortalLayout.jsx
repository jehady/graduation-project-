import { NavLink } from "react-router-dom";

export default function PortalLayout({
  brandSubtitle,
  navItems,
  sessionTitle,
  sessionSubtitle,
  heroEyebrow,
  heroTitle,
  heroCopy,
  heroVariant,
  heroActions,
  children,
}) {
  const isAdminPortal = navItems.some((item) => item.to.startsWith("/admin"));
  const logoutRoute = isAdminPortal ? "/admin/login" : "/company/login";

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div>
          <div className="dashboard-brand-lockup">
            <strong>Khadmeni</strong>
            <span>{brandSubtitle}</span>
          </div>

          <nav className="dashboard-sidebar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? "dashboard-sidebar-link dashboard-sidebar-link-active"
                    : "dashboard-sidebar-link"
                }
              >
                <span
                  className={`dashboard-sidebar-icon dashboard-sidebar-icon-${item.icon ?? "grid"}`}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="dashboard-sidebar-bottom">
          <div className="dashboard-sidebar-session">
            <span>{sessionTitle}</span>
            <strong>{sessionSubtitle}</strong>
          </div>

          <button className="dashboard-sidebar-utility" type="button">
            <span className="dashboard-sidebar-icon dashboard-sidebar-icon-help" aria-hidden="true" />
            <span>Support</span>
          </button>

          <NavLink className="dashboard-sidebar-utility" to={logoutRoute}>
            <span className="dashboard-sidebar-icon dashboard-sidebar-icon-logout" aria-hidden="true" />
            <span>Logout</span>
          </NavLink>
        </div>
      </aside>

      <main className="dashboard-content">
        <div className="dashboard-main-panel">
          <section className={`hero-card ${heroVariant}`}>
            <div>
              <p className="eyebrow">{heroEyebrow}</p>
              <h2>{heroTitle}</h2>
              <p className="hero-copy">{heroCopy}</p>
            </div>
            {heroActions ? <div className="hero-actions">{heroActions}</div> : null}
          </section>

          {children}
        </div>
      </main>
    </div>
  );
}
