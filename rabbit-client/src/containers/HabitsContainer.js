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
    render() {
        return (
            <div>
                <HabitInput/>
                <Habits/>
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
