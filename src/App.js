import { Component } from 'react';
import './App.css';
import Ciao from './components/Ciao';
const user = {
  id: 1,
  firstName: 'Brad',
  lastName: 'Pitt'
};
class App extends Component {
  render() {
    return (
      <>
        <h1 tabIndex={4}>
          Hi <em>JSX!</em>
        </h1>
        <Ciao name={user.firstName} lname={user.lastName} isHi />
        <Ciao name="Alex" />
        <Ciao name="Tom"  isHi/>
      </>
    );
  }
}

export default App;
