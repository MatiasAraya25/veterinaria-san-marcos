
import {useNavigate} from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import {categorias} from "../../data/categorias";

function PlantillaPublica({ children }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        categorias={categorias}
        onNavegar={navigate}
        onBuscar={(texto) =>
          navigate(`/buscar/${encodeURIComponent(texto)}`)
        }
      />
      <main className="container flex-grow-1 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PlantillaPublica;
