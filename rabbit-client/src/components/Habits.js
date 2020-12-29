import React from 'react'
import {Link} from 'react-router-dom'

import './Habits.css'
const Habits = (props) => {  
    return (
        <div>
            <h1>Habits</h1>
            <ul>
            {props.habits.map(habit => <p className="habitList" key={habit.id}>✨<Link to={`/habits/${habit.id}`}>{habit.name}</Link>✨</p>)}    
            </ul>
            
        </div>
    )
}

export default Habits