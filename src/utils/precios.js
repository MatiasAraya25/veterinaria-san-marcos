export const RECARGO_URGENCIA = 10000
export const HORA_APERTURA = 9
export const HORA_CIERRE = 19

export const HORAS_URGENCIA = ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

export function esUrgencia(servicio) {
  return servicio.nombre.toLowerCase().includes('urgencia')
}

export function esFueraDeHorario(hora) {
  if (!hora) return false
  const horas = Number(hora.split(':')[0])
  return horas < HORA_APERTURA || horas >= HORA_CIERRE
}

export function calcularPrecioCita(servicio, hora) {
  if (esUrgencia(servicio) && esFueraDeHorario(hora)) {
    return servicio.precio + RECARGO_URGENCIA
  }
  return servicio.precio
}
