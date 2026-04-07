import { Link } from "react-router-dom";
import PortalLayout from "../../components/PortalLayout";
import { companyEditEmployeeFields } from "../../data/mockData/company/forms";
import { companyNavItems } from "../../data/nav";

export default function CompanyEditEmployeePage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Employee editor"
      heroEyebrow="Edit employee"
      heroTitle="Update profile, role, and account status for one employee."
      heroCopy="This page follows the Stitch edit employee screen and provides a clean editing surface for workforce management."
      heroVariant="hero-card-company"
      heroActions={
        <>
          <Link className="secondary-button" to="/company/employees/profile">
            Cancel
          </Link>
          <Link className="primary-button" to="/company/employees/profile">
            Save changes
          </Link>
        </>
      }
    >
      <section className="detail-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Identity</p>
              <h3>Employee card</h3>
            </div>
          </div>
          <div className="profile-card-inner">
            <div className="profile-avatar large-avatar">AB</div>
            <strong>Ahmed Ben Salem</strong>
            <span className="muted-line">Senior Project Lead | KH-90210</span>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Details</p>
              <h3>Editable fields</h3>
            </div>
          </div>
          <div className="form-grid">
            {companyEditEmployeeFields.map(([label, value]) => (
              <label key={label} className="form-field">
                <span>{label}</span>
                <input defaultValue={value} type="text" />
              </label>
            ))}
          </div>
        </article>
      </section>
    </PortalLayout>
  );
}

