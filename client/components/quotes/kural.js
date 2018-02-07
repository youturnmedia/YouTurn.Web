import React, {Component} from 'react';
import {Image,Row,Col} from 'react-bootstrap';
import {minilistitemimage,minilistitemheader,minilistrow,minilistitemcontainer,minilistitemheadercontainer} from './styles'

export default class Kural extends Component{
    render(){
        return(
            <Row className={minilistrow}>
                <Col>
                    <div className={minilistitemcontainer}>
                        <Image className={[minilistitemimage, "minilistimage"]} src={this.props.imageurl} responsive />               
                        <div className={minilistitemheadercontainer}>
                            <h5 className={minilistitemheader}>
                            எந்நன்றி கொன்றார்க்கும் உய்வுண்டாம் உய்வில்லை</h5>
                            <h5 className={minilistitemheader}>
                            செய்ந்நன்றி கொன்ற மகற்கு.
                            </h5>
                        </div>                        
                    </div>
                </Col>
            </Row>
        )
    }
}
