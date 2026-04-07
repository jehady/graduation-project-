import { Link } from "react-router-dom";
import { registrationSteps } from "../data/mockData/registration";

export default function CompanyRegistrationPage() {
  return (
    <div className="registration-shell">
      <header className="registration-topbar">
        <div className="registration-brand-row">
          <span className="registration-brand">Khadmeni</span>
          <span className="registration-divider" />
          <span className="registration-title">Registration Portal</span>
        </div>
        <div className="registration-topbar-actions">
          <span className="registration-support">Support Center</span>
          <Link className="registration-signin" to="/company/login">
            Sign In
          </Link>
        </div>
      </header>

      <main className="registration-main">
        <div className="registration-layout">
          <section className="registration-left">
            <div>
              <h1>Join the Orchestra.</h1>
              <p>
                Complete your company profile to start managing your global
                workforce with executive precision.
              </p>
            </div>

            <div className="registration-steps">
              {registrationSteps.map((step) => (
                <div
                  key={step.number}
                  className={step.active ? "registration-step registration-step-active" : "registration-step"}
                >
                  <div className="registration-step-number">{step.number}</div>
                  <div>
                    <span>{step.title}</span>
                    <strong>{step.detail}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="registration-quote-card">
              <div className="registration-quote-overlay">
                <p>
                  "The most efficient way to scale your management
                  infrastructure."
                </p>
              </div>
            </div>
          </section>

          <section className="registration-form-card">
            <form className="registration-form">
              <section>
                <div className="registration-section-head">
                  <h2>Company Identity</h2>
                  <p>
                    Please provide your legal business information as it appears on
                    government records.
                  </p>
                </div>

                <div className="registration-grid">
                  <label className="registration-field">
                    <span>Legal Entity Name</span>
                    <input placeholder="e.g. Khadmeni Global Solutions" type="text" />
                  </label>
                  <label className="registration-field">
                    <span>Registration Number</span>
                    <input placeholder="Tax ID or Business Reg #" type="text" />
                  </label>
                  <label className="registration-field registration-field-full">
                    <span>Headquarters Address</span>
                    <input placeholder="Street name, Building, Floor" type="text" />
                  </label>
                  <label className="registration-field">
                    <span>City</span>
                    <input placeholder="New York" type="text" />
                  </label>
                  <label className="registration-field">
                    <span>Postal Code</span>
                    <input placeholder="10001" type="text" />
                  </label>
                </div>
              </section>

              <div className="registration-section-divider" />

              <section>
                <div className="registration-section-head">
                  <h2>Business Verification</h2>
                  <p>
                    Securely upload your business license or tax certificate.
                  </p>
                </div>

                <label className="registration-upload-card">
                  <input type="file" />
                  <div className="registration-upload-icon" />
                  <strong>Click to upload or drag and drop</strong>
                  <span>PDF, JPG or PNG (max. 10MB)</span>
                </label>

                <div className="registration-security-note">
                  <div className="registration-security-icon" />
                  <p>
                    All documents are encrypted and handled in compliance with
                    global data protection standards.
                  </p>
                </div>
              </section>

              <div className="registration-form-actions">
                <Link className="registration-back-link" to="/">
                  Back to Start
                </Link>
                <button className="registration-primary-button" type="submit">
                  Save &amp; Continue
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <footer className="registration-footer">
        <div className="registration-footer-copy">
          © 2024 Khadmeni Management Systems
        </div>
        <div className="registration-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </div>
      </footer>
    </div>
  );
}
