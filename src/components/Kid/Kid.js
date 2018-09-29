import React from 'react';

export default class Kid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false, isQualified: false };
  }

  static getDerivedStateFromProps(props, state) {
    const { isQualified } = state;
    const danceSteps = [...state.danceSteps, ...props.furtherSteps];
    return {
      danceSteps: state.danceSteps.length === 2 ? danceSteps : state.danceSteps,
      startedPerforming: !isQualified && danceSteps.length >= 5 ? true : false,
      emotion: props.emotion || 'nervous'
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps.isQualified, this.props.isQualified, this.state.startedPerforming);
    
    if(this.props.isQualified !== prevProps.isQualified){
      this.qualified();
    }
  }

  componentDidMount() {
    this.setState({
      danceSteps: ['step1', 'step2']
    })
  }

  componentWillUnmount() {
    this.props.leaveJudgesAndTeacher();
  }

  qualified = () => {
    this.setState({ 
      startedPerforming: false,
      isQualified: true 
    })
  }

  render() {
    const { dressColor } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
    
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion}</div>
        {startedPerforming &&
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
          </div>}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };