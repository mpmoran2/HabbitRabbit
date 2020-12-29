export const deleteDone = (doneId, habitId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/habits/${habitId}/dones/${doneId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(habit => dispatch({type: 'DELETE_DONE', payload: habit}))
    }
  }