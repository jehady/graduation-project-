import { Link } from "react-router-dom";
import ListPanel from "../../components/ListPanel";
import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import {
  companyDashboardHighlights,
  companyDashboardOperations,
  companyDashboardStats,
} from "../../data/mockData/company/overview";
import { companyNavItems } from "../../data/nav";

export default function CompanyDashboardPage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Operations manager"
      heroEyebrow="Company workspace"
      heroTitle="Coordinate employees, orders, and distribution from one view."
      heroCopy="This screen follows your Stitch company dashboard and the company use cases for employees, orders, profile updates, and devices."
      heroVariant="hero-card-company"
      heroActions={
        <>
          <Link className="primary-button" to="/company/employees">
            Manage employees
          </Link>
          <Link className="secondary-button" to="/company/orders">
            Open orders
          </Link>
        </>
      }
    >
      <StatsGrid items={companyDashboardStats} />

      <section className="content-grid">
        <ListPanel eyebrow="Operations" title="Company modules from Stitch" items={companyDashboardOperations} />
        <ListPanel eyebrow="Orders" title="Recent operational highlights" items={companyDashboardHighlights} />
      </section>
    </PortalLayout>
  );
}

