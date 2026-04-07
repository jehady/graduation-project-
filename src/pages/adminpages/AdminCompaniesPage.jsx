import { Link } from "react-router-dom";
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

const companyStats = [
  { label: "Total companies", value: "890", trend: "+5.3% growth" },
  { label: "Active companies", value: "750", trend: "Healthy enterprise base" },
  { label: "Pending verification", value: "45", trend: "Needs review" },
  { label: "Banned companies", value: "12", trend: "Policy enforcement" },
];

const companyColumns = [
  { key: "company", label: "Company" },
  { key: "industry", label: "Industry" },
  { key: "employees", label: "Employees" },
  { key: "status", label: "Status" },
  { key: "location", label: "Location" },
  { key: "actions", label: "Actions" },
];

const companyRows = [
  {
    id: "co1",
    company: "Global Logistics Corp",
    companyId: "CO-10084",
    industry: "Logistics",
    employees: "148",
    status: "Verified",
    location: "Damascus",
    contact: "ops@glc.com",
    tone: "sand",
  },
  {
    id: "co2",
    company: "BrightBuild Group",
    companyId: "CO-10091",
    industry: "Construction",
    employees: "89",
    status: "Pending",
    location: "Hama",
    contact: "contact@brightbuild.com",
    tone: "amber",
  },
  {
    id: "co3",
    company: "Nova Health Systems",
    companyId: "CO-10095",
    industry: "Healthcare",
    employees: "212",
    status: "Restricted",
    location: "Aleppo",
    contact: "admin@novahealth.com",
    tone: "stone",
  },
];

export default function AdminCompaniesPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Company operations"
      heroEyebrow="Company management"
      heroTitle="Oversee enterprise accounts, verification, and workforce scale."
      heroCopy="This page follows the Stitch company management screen and gives us a strong foundation for company controls and verification workflows."
      heroVariant="hero-card-admin"
      heroActions={
        <Link className="primary-button" to="/admin/companies/add">
          Add company
        </Link>
      }
    >
      <StatsGrid items={companyStats} />
      <RecordsTable
        eyebrow="Companies"
        title="Enterprise directory"
        columns={companyColumns}
        rows={companyRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search company, email, or ID..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Restricted</option>
              </select>
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Industries">
                <option>All Industries</option>
                <option>Logistics</option>
                <option>Construction</option>
                <option>Healthcare</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 890 companies" />}
        renderCell={(row, column) => {
          if (column.key === "company") {
            return (
              <EntityCell
                name={row.company}
                meta={`${row.companyId} - ${row.contact}`}
                tone={row.tone}
              />
            );
          }

          if (column.key === "industry") {
            return <StackText primary={row.industry} secondary={row.location} />;
          }

          if (column.key === "employees") {
            return <MetricText>{row.employees} staff</MetricText>;
          }

          if (column.key === "status") {
            const tone =
              row.status === "Verified"
                ? "success-soft"
                : row.status === "Restricted"
                  ? "danger-soft"
                  : "neutral";
            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "actions") {
            return <TableActions name={row.company} danger={row.status === "Restricted"} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

