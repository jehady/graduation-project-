import { Link } from "react-router-dom";
import ListPanel from "../../components/ListPanel";
import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import {
  adminDashboardMetrics,
  adminDashboardQueue,
  adminDashboardWorkflows,
} from "../../data/mockData/admin/overview";
import { adminNavItems } from "../../data/nav";

export default function AdminDashboardPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="System Operations Lead"
      heroEyebrow="Operations overview"
      heroTitle="Command center for approvals, analytics, and governance."
      heroCopy="This screen is based on your Stitch admin dashboard and aligned with the use cases for statistics, provider review, and role management."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="primary-button" to="/admin/providers/requests">
            Review new providers
          </Link>
          <Link className="secondary-button" to="/admin/orders">
            Open orders
          </Link>
        </>
      }
    >
      <StatsGrid items={adminDashboardMetrics} />

      <section className="content-grid">
        <ListPanel eyebrow="Workflows" title="Admin modules from Stitch" items={adminDashboardWorkflows} />
        <ListPanel eyebrow="Queue" title="Recent approval activity" items={adminDashboardQueue} />
      </section>
    </PortalLayout>
  );
}

