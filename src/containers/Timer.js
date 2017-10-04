import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

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

export default Timer
