import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"
import Favorite from "../Favorite/Favorite"
import './Header.css'


const Header = () => {
 const navigate = useNavigate()

 return (
  <Fragment>
   <div className="header-wrapper">
    <h1 className="h1-tag">Playmovie</h1>



    <p onClick={() => { navigate('/Favorite') }} className="aboutUs"> Favorites</p>



   </div>

  </Fragment>
 )
}

export default Header
