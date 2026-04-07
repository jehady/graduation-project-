export default function ListPanel({ eyebrow, title, items }) {
  return (
    <article className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h3>{title}</h3>
        </div>
      </div>

      <div className="list-stack">
        {items.map((item) => (
          <div key={item.title} className="list-row">
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
