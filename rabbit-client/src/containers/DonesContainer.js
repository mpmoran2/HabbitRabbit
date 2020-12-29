import React from 'react';

import DonesForm from '../components/DonesForm'
import Dones from '../components/Dones'

class DonesContainer extends React.Component {

    render() {
        return (
            <div>
                <Dones dones={this.props.habit && this.props.habit.dones}/><br/>
                <DonesForm habit={this.props.habit}/>
            </div>
        )
    }
}

export default DonesContainer