export function fetchHabits() {    
       
    console.log('we in fetchHabits') 
    //debugging what is it grabbing?   
    // return() => {
    //     fetch('http://localhost:3000/habits') 
    //     .then(response => response.json())  
    //     .then(habits => console.log(habits))    
    // }
    //the html code from index.html....why?!

    return(dispatch) => {
        fetch('http://localhost:3000/habits') 
        .then(response => response.json())
        .then(habits => {
            console.log(habits)
            dispatch({ type: 'FETCH_HABITS', payload: habits })
        })    
    }
}
