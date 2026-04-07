import { Link } from "react-router-dom";
import DetailListPanel from "../../components/portalPages/DetailListPanel";
import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import {
  adminUserProfileDetails,
  adminUserProfileStats,
} from "../../data/mockData/admin/overview";
import { adminNavItems } from "../../data/nav";

export default function AdminUserProfilePage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="User profile"
      heroEyebrow="User profile"
      heroTitle="Profile details, activity, and account controls for one user."
      heroCopy="This page is adapted from the Stitch user profile view and is ready for support, moderation, and loyalty management actions."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="primary-button" to="/admin/users/edit">
            Edit profile
          </Link>
          <Link className="secondary-button" to="/admin/users">
            Reset password
          </Link>
          <Link className="secondary-button" to="/admin/users">
            Add points
          </Link>
          <Link className="secondary-button" to="/admin/users">
            Ban user
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">AM</div>
          <div>
            <h3>Aria Montgomery</h3>
            <p className="muted-line">#USR-8821 | Active account</p>
          </div>
        </div>
      </section>
      <StatsGrid items={adminUserProfileStats} />
      <DetailListPanel eyebrow="Profile details" title="User overview" items={adminUserProfileDetails} />
    </PortalLayout>
  );
}

