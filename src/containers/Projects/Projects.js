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

    const authors = function(data){
      if(data.authors){
        let string = data.authors.map((author,index)=>{
          if(index == data.authors.length-1){
            return (
              <span>{author.name}</span>
            )
          }else{
            return (
              <span>{author.name}, </span>
            )
          }
        });
            
        return string;  

      }else{
        return null;
      }
      
    };

    const styles = require('./Projects.scss');

    return (
      <div className={styles.projectsPageWrapper}>
        <h1>Projects</h1>
          { this.props.data.map((item)=> {
            return (<Link to={`/projects/`+item.uniqueTitle}>
                <div key={item} className={styles.projectContainer}>
                  <h2>{item.displayTitle}</h2>
                  <p>{authors(item.collaboratorsUsers)}</p>
                  <img src={item.image} />
                </div>
              </Link>
            );
          })
        }
      </div>
    );
  }
}


// <p className={styles.abstract}>{item.abstract}</p>