import React from 'react'
import {Link} from 'react-router-dom'

const HabitRabbits = (props) => {  
    return (
        <div>
            <h1>What are Habit Rabbits?</h1>
            <ul>
            <p>Habit Rabbits are little buns who move in to Habbit Hause to help you stay on track with your habits. 
                They are gentle and friendly and will quietly support you though your journey to learn a new habit.</p>
            <p>Every day that you complete your habit, your HabiRabi gets a treat! If you do it everday, the more treats they get, but be careful, 
                if you don't do your habit, no treat for your bunny pal. (Don't worry, they are just extra treats, we here at Habi Rabi still feed your Habit Rabbits. 
                No starving bunnies here.)</p>
            {props.habits.map(habit => <li key={habit.id}>🐰 <b>{habit.rabbit_name} </b> works hard to help you with your habit:<b> {habit.name}</b><br/>
            Don't forget to give {habit.rabbit_name} a treat. <Link to={`/habits/${habit.id}`}>🥕</Link></li>)}    
            </ul>
        </div>    
        
    )
}

export default HabitRabbits