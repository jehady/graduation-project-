export default function RecordsTable({
  columns,
  rows,
  title,
  eyebrow,
  toolbar,
  renderCell,
  footer,
}) {
  return (
    <article className="panel table-panel">
      {title || eyebrow ? (
        <div className="panel-header">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h3>{title}</h3> : null}
          </div>
        </div>
      ) : null}

      {toolbar ? <div className="table-toolbar">{toolbar}</div> : null}

      <div className="table-wrap">
        <table className="records-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {renderCell ? renderCell(row, column) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footer ? <div className="table-footer">{footer}</div> : null}
    </article>
  );
}
