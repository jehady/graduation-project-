export default function FormSections({ eyebrow, sections, placeholderMode = "none" }) {
  return (
    <div className="form-stack">
      {sections.map((section) => (
        <article key={section.title} className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h3>{section.title}</h3>
            </div>
          </div>
          <div className="form-grid">
            {section.fields.map(([label, value]) => (
              <label key={label} className="form-field">
                <span>{label}</span>
                <input
                  defaultValue={value}
                  placeholder={placeholderMode === "label" ? label : undefined}
                  type="text"
                />
              </label>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
