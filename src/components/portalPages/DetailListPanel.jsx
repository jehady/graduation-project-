export default function DetailListPanel({ eyebrow, title, items }) {
  return (
    <article className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="detail-list">
        {items.map(([label, value]) => (
          <div key={label} className="detail-item">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
