// import ResponseMovies from '../mocks/with-results.json'

// const movie = ResponseMovies.Search
// const hasMovies = movie?.length > 0;

 export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
     {
       movies.map(
         movie => (
         <li className='movie' key={movie.id}>
           <h3>{movie.tittle}</h3>
           <p>{movie.year}</p>
           <img src={movie.poster} alt={movie.tittle}/>
         </li>
       ))
     }
   </ul>)
}

export function NoMoviesResult () {
  <p>no hay de eso</p>
}

  export function Movies ({ movies }) {
const hasMovies = movies?.length > 0|
console.log(movies)

return (
       hasMovies
       ? <ListOfMovies movies={movies}/>
       : <NoMoviesResult/>  
)
}
