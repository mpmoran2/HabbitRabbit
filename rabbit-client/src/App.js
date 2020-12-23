import React from 'react';
import {connect} from 'react-redux'
import {fetchHabits} from './actions/fetchHabits'

class App extends React.Component {  
  componentDidMount() {
    this.props.fetchHabits({type: 'FETCH_HABITS', payload: {name: 'Daily Walk'}})
  } 


  render() {
    return (
      <div className="App">
        Habit Hause!
      </div>
    );
  }

}

export default connect(null, {fetchHabits})(App);

