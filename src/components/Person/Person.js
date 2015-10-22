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

    var classType;

    if(personData.description){
      classType = styles.isAndy;
    }else{
      classType = styles.notAndy;
    }
    

    return (
      <div className={classType}>
        <div>
          <a target="_blank" href={personData.url}><h1>{personData.firstName} {personData.lastName}</h1></a>
          <p>{personData.description}</p>
          <p>{personData.title}</p>
          <a target="_blank" href={personData.url}><img src={personData.image} /></a>
        </div>
        
      </div>
    );
  }
}

