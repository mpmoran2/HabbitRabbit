import React from 'react'
import {connect} from 'react-redux'


import {deleteDone} from '../actions/deleteDone'


class Dones extends React.Component {
    state = {}

    handleDelete = (done) => {this.props.deleteDone(done.id, done.habit_id)}
    render() {
    return (
        <div className="log">
            <h4 className="logTitle">🥕 Log  🥕</h4>
            {this.props.dones && this.props.dones.map(done => <li key={done.id}>{done.completed} - {done.do_nodo} <button onClick={() => this.handleDelete(done)}>Delete</button></li>)}
            
        </div>
    )
    }
}


export default connect(null, {deleteDone})(Dones)