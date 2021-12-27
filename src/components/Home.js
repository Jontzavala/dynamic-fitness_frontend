import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Welcome To Dynamic Fitness</h1>
                <h4>Dynamic Fitness is a place to find the perfect gym for you or your family. 
                    It ranges from commercial gyms to MMA gyms and everything in between! 
                    It's the one stop shop for gym shopping. 
                    You're also able to add your own gym if you can't find it in the list.
                    Each gym will have workouts, you'll be able to create those as well.</h4>
            </Container>
        )
    }
}

export default Home
