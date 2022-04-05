import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeroArea.css';
import HeroImage from '../assets/img/headphone-hero.png'

const HeroArea = () => {
    return (
        <Container>
                <Row>
                <Col className='hero__area__left' lg={6} md={6} sm={12}>
                    <div className="hero__area__text">
                        <h1>Sounds That Makes <br /> You Feel <span>Alive</span></h1>
                        <p>We Serve you earphones, headphones stereos, travel chargers and premium rugged cables. </p>
                    </div>
                </Col>
        
                <Col className='hero__area__right' lg={6} md={6} sm={12}>
                    <img src={HeroImage} alt="" />
                </Col>
                </Row>
            </Container>
        
        
    );
};

export default HeroArea;