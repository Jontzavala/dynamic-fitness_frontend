import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Welcome To Dynamic Fitness</h1>
                <Link to='/gyms'>Find Your Gym</Link>
            </Container>
        )
    }
}

export default Home
