import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {App, Home, People, Projects, Project, Wordoflip, Contact, Guide, NotFound} from 'containers';

// export default (store) => {
export default () => {
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="/people" component={People}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/projects/:projectName" component={Project}/>
      <Route path="/wordoflip" component={Wordoflip}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/guide" component={Guide}/>


      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );

};
