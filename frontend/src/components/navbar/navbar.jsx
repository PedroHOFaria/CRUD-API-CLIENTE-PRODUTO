import React from 'react'
import { Link }from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='transicao'>
        <ul>
            <li><button className="btn">
            <Link className="link" to="/">Produtos</Link>
            </button></li>
        </ul>
    </nav>
  )
}

export default Navbar;