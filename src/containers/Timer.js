import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import timerAction from '../actions/timerAction'
import addNr from '../actions/questionNr/addNr'
import LinearProgress from 'material-ui/LinearProgress';
import Game from './Game'
import subscribeToGames from '../actions/games/subscribe'
import './Timer.css'


class Timer extends PureComponent {

  constructor() {
    super();
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.props.timerAction(10)
    this.startTimer()
  }

  startTimer(){
    if (this.props.timer === 10) {
      var interVal = setInterval(this.countDown, 1000);
      this.setState({interVal: interVal});
    }
  }


  countDown() {
    let seconds = this.props.timer -1;
    this.props.timerAction(seconds)

    if (this.props.timer < 0) {
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
