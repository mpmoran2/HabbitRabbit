import React from 'react'
// import {Redirect} from 'react-router-dom'
// import HabitEdit from './HabitEdit'

// import DonesContainer from '../containers/DonesContainer'

const Habit = (props) => {

    console.log(props)
    //let habit = props.accounts[props.match.params.id - 1]
    //let habit = props.habits.filter(habit => habit.id == props.match.params.id)[0]
    //console.log(habit)
    return (
        <div>
            {props.habit.name} - {props.habit.streak} 🥕           
        </div>
    )
}

export default Habit