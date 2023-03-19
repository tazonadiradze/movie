import Data from '../../Data.json'
import './Movies.css'

const Movies = () => {
 return (
  <div className='movies-container'>
   {Data.map(each => {
    return (
     <div className='movie-item'>
      <div className='image-wrapper'>
       <img className='image' src={each.Images} alt={each.Title} />
      </div>
      <div className='movie-details'>
       <h3>{each.Title}</h3>
       <p>{each.Year}</p>
      </div>
     </div>
    )
   })}
  </div>
 )
}

export default Movies
