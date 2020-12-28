import React from 'react';

import DonesForm from '../components/DonesForm'
import Dones from '../components/Dones'

class DonesContainer extends React.Component {

    render() {
        return (
            <div>
                <DonesForm habit={this.props.habit}/>
                <Dones dones={this.props.habit && this.props.habit.dones}/>
            </div>
        )
    }
}

export default DonesContainer