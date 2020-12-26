export function fetchHabits(action) {    
       
    console.log('we in fetchHabits')    
    // return() => {
    //     fetch('http://localhost:3000/habits') 
    //     .then(response => response.json())  
    //     .then(habits => console.log(habits))    
    // }

    return(dispatch) => {
        fetch('http://localhost:3000/habits') 
        .then(response => response.json())  
        .then(habits => dispatch({
            type: 'FETCH_HABITS',
            payload: habits
        }))    
    }
}
