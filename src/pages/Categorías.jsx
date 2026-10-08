import { Container, Navbar } from "react-bootstrap";

const categorias = [
    {id: 1, nombre: 'Consultas'},
    {id: 2, nombre: 'Vacunación'},
    {id: 3, nombre: 'Cirugía'},
    {id: 4, nombre: 'Desparasitación'},
    {id: 5, nombre: 'Exámenes'},
];

function categorias(){
    return(
        <div>
            <Navbar/>
            <Container>
        </div>

    )
}