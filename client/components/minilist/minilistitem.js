import React, {Component} from 'react';
import {Image,Row,Col} from 'react-bootstrap';
import {minilistitemimage,minilistitemheader,minilistrow,minilistitemcontainer,minilistitemheadercontainer} from './styles'

export default class MiniListItem extends Component{
    render(){
        return(
            <Row className={minilistrow}>
                <Col>
                    <div className={minilistitemcontainer}>
                        <Image className={[minilistitemimage, "minilistimage"]} src={this.props.imageurl} responsive />               
                        <div className={minilistitemheadercontainer}>
                            <h5 className={minilistitemheader}>{this.props.title}</h5>
                        </div>
                        <div>
                            {this.props.content}
                            To be added
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
