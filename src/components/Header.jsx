import React from 'react'
import { Link } from 'react-router-dom'
import {RiShoppingCart2Line, RiShoppingCart2Fill} from "react-icons/ri"
const Header = () => {

  
  return (
    <header>
        <Link to="/ "><h2>Pic App</h2></Link>
        <Link to="cart">
          
        </Link>
    </header>
  )
}

export default Header