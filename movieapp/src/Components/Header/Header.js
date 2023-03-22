import { Fragment, useState } from "react"
import Favorite from "../Favorite/Favorite"
import './Header.css'

const Header = () => {
 const [showFavorite, setShowFavorite] = useState(false)

 const showFavoriteDiv = () => {
  setShowFavorite(true)
 }
 return (
  <Fragment>
   <div className="header-wrapper">
    <h1 className="h1-tag">Playmovie</h1>



    <p onClick={showFavoriteDiv} className="aboutUs">Add to favorites</p>



   </div>
   {showFavorite && <Favorite />}
  </Fragment>
 )
}

export default Header
