import React, { Component } from 'react'
import Workouts from '../components/Workouts.js'

class WorkoutsContainer extends Component {
    render() {
        return (
            <div>
                <Workouts workouts={this.props.gym[0].attributes.workouts}/> 
            </div>
        )
    }
}

export default WorkoutsContainer


