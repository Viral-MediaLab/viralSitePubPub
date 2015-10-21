import React, {Component, PropTypes} from 'react';
// import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPeople} from 'redux/reducers/people';

@connect(
  state => ({data: state.people.data})
)
export default class Project extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  // static fetchData(getState, dispatch) {
  //   // const promises = [];
  //   // promises.push(dispatch(loadAuth()));
  //   // return Promise.all(promises);
  // }
  static fetchDataDeferred(getState, dispatch) {
    return dispatch(loadPeople());
  }

  render() {
    // const {user, logout} = this.props;
    console.log('hi');
    console.log(this.props.data);
    return (
      <div className="container">
        <h1>Project!</h1>
          { this.props.data.map((item)=> {
            return (<div key={item.id}>
              {item.color}
              {item.name}
              <hr/>
            </div>
            );
          })
        }
      </div>
    );
  }
}