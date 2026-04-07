export default function FloatingFormModal({
  isOpen,
  eyebrow,
  title,
  description,
  fields,
  submitLabel = "Submit",
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="floating-modal-backdrop" role="dialog" aria-modal="true">
      <div className="floating-modal-card">
        <div className="floating-modal-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h3>{title}</h3>
            {description ? <p className="floating-modal-copy">{description}</p> : null}
          </div>
          <button className="floating-modal-close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <form
          className="floating-modal-form"
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <div className="form-grid">
            {fields.map((field) => (
              <label
                key={field.label}
                className={
                  field.fullWidth
                    ? "form-field floating-modal-field-full"
                    : "form-field"
                }
              >
                <span>{field.label}</span>
                <input
                  defaultValue={field.value ?? ""}
                  placeholder={field.placeholder ?? field.label}
                  type={field.type ?? "text"}
                />
              </label>
            ))}
          </div>

          <div className="floating-modal-actions">
            <button className="secondary-button" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="primary-button" type="submit">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
