import { useState } from 'react';
import FormularioLogin from '../components/organisms/FormularioLogin';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    console.log('Login enviado:', correo, contrasena);
  }

  return (
    <FormularioLogin
      correo={correo}
      contrasena={contrasena}
      onChangeCorreo={(e) => setCorreo(e.target.value)}
      onChangeContrasena={(e) => setContrasena(e.target.value)}
      onSubmit={manejarEnvio}
      errorCorreo=""
      errorContrasena=""
    />
  );
}

export default Login;