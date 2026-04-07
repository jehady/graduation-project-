export const statisticsSidebarItems = [
  { to: "/company", label: "Dashboard", icon: "grid", end: true },
  { to: "/company/orders", label: "Orders", icon: "cart" },
  { to: "/company/employees", label: "Employees", icon: "users" },
  { to: "/company/available", label: "Available Employees", icon: "search" },
  { to: "/company/logs", label: "Distribution Logs", icon: "clipboard" },
  { to: "/company/employees/profile", label: "Company Profile", icon: "building" },
  { to: "/company/login", label: "Settings", icon: "gear" },
  { to: "/company/employees/statistics", label: "Statistics", icon: "bars" },
];

export const metricCards = [
  {
    label: "Total Orders",
    value: "1,482",
    detail: "+12.4% from last month",
    tone: "primary-soft",
  },
  {
    label: "Completion",
    value: "94%",
    detail: "Completion across all active teams",
    tone: "accent-soft",
    progress: 94,
  },
  {
    label: "Active Staff",
    value: "86",
    detail: "9 employees currently on break",
    tone: "neutral-soft",
  },
  {
    label: "Avg. Response",
    value: "1.5h",
    detail: "Excellent Performance",
    tone: "primary-strong",
  },
];

export const monthlyPerformance = [
  { label: "JAN", completed: 64, requested: 46 },
  { label: "FEB", completed: 71, requested: 52 },
  { label: "MAR", completed: 82, requested: 66 },
  { label: "APR", completed: 76, requested: 52 },
  { label: "MAY", completed: 88, requested: 72 },
  { label: "JUN", completed: 0, requested: 0 },
];

export const departmentEfficiency = [
  { name: "Technicians", percent: 90, projects: "32 Active Projects", tone: "primary" },
  { name: "Field Workers", percent: 75, projects: "18 Active Projects", tone: "accent" },
  { name: "Logistics", percent: 88, projects: "44 Active Projects", tone: "dark" },
];

export const topPerformers = [
  { name: "Sami Ben Ali", tasks: "124 Tasks", progress: 92, tone: "sand" },
  { name: "Leila Mansour", tasks: "118 Tasks", progress: 86, tone: "peach" },
  { name: "Karim Dridi", tasks: "98 Tasks", progress: 74, tone: "amber" },
];

export const responseByRole = [
  { role: "Senior Technician", time: "45 mins", trend: "+5m", trendTone: "danger" },
  { role: "Customer Service", time: "12 mins", trend: "-3m", trendTone: "primary" },
  { role: "Logistics Manager", time: "1.2 hours", trend: "-12m", trendTone: "primary" },
  { role: "Maintenance Specialist", time: "2.5 hours", trend: "stable", trendTone: "neutral" },
];
