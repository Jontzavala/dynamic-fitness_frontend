import React from 'react';
import {useParams} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux'

const GymShow = (props) => {
    
    const {id} = useParams();
    let gym = props.gyms.filter(gym => gym.id === id)
    if (gym.length === 0) return null;
    let gymData = (gym && gym[0].attributes);

    return(
        <Container>
            <Row>
                <Col>
                    <h2>{gymData.name}</h2>
                    <h3>{gymData.founder}</h3>
                    <p>{gymData.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(GymShow)
