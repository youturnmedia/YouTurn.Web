import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { example, p, link, header,minilistcol,otherarticles } from './styles';
import ArticleList from '../articlelist'
import BlockPost from '../blockpost'
import MiniList from '../minilist'
import {Row, Col} from 'react-bootstrap'
import Bharathi from '../quotes/bharathi'
import Kural from '../quotes/kural'
import VideoPreview from '../videopreview'

export default class Homepage extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return <div>
      <Helmet
        title='Youturn - Combatting Fake News'
        meta={[
          {
            property: 'og:title',
            content: 'Youturn - Combatting Fake News'
          }
        ]} />      
      
     
      {/* <p className={p}>
        Please take a look at <Link className={link} to='/docs'>usage</Link> page.
      </p> */}
      <div>
      <BlockPost />  
      <ArticleList />
      <Row>
        <Col lg={6}>
          <Kural imageurl="https://cdn.dribbble.com/users/605926/screenshots/3680898/thiruvalluvar_statue.png"  />
        </Col>
        <Col lg={6}>
          <Bharathi imageurl="https://cdn.dribbble.com/users/162190/screenshots/2400493/mahakavi.jpg" title="பராசிட்டமல் மாத்திரைகளால் வைரஸ் பாதிப்பு ஏற்படுகிறதா ?"  />
        </Col>
      </Row>
      <Row className={otherarticles}>
        <Col className="minilistcol" lg={6}>
          <div  className={minilistcol}>
          <MiniList />
          </div>
        </Col>
        <Col className="minilistcol" lg={6}>
          <div   className={minilistcol}>
          <MiniList />
          </div>
        </Col>
        {/* <Col className="minilistcol" lg={4}>
          <div  className={minilistcol}>
          <MiniList />
          </div>
        </Col> */}
      </Row>
      <Row id="videopreview">        
        <Col lg={12}>
          <h1 id="videostitle">You Turn Videos</h1>
          <VideoPreview />
        </Col>
      </Row>
      </div> 
      
    </div>
  }

}
