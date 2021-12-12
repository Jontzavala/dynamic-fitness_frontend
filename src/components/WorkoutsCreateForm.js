import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import {Form, Button, Container} from 'react-bootstrap'
import WorkoutsContainer from '../containers/WorkoutsContainer'

class WorkoutsCreateForm extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, {addWorkout})(WorkoutsCreateForm)
