import { useState } from "react";
import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import FloatingFormModal from "../../components/portalPages/FloatingFormModal";
import {
  StackText,
  StatusBadge,
  TableActions,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { addAdvertisementModalFields } from "../../data/mockData/admin/modals";
import { adminNavItems } from "../../data/nav";

const stats = [
  { label: "Active ads", value: "24", trend: "+12.5%" },
  { label: "Scheduled ads", value: "12", trend: "+3.2%" },
  { label: "Expired ads", value: "158", trend: "-1.4%" },
  { label: "Impressions", value: "1.2M", trend: "+18.7%" },
];

const columns = [
  { key: "name", label: "Ad Name" },
  { key: "placement", label: "Placement" },
  { key: "start", label: "Start Date" },
  { key: "status", label: "Status" },
  { key: "performance", label: "Performance" },
  { key: "actions", label: "Actions" },
];

const rows = [
  {
    id: "ad1",
    name: "Spring Campaign",
    placement: "Home Banner",
    start: "2026-03-20",
    status: "Active",
    performance: "High CTR",
    budget: "$2,400",
  },
  {
    id: "ad2",
    name: "Provider Boost",
    placement: "Sidebar",
    start: "2026-03-28",
    status: "Scheduled",
    performance: "Pending",
    budget: "$900",
  },
  {
    id: "ad3",
    name: "Rewards Push",
    placement: "Search Top",
    start: "2026-03-10",
    status: "Expired",
    performance: "Good reach",
    budget: "$1,100",
  },
];

export default function AdminAdvertisementsPage() {
  const [isNewAdOpen, setIsNewAdOpen] = useState(false);

  return (
    <>
      <PortalLayout
        brandSubtitle="Super Admin"
        navItems={adminNavItems}
        sessionTitle="Admin session"
        sessionSubtitle="Ad operations"
        heroEyebrow="Advertisements"
        heroTitle="Manage campaigns, placements, and advertising performance."
        heroCopy="This page is adapted from the Stitch advertisements management screen and is ready for campaign scheduling and reporting."
        heroVariant="hero-card-admin"
        heroActions={
          <button className="primary-button" type="button" onClick={() => setIsNewAdOpen(true)}>
            New ad
          </button>
        }
      >
        <StatsGrid items={stats} />
        <RecordsTable
          eyebrow="Campaigns"
          title="Recent advertisements"
          columns={columns}
          rows={rows}
          toolbar={
            <>
              <div className="table-toolbar-group table-toolbar-grow">
                <TableSearchField placeholder="Search campaign, placement, or date..." />
              </div>
              <div className="table-toolbar-group">
                <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Scheduled</option>
                  <option>Expired</option>
                </select>
              </div>
            </>
          }
          footer={<TableFooter label="Showing 1 to 10 of 194 advertisements" />}
          renderCell={(row, column) => {
            if (column.key === "name") {
              return <StackText primary={row.name} secondary={row.budget} />;
            }

            if (column.key === "status") {
              const tone =
                row.status === "Active"
                  ? "success-soft"
                  : row.status === "Expired"
                    ? "danger-soft"
                    : "neutral";
              return <StatusBadge status={row.status} tone={tone} />;
            }

            if (column.key === "performance") {
              return <StackText primary={row.performance} secondary={row.placement} />;
            }

            if (column.key === "actions") {
              return <TableActions name={row.name} danger={row.status === "Expired"} />;
            }

            return row[column.key];
          }}
        />
      </PortalLayout>

      <FloatingFormModal
        isOpen={isNewAdOpen}
        eyebrow="Campaign setup"
        title="Launch a new advertisement"
        description="Create a campaign with the core placement, timing, and budget details right from the ads page."
        fields={addAdvertisementModalFields}
        submitLabel="Create ad"
        onClose={() => setIsNewAdOpen(false)}
      />
    </>
  );
}

