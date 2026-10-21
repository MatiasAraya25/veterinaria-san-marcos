import { useState } from 'react';
import PlantillaAdmin from '../components/templates/PlantillaAdmin';
import TablaCitas from '../components/organisms/TablaCitas';
import { useCitas } from '../context/CitasContext';

function AdminCitas() { 
    const { citas, actualizar, eliminar } = useCitas(); 
    const [filtro, setFiltro] = useState('todas');

 function confirmar(cita) { actualizar(cita.id, { estado: 'confirmada' });
}
 function proponer(cita) { 
    const nuevaFecha = window.prompt('Nueva fecha (AAAA-MM-DD). Deja vacío para mantener la actual:', cita.fecha);
     if (nuevaFecha === null) return; 
     const nuevaHora = window.prompt('Nueva hora propuesta (ej. 16:00):', cita.hora); 
     if (nuevaHora === null || !nuevaHora.trim()) 
        return; 
    actualizar(cita.id, { 
        fecha: nuevaFecha.trim() || cita.fecha, hora: nuevaHora.trim(), estado: 'reprogramada' 
    }); 
    }

 function rechazar(cita) { 
    if (window.confirm(`¿Rechazar la solicitud de cita #${cita.id}?`)) actualizar(cita.id, { estado: 'rechazada' }); 
    }
 const visibles = filtro === 'todas' ? citas : citas.filter(c => c.estado === filtro);
 return <PlantillaAdmin><h1 className="mb-4">Administración de citas</h1>
 <div className="row align-items-end mb-3"><div className="col-12 col-md-4"><label className="form-label" htmlFor="filtro-estado">Filtrar por estado</label>
 <select id="filtro-estado" className="form-select" value={filtro} onChange={e=>setFiltro(e.target.value)}>
 <option value="todas">Todas las citas</option>
 <option value="pendiente">Pendientes</option>
 <option value="confirmada">Confirmadas</option>
 <option value="reprogramada">Reprogramadas</option>
 <option value="rechazada">Rechazadas</option>
 <option value="cancelada">Canceladas</option>
 </select></div><div className="col mt-3 mt-md-0 text-md-end">
    <span className="text-muted">Total: {citas.length} solicitud(es)</span>
    </div>
    </div>
    <TablaCitas citas={visibles} onConfirmar={confirmar} onProponer={proponer} onCancelar={rechazar}/>{citas.length > 0 && 
    <p className="small text-muted mt-3">Las citas de esta versión de prueba se guardan en el navegador de este dispositivo.
    </p>}</PlantillaAdmin>;
}
export default AdminCitas;