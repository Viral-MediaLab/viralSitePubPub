import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {App, Home, Project, NotFound} from 'containers';

// export default (store) => {
export default () => {
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="project" component={Project}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );

};
