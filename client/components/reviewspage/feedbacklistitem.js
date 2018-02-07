import React, {Component} from 'react';
import {Col,Image,Button} from 'react-bootstrap';
import {feedbackitem,feedbackitemimage,reviewer,reviewcomments} from './styles';

export default class FeedBackListItem extends Component{
    render(){
        let review = this.props.review;
        return(
            <Col md={6} lg={4}  key={review.toString()}>
                <div className={feedbackitem}>
                    <Image className={feedbackitemimage} src={review.photourl} />
                    <div className={reviewer}>  
                        {review.name}
                    </div>
                    <div className={reviewcomments}>
                        {review.comments}
                    </div>                
                </div>
            </Col>
        )
    }
}
