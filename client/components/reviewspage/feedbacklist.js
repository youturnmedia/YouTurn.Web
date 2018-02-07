import React, {Component} from 'react';
import FeedBackListItem from './feedbacklistitem';

export default class FeedBackList extends Component{


    render(){
        const reviews = this.props.reviews;
        
        
        
        const listItems = reviews.map((review,index) =>
            <FeedBackListItem key={index} review={review} />
           
        );
        return (
        <div>
            {listItems}
        </div>
        )
    }
}