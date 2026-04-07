export default function StatsGrid({ items }) {
  return (
    <section className="stats-grid">
      {items.map((item) => (
        <article key={item.label} className="stat-card">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          {item.trend ? <em>{item.trend}</em> : null}
        </article>
      ))}
    </section>
  );
}
