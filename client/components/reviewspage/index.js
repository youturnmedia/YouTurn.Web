import React, {Component} from 'react';
import {Row, Col, Image,Glyphicon} from 'react-bootstrap';
import MajorReviewCard from './majorreviewcard';
import FeedBackList from './feedbacklist';
import {hearticon} from './styles';

export default class ReviewsPage extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col lg={4}>
                        <MajorReviewCard
                            title="Your Story recognizes youturn founders"
                            action="Read at your story"
                            content ={ () => { return (<Image src="https://userfilescdn.yourstory.com/uploads/production/document_image/file/89832/full_9b94536e77" / >)} }
                        />
                        
                    </Col>
                    <Col lg={4}>
                        <MajorReviewCard
                            title="Youturn - Against fake news at TEDx"
                            action="Watch video"
                            content ={ () => { return ( <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LxkR85KVEx0" allowFullScreen></iframe>
                    </div> )} }
                        />
                       
                    </Col>
                    <Col lg={4}>
                        <MajorReviewCard
                            title="Highlighted in Vikatan"
                            action="Read vikatan article"
                            content ={ () => { return (<Image src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/19420864_1916988041882042_6850961105738648105_n.jpg?oh=1e7aed5db174d9b37dad4d5c4ad6c04c&oe=5AD91F56" / >)} }
                        />
                    </Col>
                </Row>
                <Row>
                        <center>
                            <h1>
                            People <Glyphicon className={hearticon} glyph="heart" />  YouTurn
                            </h1>
                        </center>
                        <FeedBackList
                            reviews={
                                [{
                                    "key" : 1,
                                    "comments" : "One of the Useful Facebook and other social medias Page..Good work...All the best",
                                    "name" : "Sethu Raja Smd",
                                    "photourl" : "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-1/p100x100/26168492_1430518537061536_5844022237367964727_n.jpg?oh=b20086234356a4a78568e2255d7eaac6&oe=5B10022C"
                                },{
                                    "key": 2,
                                    "comments" : "Site is bad",
                                    "name" : "Senthil Sivanath",
                                    "photourl": "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-1/p64x64/15622290_10154961586574248_2415759920563635650_n.jpg?oh=2b7e512e06168305cd82acba9a5232ba&oe=5ADA538A"
                                },
                                {
                                    
                                    "comments" : "I hope everything in this page... Great work Admin ....",
                                    "name" : "Javid MJ",
                                    "photourl": "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/14502740_542581235937865_8370213417927800969_n.jpg?oh=2917147c510008ddeee77861fb71a442&oe=5AE25665"
                                    
                                },{
                                    "comments" : "உண்மையை தெளிவாக கூறுகின்றனர்..சாதி, மதம், மொழி,கட்சி ஆகியவைகளைக் தாண்டி உண்மை மட்டுமே இங்கு பார்க்கலாம்",
                                    "name" : "Deva Krish",
                                    "photourl": "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-1/p100x100/21751942_754193048116852_4681998320642956493_n.jpg?oh=62aeb807be4690260dbb469444ffa756&oe=5B13DEDD"
                                    
                                    
                                }
                            ]
                            }
                        />
                    
                </Row>
            </div>
        )
    }
}