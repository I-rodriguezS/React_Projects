import { Link } from "../Link"

export function Page404 () {
    return ( 
        <>
          <h1>404</h1>
          <h2>No hay sistema papá</h2>
          <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Gif"></img>
          <Link to='/'>Dele pa atras</Link>
        </>
    )
}