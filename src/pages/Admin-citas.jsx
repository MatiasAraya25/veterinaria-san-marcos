import { useState } from 'react';
import PlantillaAdmin from '../components/templates/PlantillaAdmin';
import TablaCitas from '../components/organisms/TablaCitas';
import CampoTexto from '../components/atoms/CampoTexto';
import Selector from '../components/atoms/Selector';
import Boton from '../components/atoms/Boton';
import { useCitas } from '../context/CitasContext';

const HORAS_DISPONIBLES = [
  '09:00', '10:00', '11:00', '12:00',
  '15:00', '16:00', '17:00', '18:00',
  '19:00', '20:00', '21:00',
];

function hoyISO() {
  const fecha = new Date();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');

  return `${fecha.getFullYear()}-${mes}-${dia}`;
}

function AdminCitas() {
  const { citas, actualizar } = useCitas();

  const [filtro, setFiltro] = useState('todas');
  const [citaPropuesta, setCitaPropuesta] = useState(null);
  const [fechaPropuesta, setFechaPropuesta] = useState('');
  const [horaPropuesta, setHoraPropuesta] = useState('');
  const [citaParaRechazar, setCitaParaRechazar] = useState(null);

  function confirmar(cita) {
    actualizar(cita.id, { estado: 'confirmada' });
  }

  function iniciarPropuesta(cita) {
    setCitaPropuesta(cita);
    setFechaPropuesta(cita.fecha || hoyISO());
    setHoraPropuesta(cita.hora || '');
    setCitaParaRechazar(null);
  }

  function guardarPropuesta(e) {
    e.preventDefault();

    if (!citaPropuesta || !fechaPropuesta || !horaPropuesta) {
      return;
    }

    if (fechaPropuesta < hoyISO()) {
      return;
    }

    actualizar(citaPropuesta.id, {
      fecha: fechaPropuesta,
      hora: horaPropuesta,
      estado: 'reprogramada',
    });

    setCitaPropuesta(null);
    setFechaPropuesta('');
    setHoraPropuesta('');
  }

  function iniciarRechazo(cita) {
    setCitaParaRechazar(cita);
    setCitaPropuesta(null);
  }

  function confirmarRechazo() {
    if (!citaParaRechazar) {
      return;
    }

    actualizar(citaParaRechazar.id, {
      estado: 'rechazada',
    });

    setCitaParaRechazar(null);
  }

  const visibles =
    filtro === 'todas'
      ? citas
      : citas.filter((cita) => cita.estado === filtro);

  return (
    <PlantillaAdmin>
      <h1 className="mb-4">Administración de citas</h1>

      <div className="row align-items-end mb-3">
        <div className="col-12 col-md-4">
          <label className="form-label" htmlFor="filtro-estado">
            Filtrar por estado
          </label>

          <select
            id="filtro-estado"
            className="form-select"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="todas">Todas las citas</option>
            <option value="pendiente">Pendientes</option>
            <option value="confirmada">Confirmadas</option>
            <option value="reprogramada">Reprogramadas</option>
            <option value="rechazada">Rechazadas</option>
            <option value="cancelada">Canceladas</option>
          </select>
        </div>

        <div className="col mt-3 mt-md-0 text-md-end">
          <span className="text-muted">
            Total: {citas.length} solicitud(es)
          </span>
        </div>
      </div>

      {citaPropuesta && (
        <section className="card mb-4">
          <div className="card-body">
            <h2 className="h5">Proponer nuevo horario</h2>

            <p>
              Cita #{citaPropuesta.id} — {citaPropuesta.mascota}
            </p>

            <form onSubmit={guardarPropuesta}>
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="fecha-propuesta"
                >
                  Nueva fecha
                </label>

                <CampoTexto
                  id="fecha-propuesta"
                  type="date"
                  min={hoyISO()}
                  value={fechaPropuesta}
                  onChange={(e) =>
                    setFechaPropuesta(e.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="hora-propuesta"
                >
                  Nueva hora
                </label>

                <Selector
                  id="hora-propuesta"
                  value={horaPropuesta}
                  placeholder="Selecciona una hora"
                  opciones={HORAS_DISPONIBLES}
                  onChange={(e) =>
                    setHoraPropuesta(e.target.value)
                  }
                />
              </div>

              <div className="d-flex gap-2 flex-wrap">
                <Boton
                  texto="Guardar propuesta"
                  variante="primary"
                  type="submit"
                  disabled={
                    !fechaPropuesta ||
                    !horaPropuesta ||
                    fechaPropuesta < hoyISO()
                  }
                />

                <Boton
                  texto="Cancelar"
                  variante="secondary"
                  onClick={() => setCitaPropuesta(null)}
                />
              </div>
            </form>
          </div>
        </section>
      )}

      {citaParaRechazar && (
        <section className="alert alert-warning mb-4">
          <p>
            ¿Rechazar la solicitud de cita #
            {citaParaRechazar.id} de{' '}
            {citaParaRechazar.mascota}?
          </p>

          <div className="d-flex gap-2 flex-wrap">
            <Boton
              texto="Sí, rechazar cita"
              variante="danger"
              onClick={confirmarRechazo}
            />

            <Boton
              texto="No, volver"
              variante="secondary"
              onClick={() => setCitaParaRechazar(null)}
            />
          </div>
        </section>
      )}

      <TablaCitas
        citas={visibles}
        onConfirmar={confirmar}
        onProponer={iniciarPropuesta}
        onCancelar={iniciarRechazo}
      />

      {citas.length > 0 && (
        <p className="small text-muted mt-3">
          Las citas de esta versión de prueba se guardan
          en el navegador de este dispositivo.
        </p>
      )}
    </PlantillaAdmin>
  );
}

export default AdminCitas;
