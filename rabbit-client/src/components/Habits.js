import React from 'react'
// import {Route, Link} from 'react-router-dom'
const Habits = (props) => {  
    

    return (
        <div>
            {props.habits.map(habit => <li key={habit.id}>{habit.name} - {habit.goal} (Started {habit.start_day}) - Current Streak: {habit.streak}</li>)}    
        </div>
    )
}

export default Habits