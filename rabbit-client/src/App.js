import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/habits', { 
      method: 'GET',
      headers: {'Content-type': 'application/json', 'Accept': 'application/json'}, 
    })
    .then(response => response.json())
    .then(data => console.log(data))        
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Habit Hause!
        </header>
      </div>
    );
  }

}

export default App;