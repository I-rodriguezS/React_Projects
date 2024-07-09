import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useRef } from 'react'
import { useSearch } from './hooks/useSearch.js'

function App() {
  const inputRef = useRef()
  const { search, updatedSearch, error } = useSearch()
  const { movies: mappedMovies, getMovies  } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
   /*
   const { query } = Object.fromEntries(
    new window.FormData(event.target)
   )
   */
    getMovies()
   /*
    const inputEl = inputRef.current 
    const value = inputEl.value
    alert(value) */
  }

  const handleQuery = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) 
    return 
    updatedSearch(event.target.value)  
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleQuery}  value={search} name='query' ref={inputRef} placeholder='Avengers, Star Wars, The Matrix... '/>
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App

