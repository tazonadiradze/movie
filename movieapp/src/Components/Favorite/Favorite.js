import { Fragment, useContext } from "react";
import { v4 } from "uuid";
import { CartContext } from "../../Context/CartContext";
import Header from "../Header/Header";

import "./Favorite.css";

const Favorite = () => {
 const { cartItems, deleteItemFromCart } = useContext(CartContext);

 localStorage.setItem('cartItems', JSON.stringify(cartItems));

 const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));

 return (
  <Fragment>
   <Header />
   <h1 className="header">Favorites</h1>
   <div className="parent">

    {cartItems.length === 0 ? (

     <div className="div">No favorite items added</div>
    ) : (
     <div className="div">
      {savedCartItems.map((item) => (

       <div key={item.id}>
        <div>{item.Title}</div>
        <div>{item.Year}</div>

        {<img className="img" src={item.Images} />}
        <div onClick={() => deleteItemFromCart(item.id)}>Remove</div>
       </div>

      ))}
     </div>

    )}
   </div>
  </Fragment>
 )
};


export default Favorite
