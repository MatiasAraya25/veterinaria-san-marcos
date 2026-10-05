const ESTILOS = {
  pendiente: { clase: 'bg-secondary', texto: 'Pendiente' },
  confirmada: { clase: 'bg-success', texto: 'Confirmada' },
  reprogramada: { clase: 'bg-warning text-dark', texto: 'Nuevo horario propuesto' },
  rechazada: { clase: 'bg-danger', texto: 'No agendada' },
  cancelada: { clase: 'bg-dark', texto: 'Cancelada' },
};

function EtiquetaEstadoCita({ estado = '', className = '' }) {
  const clave = String(estado).trim().toLowerCase();
  const { clase, texto } = ESTILOS[clave] ?? { clase: 'bg-light text-dark', texto: estado || 'Sin estado' };

  return <span className={`badge ${clase} ${className}`}>{texto}</span>;
}

export default EtiquetaEstadoCita;
