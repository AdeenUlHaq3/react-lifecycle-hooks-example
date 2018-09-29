import React, { Component } from 'react';
import './App.css';

import Kid from './components/Kid/Kid';
import Teacher from './components/Teacher/Teacher';
import Judge from './components/Judge/Judge';

class App extends Component {
  constructor() {
    super();

    this.state = {
      volume: 0,
      isQualified: false,
      isKidLeave: false,
      isJudgeLeave: false,
      isTeacherLeave: false
    };
  }

  static getDerivedStateFromProps() {
    return {
      volume: 5
    };
  }

  updateSteps = (furtherSteps) => {
    this.setState({
      furtherSteps
    })
  }

  updateEmotion = () => {
    this.setState({
      emotion: 'happy'
    })
  }

  updateIsQualified = () => {
    this.setState({
      isQualified: true
    })
  }

  leaveJudgesAndTeacher = () => {
    this.setState({
      isJudgeLeave: true,
      isTeacherLeave: true
    })
  }

  render() {
    const { 
      furtherSteps,
      emotion,
      isQualified,
      isKidLeave,
      isTeacherLeave,
      isJudgeLeave
    } = this.state;

    return (
      <div className='App'>
        <h1>Kid</h1>
        {
          !isKidLeave && <Kid dressColor='blue' furtherSteps={ furtherSteps } emotion={ emotion } isQualified={ isQualified } leaveJudgesAndTeacher={ this.leaveJudgesAndTeacher } />
        }
        {
          isQualified && !isKidLeave && <input type='button' value='Leave The Show' onClick= {() => this.setState({ isKidLeave: true })} />
        }
        <hr/>
        <h1>Teacher</h1>
        {
          !isTeacherLeave && <Teacher updateSteps={this.updateSteps} />
        }
        <hr/>
        <h1>Judge</h1>
        {
          !isJudgeLeave && <Judge updateEmotion={this.updateEmotion} updateIsQualified={ this.updateIsQualified } />
        }    
      </div>
    );
  }
}

export default App;
