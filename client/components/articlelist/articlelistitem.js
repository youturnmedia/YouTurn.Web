import React, {Component} from 'react';
import {Col,Image} from 'react-bootstrap';
import {articlepreviewcontent,previewimage,articlepreviewcontainer,articlepreviewtitle,articlepreviewcontainerbody,
    articlepreviewfooter,previewimagecontainer} from './styles'

export default class ArticleItem extends Component{
    render(){
        return(
            <Col sm={6} md={4}>
                <div className={articlepreviewcontainer}>
                    <div className={previewimagecontainer}>
                    <Image src={this.props.imageurl} responsive className={previewimage} />                  
                    </div>
                    <div className={articlepreviewcontainerbody}>
                        <h4 className={articlepreviewtitle}>{this.props.title}</h4>                
                        <div className={articlepreviewcontent}>
                            {this.props.content}...
                        </div>
                        <div className={articlepreviewfooter}>
                            Readmore
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}