import React from 'react';
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

            </div>
        </div>
    );
};

export default Home;