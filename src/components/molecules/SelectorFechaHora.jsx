import CampoTexto from '../atoms/CampoTexto';
import Selector from '../atoms/Selector';

const HORAS_POR_DEFECTO = [
  '09:00', '10:00', '11:00', '12:00',
  '15:00', '16:00', '17:00', '18:00',
];

function hoyISO() {
  const fecha = new Date();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');

  return `${fecha.getFullYear()}-${mes}-${dia}`;
}

function SelectorFechaHora({
  fecha = '',
  hora = '',
  onChange,
  horasDisponibles = HORAS_POR_DEFECTO,
}) {
  return (
    <div className="row g-3 mb-3">
      <div className="col-12 col-md-6">
        <label htmlFor="fecha-cita" className="form-label">
          Fecha
        </label>

        <CampoTexto
          id="fecha-cita"
          type="date"
          value={fecha}
          min={hoyISO()}
          onChange={(e) =>
            onChange?.({ fecha: e.target.value, hora })
          }
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor="hora-cita" className="form-label">
          Hora
        </label>

        <Selector
          id="hora-cita"
          value={hora}
          placeholder="Selecciona una hora"
          opciones={horasDisponibles}
          onChange={(e) =>
            onChange?.({ fecha, hora: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default SelectorFechaHora;
