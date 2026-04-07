import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminAddServiceSections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminAddServicePage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Service catalog"
      heroEyebrow="Add service"
      heroTitle="Create a new sub-service inside the marketplace catalog."
      heroCopy="This page is adapted from the Stitch add new sub-service screen and is ready for catalog management workflows."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <Link className="secondary-button" to="/admin/services">
            Cancel
          </Link>
          <Link className="primary-button" to="/admin/services">
            Create service
          </Link>
        </>
      }
    >
      <FormSections
        eyebrow="Service creation"
        sections={adminAddServiceSections}
        placeholderMode="label"
      />
    </PortalLayout>
  );
}

