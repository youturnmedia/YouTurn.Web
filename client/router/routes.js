import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from '#app/components/app';
import Homepage from '#app/components/homepage';
import Usage from '#app/components/usage';
import NotFound from '#app/components/not-found';
import ArticlePage from '#app/components/articlepage';
import ReviewsPage from '#app/components/reviewspage';
/**
 * Returns configured routes for different
 * environments. `w` - wrapper that helps skip
 * data fetching with onEnter hook at first time.
 * @param {Object} - any data for static loaders and first-time-loading marker
 * @returns {Object} - configured routes
 */
export default ({store, first}) => {

  // Make a closure to skip first request
  function w(loader) {
    return (nextState, replaceState, callback) => {
      if (first.time) {
        first.time = false;
        return callback();
      }
      return loader ? loader({store, nextState, replaceState, callback}) : callback();
    };
  }

  return <Route path="/" component={App}>
    <IndexRoute component={Homepage} onEnter={w(Homepage.onEnter)}/>
    <Route path="/%E0%AE%9A%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D" component={ArticlePage} onEnter={w(Usage.onEnter)}/>
    <Route path="/%E0%AE%B5%E0%AE%BF%E0%AE%AE%E0%AE%B0%E0%AF%8D%E0%AE%9A%E0%AE%A9%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D" component={ReviewsPage} onEnter={w(Usage.onEnter)}/>
    <Route path="/usage" component={Usage} onEnter={w(Usage.onEnter)}/>
    {/* Server redirect in action */}
    <Redirect from="/docs" to="/usage" />
    <Redirect from="/செய்திகள்" to="/செய்திகள்" />
    <Redirect from="/" to="/" />
    <Route path="*" component={NotFound} onEnter={w(NotFound.onEnter)}/>
  </Route>;
};
