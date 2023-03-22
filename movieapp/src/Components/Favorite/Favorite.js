import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Favorite.css";

const Favorite = () => {
 const { cartItems } = useContext(CartContext);

 return (
  <div className="parent">
   {cartItems.length === 0 ? (
    <div className="div">No favorite items added</div>
   ) : (
    <div className="div">
     {cartItems.map((item) => (

      <div key={item.id}>{item.Title}{item.Year}  {<img className="img" src={item.Images} />}</div>
     ))}
    </div>
   )}
  </div>
 );
};

export default Favorite;
