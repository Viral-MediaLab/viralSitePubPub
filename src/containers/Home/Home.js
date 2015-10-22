import React, { Component } from 'react';
// import { Link } from 'react-router';


const ImageGallery = require('react-image-gallery');


const images = require('../../../data/images.json');




export default class Home extends Component {
	handleSlide(index) {
	  console.log('Slid to ' + index);
	}

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div id="vision" className="vision-section">
          <p>The Viral Communications group creates scalable technologies that evolve with user inventiveness. We have a rich history in proximal and infrastructure-free networks and their applications, as well as in applications that integrate mobile computing with the spaces around us. These include codes embedded in objects and in images that make them self-describing and detectable. In 2013, we introduced a new focus on Ultimate Media (see UM listing.) This multi-sponsor program envisions a unified interface for all visual media, including television, movies, magazines, and newspapers. It is a generalized platform for social and data-driven exploration and creation of news, sports, and narrative experiences.</p>
        </div>
        <div className={styles.gallery}>
        	<ImageGallery
		      items={images}
		      showThumbnails={false}
		      showNav={false}
		      showBullets={true}
		      autoPlay={true}
		      slideInterval={4000}
		      onSlide={this.handleSlide}/>
        </div>
        
      </div>
    );
  }
}

