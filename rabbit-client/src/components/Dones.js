import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

import {deleteDone} from '../actions/deleteDone'
const Dones = (props) => {
    
    return (
        <div>
            Carrots 🥕 
            {props.dones && props.dones.map(done => <li key={done.id}>{done.completed} - {done.do_nodo} </li>)}
            
        </div>
    )
}


export default connect(null, {deleteDone})(Dones)