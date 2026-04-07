import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import {
  StackText,
  StatusBadge,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { companyNavItems } from "../../data/nav";

const orderStats = [
  { label: "Open orders", value: "124", trend: "Need dispatch attention" },
  { label: "Assigned", value: "78", trend: "In technician queue" },
  { label: "In progress", value: "33", trend: "Live work ongoing" },
  { label: "Today's load", value: "18", trend: "5 tasks still unassigned" },
];

const orderColumns = [
  { key: "orderId", label: "Order ID" },
  { key: "client", label: "Client" },
  { key: "service", label: "Service" },
  { key: "employee", label: "Employee" },
  { key: "status", label: "Status" },
];

const orderRows = [
  {
    id: "c1",
    orderId: "#CMP-201",
    client: "Al Noor Mall",
    service: "Maintenance",
    employee: "Khaled Yasin",
    status: "Assigned",
    scheduledTime: "10:30 AM",
  },
  {
    id: "c2",
    orderId: "#CMP-202",
    client: "Dar Clinic",
    service: "Electrical",
    employee: "Pending",
    status: "Pending",
    scheduledTime: "12:00 PM",
  },
  {
    id: "c3",
    orderId: "#CMP-203",
    client: "Elite Tower",
    service: "HVAC",
    employee: "Rami Zaid",
    status: "Completed",
    scheduledTime: "02:15 PM",
  },
  {
    id: "c4",
    orderId: "#CMP-204",
    client: "Al Bayan Offices",
    service: "Networking",
    employee: "Salma Nasser",
    status: "In Progress",
    scheduledTime: "03:40 PM",
  },
];

export default function CompanyOrdersPage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Order coordination"
      heroEyebrow="Orders management"
      heroTitle="Oversee service requests and technical assignments."
      heroCopy="This screen now mirrors the Stitch order board more closely with quick status filters, a stronger search bar, and clearer assignment states."
      heroVariant="hero-card-company"
      heroActions={
        <button className="primary-button" type="button">
          Create new order
        </button>
      }
    >
      <StatsGrid items={orderStats} />
      <div className="status-pill-row">
        <button className="status-pill status-pill-active" type="button">
          All Orders
        </button>
        <button className="status-pill" type="button">
          Pending
        </button>
        <button className="status-pill" type="button">
          Assigned
        </button>
        <button className="status-pill" type="button">
          Completed
        </button>
      </div>
      <RecordsTable
        eyebrow="Orders"
        title="Company order board"
        columns={orderColumns}
        rows={orderRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search orders..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select" defaultValue="all">
                <option value="all">All services</option>
                <option value="maintenance">Maintenance</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">HVAC</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 124 company orders" />}
        renderCell={(row, column) => {
          if (column.key === "orderId") {
            return <StackText primary={row.orderId} secondary={row.scheduledTime} />;
          }

          if (column.key === "client") {
            return <StackText primary={row.client} secondary={row.service} />;
          }

          if (column.key === "employee") {
            return row.employee === "Pending" ? (
              <StatusBadge status="Unassigned" tone="danger-soft" />
            ) : (
              row.employee
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

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

