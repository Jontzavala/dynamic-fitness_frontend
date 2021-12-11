import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col} from 'react-bootstrap'

const GymsList = (props) => {
    let gyms = props.gyms


    return (
        <div>
            <Container fluid>
                <Row>
                    {gyms.map(gym => 
                        <Col key={gym.id}>
                            <Card>
                                <Link to={`/gyms/${gym.attributes.id}`}>
                                    <Card.Title>{gym.attributes.name}</Card.Title>
                                </Link>
                                <Card.Text>{gym.attributes.founder}</Card.Text>
                                <Card.Text>{gym.attributes.description}</Card.Text>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default GymsList