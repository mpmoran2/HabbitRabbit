export default function habitReducer(state = {habits: []}, action) {
    // debugger;
    switch (action.type) {
      case 'FETCH_HABITS':
         return {habits: action.payload}
    //   case 'ADD_HABITS':
    //     return {...state, accounts: [...state.habits, action.payload]}
    //   case 'ADD_DONE':
    //     let habits = state.habits.map(habit => {
    //       if (habit.id === action.payload.id) {
    //         return action.payload
    //       } else {
    //         return habit
    //       }
    //     })
    //     return {...state, habits: habits}
    //   case 'DELETE_DONE':
    //     let accountsTwo = state.habits.map(habit => {
    //       if (habit.id === action.payload.id) {
    //         return action.payload
    //       } else {
    //         return account
    //       }
    //     })
    //     return {...state, habit: habitTwo}
    //   case 'EDIT_HABIT':
    //     let habitsThree = state.habits.map(habit => {
    //       if (habit.id === action.payload.id) {
    //         return action.payload
    //       } else {
    //         return habit
    //       }
    //     })
    //     return {...state, habits: habitsThree}
      default:
        return state
    }
  }