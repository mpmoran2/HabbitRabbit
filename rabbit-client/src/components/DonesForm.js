import React from 'react'
import {connect} from 'react-redux'

import {addDone} from '../actions/addDone'
class DonesForm extends React.Component {

    state = { do_nodo: '', completed: '',}

    handleChange = (event) => {this.setState({ [event.target.name]: event.target.value })}

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDone(this.state, this.props.habit.id)
        this.setState({do_nodo: '', completed: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Log your Habit:</label>
                    <select name="do_nodo" value={this.state.do_nodo} onChange={this.handleChange}>
                        <option>Please Select One</option>
                        <option>Done</option>
                        <option>Not Done</option>
                    </select><br/>                    
                    <label>Day Done:</label>
                    <input type="date" name="completed" value={this.state.completed} onChange={this.handleChange}/><br/>      
                    <input type="submit"/>              
                </form>
            </div>
        )
    }
}

export default connect(null, {addDone})(DonesForm)