export const editHabit = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/habits/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(habit => dispatch({type: 'EDIT_HABIT', payload: habit}))
    }
  
  }