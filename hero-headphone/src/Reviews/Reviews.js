import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomerReviewMain from '../CustomerReviewMain/CustomerReviewMain';
import useReview from '../CustomHooks/UseReview';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
   

        <Container>
            <div className="heading py-5">
                <h1 className=''>See All Review</h1>
            </div>
            
            <Row className='g-5'>                   
                    {
                       review.map(data => <CustomerReviewMain key={data.id} review={data}></CustomerReviewMain>) 
                    }
            </Row>
        </Container>
        
    );
};

export default Reviews;