import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = (props) => {

  return (
    <nav className="navBar">        
      <ul className="linky">  
  
        <li className="lil"><Link className="boop"to='/habits/new'>Add Habits</Link></li>
        <li className="lil"><Link className="boop" to='/habits'>Habits</Link></li>
        <li className="lil"><Link className="boop" to='/habitrabbits'>Habit Rabbits</Link></li>
        <li className="lil"><Link className="boop"to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar