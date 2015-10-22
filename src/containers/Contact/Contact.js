import React, {Component, PropTypes} from 'react';

export default class Contact extends Component {

  render() {
    const styles = require('./Contact.scss');

    return (
      <div className={styles.contactContainer}>
        <h1>Contact</h1>
          
        <p>For general questions and interests, please contact the group administrator: <br/>
         Deb Widener <br/>
         617-253-9805 <br/>
         dw[at]media.mit.edu <br/>
         </p>
        <h2>How to Apply</h2>
        <h3>Graduate Students</h3>
        <p>If you are interested in the Media Lab Master's or PhD program, please visit the <a href="http://www.media.mit.edu/mas/apply.html" target="blank">Media Lab admissions page</a> and the <a href="http://web.mit.edu/admissions/" target="blank">MIT admissions page</a>. All applications must go through the Media Lab.</p>

        <h3>UROPS</h3>
        <p>If you are interested in doing a UROP with the Viral Communications group, please contact the group member whose work best aligns with your interests. More information about the UROP program can be found on the <a href="http://web.mit.edu/urop/" target="blank">MIT UROP page</a>.</p>
      </div>
    );
  }
}
