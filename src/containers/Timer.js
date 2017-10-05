import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import timerAction from '../actions/timerAction'
import addNr from '../actions/questionNr/addNr'
import LinearProgress from 'material-ui/LinearProgress';
import './Timer.css'


class Timer extends PureComponent {

  constructor() {
    super();
    // this.state = { time: {}, seconds: 10 };
    // this.timer = 10;
    this.countDown = this.countDown.bind(this);
  }



  componentDidMount() {
    this.props.timerAction(100)
    this.startTimer()
  }


  startTimer(){
// debugger
    // this.setState({ time: this.props.timer });
    if (this.props.timer === 10) {
      var interVal = setInterval(this.countDown, 1000);
    this.setState({interVal: interVal});

    }

  }

  countDown() {


    let seconds = this.props.timer -1;
    this.props.timerAction(seconds)
    // this.setState({
    //   time: seconds,
    //   seconds: seconds,
    // });
    if (this.props.timer < 0) {
      // this.props.timer()
      clearInterval(this.state.interVal);
      this.props.timerAction(10)
      this.startTimer()
      this.props.addNr(this.props.questionsNr +1)

    }
  }


  componentDidUpdate() {
  }

  render() {
    return (

      <div className="timer-bar">
        <span>Time left to answer: {this.props.timer}</span>
        <LinearProgress mode="determinate" value={this.props.timer} max={10} className={'timer'} />
      </div>
    )
  }
}

const mapStateToProps = ({ timer, questionsNr }) => ({
  timer, questionsNr
})
const mapDispatchToProps = { timerAction, addNr }
// export default connect(null, { Timer })(Timer)

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
