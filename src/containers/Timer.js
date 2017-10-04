import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import resetTimer from '../actions/timer'


class Timer extends PureComponent {

  constructor() {
    super();
    this.state = { time: {}, seconds: 10 };
    this.timer = 10;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    if (this.timer == 10) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    if (seconds == 0) {
      this.props.resetTimer()
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <p>Time left to answer: {this.state.time.s} s</p>
      </div>
    )
  }
}

const mapStateToProps = ({ timer }) => ({
  timer
})
const mapDispatchToProps = { resetTimer }
// export default connect(null, { Timer })(Timer)

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
