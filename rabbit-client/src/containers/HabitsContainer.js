import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchHabits} from '../actions/fetchHabits';

import Habits from '../components/Habits';
import Habit from '../components/Habit';
import HabitForm from '../components/HabitForm'

class HabitsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchHabits()
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/habits/new' component={HabitForm}/>
                    <Route path='/habits/:id' render={(routerProps) => <Habit {...routerProps} habits={this.props.habits}/>}/>             
                    <Route exact path='/habits' render={(routerProps) => <Habits {...routerProps} habits={this.props.habits}/>}/>      
                </Switch>            
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