import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class App extends Component {

  render() {
    return <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Helmet title='Go + React + Redux = rocks!' />
      {this.props.children}
    </div>;
  }

}
