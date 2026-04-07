import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import {
  EntityCell,
  StackText,
  StatusBadge,
  TableActions,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { adminNavItems } from "../../data/nav";

const stats = [
  { label: "Total active", value: "1,284", trend: "5.2% growth" },
  { label: "Expiring soon", value: "42", trend: "Needs attention" },
  { label: "Monthly revenue", value: "$12,450", trend: "12.4% growth" },
  { label: "Pending renewals", value: "19", trend: "Action queue" },
];

const columns = [
  { key: "provider", label: "Provider" },
  { key: "plan", label: "Plan" },
  { key: "expires", label: "Expires" },
  { key: "billing", label: "Billing" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

const rows = [
  {
    id: "ps1",
    provider: "Ahmed Mansour",
    providerId: "PR-4012",
    plan: "Premium",
    expires: "2026-04-01",
    billing: "Monthly",
    status: "Active",
    tone: "sand",
  },
  {
    id: "ps2",
    provider: "Nour Services",
    providerId: "PR-4019",
    plan: "Pro",
    expires: "2026-03-29",
    billing: "Monthly",
    status: "Renewal Due",
    tone: "amber",
  },
  {
    id: "ps3",
    provider: "FixPoint Team",
    providerId: "PR-4041",
    plan: "Enterprise",
    expires: "2026-06-12",
    billing: "Annual",
    status: "Active",
    tone: "stone",
  },
];

export default function AdminProviderSubscriptionsPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Provider subscriptions"
      heroEyebrow="Provider subscriptions"
      heroTitle="Monitor provider plans, renewals, and recurring revenue."
      heroCopy="This page is adapted from the Stitch provider subscriptions screen and is ready for subscription lifecycle actions."
      heroVariant="hero-card-admin"
      heroActions={
        <button className="primary-button" type="button">
          New subscription
        </button>
      }
    >
      <StatsGrid items={stats} />
      <RecordsTable
        eyebrow="Providers"
        title="Provider subscription registry"
        columns={columns}
        rows={rows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search provider, plan, or subscription ID..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Active</option>
                <option>Renewal Due</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 1,284 provider subscriptions" />}
        renderCell={(row, column) => {
          if (column.key === "provider") {
            return <EntityCell name={row.provider} meta={row.providerId} tone={row.tone} />;
          }

          if (column.key === "plan") {
            return <StackText primary={row.plan} secondary={`${row.billing} billing`} />;
          }

          if (column.key === "status") {
            const tone = row.status === "Active" ? "success-soft" : "neutral";
            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "actions") {
            return <TableActions name={row.provider} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

