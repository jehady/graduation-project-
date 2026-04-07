import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import {
  MetricText,
  StackText,
  StatusBadge,
  TableActions,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { adminNavItems } from "../../data/nav";

const stats = [
  { label: "Active subscriptions", value: "1,284", trend: "+12.5%" },
  { label: "Monthly revenue", value: "$45,200", trend: "+8.2%" },
  { label: "Expiring soon", value: "86", trend: "Next 7 days" },
  { label: "Popular package", value: "Pro Plan", trend: "62% share" },
];

const columns = [
  { key: "package", label: "Package" },
  { key: "subscribers", label: "Subscribers" },
  { key: "price", label: "Price" },
  { key: "renewal", label: "Renewal" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

const rows = [
  {
    id: "sub1",
    package: "Pro Plan",
    packageId: "PK-1101",
    subscribers: "802",
    price: "$39/mo",
    renewal: "Auto",
    status: "Active",
    cycle: "Monthly billing",
  },
  {
    id: "sub2",
    package: "Enterprise",
    packageId: "PK-1102",
    subscribers: "214",
    price: "$129/mo",
    renewal: "Manual",
    status: "Active",
    cycle: "Custom contract",
  },
  {
    id: "sub3",
    package: "Starter",
    packageId: "PK-1103",
    subscribers: "268",
    price: "$15/mo",
    renewal: "Auto",
    status: "Active",
    cycle: "Monthly billing",
  },
];

export default function AdminSubscriptionsPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Subscription desk"
      heroEyebrow="Subscriptions"
      heroTitle="Manage package performance, renewals, and subscription revenue."
      heroCopy="This page is adapted from the Stitch subscription management screen and is ready for billing and package administration flows."
      heroVariant="hero-card-admin"
      heroActions={
        <button className="primary-button" type="button">
          Create new package
        </button>
      }
    >
      <StatsGrid items={stats} />
      <RecordsTable
        eyebrow="Packages"
        title="Subscription package overview"
        columns={columns}
        rows={rows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search package, price, or plan code..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Active</option>
                <option>Archived</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 1,284 subscription plans" />}
        renderCell={(row, column) => {
          if (column.key === "package") {
            return <StackText primary={row.package} secondary={row.packageId} />;
          }

          if (column.key === "subscribers") {
            return <MetricText>{row.subscribers} accounts</MetricText>;
          }

          if (column.key === "price") {
            return <StackText primary={row.price} secondary={row.cycle} />;
          }

          if (column.key === "status") {
            return <StatusBadge status={row.status} tone="success-soft" />;
          }

          if (column.key === "actions") {
            return <TableActions name={row.package} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

