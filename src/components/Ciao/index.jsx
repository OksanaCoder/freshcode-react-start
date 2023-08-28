import { Component } from 'react';

class Ciao extends Component {
  render() {
    const { name, lname, isHi } = this.props;
    return (
      <h2>
        {isHi ? 'hi' : 'bye'}, {name} {lname}
      </h2>
    );
  }
}

export default Ciao;
