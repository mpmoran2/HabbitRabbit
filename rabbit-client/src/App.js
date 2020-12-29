import React from 'react';
import {connect} from 'react-redux'

import HabitsContainer from './containers/HabitsContainer'

import Navbar from './components/Nav/NavBar'
import './App.css'

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <h1>Habbit 🐰 Hause</h1>
        <Navbar/>
        <HabitsContainer/>           
      </div>   
      
    );
  }

}

export default connect()(App);

