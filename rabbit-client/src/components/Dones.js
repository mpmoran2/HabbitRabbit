import React from 'react'
import {connect} from 'react-redux'


import {deleteDone} from '../actions/deleteDone'


class Dones extends React.Component {
    state = { votes: ''}

    handleDelete = (done) => {this.props.deleteDone(done.id, done.habit_id)}
    
    upVote(id) {document.getElementById(id).innerText = Number(document.getElementById(id).innerHTML) + 1}
    
    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
    
    handleUpVote = (id) => {
        this.upVote(id)
        this.setState({votes: ''})        
    } 
    
    render() {               
    return (
        <div className="log">
            <h4 className="logTitle">🥕 Log  🥕</h4>
            {this.props.dones && this.props.dones.map(done => <li key={done.id}>{done.completed} - {done.do_nodo} 
            <button onClick={() => this.handleDelete(done)}>Delete</button> 
            <button onClick={() => this.handleUpVote(done.id)}> UpVote </button> <p id = {done.id} onChange={this.handleChange} value={this.state.votes}>0</p></li>)}
            
        </div>
    )
    }
}


export default connect(null, {deleteDone})(Dones)