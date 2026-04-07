import PortalLayout from "../../components/PortalLayout";
import StatsGrid from "../../components/StatsGrid";
import { adminNavItems } from "../../data/nav";

const orderStats = [
  { label: "Service type", value: "Plumbing", trend: "Residential request" },
  { label: "Status", value: "In Progress", trend: "Live tracking enabled" },
  { label: "Total amount", value: "$85.00", trend: "Current invoice" },
  { label: "Order date", value: "Oct 24, 2023", trend: "09:00 AM placed" },
];

const parties = [
  {
    title: "Customer",
    detail: "Amira Ben Salem | +216 22 345 678 | Rue de la Liberte, Tunis",
  },
  {
    title: "Provider",
    detail: "Ahmed Mansour | Premium provider | 4.9 rating",
  },
];

const historyItems = [
  {
    title: "Order created",
    detail: "Customer submitted a plumbing request with home address details.",
  },
  {
    title: "Provider accepted",
    detail: "Ahmed Mansour confirmed availability and entered the active queue.",
  },
  {
    title: "Technician dispatched",
    detail: "Support team escalated route details and marked job in progress.",
  },
];

export default function AdminOrderHistoryPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Order history"
      heroEyebrow="Order details"
      heroTitle="History view for one order with customer and provider context."
      heroCopy="This page is adapted from the Stitch order details history screen and is ready for support workflows, receipts, and status overrides."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <button className="secondary-button" type="button">
            Print receipt
          </button>
          <button className="secondary-button" type="button">
            Message support
          </button>
          <button className="primary-button" type="button">
            Force update status
          </button>
        </>
      }
    >
      <StatsGrid items={orderStats} />

      <section className="content-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Parties</p>
              <h3>Service participants</h3>
            </div>
          </div>
          <div className="list-stack">
            {parties.map((item) => (
              <div key={item.title} className="list-row">
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">History</p>
              <h3>Operational events</h3>
            </div>
          </div>
          <div className="timeline">
            {historyItems.map((item, index) => (
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
      </section>
    </PortalLayout>
  );
}

