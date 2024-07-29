import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'

function App() {
  const inputRef = useRef()
  const [ sort, setSort ] = useState(false)
  const { search, updatedSearch, error } = useSearch()
  const { movies, getMovies, loading  } = useMovies({ search, sort  })

  const debounceGetMovies = useCallback(
    debounce(search => {
    getMovies({search})
  }, 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
   /*
   const { query } = Object.fromEntries(
    new window.FormData(event.target)
   )
   */
    getMovies({ search })
   /*
    const inputEl = inputRef.current 
    const value = inputEl.value
    alert(value) */
  }

  const handleSort = () => {
    setSort(!sort) 
  }

  const handleQuery = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) 
    return 
    updatedSearch(newQuery)
    debounceGetMovies(newQuery)
  }

  useEffect(() => {
    console.log('new getMovies received')
  }
  ,[getMovies])

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleQuery}  value={search} name='query' ref={inputRef} placeholder='Avengers, Star Wars, The Matrix... '/>
          <input onChange={handleSort} type='checkbox' checked={sort} />
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <>
      
      </>
      <main>{
        loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App

