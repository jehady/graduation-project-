import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminSystemSettingsSections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminSystemSettingsPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Platform configuration"
      heroEyebrow="System settings"
      heroTitle="Configure global platform parameters and enterprise rules."
      heroCopy="This page is adapted from the Stitch system settings screen and is ready for persistent platform configuration."
      heroVariant="hero-card-admin"
      heroActions={
        <button className="primary-button" type="button">
          Save all changes
        </button>
      }
    >
      <FormSections eyebrow="System settings" sections={adminSystemSettingsSections} />
    </PortalLayout>
  );
}

