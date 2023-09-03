import React, { Component } from "react";

class ClickCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  componentDidMount() {
    this.setState({
      clickCount: 0
    });
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.clickCount !== prevState.clickCount) {
  //       this.setState({
  //         clickCount: this.state.clickCount + 1
  //       });
  //     }
  //   }

  handleButtonClick = () => {
    // Збільшуємо кількість кліків при кліку на кнопці "Click me"
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1
    }));
  };

  handleResetClick = () => {
    // Скидаємо кількість кліків на нуль при кліку на кнопці "Reset"
    this.setState({
      clickCount: 0
    });
  };

  render() {
    const { clickCount } = this.state;
    return (
      <div>
        <h1>Click Counter</h1>
        <p>Number of clicks: {clickCount}</p>
        <button onClick={this.handleButtonClick}>Click me</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

export default ClickCount;
