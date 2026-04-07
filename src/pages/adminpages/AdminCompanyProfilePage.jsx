import { Link } from "react-router-dom";
import DetailListPanel from "../../components/portalPages/DetailListPanel";
import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import {
  adminCompanyProfileDetails,
  adminCompanyProfileStats,
} from "../../data/mockData/admin/overview";
import { adminNavItems } from "../../data/nav";

export default function AdminCompanyProfilePage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Company profile"
      heroEyebrow="Company profile"
      heroTitle="Enterprise overview with profile details, metrics, and controls."
      heroCopy="This page is adapted from the Stitch company profile screen and is ready for verification, suspension, and company performance data."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/companies/edit">
            Edit company
          </Link>
          <Link className="secondary-button" to="/admin/companies/edit">
            Verify docs
          </Link>
          <Link className="primary-button" to="/admin/companies">
            Suspend
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">ST</div>
          <div>
            <h3>Starlight Tech Solutions</h3>
            <p className="muted-line">Professional software development and cloud solutions</p>
          </div>
        </div>
      </section>

      <StatsGrid items={adminCompanyProfileStats} />
      <DetailListPanel eyebrow="Profile details" title="Company overview" items={adminCompanyProfileDetails} />
    </PortalLayout>
  );
}

