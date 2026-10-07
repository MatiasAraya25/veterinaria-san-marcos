import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

function PlantillaPublica({ children }) {
  return (
   <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container flex-grow-1 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PlantillaPublica;