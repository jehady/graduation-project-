import { Link } from "react-router-dom";
import FormSections from "../../components/portalPages/FormSections";
import PortalLayout from "../../components/PortalLayout";
import { companyAddEmployeeSections } from "../../data/mockData/company/forms";
import { companyNavItems } from "../../data/nav";

export default function CompanyAddEmployeePage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Employee onboarding"
      heroEyebrow="Add employee"
      heroTitle="Create a new workforce member with role and access settings."
      heroCopy="This page is adapted from the Stitch add new employee screen and is ready for real onboarding form logic."
      heroVariant="hero-card-company"
      heroActions={
        <>
          <Link className="secondary-button" to="/company/employees">
            Back to employees
          </Link>
          <Link className="primary-button" to="/company/employees">
            Create employee
          </Link>
        </>
      }
    >
      <FormSections
        eyebrow="Employee onboarding"
        sections={companyAddEmployeeSections}
        placeholderMode="label"
      />
    </PortalLayout>
  );
}

