import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { companyAssignTaskSections } from "../../data/mockData/company/forms";
import { companyNavItems } from "../../data/nav";

export default function CompanyAssignTaskPage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Task assignment"
      heroEyebrow="Assign task"
      heroTitle="Assign a new task to an available employee."
      heroCopy="This page is adapted from the Stitch assign task screen and is ready for dispatch and workforce scheduling flows."
      heroVariant="hero-card-company"
      heroActions={
        <>
          <Link className="secondary-button" to="/company/employees">
            Cancel
          </Link>
          <Link className="primary-button" to="/company/logs">
            Assign task
          </Link>
        </>
      }
    >
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">MC</div>
          <div>
            <h3>Marcus Chen</h3>
            <p className="muted-line">Lead Designer | Senior | Available</p>
          </div>
        </div>
      </section>
      <FormSections eyebrow="Task assignment" sections={companyAssignTaskSections} />
    </PortalLayout>
  );
}

