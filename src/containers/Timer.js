import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import timerAction from '../actions/timerAction'
import addNr from '../actions/questionNr/addNr'
import LinearProgress from 'material-ui/LinearProgress';
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
    const { game } = this.props

    if (this.props.timer === 10) {
      if (game.players.length === 2) {
        var interVal = setInterval(this.countDown, 1000);
        this.setState({interVal: interVal});
      }
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


const mapStateToProps =  ({ timer, questionsNr, currentGame, games }) => {

  const game = games.filter((g) => (g._id === currentGame))[0]

  return {
    timer,
    questionsNr,
    game,
  }
}


const mapDispatchToProps = { timerAction, addNr }
// export default connect(null, { Timer })(Timer)

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
