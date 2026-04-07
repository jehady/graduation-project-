import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminEditCompanySections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminEditCompanyPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Company editor"
      heroEyebrow="Edit company"
      heroTitle="Update legal, operational, and profile details for one company."
      heroCopy="This page is adapted from the Stitch edit company screen and provides a clean form structure for admin updates."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/companies/profile">
            Public profile
          </Link>
          <Link className="primary-button" to="/admin/companies/profile">
            Save changes
          </Link>
        </>
      }
    >
      <FormSections eyebrow="Company editor" sections={adminEditCompanySections} />
    </PortalLayout>
  );
}

