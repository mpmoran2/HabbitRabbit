import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchHabits} from '../actions/fetchHabits';

import Habits from '../components/Habits';
import HabitInput from '../components/HabitForm'

class HabitsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchHabits()
    }
    render() {
        return (
            <div>
                <Route />
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