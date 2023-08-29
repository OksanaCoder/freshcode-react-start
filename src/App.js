import { Component } from 'react';
import './App.css';
import Ciao from './components/Ciao';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'Brad',
          lastName: 'Pitt',
        },
        {
          id: 7,
          firstName: 'Alex',
          lastName: 'Varker',
        },
        {
          id: 3,
          firstName: 'Tom',
          lastName: 'Rot',
        },
      ],
    };
  }

  createList = ({ firstName, lastName, id }, index) => (
    <Ciao key={index} id={id} name={firstName} lname={lastName} />
  );
  
  render() {
    const { users } = this.state;
    return (
      <>
        <h1 tabIndex={4}>
          Hi <em>JSX!</em>
        </h1>
        {users.map(this.createList)}
      </>
    );
  }
}

export default App;
