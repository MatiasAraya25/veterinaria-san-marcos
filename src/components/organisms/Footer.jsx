const ANIO = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1 fw-bold">Veterinaria San Marcos</p>
        <p className="mb-1 small">Rancagua, Chile</p>
        <p className="mb-0 small">
          © {ANIO} Veterinaria San Marcos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

