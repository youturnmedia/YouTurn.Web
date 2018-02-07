import React, {Component} from 'react';
import {Image,Row,Col} from 'react-bootstrap';
import {minilistitemimage,minilistitembharathiheader,minilistitemheader,minilistrow,minilistitemcontainer,minilistitemheadercontainer} from './styles'

export default class Bharathi extends Component{
    render(){
        return(
            <Row className={minilistrow}>
                <Col>
                    <div className={minilistitemcontainer}>
                        <Image className={[minilistitemimage, "minilistimage"]} src={this.props.imageurl} responsive />               
                        <div className={minilistitemheadercontainer}>
                            <h5 className={minilistitemheader}>                            
                            பல வேடிக்கை மனிதரை போலே                           
                            </h5>
                            <h5 className={minilistitemheader}>
                            நான் வீழ்வேனென்று நினைத் தாயோ?
                            </h5>
                        </div>
                      
                    </div>
                </Col>
            </Row>
        )
    }
}
