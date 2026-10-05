import { Container, Nav } from "react-bootstrap";

function Navbar(){
    return(
        <BsNavbar bs = "dark" variant = "dark" expands = "Ig" className = "mb-4">
            <Container>
                <BsNavbar.Brand href = "/">Veterinaria San Marcos</BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls = "navbar-principal"/>  
                <BsNavbar.Collapse id = "navbar-principal">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/servicios">Servicios</Nav.Link>
                        <Nav.Link href="/mis-citas">Mis citas</Nav.Link>
                        <Nav.Link href="/login"> Iniciar sesión</Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;