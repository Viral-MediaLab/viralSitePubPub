import React, {Component, PropTypes} from 'react';


export default class Person extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string
  }

  render() {
    const {name, description, image, email, website} = this.props;

    const styles = require('./Person.scss');
    
    return (
      <div className={styles}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{image}</p>
        <p>{email}</p>
        <p>{website}</p>
      </div>
    );
  }
}

