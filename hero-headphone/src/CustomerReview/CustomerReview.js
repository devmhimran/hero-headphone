import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './CustomerReview.css';
import { FaStar } from "react-icons/fa";
import useReview from '../CusotmHooks/UseReview';


const CustomerReview = () => {
    
    return (
        <Container>
            <Row className='g-5'>                   
                    <Col lg={4} md={6} sm={12}>
                    <Card className='customer__review__card'>
                    <Card.Header>
                        <div className="customer__review__info">
                            <div className="customer__info">
                                <img className='customer__image' src="https://media.istockphoto.com/photos/nothing-is-a-magnet-for-success-like-self-confidence-picture-id1262964459?b=1&k=20&m=1262964459&s=170667a&w=0&h=ksXAqZ43oZWWm9Zdz_4IMLHGCpS9_yR5Tc4zCex2-Ao=" alt="" />
                                <p>John Doe</p>
                            </div>
                            <div className="review">
                                <p>4.5</p>
                                <span className='review__icon'><FaStar></FaStar></span>
                            </div>
                        </div>
                    </Card.Header>
                        <Card.Body>
                            <div className="review__description">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate mollitia tempore temporibus vero. Eius, perspiciatis atque, omnis culpa vel tenetur officiis consequatur eligendi placeat earum harum. Aut, iste necessitatibus?</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    );
};

export default CustomerReview;