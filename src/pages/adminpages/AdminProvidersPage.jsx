import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import {
  EntityCell,
  MetricText,
  StackText,
  StatusBadge,
  TableActions,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { adminNavItems } from "../../data/nav";

const providerStats = [
  { label: "Total providers", value: "1,284", trend: "+12% vs last month" },
  { label: "Active", value: "1,150", trend: "High approval ratio" },
  { label: "Pending review", value: "85", trend: "Needs KYC action" },
  { label: "Suspended", value: "49", trend: "Under policy review" },
];

const providerColumns = [
  { key: "name", label: "Provider" },
  { key: "service", label: "Service" },
  { key: "status", label: "Status" },
  { key: "requests", label: "Requests" },
  { key: "region", label: "Region" },
  { key: "actions", label: "Actions" },
];

const providerRows = [
  {
    id: "p1",
    name: "Omar Technical Group",
    providerId: "PR-20184",
    service: "Electrical",
    status: "Pending KYC",
    requests: "128",
    region: "Damascus",
    since: "Joined Nov 2023",
    tone: "sand",
  },
  {
    id: "p2",
    name: "FixPoint Solutions",
    providerId: "PR-20192",
    service: "HVAC",
    status: "Active",
    requests: "342",
    region: "Homs",
    since: "Joined Jan 2024",
    tone: "amber",
  },
  {
    id: "p3",
    name: "SafeHome Plumbing",
    providerId: "PR-20201",
    service: "Plumbing",
    status: "Suspended",
    requests: "74",
    region: "Aleppo",
    since: "Joined Sep 2023",
    tone: "stone",
  },
];

export default function AdminProvidersPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Provider operations"
      heroEyebrow="Provider management"
      heroTitle="Review, approve, and monitor all platform providers."
      heroCopy="This page is adapted from the Stitch provider management screen and is ready for real provider API data."
      heroVariant="hero-card-admin"
      heroActions={
        <button className="primary-button" type="button">
          Add new provider
        </button>
      }
    >
      <StatsGrid items={providerStats} />
      <RecordsTable
        eyebrow="Registry"
        title="Provider directory"
        columns={providerColumns}
        rows={providerRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search providers, service, or ID..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending KYC</option>
                <option>Suspended</option>
              </select>
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Services">
                <option>All Services</option>
                <option>Electrical</option>
                <option>HVAC</option>
                <option>Plumbing</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 1,284 providers" />}
        renderCell={(row, column) => {
          if (column.key === "name") {
            return (
              <EntityCell
                name={row.name}
                meta={`${row.providerId} - ${row.since}`}
                tone={row.tone}
              />
            );
          }

          if (column.key === "service") {
            return <StackText primary={row.service} secondary={row.region} />;
          }

          if (column.key === "status") {
            const tone =
              row.status === "Active"
                ? "success-soft"
                : row.status === "Suspended"
                  ? "danger-soft"
                  : "neutral";
            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "requests") {
            return <MetricText>{row.requests} jobs</MetricText>;
          }

          if (column.key === "actions") {
            return <TableActions name={row.name} danger={row.status === "Suspended"} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

