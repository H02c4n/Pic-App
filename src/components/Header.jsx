import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/ "><h2>Pic App</h2></Link>
        <Link to="cart" className='ri-shopping-cart-line ri-fw ri-2x'></Link>
    </header>
  )
}

export default Header