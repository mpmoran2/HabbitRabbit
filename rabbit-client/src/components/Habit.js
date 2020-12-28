import React from 'react'
import {Redirect} from 'react-router-dom'
// import HabitEdit from './HabitEdit'

import DonesContainer from '../containers/DonesContainer'

const Habit = (props) => {

    console.log(props)
    // eslint-disable-next-line
    let habit = props.habits.filter(habit => habit.id == props.match.params.id)[0]

    console.log(habit)
    

    return (
        <div>
            {habit ? null : <Redirect to='/habits'/>}
            <h2>{habit ? habit.name : null}</h2>
                  
            Carrots Fed: {habit ? habit.streak : null} <br/>
            (To feed your Habit Rabbit more carrots, log your days. For every day you complete your habit, your rabbit gets a carrot!)<br/><br/>
            <DonesContainer habit={habit}/>
        </div>
    )
}

export default Habit