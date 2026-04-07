import PortalLayout from "../../components/PortalLayout";
import { Link } from "react-router-dom";
import StatsGrid from "../../components/StatsGrid";
import { companyNavItems } from "../../data/nav";

const availabilityStats = [
  { label: "Available now", value: "42", trend: "Ready for dispatch" },
  { label: "Top rated", value: "18", trend: "Strong quality band" },
  { label: "Remote capable", value: "11", trend: "Flexible assignment" },
  { label: "Urgent reserve", value: "7", trend: "Priority backup" },
];

const availabilityRows = [
  {
    id: "a1",
    employee: "Sami Rebai",
    specialty: "Plumbing Lead",
    availability: "Available",
    rating: "4.9",
    zone: "Central",
    department: "Maintenance",
  },
  {
    id: "a2",
    employee: "Nour Qassem",
    specialty: "Electrical Engineer",
    availability: "In 30 mins",
    rating: "4.8",
    zone: "North",
    department: "Energy",
  },
  {
    id: "a3",
    employee: "Hadi Nasser",
    specialty: "HVAC Specialist",
    availability: "Available",
    rating: "4.7",
    zone: "West",
    department: "HVAC",
  },
  {
    id: "a4",
    employee: "Razan Omar",
    specialty: "UX Field Support",
    availability: "Offline",
    rating: "4.6",
    zone: "South",
    department: "Digital",
  },
  {
    id: "a5",
    employee: "Firas Haddad",
    specialty: "Senior Technician",
    availability: "Available",
    rating: "5.0",
    zone: "Central",
    department: "Operations",
  },
];

export default function CompanyAvailableEmployeesPage() {
  return (
    <PortalLayout
      brandSubtitle="Corporate Portal"
      navItems={companyNavItems}
      sessionTitle="Company account"
      sessionSubtitle="Talent availability"
      heroEyebrow="Available employees"
      heroTitle="Assign from the workforce that is ready right now."
      heroCopy="This page now follows the Stitch available employees screen more closely with category chips, live availability cards, and fast assignment actions."
      heroVariant="hero-card-company"
      heroActions={
        <Link className="primary-button" to="/company/employees/assign-task">
          Assign employee
        </Link>
      }
    >
      <StatsGrid items={availabilityStats} />
      <article className="panel">
        <div className="table-toolbar">
          <div className="table-toolbar-group table-toolbar-grow">
            <input
              className="table-filter-input"
              placeholder="Search by name, skill, or department..."
              type="text"
            />
          </div>
          <div className="table-toolbar-group">
            <button className="status-pill status-pill-active" type="button">
              All Employees
            </button>
            <button className="status-pill" type="button">
              Designers
            </button>
            <button className="status-pill" type="button">
              Engineers
            </button>
            <button className="status-pill" type="button">
              Technicians
            </button>
          </div>
        </div>
        <div className="talent-grid">
          {availabilityRows.map((employee) => (
            <article key={employee.id} className="talent-card">
              <div className="talent-card-header">
                <div className="user-cell">
                  <div className="mini-avatar">{employee.employee.slice(0, 1)}</div>
                  <div>
                    <strong>{employee.employee}</strong>
                    <span>
                      {employee.specialty} · {employee.department}
                    </span>
                  </div>
                </div>
                <span
                  className={
                    employee.availability === "Available"
                      ? "table-badge table-badge-success"
                      : employee.availability === "Offline"
                        ? "table-badge table-badge-danger"
                        : "table-badge"
                  }
                >
                  {employee.availability}
                </span>
              </div>
              <div className="talent-card-body">
                <div className="detail-item">
                  <strong>{employee.rating}</strong>
                  <span>Rating</span>
                </div>
                <div className="detail-item">
                  <strong>{employee.zone}</strong>
                  <span>Zone</span>
                </div>
              </div>
              <div className="talent-card-actions">
                <Link className="secondary-button" to="/company/employees/profile">
                  View profile
                </Link>
                <Link className="primary-button" to="/company/employees/assign-task">
                  Assign task
                </Link>
              </div>
            </article>
          ))}
          <article className="talent-card talent-card-ghost">
            <strong>Add New Employee</strong>
            <p className="muted-line">
              Onboard more talent to your available workforce pool.
            </p>
            <Link className="secondary-button" to="/company/employees/add">
              Add employee
            </Link>
          </article>
        </div>
      </article>
    </PortalLayout>
  );
}

