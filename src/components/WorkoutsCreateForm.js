import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import {Form, Button, Container} from 'react-bootstrap'
import WorkoutsContainer from '../containers/WorkoutsContainer'

class WorkoutsCreateForm extends Component {

    state = {
        title: '',
        content: ''
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        })
    }
      
      
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addWorkout(this.state, this.props.gym[0].id, this.props.history);
        this.props.toggle();
    }


    render() {
        return (
            <Container>
                <h2>Create a Workout</h2>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Workout Title:</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleOnChange} required/>
                    </Form.Group>
                    <Form.Group controlId="content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" name="content" value={this.state.content} onChange={this.handleOnChange} required/>
                    </Form.Group>
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default connect(null, {addWorkout})(WorkoutsCreateForm)
