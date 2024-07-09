import { useState } from 'react'
import ResponseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/without-results.json'

export function useMovies ({ search }) {
    const [ responseMovies, setResponseMovies ] = useState([])
    const movies = ResponseMovies.Search
    
    const mappedMovies = movies.map(movie => ({
      id: movie.imdbID,
      tittle: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    
    const getMovies = () => {
      if (search) {
       setResponseMovies(responseMovies)
      }
      else { 
        setResponseMovies(withoutResults)
      }
    }

    return { movies: mappedMovies, getMovies }
  }