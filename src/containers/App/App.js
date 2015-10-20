import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import DocumentMeta from 'react-document-meta';
// import { pushState } from 'redux-router';
// import config from '../../config';


// @connect(state => ({pushState}))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func
  };

  // console.log(state);


  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <p><Link to={`/project`}>Project</Link></p>
        <p><Link to={`/`}>Home</Link></p>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
