import React, {Component} from 'react';
import {Col,Image,Button} from 'react-bootstrap';
import {articlepreviewcontent,previewimage,articlepreviewcontainer,articlepreviewtitle,articlepreviewcontainerbody,
    articlepreviewfooter,previewimagecontainer,actiontext} from './styles'

export default class MajorReviewCard extends Component{
    render(){
        return(
         
                <div className={articlepreviewcontainer}>
                    <div className={previewimagecontainer}>
                        {this.props.content()}
                    </div>
                    <div className={articlepreviewcontainerbody}>
                        <center>
                            <h4 className={articlepreviewtitle}>{this.props.title}</h4>                
                        </center>
                        <div className={articlepreviewcontent}>
                            {this.props.content}
                        </div>
                        <div className={articlepreviewfooter}>
                        <center>                        
                            <Button bsStyle="primary" className={actiontext}>
                                {this.props.action}
                            </Button>
                        </center>
                        </div>
                    </div>
                </div>
           
        )
    }
}