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

const logStats = [
  { label: "Log entries", value: "240", trend: "Updated live" },
  { label: "Assigned today", value: "31", trend: "Healthy dispatch load" },
  { label: "Delayed", value: "4", trend: "Requires follow-up" },
  { label: "Resolved", value: "226", trend: "Strong completion rate" },
];

const logColumns = [
  { key: "order", label: "Order ID" },
  { key: "employee", label: "Employee" },
  { key: "assignedBy", label: "Assigned By" },
  { key: "assignmentTime", label: "Assignment Time" },
  { key: "status", label: "Status" },
];

const logRows = [
  {
    id: "l1",
    logId: "#DL-101",
    employee: "Khaled Yasin",
    order: "#CMP-201",
    assignedBy: "Mariam Saad",
    assignmentTime: "09:40 AM",
    status: "Delivered",
  },
  {
    id: "l2",
    logId: "#DL-102",
    employee: "Rami Zaid",
    order: "#CMP-202",
    assignedBy: "Anas Hatem",
    assignmentTime: "10:05 AM",
    status: "Delayed",
  },
  {
    id: "l3",
    logId: "#DL-103",
    employee: "Nour Qassem",
    order: "#CMP-203",
    assignedBy: "Lina Hassan",
    assignmentTime: "10:22 AM",
    status: "In transit",
  },
  {
    id: "l4",
    logId: "#DL-104",
    employee: "Sami Rebai",
    order: "#CMP-204",
    assignedBy: "Mariam Saad",
    assignmentTime: "11:10 AM",
    status: "Assigned",
  },
];

export default function CompanyDistributionLogsPage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Distribution tracking"
      heroEyebrow="Distribution logs"
      heroTitle="Track dispatch history and delivery movement in one place."
      heroCopy="This screen now follows the Stitch distribution log structure more closely with a filter bar, assignment metadata, and clearer status tracking."
      heroVariant="hero-card-company"
      heroActions={
        <button className="primary-button" type="button">
          Export logs
        </button>
      }
    >
      <StatsGrid items={logStats} />
      <article className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Log filters</p>
            <h3>Orchestrate assignment history</h3>
          </div>
        </div>
        <div className="form-grid">
          <label className="form-field">
            <span>Order ID</span>
            <input placeholder="#ORD-XXXX" type="text" />
          </label>
          <label className="form-field">
            <span>Employee</span>
            <select defaultValue="all">
              <option value="all">All employees</option>
              <option value="khaled">Khaled Yasin</option>
              <option value="rami">Rami Zaid</option>
              <option value="nour">Nour Qassem</option>
            </select>
          </label>
          <label className="form-field">
            <span>Date range</span>
            <input defaultValue="Oct 12 - Oct 19, 2023" type="text" />
          </label>
          <label className="form-field">
            <span>Status</span>
            <select defaultValue="all">
              <option value="all">All statuses</option>
              <option value="assigned">Assigned</option>
              <option value="delivered">Delivered</option>
              <option value="delayed">Delayed</option>
            </select>
          </label>
        </div>
      </article>
      <RecordsTable
        eyebrow="Logs"
        title="Distribution activity"
        columns={logColumns}
        rows={logRows}
        toolbar={
          <div className="table-toolbar-group table-toolbar-grow">
            <TableSearchField placeholder="Search orders, employees, or managers..." />
          </div>
        }
        footer={<TableFooter label="Showing 1 to 10 of 240 distribution logs" />}
        renderCell={(row, column) => {
          if (column.key === "order") {
            return <StackText primary={row.order} secondary={row.logId} />;
          }

          if (column.key === "status") {
            const tone =
              row.status === "Delivered"
                ? "success-soft"
                : row.status === "Delayed"
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

