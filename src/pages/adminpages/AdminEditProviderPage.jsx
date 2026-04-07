import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminEditProviderSections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminEditProviderPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Provider editor"
      heroEyebrow="Edit provider"
      heroTitle="Update provider identity, services, and account state."
      heroCopy="This page is adapted from the Stitch edit provider profile screen and is ready for real provider update flows."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/providers/profile">
            Cancel
          </Link>
          <Link className="primary-button" to="/admin/providers/profile">
            Save changes
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">AM</div>
          <div>
            <h3>Ahmed Mansour</h3>
            <p className="muted-line">Provider ID PRV-88291 | Active status</p>
          </div>
        </div>
      </section>

      <FormSections eyebrow="Provider editor" sections={adminEditProviderSections} />
    </PortalLayout>
  );
}

