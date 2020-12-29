import React from 'react'
import {connect} from 'react-redux'
import {addHabit} from '../actions/addHabit'


class HabitForm extends React.Component {

    state = {name: '', rabbit_name: '', goal: '', description: '', start_day: ''}

    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addHabit(this.state)
        this.setState({name: '', rabbit_name: '', description: '', goal: '', start_day: ''})
        window.location.reload(false);
    }
    
    render() {
        return (
            <div className="bunForm">
                <h2 className="bunFormTitle">Add A New Habit</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Habit's Name:</label>
                    <input type="text" placeholder="Name of Habit" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Habit's Goal:</label>
                    <input type="text" placeholder="Goal(How many days)" value={this.state.goal} name="goal" onChange={this.handleChange}/><br/>
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

export default connect(null, {addHabit})(HabitForm)