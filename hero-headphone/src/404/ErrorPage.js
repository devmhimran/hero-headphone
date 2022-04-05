import React from 'react';
import { Container } from 'react-bootstrap';
import ErrorImg from '../assets/img/404-not-found.gif'

const ErrorPage = () => {
    return (
        <Container>
            <img src={ErrorImg} alt="" />
        </Container>
    );
};

export default ErrorPage;