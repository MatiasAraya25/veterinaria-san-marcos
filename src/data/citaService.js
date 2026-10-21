import citasIniciales from '../data/citas.json';
const CLAVE = 'vsm_citas';
function leer() { 
    try { 
        const guardado = localStorage.getItem(CLAVE); if (guardado === null) { localStorage.setItem(CLAVE, JSON.stringify(citasIniciales)); return [...citasIniciales]; 
        } 
        const datos = JSON.parse(guardado); return Array.isArray(datos) ? datos : []; } catch { return []; 
        } 
    }
function guardar(lista) { localStorage.setItem(CLAVE, JSON.stringify(lista)); }
export function listarCitas() { return leer(); }
export function obtenerCita(id) { return leer().find(c => Number(c.id) === Number(id)) ?? null; }
export function crearCita(datos) {
     const lista = leer(); 
     const nuevoId = Math.max(0, ...lista.map(c => Number(c.id) || 0)) + 1;
     const nueva = { ...datos, id: nuevoId, estado: 'pendiente', creadaEn: new Date().toISOString() }; guardar([...lista, nueva]); return nueva; 
    }
export function actualizarCita(id, cambios) { 
    const lista = leer().map(c => Number(c.id) === Number(id) ? { ...c, ...cambios } : c);
     guardar(lista);
      return lista.find(c => Number(c.id) === Number(id)) ?? null;
     }
export function eliminarCita(id) { guardar(leer().filter(c => Number(c.id) !== Number(id)));
    
 }