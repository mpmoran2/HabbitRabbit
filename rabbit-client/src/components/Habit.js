// import React from 'react'
// // import {Redirect} from 'react-router-dom'
// // import HabitEdit from './HabitEdit'

// // import DonesContainer from '../containers/DonesContainer'

// const Account = (props) => {

//   console.log(props)
//   // let account = props.accounts[props.match.params.id - 1]
//   let account = props.habits.filter(habit => habit.id == props.match.params.id)[0]

//   console.log(habit)
//   return (

//     <div>
//       <h2>
//         {habit ? habit.name : null} - {habit ? habit.streak : null}
//       </h2>
//       <DonesContainer habit={habit}/><br/>
//       <h4>Edit Habit</h4>
//       <HabitEdit habit={habit}/>
//     </div>
//   )


// }

// export default Habit;