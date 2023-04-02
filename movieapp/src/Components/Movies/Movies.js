import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { v4 } from 'uuid';
import './Movies.css';
import { useNavigate } from 'react-router-dom';



const Movies = (props) => {
 const { filter } = props;
 const { addItemToCart } = useContext(CartContext);


 const navigate = useNavigate()
 const handleImageClick = (each) => {
  const route = `/movies/${each.id}`;

  navigate(route);
  return <div>{each.name}</div>
 };

 return (
  <div className="movies-container">
   {filter.map((each) => {
    console.log(each, 'each')
    return (
     <div key={v4()} className="movie-item">
      <div className="image-wrapper">
       <img className="image" src={each.Images} alt={each.Title} onClick={() => handleImageClick(each)} />
      </div>
      <div className="movie-details">
       <h3>{each.Title}</h3>
       <p>Year {each.Year}</p>
       <p>IMDB {each.imdbRating}</p>
       <div
        onClick={() => addItemToCart(each)}
        className="button-div"
       >
        Add to favorites
       </div>
      </div>
     </div>
    );
   })}
  </div>
 );
};

export default Movies;
