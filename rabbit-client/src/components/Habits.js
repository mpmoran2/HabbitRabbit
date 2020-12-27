import React from 'react'
import Habit from './Habit'
const Habits = (props) => {  
    

    return (
        <div>
            <ul>
            Habit Rabbits 
                {props.habits.map(habit => <li key={habit.id}><Habit habit={habit}/></li>)}    
            </ul>
        </div>
    )
}

export default Habits