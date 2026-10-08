const HORAS_POR_DEFECTO = ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00'];

function hoyISO() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mes}-${dia}`;
}

function SelectorFechaHora({ fecha = '', hora = '', onChange, horasDisponibles = HORAS_POR_DEFECTO }) {
  return (
    <div className="row g-3 mb-3">
      <div className="col-12 col-md-6">
        <label htmlFor="fecha-cita" className="form-label">Fecha</label>
        <input
          id="fecha-cita"
          type="date"
          className="form-control"
          min={hoyISO()}
          value={fecha}
          onChange={(e) => onChange?.({ fecha: e.target.value, hora })}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="hora-cita" className="form-label">Hora</label>
        <select
          id="hora-cita"
          className="form-select"
          value={hora}
          onChange={(e) => onChange?.({ fecha, hora: e.target.value })}
        >
          <option value="">Selecciona una hora</option>
          {horasDisponibles.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectorFechaHora;

<<<<<<< HEAD

=======
>>>>>>> main
