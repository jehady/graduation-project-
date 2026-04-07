import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminAddCompanySections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminAddCompanyPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Company registration"
      heroEyebrow="Add company"
      heroTitle="Register a new company with operational and verification details."
      heroCopy="This page is adapted from the Stitch add company screen and is ready for real registration validation and document uploads."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/companies">
            Cancel
          </Link>
          <Link className="primary-button" to="/admin/companies">
            Register company
          </Link>
        </>
      }
    >
      <FormSections
        eyebrow="Company registration"
        sections={adminAddCompanySections}
        placeholderMode="label"
      />
    </PortalLayout>
  );
}

