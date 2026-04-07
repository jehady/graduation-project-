import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import { Link } from "react-router-dom";
import {
  EntityCell,
  StatusBadge,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { companyNavItems } from "../../data/nav";

const employeeStats = [
  { label: "Employees", value: "86", trend: "Across 6 active departments" },
  { label: "Available now", value: "42", trend: "Ready for assignment" },
  { label: "On task", value: "31", trend: "Field operations in motion" },
  { label: "Weekly output", value: "1,284", trend: "Tasks completed this week" },
];

const employeeColumns = [
  { key: "employee", label: "Employee" },
  { key: "role", label: "Role" },
  { key: "tasks", label: "Assigned tasks" },
  { key: "status", label: "Status" },
  { key: "lastActive", label: "Last active" },
];

const employeeRows = [
  {
    id: "e1",
    employee: "Ahmed Ali",
    employeeId: "#EMP-2101",
    department: "Field Operations",
    role: "Field Technician",
    tasks: "12",
    status: "Active",
    lastActive: "10 min ago",
  },
  {
    id: "e2",
    employee: "Lina Samer",
    employeeId: "#EMP-2102",
    department: "Customer Success",
    role: "Coordinator",
    tasks: "7",
    status: "On Leave",
    lastActive: "Yesterday",
  },
  {
    id: "e3",
    employee: "Mazen Noor",
    employeeId: "#EMP-2103",
    department: "Electrical Unit",
    role: "Electrical Specialist",
    tasks: "15",
    status: "Active",
    lastActive: "25 min ago",
  },
  {
    id: "e4",
    employee: "Rana Saleh",
    employeeId: "#EMP-2104",
    department: "HVAC Division",
    role: "Senior Supervisor",
    tasks: "9",
    status: "Review",
    lastActive: "1 hour ago",
  },
];

export default function CompanyEmployeesPage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Workforce management"
      heroEyebrow="Employee directory"
      heroTitle="Manage, monitor, and update your workforce."
      heroCopy="This version follows the Stitch employee management screen more closely with search, filters, weekly output, and richer employee records."
      heroVariant="hero-card-company"
      heroActions={
        <Link className="primary-button" to="/company/employees/add">
          Add employee
        </Link>
      }
    >
      <StatsGrid items={employeeStats} />
      <div className="content-grid company-ops-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Filters</p>
              <h3>Refine workforce view</h3>
            </div>
          </div>
          <div className="filter-stack">
            <label className="form-field">
              <span>Department</span>
              <select defaultValue="all">
                <option value="all">All departments</option>
                <option value="field">Field operations</option>
                <option value="electrical">Electrical unit</option>
                <option value="hvac">HVAC division</option>
              </select>
            </label>
            <label className="form-field">
              <span>Status</span>
              <select defaultValue="all">
                <option value="all">All statuses</option>
                <option value="active">Active</option>
                <option value="review">Needs review</option>
                <option value="leave">On leave</option>
              </select>
            </label>
            <button className="secondary-button" type="button">
              Clear all filters
            </button>
          </div>
        </article>
        <article className="panel company-highlight-card">
          <p className="eyebrow">Weekly Stats</p>
          <h3>Productivity snapshot</h3>
          <strong className="highlight-metric">1,284</strong>
          <p className="muted-line">Total tasks completed across the team this week.</p>
          <div className="highlight-grid">
            <div className="detail-item">
              <strong>98%</strong>
              <span>Attendance compliance</span>
            </div>
            <div className="detail-item">
              <strong>18</strong>
              <span>Employees above target</span>
            </div>
          </div>
        </article>
      </div>
      <RecordsTable
        eyebrow="Employees"
        title="Workforce directory"
        columns={employeeColumns}
        rows={employeeRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search employee..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select" defaultValue="all">
                <option value="all">All roles</option>
                <option value="field">Field technicians</option>
                <option value="coordinator">Coordinators</option>
                <option value="specialist">Specialists</option>
              </select>
              <button className="icon-button" type="button">
                Export
              </button>
            </div>
          </>
        }
        footer={<TableFooter label="Showing 1 to 10 of 86 employees" />}
        renderCell={(row, column) => {
          if (column.key === "employee") {
            return (
              <EntityCell
                name={row.employee}
                meta={`${row.employeeId} - ${row.department}`}
                tone="sand"
              />
            );
          }

          if (column.key === "tasks") {
            return <span className="table-badge">{row.tasks} active</span>;
          }

          if (column.key === "status") {
            const tone =
              row.status === "Active"
                ? "success-soft"
                : row.status === "On Leave"
                  ? "danger-soft"
                  : "neutral";

            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "lastActive") {
            return (
              <div className="table-inline-actions">
                <span>{row.lastActive}</span>
                <Link className="table-link-button" to="/company/employees/profile">
                  View
                </Link>
              </div>
            );
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

