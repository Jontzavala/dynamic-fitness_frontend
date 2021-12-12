import React from 'react';
import {useParams, Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux'

const GymShow = (props) => {
    
    const {id} = useParams();
    let gym = props.gyms.filter(gym => gym.id === id)
    if (gym.length === 0) return null;
    let gymData = (book && book[0].attributes);

}
