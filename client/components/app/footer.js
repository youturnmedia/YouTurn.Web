import React,{Component} from 'react';
import {Row, Col, Icon, Glyphicon,Image} from 'react-bootstrap'
import {footer, hearticon,footerrow,githubbtn,footerimage} from './styles'

export default class Footer extends Component{
    render(){
        return(
            <div className={footer}>
                <Row  >
                    <Col id="footerleft" lg={5}>
                      
                        <div className={footerrow}>
                            <ul className="list-inline">
                                <li>© 2018 You Turn</li>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Copyright policy</li>
                            </ul>
                        </div>
                            {/* <iframe className={githubbtn} src="https://ghbtns.com/github-btn.html?user=youturnmedia&amp;repo=YouTurn.Web&amp;type=star&amp;count=false" width="95" height="20" title="Star on GitHub"></iframe>
                            <iframe className={githubbtn} src="https://ghbtns.com/github-btn.html?user=react-bootstrap&amp;repo=react-bootstrap&amp;type=fork&amp;count=true" width="92" height="20" title="Fork on GitHub"></iframe> */}
                      
                    </Col>
                    <Col lg={2}>
                        <center>   
                         <Image className={footerimage} src="static/images/youturn.jpg" />
                        </center> 
                    </Col>
                    <Col id="footerright" mdHidden lg={5}>
                   
                                <div className={footerrow}>
                                    Crafted with <Glyphicon className={hearticon} glyph="heart" /> from Bangalore
                                </div>
                           
                    </Col>
                </Row>
            </div>
        )
    }
}