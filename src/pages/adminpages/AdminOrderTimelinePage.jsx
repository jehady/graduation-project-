import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import { adminNavItems } from "../../data/nav";

const orderStats = [
  { label: "Service type", value: "Plumbing", trend: "Home repair request" },
  { label: "Total price", value: "120 TND", trend: "Invoice generated" },
  { label: "Assigned to", value: "Sami Rebai", trend: "Field technician" },
  { label: "Status", value: "Completed", trend: "Closed successfully" },
];

const timeline = [
  { title: "Order submitted", detail: "User created request at 09:14 AM." },
  { title: "Provider matched", detail: "System routed order to provider pool." },
  { title: "Employee assigned", detail: "Sami Rebai accepted dispatch." },
  { title: "Work completed", detail: "Customer confirmed successful completion." },
];

export default function AdminOrderTimelinePage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Order detail tracking"
      heroEyebrow="Order details"
      heroTitle="Timeline view for one order across its full lifecycle."
      heroCopy="This page is adapted from the Stitch order details timeline screen and is ready for live operational events and support actions."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <button className="secondary-button" type="button">
            Download invoice
          </button>
          <button className="primary-button" type="button">
            Contact support
          </button>
        </>
      }
    >
      <StatsGrid items={orderStats} />

      <article className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Timeline</p>
            <h3>Order #ORD-9921 activity</h3>
          </div>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-dot">{index + 1}</div>
              <div className="timeline-content">
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </PortalLayout>
  );
}

