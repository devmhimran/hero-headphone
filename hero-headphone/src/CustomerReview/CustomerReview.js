import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './CustomerReview.css';

import useReview from '../CustomHooks/UseReview';
import CustomerReviewMain from '../CustomerReviewMain/CustomerReviewMain';


const CustomerReview = () => {
    const [review, setReview] = useReview();
    return (
        <Container>
            <Row className='g-5'>                   
                    {
                       review.map(data => <CustomerReviewMain key={data.id} review={data}></CustomerReviewMain>) 
                    }
            </Row>
        </Container>
        
    );
};

export default CustomerReview;