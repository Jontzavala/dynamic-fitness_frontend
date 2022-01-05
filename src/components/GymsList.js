import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col} from 'react-bootstrap'

const GymsList = (props) => {
    let gyms = props.gyms


    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2} lg={4} xl={6} className='g-8'>
                    {gyms.map(gym => 
                        <Col key={gym.id} className='d-flex'>
                            <Card style={{ width: '15rem' }} className='text-center p-3 m-2 mx-auto shadow'>
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