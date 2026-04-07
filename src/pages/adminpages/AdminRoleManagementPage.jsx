import { NavLink } from "react-router-dom";
import {
  permissionRows,
  roleItems,
  roleSidebarItems,
} from "../../data/mockData/admin/roleManagement";

function AdminRoleSidebarLink({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        isActive
          ? "admin-role-sidebar-link admin-role-sidebar-link-active"
          : "admin-role-sidebar-link"
      }
    >
      <span
        className={`admin-role-sidebar-icon admin-role-sidebar-icon-${item.icon}`}
        aria-hidden="true"
      />
      <span>{item.label}</span>
    </NavLink>
  );
}

function PermissionCheckbox({ checked, disabled = false }) {
  return (
    <span
      className={
        disabled
          ? "admin-role-check admin-role-check-disabled"
          : checked
            ? "admin-role-check admin-role-check-active"
            : "admin-role-check"
      }
      aria-hidden="true"
    >
      {checked && !disabled ? "✓" : ""}
    </span>
  );
}

export default function AdminRoleManagementPage() {
  return (
    <div className="admin-role-shell">
      <header className="admin-role-topbar">
        <div className="admin-role-topbar-brand">Khadmeni Admin</div>
        <div className="admin-role-topbar-actions">
          <div className="admin-role-search">
            <span className="admin-role-search-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <path d="M12.5 12.5 17 17" />
              </svg>
            </span>
            <input placeholder="Search roles..." type="text" />
          </div>
          <button className="admin-role-topbar-icon" type="button" aria-label="Notifications" />
          <button className="admin-role-topbar-icon admin-role-topbar-icon-gear" type="button" aria-label="Settings" />
          <div className="admin-role-avatar">A</div>
        </div>
      </header>

      <aside className="admin-role-sidebar">
        <div>
          <div className="admin-role-brand-lockup">
            <strong>KHADMENI</strong>
            <span>ENTERPRISE ORCHESTRATOR</span>
          </div>

          <nav className="admin-role-sidebar-nav">
            {roleSidebarItems.map((item) => (
              <AdminRoleSidebarLink key={item.to} item={item} />
            ))}
          </nav>
        </div>

        <div className="admin-role-sidebar-bottom">
          <button className="admin-role-add-button" type="button">
            Add New Role
          </button>
          <button className="admin-role-utility-link" type="button">
            <span className="admin-role-sidebar-icon admin-role-sidebar-icon-help" aria-hidden="true" />
            Support
          </button>
          <button className="admin-role-utility-link" type="button">
            <span className="admin-role-sidebar-icon admin-role-sidebar-icon-logout" aria-hidden="true" />
            Logout
          </button>
        </div>
      </aside>

      <main className="admin-role-main">
        <div className="admin-role-page">
          <section className="admin-role-header">
            <div>
              <h1>Role Management</h1>
              <p>Orchestrate system access and granular security parameters.</p>
            </div>
            <div className="admin-role-header-actions">
              <button className="admin-role-secondary-button" type="button">
                Discard Changes
              </button>
              <button className="admin-role-primary-button" type="button">
                Save Changes
              </button>
            </div>
          </section>

          <section className="admin-role-grid">
            <div className="admin-role-left-column">
              <article className="panel admin-role-list-panel">
                <div className="admin-role-section-label">Active System Roles</div>
                <div className="admin-role-list">
                  {roleItems.map((role) => (
                    <button
                      key={role.name}
                      className={
                        role.active
                          ? "admin-role-item admin-role-item-active"
                          : "admin-role-item"
                      }
                      type="button"
                    >
                      <div>
                        <strong>{role.name}</strong>
                        <span>{role.detail}</span>
                      </div>
                      <span className="admin-role-chevron">›</span>
                    </button>
                  ))}
                </div>
              </article>

              <article className="admin-role-audit-card">
                <h3>Security Audit</h3>
                <p>
                  This role has 148 associated permission nodes. Changes will be
                  logged in the global audit trail.
                </p>
                <button className="admin-role-audit-button" type="button">
                  View Audit Logs
                </button>
              </article>

              <article className="admin-role-danger-card">
                <h3>Danger Zone</h3>
                <p>
                  Deleting this role will revoke access for 12 administrators
                  immediately.
                </p>
                <button className="admin-role-danger-button" type="button">
                  Delete Role
                </button>
              </article>
            </div>

            <div className="admin-role-right-column">
              <article className="panel admin-role-details-card">
                <div className="admin-role-details-top">
                  <div className="admin-role-shield-mark" />
                  <div className="admin-role-details-fields">
                    <label className="admin-role-text-field">
                      <span>Role Name</span>
                      <input defaultValue="Super Admin" type="text" />
                    </label>
                    <label className="admin-role-text-field">
                      <span>Description</span>
                      <textarea
                        defaultValue="Full unrestricted access to all system modules, financial data, and security configuration settings across the entire Khadmeni ecosystem."
                      />
                    </label>
                  </div>
                </div>

                <div className="admin-role-matrix-header">
                  <h2>Permission Matrix</h2>
                  <div className="admin-role-matrix-actions">
                    <button type="button">Select All</button>
                    <button type="button">Reset</button>
                  </div>
                </div>

                <div className="admin-role-table-wrap">
                  <table className="admin-role-table">
                    <thead>
                      <tr>
                        <th>Module</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Approve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissionRows.map((row) => (
                        <tr key={row.module}>
                          <td>
                            <div className="admin-role-module-cell">
                              <span
                                className={`admin-role-module-icon admin-role-module-icon-${row.icon}`}
                                aria-hidden="true"
                              />
                              <strong>{row.module}</strong>
                            </div>
                          </td>
                          <td><PermissionCheckbox checked={row.view} /></td>
                          <td><PermissionCheckbox checked={row.edit} /></td>
                          <td><PermissionCheckbox checked={row.delete} /></td>
                          <td>
                            <PermissionCheckbox
                              checked={row.approve}
                              disabled={!row.approve && (row.module === "Users" || row.module === "Subscriptions")}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <div className="admin-role-bottom-cards">
                <article className="panel admin-role-assigned-card">
                  <div className="admin-role-section-label">Assigned Personnel</div>
                  <div className="admin-role-personnel">
                    <div className="mini-avatar mini-avatar-sand">AB</div>
                    <div className="mini-avatar mini-avatar-amber">LM</div>
                    <div className="mini-avatar mini-avatar-stone">KD</div>
                    <div className="admin-role-personnel-more">+9</div>
                  </div>
                  <p>
                    Changes to this role will affect 12 active administrators
                    across 3 regional branches.
                  </p>
                </article>

                <article className="panel admin-role-mfa-card">
                  <h3>Global MFA Mandatory</h3>
                  <div className="admin-role-toggle admin-role-toggle-active">
                    <span />
                  </div>
                  <p>
                    Enforce multi-factor authentication for all users assigned to
                    this specific role.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div className="admin-role-toast">
          <span className="admin-role-toast-mark" aria-hidden="true" />
          <div>Unsaved changes detected in "Super Admin" role.</div>
          <button type="button">Save Now</button>
        </div>
      </main>
    </div>
  );
}
