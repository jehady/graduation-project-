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

const orderStats = [
  { label: "Total orders", value: "8,912", trend: "Real-time platform volume" },
  { label: "Pending", value: "320", trend: "Awaiting assignment" },
  { label: "In progress", value: "518", trend: "Active operations" },
  { label: "Completed today", value: "1,074", trend: "Closed successfully" },
];

const orderColumns = [
  { key: "orderId", label: "Order ID" },
  { key: "customer", label: "Customer" },
  { key: "service", label: "Service" },
  { key: "assignee", label: "Assigned" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

const orderRows = [
  {
    id: "o1",
    orderId: "#ORD-7721",
    customer: "Ahmed Mansour",
    service: "Plumbing",
    assignee: "Sami Rebai",
    status: "Assigned",
    amount: "$48",
  },
  {
    id: "o2",
    orderId: "#ORD-7722",
    customer: "Rana Khaled",
    service: "Electrical",
    assignee: "Pending",
    status: "Pending",
    amount: "$72",
  },
  {
    id: "o3",
    orderId: "#ORD-7723",
    customer: "Nadine Saleh",
    service: "HVAC",
    assignee: "Omar Hamza",
    status: "Completed",
    amount: "$95",
  },
];

export default function AdminOrdersPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Order operations"
      heroEyebrow="Orders management"
      heroTitle="Track all service transactions across the platform."
      heroCopy="This page follows the Stitch admin orders management direction and gives us a clean base for timelines, history, and filters."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <button className="primary-button" type="button">
            Export data
          </button>
          <button className="secondary-button" type="button">
            Create report
          </button>
        </>
      }
    >
      <StatsGrid items={orderStats} />
      <RecordsTable
        eyebrow="Orders"
        title="Platform order stream"
        columns={orderColumns}
        rows={orderRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search order, customer, or provider..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Assigned</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 8,912 orders" />}
        renderCell={(row, column) => {
          if (column.key === "orderId") {
            return <StackText primary={row.orderId} secondary={row.amount} />;
          }

          if (column.key === "customer") {
            return <StackText primary={row.customer} secondary={`Service: ${row.service}`} />;
          }

          if (column.key === "service") {
            return <MetricText>{row.service}</MetricText>;
          }

          if (column.key === "assignee") {
            return row.assignee === "Pending" ? (
              <StatusBadge status="Unassigned" tone="danger-soft" />
            ) : (
              row.assignee
            );
          }

          if (column.key === "status") {
            const tone =
              row.status === "Completed"
                ? "success-soft"
                : row.status === "Pending"
                  ? "danger-soft"
                  : "neutral";
            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "actions") {
            return <TableActions name={row.orderId} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

