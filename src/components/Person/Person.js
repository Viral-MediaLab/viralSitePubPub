import React, {Component, PropTypes} from 'react';


export default class Person extends Component {
  static propTypes = {
    // firstName: PropTypes.string,
    // lastName: PropTypes.string,
    // description: PropTypes.string,
    // image: PropTypes.string,
    // email: PropTypes.string,
    // website: PropTypes.string,
    personData: PropTypes.object
  }

  render() {
    // const {name, description, image, email, website} = this.props;
    const personData = this.props.personData;

    const styles = require('./Person.scss');

    return (
      <div className={styles.personClass}>
        <h1>{personData.firstName} {personData.lastName}</h1>
        <p>{personData.description}</p>
        <img src={personData.image} />
        <p>{personData.email}</p>
        <p>{personData.url}</p>
      </div>
    );
  }
}

