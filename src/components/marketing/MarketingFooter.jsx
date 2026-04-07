import { footerLinkGroups } from "../../data/mockData/marketing";

export default function MarketingFooter() {
  return (
    <footer className="marketing-footer">
      <div className="marketing-footer-inner">
        <div>
          <div className="marketing-footer-brand">KHADMENI</div>
          <p>
            © 2024 Khadmeni Editorial. The Modern Orchestrator. Redefining the
            professional service marketplace with executive precision.
          </p>
        </div>
        <div className="marketing-footer-links">
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h5>{group.title}</h5>
              {group.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
