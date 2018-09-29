import React from 'react';

export default class Teacher extends React.Component {
 sendDataToKid = () => {
	const furtherSteps = ['step3', 'step4', 'step5']
    //Send this data to Kid.js
    this.props.updateSteps(furtherSteps);
 }


 render() {
   return (
     <button onClick={this.sendDataToKid}>Get Help From Teacher</button>
   );
 }
}