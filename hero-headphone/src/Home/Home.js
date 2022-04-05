import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomerReview from '../CustomerReview/CustomerReview';
// import { Col, Container, Row } from 'react-bootstrap';
import HeroArea from '../HeroArea/HeroArea';
import './Home.css';

const Home = () => {
    return (
        <div className="home__main">
            <div className='hero__area'>
                <HeroArea></HeroArea>  
            </div>
            <div className="customer__review">
                <h1 className='pb-5'>Customer Review</h1>
                <CustomerReview></CustomerReview>
            </div>
        </div>
    );
};

export default Home;