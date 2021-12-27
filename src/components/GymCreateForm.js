import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addGym} from '../actions/addGym'

class GymCreateForm extends Component {

    state = {
        name: '',
        founder: '',
        description: ''
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        debugger
        this.props.addGym(this.state, this.props.history);
        this.props.toggle();
    }


    render() {
        return (
            <Container>
                <h2>Add a New Gym</h2>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Gym Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Name" required/>
                    </Form.Group>
                    <Form.Group controlId="founder">
                        <Form.Label>Founder Name</Form.Label>
                        <Form.Control type="text" name="founder" value={this.state.founder} onChange={this.handleOnChange} placeholder="Founder"  required/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} style={{height: '100px'}}  required/>
                    </Form.Group>
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
                
            </Container>
        )
    }
}

export default connect(null, {addGym})(GymCreateForm)
