import React from 'react';
import {useParams, Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap';
import {deleteGym} from '../actions/deleteGym'
import WorkoutsContainer from '../containers/WorkoutsContainer'
import {connect} from 'react-redux'

const GymShow = (props) => {
    
    const {id} = useParams();
    let gym = props.gyms.filter(gym => gym.id === id)
    if (gym.length === 0) return null;
    let gymData = (gym && gym[0].attributes);

    const handleDelete = (gymData) => {
        props.deleteGym(gymData.id, props.history)
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h2>{gymData.name}</h2>
                    <h3>{gymData.founder}</h3>
                    <p>{gymData.description}</p>
                    <Link to={`/gyms/${gymData.id}/workouts/new`}>Create a New Workout</Link>
                    <Button onClick={() => handleDelete(gymData)}>Delete Gym</Button>
                </Col>
            </Row>
            <WorkoutsContainer gym={gym} />
        </Container>
    )
}

export default connect(null, {deleteGym})(GymShow)
