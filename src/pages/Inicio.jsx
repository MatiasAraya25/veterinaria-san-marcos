import { useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica/PlantillaPublica'
import Boton from '../components/atoms/Boton'

const CATEGORIAS = [
  { nombre: 'Consultas', descripcion: 'Atención general, urgencias y segunda opinión médica.' },
  { nombre: 'Vacunación', descripcion: 'Esquemas completos para perros y gatos.' },
  { nombre: 'Cirugía', descripcion: 'Esterilizaciones y procedimientos con anestesia.' },
  { nombre: 'Desparasitación', descripcion: 'Tratamientos internos y externos según el peso.' },
  { nombre: 'Exámenes', descripcion: 'Hemogramas, radiografías y ecografías.' },
  { nombre: 'Otros', descripcion: 'Limpieza dental, microchip y hospitalización.' },
];

export default function Inicio() {
  const navigate = useNavigate()

  return (
    <PlantillaPublica>
      <section className="bg-light py-5 text-center" aria-labelledby="titulo-inicio">
        <h1 id="titulo-inicio" className="display-5 fw-bold">Veterinaria San Marcos</h1>
        <p className="lead mb-4">
          Cuidamos a tu mascota en Rancagua. Revisa nuestros servicios y solicita tu cita en línea.
        </p>
        <Boton texto="Ver servicios" onClick={() => navigate('/servicios')} />
      </section>

      <section className="py-5" aria-labelledby="titulo-categorias">
        <h2 id="titulo-categorias" className="h3 text-center mb-4">¿Qué ofrecemos?</h2>
        <div className="row g-3">
          {CATEGORIAS.map(({ nombre, descripcion }) => (
            <div key={nombre} className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 card-title">{nombre}</h3>
                  <p className="card-text">{descripcion}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </PlantillaPublica>
  )
}