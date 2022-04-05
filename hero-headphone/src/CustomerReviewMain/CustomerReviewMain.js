import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import './CustomerReviewMain.css'

const CustomerReviewMain = (props) => {
    const { name, img, description, rating } = props.review;
    console.log(props);
    return (
        <Col lg={4} md={6} sm={12}>
            <Card className='customer__review__card'>
            <Card.Header>
                <div className="customer__review__info">
                    <div className="customer__info">
                        <img className='customer__image' src={img} alt="" />
                        <p>{name}</p>
                    </div>
                    <div className="review">
                        <p>{rating}</p>
                        <span className='review__icon'><FaStar></FaStar></span>
                    </div>
                </div>
            </Card.Header>
                <Card.Body>
                    <div className="review__description">
                        <p>{description}</p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CustomerReviewMain;