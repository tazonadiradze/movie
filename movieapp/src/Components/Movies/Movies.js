import Data from '../../Data.json'
import './Movies.css'

const Movies = (props) => {
 const { filter } = props
 return (
  <div className='movies-container'>
   {filter.map(each => {
    return (
     <div className='movie-item'>
      <div className='image-wrapper'>
       <img className='image' src={each.Images} alt={each.Title} />
      </div>
      <div className='movie-details'>
       <h3>{each.Title}</h3>
       <p>Year {each.Year}</p>
       <p>IMDB {each.imdbRating}</p>
      </div>
     </div>
    )
   })}
  </div>
 )
}

export default Movies
