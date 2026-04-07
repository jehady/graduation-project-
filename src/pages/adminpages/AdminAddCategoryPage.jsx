import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminAddCategorySections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminAddCategoryPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Category editor"
      heroEyebrow="Add category"
      heroTitle="Create a new service category for platform discovery."
      heroCopy="This page is adapted from the Stitch add category screen and is ready for category taxonomy and icon selection flows."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/services">
            Cancel
          </Link>
          <Link className="primary-button" to="/admin/services">
            Save category
          </Link>
        </>
      }
    >
      <FormSections
        eyebrow="Category creation"
        sections={adminAddCategorySections}
        placeholderMode="label"
      />
    </PortalLayout>
  );
}

