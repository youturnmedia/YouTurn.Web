import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Menu from '../menu';
import Footer from './footer';
import {Row, Col} from 'react-bootstrap';

export default class App extends Component {

  render() {
    return <div>           Hello
      <Helmet title='Go + React + Redux = rocks!' />
      <Menu />
      {this.props.children} 
      <Row>
        <Col xsHidden lg={12}>
          <Footer />
        </Col>
      </Row>
    </div>;
  }

}
