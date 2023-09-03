import React, { Component } from "react";
import styles from "./StopWatchTimeoutNew.module.css";

class StopWatchTimeoutNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(0, 0, 0, 0)
    };
    this.idTimeout = null;
  }
  tick = () => {
    this.setState(
      (state) => {
        const { time } = state; //address
        const newTime = new Date(time); //new copy time
        newTime.setSeconds(newTime.getSeconds() + 1);
        return { time: newTime };
      },
      () => {
        // After updating the state, start the timer again
        this.idTimeout = setTimeout(this.tick, 1000);
      }
    );
  };
  start = () => {
    if (this.idTimeout === null) {
      this.idTimeout = setTimeout(this.tick, 1000);
    }
  };

  stop = () => {
    clearTimeout(this.idTimeout);
    this.idTimeout = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };
  componentDidMount = () => {
    // this.start();
  };
  componentDidUpdate = () => {
    this.start();
  };
  render() {
    const { time } = this.state;
    return (
      <div className={styles.container}>
        <h1>{time.toLocaleTimeString("en-GB")}</h1>
        <div>
          <button onClick={this.start} className={styles.startBtn}>
            start
          </button>
          <button onClick={this.reset} className={styles.resetBtn}>
            reset
          </button>
          <button onClick={this.stop} className={styles.stopBtn}>
            stop
          </button>
        </div>
      </div>
    );
  }
}

export default StopWatchTimeoutNew;
