import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/habits' style={{paddingRight: '10px'}}>Habits</Link>
      <Link to='/habits/new'> Assign a Habit to a Rabbit</Link>
    </div>

  )
}

export default NavBar