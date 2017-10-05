import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import timerAction from '../actions/timerAction'
import addNr from '../actions/questionNr/addNr'


class Timer extends PureComponent {

  constructor() {
    super();
    // this.state = { time: {}, seconds: 10 };
    // this.timer = 10;
    this.countDown = this.countDown.bind(this);
  }



  componentDidMount() {

    this.props.timerAction(10)
    this.startTimer()
  }


  startTimer(){
// debugger
    // this.setState({ time: this.props.timer });
    if (this.props.timer == 10) {
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

    // if(this.props.timer == 0){
        console.log()
    // }

  }

  render() {
    const { timer } = this.props
    return (

      <div>
        <p>Time left to answer: {this.props.timer} s</p>

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
