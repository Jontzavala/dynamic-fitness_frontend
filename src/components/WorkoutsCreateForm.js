import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import {Form, Button, Container} from 'react-bootstrap'

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

    // handleLegDay = () => {
    //     const legDay = {
    //         title: 'Leg day',
    //         content: 'Squats'
    //     }
    //     this.props.addWorkout(legDay, this.props.gym[0].id, this.props.history)
    // }
      
      
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addWorkout(this.state, this.props.gym[0].id, this.props.history);
        this.props.toggle();
    }


    render() {
        return (
            <Container className='w-50 p-5'>
                <h2 className='header text-center'>Create a Workout</h2>
                <Form onSubmit={this.handleOnSubmit} className='mx-auto'>
                    <Form.Group className='mb-3' controlId="title">
                        <Form.Label>Workout Title:</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleOnChange} required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" name="content" value={this.state.content} onChange={this.handleOnChange} style={{height: '100px'}} required/>
                    </Form.Group>
                    {/* <Button onClick={this.handleLegDay}>Add Leg day</Button> */}
                    <div className='d-grid gap-2 col-6 mx-auto'>
                        <Button variant='secondary' type="submit" className='m-auto shadow'>Submit</Button>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default connect(null, {addWorkout})(WorkoutsCreateForm)
