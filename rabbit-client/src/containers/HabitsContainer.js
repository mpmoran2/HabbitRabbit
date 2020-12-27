import React from 'react';
import {connect} from 'react-redux';
import {fetchHabits} from '../actions/fetchHabits';

import Habits from '../components/Habits';
import HabitInput from '../components/HabitForm'

class HabitsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchHabits()
        // fetchHabits()
    }
    // display = () => {
    //     if(this.props.habits){
    //         // debugger
    //         return(
    //             <div>
    //               {/* <h3>{this.props.habits[0].name}</h3>
    //               <h3>{this.props.habits[1].name}</h3> */}
    //               {/* <h3>{this.props.habits[2].name}</h3> */}
    //             </div>
    //         )
    //     }
    // }
    render() {
        // debugger
        return (
            <div>
                <HabitInput/><br/>
                <Habits habits={this.props.habits}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        habits: state.habits
    }
}

export default connect(mapStateToProps, {fetchHabits})(HabitsContainer)