import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/organisms/Navbar';

const categorias = [
  { id: 1, nombre: 'Consultas' },
  { id: 2, nombre: 'Vacunación' },
  { id: 3, nombre: 'Cirugía' },
  { id: 4, nombre: 'Desparasitación' },
  { id: 5, nombre: 'Exámenes' },
];

function Categorias() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="mb-4">Categorías de servicios</h1>
        <Row>
          {categorias.map((cat) => (
            <Col key={cat.id} xs={12} md={6} lg={4} className="mb-3">
              <Card className="p-3">
                <Card.Title>{cat.nombre}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Categorias;