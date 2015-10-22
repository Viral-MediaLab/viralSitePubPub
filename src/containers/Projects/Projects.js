import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
// import { pushState } from 'redux-router';
import {loadProjects, clearProjects} from 'redux/reducers/projects';

const projects = require('../../../data/projects.json');

@connect(
  state => ({data: state.projects.data})
)
export default class Project extends Component {
  static propTypes = {
    data: PropTypes.array,
    dispatch: PropTypes.func
  }

  componentWillUnmount() {
    console.log('leaving!');
    // this.props.dispatch(clearProjects());
    // dispatch(clearPeople());
  }

  static fetchDataDeferred(getState, dispatch) {
    return dispatch(loadProjects(projects));
  }

  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
          { this.props.data.map((item)=> {
            return (<Link to={`/projects/`+item.uniqueTitle}>
                <div key={item}>
                  {item.displayTitle}
                  <img src={item.image} />
                  {item.collaboratorsUsers.authors.map((author)=>{
                    return (
                      <span>{author.name}</span>
                    )
                  })}
                  <hr/>
                </div>
              </Link>
            );
          })
        }
      </div>
    );
  }
}
