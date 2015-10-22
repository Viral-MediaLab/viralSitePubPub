import React, {Component, PropTypes} from 'react';
// import React, {Component} from 'react';
import Person from '../../components/Person/Person';
import {connect} from 'react-redux';
// import { pushState } from 'redux-router';
// import {loadPeople, clearPeople} from 'redux/reducers/people';

const people = require('../../../data/people.json');


export default class Project extends Component {
  // static propTypes = {
  //   data: PropTypes.array,
  //   dispatch: PropTypes.func
  // }

  // componentWillUnmount() {
  //   console.log('leaving!');
  //   this.props.dispatch(clearPeople());
  //   // dispatch(clearPeople());
  // }

  // static fetchDataDeferred(getState, dispatch) {
  //   return dispatch(loadPeople());
  // }

  render() {
    // const {user, logout} = this.props;
    // console.log('hi');
    // console.log(this.props.data);
    return (
      <div className="container">
        {
          people.map((person, index)=>{
            return (
              <Person key={index} personData={person} />
            );
          })
        }

        

      </div>
    );
  }
}

// <h2>Alumni</h2>
// <table id="alumni_table">
//   <tr><td>Vivian Diep</td><td>MS</td><td>2015</td></tr>
//   <tr><td>Amir Lazarovich</td><td>MS</td><td>2015</td></tr>
//   <tr><td>Savannah Niles</td><td>MS</td><td>2015</td></tr>
//   <tr><td>Dan Sawada</td><td>MS</td><td>2014</td></tr>
//   <tr><td>Jonathan Speiser</td><td>MS</td><td>2014</td></tr>
//   <tr><td>Jeremy Rubin</td><td>4 years UROP</td><td>2014</td></tr>
//   <tr><td>Eyal Toledano</td><td>MS</td><td>2013</td></tr>
//   <tr><td>Polychronis Ypodimatopoulos</td><td>MS, PhD</td><td>2013</td></tr>
//   <tr><td>Grace Woo</td><td>MS, PhD</td><td>2012</td></tr>
//   <tr><td>Dawei Shen</td><td>MS, PhD</td><td>2012</td></tr>
//   <tr><td>Julia Ma</td><td>MS</td><td>2012</td></tr>
//   <tr><td>Matt Blackshaw</td><td>MS</td><td>2012</td></tr>
//   <tr><td>Boris Kizelshteyn</td><td>MS</td><td>2011</td></tr>
//   <tr><td>Kwan Hong Lee</td><td>PhD</td><td>2011</td></tr>
//   <tr><td>Hector Yuen</td><td>MS</td><td>2006</td></tr>
//   <tr><td>Many more. Email viral@media to get your name added</td><td>MS/PHD</td><td></td></tr>
  
// </table>