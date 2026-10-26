export function validarObligatorio(valor, mensaje = 'Este campo es obligatorio') {
  if (!valor || valor.trim() === '') return mensaje
  return ''
}

export function validarCorreo(valor) {
  if (!valor || valor.trim() === '') return 'Ingresa tu correo'
  const partes = valor.trim().split('@')

  if (partes.length !== 2 || partes[0] === '' || !partes[1].includes('.')) {
    return 'Ingresa un correo válido (ej. nombre@correo.cl)'
  }
  return ''
}

export function validarClave(valor) {
  if (!valor || valor.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
  return ''
}

export function validarNumero(valor, minimo = 0) {
  if (valor === '' || isNaN(Number(valor))) return 'Ingresa un número válido'
  if (Number(valor) < minimo) return `Debe ser mayor o igual a ${minimo}`
  return ''
}

export function validarConfirmacion(clave, confirmacion) {
  if (clave !== confirmacion) return 'Las contraseñas no coinciden'
  return ''
}

export function hayErrores(errores) {
  return Object.values(errores).some((mensaje) => mensaje !== '')
}
