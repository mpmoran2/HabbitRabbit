import React from 'react';
import {connect} from 'react-redux'

import HabitsContainer from './containers/HabitsContainer'

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <HabitsContainer/>
      </div>
    );
  }

}

export default connect()(App);

