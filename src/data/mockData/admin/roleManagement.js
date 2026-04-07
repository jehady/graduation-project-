export const roleSidebarItems = [
  { to: "/admin", label: "Dashboard", icon: "grid", end: true },
  { to: "/admin/users", label: "Employee Directory", icon: "users" },
  { to: "/admin/roles", label: "Role Management", icon: "shield" },
  { to: "/admin/subscriptions", label: "Payroll", icon: "wallet" },
  { to: "/admin/settings", label: "Permissions", icon: "checkshield" },
  { to: "/admin/orders/history", label: "Audit Logs", icon: "history" },
];

export const roleItems = [
  {
    name: "Super Admin",
    detail: "Full system access",
    active: true,
  },
  {
    name: "Operations Manager",
    detail: "Manage providers & orders",
  },
  {
    name: "Support Lead",
    detail: "Complaints & User accounts",
  },
  {
    name: "Content Moderator",
    detail: "Ads & Marketplace reviews",
  },
  {
    name: "Finance Analyst",
    detail: "Payroll & Subscriptions",
  },
];

export const permissionRows = [
  { module: "Providers", icon: "hail", view: true, edit: true, delete: true, approve: true },
  { module: "Users", icon: "person", view: true, edit: true, delete: true, approve: false },
  { module: "Companies", icon: "business", view: true, edit: true, delete: true, approve: true },
  { module: "Orders", icon: "cart", view: true, edit: true, delete: true, approve: true },
  { module: "Complaints", icon: "warning", view: true, edit: true, delete: true, approve: true },
  { module: "Subscriptions", icon: "card", view: true, edit: true, delete: true, approve: false },
  { module: "Ads", icon: "target", view: true, edit: true, delete: true, approve: true },
  { module: "Settings", icon: "gear", view: true, edit: true, delete: true, approve: true },
];
