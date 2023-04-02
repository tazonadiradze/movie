import './MovieDetails.css'

const MovieDetails = (props) => {
 const { movie } = props;

 return (
  <div>
   <h1>{movie.Title}</h1>

   <img className="img" src={movie.Images} alt={movie.Title} />
   <p>Runtime: {movie.Runtime}</p>
   <p>Director: {movie.Director}</p>
   <p>Writer: {movie.Writer}</p>
   <p>Actors:{movie.Actors}</p>
  </div>
 )
}

export default MovieDetails