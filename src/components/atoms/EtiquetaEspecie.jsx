const ESTILOS = {
  perro: { clase: 'bg-primary', texto: 'Perro' },
  perra: { clase: 'bg-primary', texto: 'Perra' },
  gato: { clase: 'bg-warning text-dark', texto: 'Gato' },
  gata: { clase: 'bg-warning text-dark', texto: 'Gata' },
  'perro / gato': { clase: 'bg-success', texto: 'Perro / Gato' },
  'perra / gata': { clase: 'bg-success', texto: 'Perra / Gata' },
  'ave / conejo': { clase: 'bg-info text-dark', texto: 'Ave / Conejo' },
  todas: { clase: 'bg-dark', texto: 'Todas' },
};

const POR_DEFECTO = { clase: 'bg-secondary', texto: 'Otro' };

function EtiquetaEspecie({ especie = '', className = '' }) {
  const clave = String(especie).trim().toLowerCase();
  const { clase, texto } = ESTILOS[clave] ?? POR_DEFECTO;

  return <span className={`badge ${clase} ${className}`}>{texto}</span>;
}

export default EtiquetaEspecie;