const formateador = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

export const formatoCLP = (valor) => formateador.format(valor);



