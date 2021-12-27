import React, { Component } from 'react'
import Workouts from '../components/Workouts.js'
import WorkoutsCreateForm from '../components/WorkoutsCreateForm'
import {Route, Switch} from 'react-router-dom'
import SuccessModal from '../components/SuccessModal'

class WorkoutsContainer extends Component {

    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/gyms/:id/workouts/new' render={(routeProps) => 
                    <WorkoutsCreateForm {...routeProps} gym={this.props.gym} toggle={this.toggleModal}/>}/>
                </Switch>
                <Workouts workouts={this.props.gym[0].attributes.workouts}/>
                <SuccessModal isOpen={this.state.showModal} toggle={this.toggleModal}/>
            </div>
        )
    }
}

export default WorkoutsContainer


