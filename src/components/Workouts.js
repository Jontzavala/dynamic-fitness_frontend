import React from 'react'
import {connect} from 'react-redux'
import {Container, Card} from 'react-bootstrap'

const Workouts = (props) => {
    return(
        <Container>
            <h2>Workouts</h2>
            {props.workouts.map(workout =>
                <Card key={workout.id}>
                    <Card.Title>{workout.title}</Card.Title>
                    <Card.Text>{workout.content}</Card.Text>
                </Card>)}
        </Container>
    )
}

export default connect()(Workouts)