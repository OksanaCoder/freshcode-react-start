import { Component } from 'react';
import './App.css';
import Ciao from './components/Ciao';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'Brad',
        lastName: 'Pitt',
      },
    };
  }

  render() {
    const {user} = this.state;
    return (
      <>
        <h1 tabIndex={4}>
          Hi <em>JSX!</em>
        </h1>
        <Ciao name={user.firstName} lname={user.lastName} />
        <Ciao name="Alex" />
        <Ciao name="Tom" />
      </>
    );
  }
}

export default App;
