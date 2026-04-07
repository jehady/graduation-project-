import { Link } from "react-router-dom";
import { marketingNavLinks } from "../../data/mockData/marketing";

export default function MarketingNav() {
  return (
    <nav className="marketing-nav">
      <div className="marketing-nav-inner">
        <div className="marketing-brand">Khadmeni</div>
        <div className="marketing-nav-links">
          {marketingNavLinks.map((link) => (
            <a
              key={link.href}
              className={
                link.active
                  ? "marketing-nav-link marketing-nav-link-active"
                  : "marketing-nav-link"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="marketing-nav-actions">
          <Link className="marketing-login-link" to="/company/login">
            Login
          </Link>
          <Link className="marketing-primary-cta marketing-primary-cta-small" to="/register/company">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
