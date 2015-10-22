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
        <div className={styles.header}><Link to={`/`}><img src="/Viral_Logo.png" /></Link></div>
        <div className="nav">
          <ul>
            <li><Link to={`/projects`}>Projects</Link></li>
            <li><Link to={`/people`}>People</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
            <li><Link to={`/guide`}>Guide</Link></li>
          </ul>
        </div>

        <div className={styles.appContent}>
          {this.props.children}
        </div>

        <div className="footer">
          <hr/>
          <div><img src="/ML_Logo.png" /></div>
          <ul>
            <li><Link to={`/projects`}>Projects</Link></li>
            <li><Link to={`/people`}>People</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
            <li><Link to={`/guide`}>Guide</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}


// <li><Link to={`/wordoflip`}>Word of Lip</Link></li>