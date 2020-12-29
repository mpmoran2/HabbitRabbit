import React from 'react'
import {connect} from 'react-redux'
import {editHabit} from '../actions/editHabit'

class HabitEdit extends React.Component {
    state = {name: '', rabbit_name: '', description: '', goal: '', start_day: ''}

    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    handleSubmit = (event) => {
        event.preventDefault()
        let habit = {...this.state, id: this.props.habit.id}
        this.props.editHabit(habit)
        this.setState({name: '', rabbit_name: '', description: '', goal: '', start_day: ''})
    }

    render(){
        return(
            <div class="sidenav">
                <h3 className="daTitle">Need to make a change?</h3>
                <form className="theform" onSubmit={this.handleSubmit}>
                <label>Habit's Name:</label>               
                <input type="text" placeholder="Name of Habit" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                <label>Habit's Goal:</label>
                <input type="text" placeholder="Goal (in days)" value={this.state.goal} name="goal" onChange={this.handleChange}/><br/>
                <label>Habit Rabbit's Name:</label>
                <input type="text" placeholder="Name your Habit Rabbit" value={this.state.rabbit_name} name="rabbit_name" onChange={this.handleChange}/><br/>
                <label>Tell Rabbit What You Want To Do:</label><br/>
                <textarea placeholder="Tell your Habit Rabbit what you want to do" value={this.state.description} name="description" onChange={this.handleChange}/><br/>
                <label>Habit's Start Day:</label>                   
                <input type="date" value={this.state.start_day} name="start_day" onChange={this.handleChange}/><br/>      
                <input type="submit"/>              
            </form>
        </div>
        )
    }
}

export default connect(null, {editHabit})(HabitEdit)