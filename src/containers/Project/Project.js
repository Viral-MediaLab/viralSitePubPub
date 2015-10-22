import React, {Component, PropTypes} from 'react';
import Markdown from 'react-remarkable';
import {connect} from 'react-redux';
import {loadProject, clearProject} from 'redux/reducers/project';

@connect(
  state => ({data: state.project.data, loading: state.project.loading})
)
export default class Project extends Component {
  static propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    dispatch: PropTypes.func
  }

  componentWillUnmount() {
    console.log('leaving!');
    this.props.dispatch(clearProject());
    
  }

  static fetchDataDeferred(getState, dispatch) {
  	console.log('in project fetch');
  	// console.log(getState().router.params.projectName)
    return dispatch(loadProject(getState().router.params.projectName));
  }

  render() {
    // const {user, logout} = this.props;
    // console.log('hi');
    // console.log(this.props.data);
    const data = this.props.data;
    const authors = function(){
      if(data.authors){
        return data.authors.map((author)=>{
            return (
              <span>{author.name}</span>
            );
          });  
      }else{
        return null;
      }
      
    }
    // const abstract = function(){
    //   if(data.versions){
    //     return <p>{data.versions.abstract}</p>;
    //   }else{
    //     return null;
    //   }
    // }

    var loading;

    if(this.props.loading){
    	loading = 'Loading'
    }else{
    	loading = null;
    }
    return (
      <div className="container">
        <h1>{loading}</h1>
        <h1>{data.displayTitle}</h1>
        
        {authors()}
        <a href={'http://www.pubpub.org/pub/'+data.uniqueTitle} target="_blank"><h3>Read/Comment on PubPub</h3></a>

        <Markdown source={data.abstract} />
        <hr/>
        <Markdown source={data.content} />
        

          
      </div>
    );
  }
}
