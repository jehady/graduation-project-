import { Link } from "react-router-dom";
import DetailListPanel from "../../components/portalPages/DetailListPanel";
import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import {
  adminProviderProfileDetails,
  adminProviderProfileDocs,
  adminProviderProfileStats,
} from "../../data/mockData/admin/overview";
import { adminNavItems } from "../../data/nav";

export default function AdminProviderProfilePage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Provider review"
      heroEyebrow="Provider profile"
      heroTitle="KYC review and administrative controls for one provider."
      heroCopy="This page is adapted from the Stitch provider profile KYC screen and is ready for real moderation actions and verification data."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/providers">
            Ban account
          </Link>
          <Link className="primary-button" to="/admin/providers">
            Approve profile
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">AM</div>
          <div>
            <h3>Ahmed Mansour</h3>
            <p className="muted-line">Active provider | Premium account</p>
          </div>
        </div>
      </section>

      <StatsGrid items={adminProviderProfileStats} />

      <section className="detail-grid">
        <DetailListPanel eyebrow="Profile details" title="Basic information" items={adminProviderProfileDetails} />

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Verification</p>
              <h3>KYC checklist</h3>
            </div>
          </div>
          <div className="list-stack">
            {adminProviderProfileDocs.map((item) => (
              <div key={item} className="list-row">
                <strong>{item}</strong>
                <span>Document available for admin validation.</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </PortalLayout>
  );
}

