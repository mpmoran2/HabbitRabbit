export function fetchHabits() {    
       
    console.log('Get Them Rabbits!') 
     return(dispatch) => {
        fetch('http://localhost:3000/habits') 
        .then(response => response.json())
        .then(habits => {
            console.log(habits)
            dispatch({ type: 'FETCH_HABITS', payload: habits })
        })    
    }
}
