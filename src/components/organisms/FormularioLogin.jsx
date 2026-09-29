import { Container, Row, Col, Form } from 'react-bootstrap';
import CampoTexto from '../atoms/CampoTexto';
import Boton from '../atoms/Boton';
import CampoFormulario from '../molecules/CampoFormulario';

function FormularioLogin(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={5}>
          <Form onSubmit={props.onSubmit}>
            <h2 className="mb-4 text-center">Iniciar sesión</h2>

            <CampoFormulario etiqueta="Correo electrónico" error={props.errorCorreo}>
              <CampoTexto
                type="email"
                placeholder="Correo electrónico"
                value={props.correo}
                onChange={props.onChangeCorreo}
              />
            </CampoFormulario>

            <CampoFormulario etiqueta="Contraseña" error={props.errorContrasena}>
              <CampoTexto
                type="password"
                placeholder="Contraseña"
                value={props.contrasena}
                onChange={props.onChangeContrasena}
              />
            </CampoFormulario>

            <Boton texto="Ingresar" type="submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormularioLogin;