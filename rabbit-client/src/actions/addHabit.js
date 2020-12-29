export const addHabit = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/habits', {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())   
        .then(habit => dispatch({type: 'ADD_HABIT', payload: habit}))
        alert("A Rabbit has moved in to take care of your habit.🐰 Go to Habits to check it out!")        
    }
} 