import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import GymsList from '../components/GymsList'
import {fetchGyms} from '../actions/fetchGyms'

class GymsContainer extends Component {

    componentDidMount() {
        this.props.fetchGyms()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/gyms' render={(routeProps) => <GymsList {...routeProps} gyms={this.props.gyms}/> } />
                </Switch>
                
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
