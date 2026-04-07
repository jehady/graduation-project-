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

const complaintStats = [
  { label: "Total complaints", value: "1,284", trend: "+12.5%" },
  { label: "Open disputes", value: "42", trend: "Active" },
  { label: "Pending resolution", value: "15", trend: "-2.4%" },
  { label: "Resolved", value: "1,227", trend: "High closure rate" },
];

const complaintColumns = [
  { key: "ticket", label: "Ticket" },
  { key: "source", label: "Filed By" },
  { key: "subject", label: "Subject" },
  { key: "status", label: "Status" },
  { key: "priority", label: "Priority" },
  { key: "actions", label: "Actions" },
];

const complaintRows = [
  {
    id: "c1",
    ticket: "#CMP-9001",
    source: "User",
    subject: "Late technician arrival",
    status: "Open",
    priority: "High",
    owner: "Ahmed Mansour",
  },
  {
    id: "c2",
    ticket: "#CMP-9002",
    source: "Provider",
    subject: "Payment mismatch",
    status: "Pending",
    priority: "Medium",
    owner: "FixPoint Team",
  },
  {
    id: "c3",
    ticket: "#CMP-9003",
    source: "User",
    subject: "Incomplete service",
    status: "Resolved",
    priority: "High",
    owner: "Nadine Saleh",
  },
];

export default function AdminComplaintsPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Complaints desk"
      heroEyebrow="Complaints management"
      heroTitle="Review and resolve disputes between users and providers."
      heroCopy="This page is adapted from the Stitch complaints management screen and is ready for escalation, moderation, and reporting workflows."
      heroVariant="hero-card-admin"
      heroActions={
        <button className="secondary-button" type="button">
          Export report
        </button>
      }
    >
      <StatsGrid items={complaintStats} />
      <RecordsTable
        eyebrow="Complaints"
        title="Dispute queue"
        columns={complaintColumns}
        rows={complaintRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search ticket, subject, or owner..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Open</option>
                <option>Pending</option>
                <option>Resolved</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 1,284 complaints" />}
        renderCell={(row, column) => {
          if (column.key === "ticket") {
            return <StackText primary={row.ticket} secondary={row.owner} />;
          }

          if (column.key === "subject") {
            return <MetricText>{row.subject}</MetricText>;
          }

          if (column.key === "status") {
            const tone =
              row.status === "Resolved"
                ? "success-soft"
                : row.status === "Open"
                  ? "danger-soft"
                  : "neutral";
            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "priority") {
            const tone = row.priority === "High" ? "danger-soft" : "neutral";
            return <StatusBadge status={row.priority} tone={tone} />;
          }

          if (column.key === "actions") {
            return <TableActions name={row.ticket} danger={row.priority === "High"} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

