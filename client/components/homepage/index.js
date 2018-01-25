import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { example, p, link, header } from './styles';
import ArticleList from '../articlelist'

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
        <image src="static/images/youturn.jpg" /> 
     
      <p className={p}>
        Please take a look at <Link className={link} to='/docs'>usage</Link> page.
      </p>
      <div>
      <ArticleList />
      </div>
      
    </div>
  }

}
