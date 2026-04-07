import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminEditUserSections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminEditUserPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="User editor"
      heroEyebrow="Edit user"
      heroTitle="Update user profile, status, and account details."
      heroCopy="This page is adapted from the Stitch edit user profile screen and is ready for moderation and account management flows."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/users/profile">
            Cancel
          </Link>
          <Link className="primary-button" to="/admin/users/profile">
            Save changes
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">AM</div>
          <div>
            <h3>Aria Montgomery</h3>
            <p className="muted-line">Editable user account and permissions</p>
          </div>
        </div>
      </section>

      <FormSections eyebrow="User editor" sections={adminEditUserSections} />
    </PortalLayout>
  );
}

