import { Link } from "react-router-dom";

export default function CompanyLoginPage() {
  return (
    <div className="auth-shell">
      <div className="auth-panel auth-panel-brand">
        <span className="eyebrow">Corporate Portal</span>
        <h1 className="auth-title">Welcome back to your company dashboard.</h1>
        <p className="auth-copy">
          Manage employees, track orders, upload verification documents, and
          monitor delivery operations from one company workspace.
        </p>

        <div className="auth-badges">
          <span className="chip chip-primary">Employees</span>
          <span className="chip">Orders</span>
          <span className="chip">Distribution logs</span>
        </div>
      </div>

      <div className="auth-panel auth-panel-form">
        <div className="auth-form-header">
          <span className="eyebrow">Company access</span>
          <h2>Log in to Corporate Dashboard</h2>
          <p>Use your company credentials to continue into the workspace.</p>
        </div>

        <form className="auth-form">
          <label className="field">
            <span>Email Address</span>
            <input placeholder="admin@company.com" type="email" />
          </label>

          <label className="field">
            <span>Password</span>
            <input placeholder="Enter your password" type="password" />
          </label>

          <div className="auth-row">
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Remember this device for 30 days</span>
            </label>
            <a className="inline-link" href="/">
              Forgot password?
            </a>
          </div>

          <button className="primary-button" type="submit">
            Sign In to Dashboard
          </button>
        </form>

        <div className="auth-footer-links">
          <Link to="/company">Preview company dashboard</Link>
          <Link to="/">Back to project home</Link>
        </div>
      </div>
    </div>
  );
}

