import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import GymsList from '../components/GymsList'
import {fetchGyms} from '../actions/fetchGyms'
import GymCreateForm from '../components/GymCreateForm'
import GymShow from '../components/GymShow'
import SuccessModal from '../components/SuccessModal'

class GymsContainer extends Component {
    state = {
        showModal: false
    }
    
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal})
    }

    componentDidMount() {
        this.props.fetchGyms()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/gyms/new' render={(routeProps) => <GymCreateForm {...routeProps} toggle={this.toggleModal}/> } />
                    <Route path='/gyms/:id' render={(routeProps) => <GymShow {...routeProps} gyms={this.props.gyms} />} />
                    <Route path='/gyms' render={(routeProps) => <GymsList {...routeProps} gyms={this.props.gyms}/> } />
                </Switch>
                <SuccessModal isOpen={this.state.showModal} toggle={this.toggleModal} />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gyms: state.gyms
    }
}

export default connect(mapStateToProps, {fetchGyms})(GymsContainer)
