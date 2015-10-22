import React, {Component, PropTypes} from 'react';

export default class Guide extends Component {
  
  render() {
    const styles = require('./Guide.scss');

    return (
      <div className={styles.guide}>
        <iframe src="http://www.pubpub.org/pub/viralguide">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    );
  }
}
