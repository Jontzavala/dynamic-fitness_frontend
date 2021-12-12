import React from 'react'
import {connect} from 'react-redux'
import {Container, Card, Button} from 'react-bootstrap'
import {deleteWorkout} from '../actions/deleteWorkout'

const Workouts = (props) => {

    const handleDelete = (workout) => {
        props.deleteWorkout(workout.id, workout.gym_id)
    }

    return(
        <Container>
            <h2>Workouts</h2>
            {props.workouts.map(workout =>
                <Card key={workout.id}>
                    <Card.Title>{workout.title}</Card.Title>
                    <Card.Text>{workout.content}</Card.Text>
                    <Button onClick={() => handleDelete(workout)}>Delete Workout</Button>
                </Card>)}
        </Container>
    )
}

export default connect(null, {deleteWorkout})(Workouts)