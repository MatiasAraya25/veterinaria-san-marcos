import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
function PlantillaAdmin({ children }) { return <div className="d-flex flex-column min-vh-100"><Navbar/><main className="container flex-grow-1 py-4"><div className="d-flex justify-content-between align-items-center mb-3"><span className="badge text-bg-dark">Panel de administración</span></div>{children}</main><Footer/></div>; }
export default PlantillaAdmin;