import React, {Component} from 'react';
import {Row, Col,Image} from 'react-bootstrap';

export default class VideoPreview extends Component{
    render(){
        return(
            
                      
                <Row>
                <Col lg={6}>
                    <div  id="first" className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/If3IeqhpNdg" allowFullScreen></iframe>
                    </div>
                </Col>    
                <Col xsHidden md={6} lg={6}  xs={0}>                    
                    <Row>
                        <Col md={6} lg={6}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LxkR85KVEx0" allowFullScreen></iframe>
                            </div>                            
                        </Col>
                        <Col md={6} lg={6}>
                            <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/GVbNTSygp5U" allowFullScreen></iframe>
                                </div>                                                                    
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} lg={6}>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BAx_f6h0RJU" allowFullScreen></iframe>
                                </div>                                            
                        </Col>
                        <Col md={6} lg={6}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hhQdZTsqEBU" allowFullScreen></iframe>
                            </div>                               
                        </Col>                    
                    </Row>                
                </Col>
            </Row>           
        )
    }
}