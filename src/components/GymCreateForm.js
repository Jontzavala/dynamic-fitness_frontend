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
        this.props.addGym(this.state, this.props.history);
        this.props.toggle();
    }


    render() {
        return (
            <Container className='w-50'>
                <h2 className="header text-center p-3">Add a New Gym</h2>
                <Form onSubmit={this.handleOnSubmit} className="mx-auto">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Gym Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="founder">
                        <Form.Label>Founder Name</Form.Label>
                        <Form.Control type="text" name="founder" value={this.state.founder} onChange={this.handleOnChange} placeholder="Founder"  required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} style={{height: '100px'}}  required/>
                    </Form.Group>
                    <div className='d-grid gap-2 col-6 mx-auto'>
                        <Button variant='secondary' type="submit" className='m-auto shadow'>Submit</Button>
                    </div>
                </Form>
                
            </Container>
        )
    }
}

export default connect(null, {addGym})(GymCreateForm)
