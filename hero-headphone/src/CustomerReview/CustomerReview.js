import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './CustomerReview.css';
import { useNavigate } from 'react-router-dom';

import useReview from '../CustomHooks/UseReview';
import CustomerReviewMain from '../CustomerReviewMain/CustomerReviewMain';
import { Button } from 'bootstrap';


const CustomerReview = () => {
    const [review, setReview] = useReview();
    const navigate = useNavigate();
    return (
        <Container>
            <Row className='g-5'>                   
                    {
                       review.slice(0, 3).map(data => <CustomerReviewMain key={data.id} review={data}></CustomerReviewMain>) 
                    }
            </Row>

            <div className="navigateButton py-5">
                <button className='btn btn-primary' onClick={()=> navigate('/reviews')}>Show All Reviews</button>
            </div>
        </Container>
        
    );
};

export default CustomerReview;