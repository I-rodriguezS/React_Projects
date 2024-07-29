import { Link } from '../Link.jsx'

export function HomePage () {
    return (
      <>
      <h1>
        Home
      </h1>
        <p>Pagina de practica para React Router by Isaac</p>
        <Link to='/About'>Ir al About</Link>
      </>
    )
  }