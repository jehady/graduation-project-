import { Link } from "react-router-dom";
import DetailListPanel from "../../components/portalPages/DetailListPanel";
import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import {
  companyEmployeeProfileDetails,
  companyEmployeeProfileStats,
} from "../../data/mockData/company/overview";
import { companyNavItems } from "../../data/nav";

export default function CompanyEmployeeProfilePage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Employee profile"
      heroEyebrow="Employee profile"
      heroTitle="View one employee profile, role, and performance snapshot."
      heroCopy="This page is adapted from the Stitch employee profile screen and is ready for role changes, task history, and account actions."
      heroVariant="hero-card-company"
      heroActions={
        <>
          <Link className="secondary-button" to="/company/employees/edit">
            Edit profile
          </Link>
          <Link className="secondary-button" to="/company/employees/edit">
            Change role
          </Link>
          <Link className="primary-button" to="/company/employees">
            Remove
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">AB</div>
          <div>
            <h3>Ahmed Ben Salem</h3>
            <p className="muted-line">Senior Project Lead</p>
          </div>
        </div>
      </section>

      <StatsGrid items={companyEmployeeProfileStats} />
      <DetailListPanel eyebrow="Employee details" title="Profile overview" items={companyEmployeeProfileDetails} />
    </PortalLayout>
  );
}

