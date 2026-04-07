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

const serviceStats = [
  { label: "Categories", value: "24", trend: "Across the marketplace" },
  { label: "Sub-services", value: "118", trend: "Catalog depth" },
  { label: "Active offerings", value: "103", trend: "Currently live" },
  { label: "Draft items", value: "15", trend: "Pending publication" },
];

const serviceColumns = [
  { key: "category", label: "Category" },
  { key: "subservices", label: "Sub-services" },
  { key: "providers", label: "Providers" },
  { key: "status", label: "Status" },
  { key: "owner", label: "Owner" },
  { key: "actions", label: "Actions" },
];

const serviceRows = [
  {
    id: "s1",
    category: "Home Maintenance",
    subservices: "12",
    providers: "38",
    status: "Active",
    owner: "Platform Ops",
    code: "CAT-101",
  },
  {
    id: "s2",
    category: "Tech Support",
    subservices: "8",
    providers: "21",
    status: "Draft",
    owner: "Services Team",
    code: "CAT-102",
  },
  {
    id: "s3",
    category: "Personal Care",
    subservices: "17",
    providers: "44",
    status: "Active",
    owner: "Marketplace Admin",
    code: "CAT-103",
  },
];

export default function AdminServicesManagementPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="Services management"
      heroEyebrow="Services management"
      heroTitle="Control categories, offerings, and pricing structure from one place."
      heroCopy="This page is adapted from the Stitch services management screen and gives us a clean base for service catalog operations."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <button className="secondary-button" type="button">
            Bulk export
          </button>
          <button className="primary-button" type="button">
            Add new service
          </button>
        </>
      }
    >
      <StatsGrid items={serviceStats} />
      <RecordsTable
        eyebrow="Catalog"
        title="Service categories overview"
        columns={serviceColumns}
        rows={serviceRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search category, owner, or code..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 24 service categories" />}
        renderCell={(row, column) => {
          if (column.key === "category") {
            return <StackText primary={row.category} secondary={row.code} />;
          }

          if (column.key === "subservices") {
            return <MetricText>{row.subservices} items</MetricText>;
          }

          if (column.key === "providers") {
            return <MetricText>{row.providers} providers</MetricText>;
          }

          if (column.key === "status") {
            const tone = row.status === "Active" ? "success-soft" : "neutral";
            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "owner") {
            return <StackText primary={row.owner} secondary="Catalog team" />;
          }

          if (column.key === "actions") {
            return <TableActions name={row.category} />;
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

