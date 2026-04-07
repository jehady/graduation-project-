import PortalLayout from "../../components/PortalLayout";
import RecordsTable from "../../components/RecordsTable";
import StatsGrid from "../../components/StatsGrid";
import {
  ActionIcon,
  BanIcon,
  EntityCell,
  EyeIcon,
  LevelBadge,
  MetricText,
  PencilIcon,
  StackText,
  StatusBadge,
  TableFooter,
  TableSearchField,
} from "../../components/tablePrimitives";
import { adminNavItems } from "../../data/nav";

const userStats = [
  { label: "Total users", value: "45,200", trend: "+8.1%" },
  { label: "Active users", value: "42,150", trend: "+2.4%" },
  { label: "New users (month)", value: "1,240", trend: "+12.5%" },
  { label: "Banned users", value: "85", trend: "-1.2%" },
];

const userColumns = [
  { key: "user", label: "User" },
  { key: "contact", label: "Contact" },
  { key: "points", label: "Points" },
  { key: "level", label: "Level" },
  { key: "status", label: "Status" },
  { key: "registered", label: "Reg. Date" },
  { key: "actions", label: "Actions" },
];

const userRows = [
  {
    id: "u1",
    user: "Aria Montgomery",
    userId: "ID-88291",
    contact: "aria.m@example.com",
    phone: "+216 22 456 789",
    points: "1,240",
    level: "Gold",
    status: "Active",
    registered: "Oct 12, 2023",
    avatarTone: "sand",
  },
  {
    id: "u2",
    user: "Mohamed Ben Ali",
    userId: "ID-88242",
    contact: "m.benali@gmail.com",
    phone: "+216 55 123 456",
    points: "850",
    level: "Silver",
    status: "Banned",
    registered: "Sep 28, 2023",
    avatarTone: "stone",
  },
  {
    id: "u3",
    user: "Selma Trabelsi",
    userId: "ID-88110",
    contact: "s.trabelsi@outlook.fr",
    phone: "+216 98 765 432",
    points: "310",
    level: "Bronze",
    status: "Inactive",
    registered: "Aug 05, 2023",
    avatarTone: "peach",
  },
  {
    id: "u4",
    user: "Yassine Gharbi",
    userId: "ID-87995",
    contact: "y.gharbi@khadmeni.tn",
    phone: "+216 21 000 111",
    points: "2,500",
    level: "Gold",
    status: "Active",
    registered: "Jul 20, 2023",
    avatarTone: "amber",
  },
];

export default function AdminUsersPage() {
  return (
    <PortalLayout
      brandSubtitle="Super Admin"
      navItems={adminNavItems}
      sessionTitle="Admin session"
      sessionSubtitle="User operations"
      heroEyebrow="User management"
      heroTitle="Monitor and manage service seekers across the platform."
      heroCopy="This refactor uses one shared detailed table pattern so user records, moderation, and future admin lists stay visually consistent and easier to maintain."
      heroVariant="hero-card-admin"
      heroActions={
        <>
          <button className="secondary-button" type="button">
            Export CSV
          </button>
          <button className="primary-button" type="button">
            Add new user
          </button>
        </>
      }
    >
      <StatsGrid items={userStats} />
      <RecordsTable
        eyebrow="Users"
        title=""
        columns={userColumns}
        rows={userRows}
        toolbar={
          <>
            <div className="table-toolbar-group table-toolbar-grow">
              <TableSearchField placeholder="Search by name, email or ID..." />
            </div>
            <div className="table-toolbar-group">
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Status">
                <option>All Status</option>
                <option>Active</option>
                <option>Banned</option>
                <option>Inactive</option>
              </select>
              <select className="table-filter-select table-filter-select-compact" defaultValue="All Levels">
                <option>All Levels</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
              </select>
              <button className="icon-button icon-button-square" type="button" aria-label="Filters">
                <svg viewBox="0 0 20 20">
                  <path d="M3 5h14" />
                  <path d="M6 10h8" />
                  <path d="M8 15h4" />
                </svg>
              </button>
              <button className="icon-button icon-button-square" type="button" aria-label="Refresh">
                <svg viewBox="0 0 20 20">
                  <path d="M16 10a6 6 0 1 1-1.8-4.2" />
                  <path d="M16 4v4h-4" />
                </svg>
              </button>
            </div>
          </>
        }
        footer={
          <TableFooter label="Showing 1 to 10 of 45,200 users" />
        }
        renderCell={(row, column) => {
          if (column.key === "user") {
            return <EntityCell name={row.user} meta={row.userId} tone={row.avatarTone} />;
          }

          if (column.key === "contact") {
            return <StackText primary={row.contact} secondary={row.phone} />;
          }

          if (column.key === "points") {
            return <MetricText>{row.points} pts</MetricText>;
          }

          if (column.key === "level") {
            return <LevelBadge level={row.level} />;
          }

          if (column.key === "status") {
            const tone =
              row.status === "Active"
                ? "success-soft"
                : row.status === "Banned"
                  ? "danger-soft"
                  : "neutral";

            return <StatusBadge status={row.status} tone={tone} />;
          }

          if (column.key === "actions") {
            return (
              <div className="table-actions">
                <ActionIcon label={`Edit ${row.user}`}>
                  <PencilIcon />
                </ActionIcon>
                <ActionIcon
                  label={row.status === "Banned" ? `Locked ${row.user}` : `Ban ${row.user}`}
                  tone={row.status === "Banned" ? "danger" : "default"}
                >
                  <BanIcon />
                </ActionIcon>
                <ActionIcon label={`View ${row.user}`}>
                  <EyeIcon />
                </ActionIcon>
              </div>
            );
          }

          return row[column.key];
        }}
      />
    </PortalLayout>
  );
}

