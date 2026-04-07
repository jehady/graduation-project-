import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { adminRewardsSections } from "../../data/mockData/admin/forms";
import { adminNavItems } from "../../data/nav";

export default function AdminRewardsPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Rewards engine"
      heroEyebrow="Rewards and loyalty"
      heroTitle="Configure points, tiers, and redemption rules platform-wide."
      heroCopy="This page is adapted from the Stitch rewards and loyalty screen and is ready for global loyalty settings."
      heroVariant="hero-card-admin"
      heroActions={
        <button className="primary-button" type="button">
          Save changes
        </button>
      }
    >
      <FormSections eyebrow="Rewards settings" sections={adminRewardsSections} />
    </PortalLayout>
  );
}

