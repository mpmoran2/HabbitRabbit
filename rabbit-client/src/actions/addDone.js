export const addDone = (done, habitId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/habits/${habitId}/dones`, {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            method: 'POST',
            body: JSON.stringify(done)
        })
        .then(response => response.json())   
        .then(habit => dispatch({type: 'ADD_DONE', payload: habit}))      
        alert("If you did your habit, a Rabbit gets a 🥕") 
    }
} 