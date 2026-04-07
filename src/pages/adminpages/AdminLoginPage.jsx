import { Link } from "react-router-dom";

export default function AdminLoginPage() {
  return (
    <div className="auth-shell">
      <div className="auth-panel auth-panel-brand">
        <span className="eyebrow">Admin Portal</span>
        <h1 className="auth-title">Secure access for Khadmeni administrators.</h1>
        <p className="auth-copy">
          Review providers, manage roles, monitor requests, and keep the
          platform running from one editorial dashboard.
        </p>

        <div className="auth-badges">
          <span className="chip chip-primary">RBAC control</span>
          <span className="chip">Provider approvals</span>
          <span className="chip">Platform analytics</span>
        </div>
      </div>

      <div className="auth-panel auth-panel-form">
        <div className="auth-form-header">
          <span className="eyebrow">Secure login session</span>
          <h2>Login to Admin Panel</h2>
          <p>Enter your credentials to open the administration workspace.</p>
        </div>

        <form className="auth-form">
          <label className="field">
            <span>Email Address</span>
            <input placeholder="admin@khadmeni.com" type="email" />
          </label>

          <label className="field">
            <span>Password</span>
            <input placeholder="********" type="password" />
          </label>

          <div className="auth-row">
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Keep me logged in</span>
            </label>
            <a className="inline-link" href="/">
              Forgot password?
            </a>
          </div>

          <button className="primary-button" type="submit">
            Sign In
          </button>
        </form>

        <div className="auth-footer-links">
          <Link to="/admin">Preview admin dashboard</Link>
          <Link to="/">Back to project home</Link>
        </div>
      </div>
    </div>
  );
}

