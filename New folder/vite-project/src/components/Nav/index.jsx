import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
          <Link to='/'>
               <h1>Atakishiyev</h1>
            </Link>
        
        <ul>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/contact'>
            <li>Contact</li>
            </Link>

             <Link to='/location'>
             <li>Location</li>
            </Link>
            

        </ul>
        <button>Login</button>
    </nav>
  )
}

export default Nav