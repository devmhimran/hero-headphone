import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './CustomerReview.css';

import useReview from '../CustomHooks/UseReview';
import CustomerReviewMain from '../CustomerReviewMain/CustomerReviewMain';
import { Button } from 'bootstrap';


const CustomerReview = () => {
    const [review, setReview] = useReview();
    return (
        <Container>
            <Row className='g-5'>                   
                    {
                       review.slice(0, 3).map(data => <CustomerReviewMain key={data.id} review={data}></CustomerReviewMain>) 
                    }
            </Row>

            <button className='btn btn-primary' href="/reviews">Show All Reviews</button>
        </Container>
        
    );
};

export default CustomerReview;