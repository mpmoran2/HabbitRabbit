import React from 'react'
import {Redirect} from 'react-router-dom'
import HabitEdit from '../components/HabitEdit'

import DonesContainer from '../containers/DonesContainer'
import './Habit.css'

const Habit = (props) => {

    console.log(props)
    // eslint-disable-next-line
    let habit = props.habits.filter(habit => habit.id == props.match.params.id)[0]    
   
    console.log(habit)
    
    return (
        <div className="habit">
            {habit ? null : <Redirect to='/habits'/>}
            <h2 className="theHabit">{habit ? habit.name : null}</h2>
            <h4 className="theGoal"> ✨Your Goal is to feed your Habit Rabbit for {habit ? habit.goal : null} days stright.✨</h4>

            <p>🐰 {habit ? habit.rabbit_name : null} has been watching this habbit since {habit ? habit.start_day : null} </p>
            <p>{habit ? habit.rabbit_name : null} reminds you that this is what you wanted to do for your habit: <br/>
            {habit ? habit.description : null}<br/></p>

            <h3>🥕 Streak: {habit ? habit.streak : null}</h3>            
            
            <DonesContainer habit={habit}/><br/>
            <HabitEdit habit={habit}/>
        </div>
    )
}

export default Habit