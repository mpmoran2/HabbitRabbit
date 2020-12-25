export function fetchHabits(action) {    
    // return action    
    console.log('we in fetchHabits')    
    return (dispatch) => {
        fetch('http://localhost:3000/habits') 
        .then(response => response.json())  
        .then(habits => dispatch({
            type: 'FETCH_HABITS',
            payload: habits
        }))    
    }
}
