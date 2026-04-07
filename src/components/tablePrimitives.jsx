export function TableSearchField({ placeholder }) {
  return (
    <div className="table-search-shell">
      <span className="table-search-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M12.5 12.5 17 17" />
        </svg>
      </span>
      <input
        className="table-filter-input table-filter-input-search"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

export function TableFooter({ label }) {
  return (
    <>
      <p className="table-footer-copy">{label}</p>
      <div className="table-pagination">
        <button className="table-pagination-button" type="button">
          Previous
        </button>
        <button
          className="table-pagination-button table-pagination-button-active"
          type="button"
        >
          1
        </button>
        <button
          className="table-pagination-button table-pagination-button-ghost"
          type="button"
        >
          2
        </button>
        <button
          className="table-pagination-button table-pagination-button-ghost"
          type="button"
        >
          3
        </button>
        <span className="table-pagination-dots">...</span>
        <button
          className="table-pagination-button table-pagination-button-ghost"
          type="button"
        >
          24
        </button>
        <button className="table-pagination-button" type="button">
          Next
        </button>
      </div>
    </>
  );
}

export function EntityCell({ name, meta, tone = "sand" }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="user-cell">
      <div className={`mini-avatar mini-avatar-${tone}`}>{initials}</div>
      <div>
        <strong>{name}</strong>
        <span>{meta}</span>
      </div>
    </div>
  );
}

export function StackText({ primary, secondary }) {
  return (
    <div className="table-stack-text">
      <strong>{primary}</strong>
      <span>{secondary}</span>
    </div>
  );
}

export function MetricText({ children }) {
  return <strong className="table-points">{children}</strong>;
}

export function LevelBadge({ level }) {
  return (
    <span className="table-level">
      <span className={`table-level-dot table-level-dot-${level.toLowerCase()}`} />
      {level}
    </span>
  );
}

export function StatusBadge({ status, tone = "neutral" }) {
  return <span className={`table-badge table-badge-${tone}`}>{status}</span>;
}

export function ActionIcon({ children, label, tone = "default" }) {
  return (
    <button
      aria-label={label}
      className={`action-icon-button action-icon-button-${tone}`}
      type="button"
    >
      {children}
    </button>
  );
}

export function PencilIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M13.7 2.3a2.1 2.1 0 0 1 3 3L8 14.1l-4 1 1-4 8.7-8.8Z" />
      <path d="M11.8 4.2 15.8 8.2" />
    </svg>
  );
}

export function BanIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="7" />
      <path d="M5.5 5.5 14.5 14.5" />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M2.5 10s2.7-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.7 4.5-7.5 4.5S2.5 10 2.5 10Z" />
      <circle cx="10" cy="10" r="2.3" />
    </svg>
  );
}

export function TableActions({ name, danger = false }) {
  return (
    <div className="table-actions">
      <ActionIcon label={`Edit ${name}`}>
        <PencilIcon />
      </ActionIcon>
      <ActionIcon
        label={danger ? `Restricted action for ${name}` : `Disable ${name}`}
        tone={danger ? "danger" : "default"}
      >
        <BanIcon />
      </ActionIcon>
      <ActionIcon label={`View ${name}`}>
        <EyeIcon />
      </ActionIcon>
    </div>
  );
}
