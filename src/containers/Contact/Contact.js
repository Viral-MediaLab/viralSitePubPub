import React, {Component, PropTypes} from 'react';

export default class Contact extends Component {

  render() {
    return (
      <div className="container">
        <h1>Contact</h1>
          
        <p>For general questions and interests, please contact the group administrator: <br/>
         Deb Widener <br/>
         617-253-9805 <br/>
         dw[at]media.mit.edu <br/>
         </p>
        <h3>How to Apply</h3>
        <h5>Graduate Students</h5>
        <p>If you are interested in the Media Lab Master's or PhD program, please visit the <a href="http://www.media.mit.edu/mas/apply.html" target="blank">Media Lab admissions page</a> and the <a href="http://web.mit.edu/admissions/" target="blank">MIT admissions page</a>. All applications must go through the Media Lab.</p>

        <h5>UROPS</h5>
        <p>If you are interested in doing a UROP with the Viral Communications group, please contact the group member whose work best aligns with your interests. More information about the UROP program can be found on the <a href="http://web.mit.edu/urop/" target="blank">MIT UROP page</a>.</p>
      </div>
    );
  }
}
