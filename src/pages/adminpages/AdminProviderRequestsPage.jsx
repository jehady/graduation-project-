import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import {
  EntityCell,
  StatusBadge,
  TableActions,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { adminNavItems } from "../../data/nav";

const stats = [
  { label: "Total pending", value: "124", trend: "+12% from last week" },
  { label: "Reviewed today", value: "45", trend: "+5.4%" },
  { label: "Rejected / banned", value: "12", trend: "-2% from yesterday" },
];

const columns = [
  { key: "applicant", label: "Applicant Name" },
  { key: "category", label: "Service Category" },
  { key: "date", label: "Applied Date" },
  { key: "kyc", label: "KYC Status" },
  { key: "actions", label: "Actions" },
];

const rows = [
  {
    id: "pr1",
    applicant: "Omar Salem",
    applicantId: "APP-3001",
    category: "Plumbing",
    date: "2026-03-21",
    kyc: "Pending",
    actions: "Review",
    tone: "sand",
  },
  {
    id: "pr2",
    applicant: "Lina Haddad",
    applicantId: "APP-3002",
    category: "Electrical",
    date: "2026-03-22",
    kyc: "Documents uploaded",
    actions: "Open",
    tone: "amber",
  },
  {
    id: "pr3",
    applicant: "Sami Nasser",
    applicantId: "APP-3003",
    category: "HVAC",
    date: "2026-03-22",
    kyc: "Requires review",
    actions: "Review",
    tone: "stone",
  },
];

export default function AdminProviderRequestsPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Provider approvals"
      heroEyebrow="Provider requests"
      heroTitle="Review new provider applications and KYC documents."
      heroCopy="This page is adapted from the Stitch new provider requests screen and is ready for approval and moderation workflows."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <button className="secondary-button" type="button">
            Export CSV
          </button>
          <button className="primary-button" type="button">
            Filter by category
          </button>
        </>
      }
    >
      <StatsGrid items={stats} />
      <RecordsTable
        eyebrow="Applications"
        title="Recent provider requests"
        columns={columns}
        rows={rows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search applicant, category, or application ID..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All KYC">
                <option>All KYC</option>
                <option>Pending</option>
                <option>Documents uploaded</option>
                <option>Requires review</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 124 provider applications" />}
        renderCell={(row, column) => {
          if (column.key === "applicant") {
            return <EntityCell name={row.applicant} meta={row.applicantId} tone={row.tone} />;
          }
          if (column.key === "kyc") {
            const tone = row.kyc === "Documents uploaded" ? "success-soft" : "neutral";
            return <StatusBadge status={row.kyc} tone={tone} />;
          }
          if (column.key === "actions") {
            return <TableActions name={row.applicant} />;
          }
          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

