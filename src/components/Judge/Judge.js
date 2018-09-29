import React, { Component } from 'react';

export default class Judge extends Component {
    constructor() {
    super();

    this.state = {
      stars: 0, 
      available: false
    }
  }

    shouldComponentUpdate() {
      return this.state.stars < 5;
    }

    componentDidUpdate() {
      if(this.state.stars === 5) {
        this.props.updateIsQualified();
      }    
    }

    applaud = () => {
      //Send this applaud status to Kid.js
      this.props.updateEmotion();
    }
   
    provideStars = () => {
      const {stars} = this.state;
   
      this.setState({stars: 1+stars})
    }
   
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <button type="button" onClick={this.applaud}>
           Appreciate performance
          </button>
          <button type="button" onClick={this.provideStars}>
           Provide stars
          </button>
   
          Kid is available: {available}
   
          Stars gained: {stars}
        </div>
      );
    }
   }   