import React from 'react'
import {Link} from 'react-router-dom'
// import Habit from './Habit'
const Habits = (props) => {  
    return (
        <div>
            <ul>
            Habit Rabbits 
                {props.habits.map(habit => <li key={habit.id}><Link to={`/habits/${habit.id}`}>{habit.name}</Link></li>)}    
            </ul>
        </div>
    )
}

export default Habits