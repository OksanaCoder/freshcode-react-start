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
      isSortIdUp: true,
    };
  }

  sortUsersById = () => {
    const { users, isSortIdUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if(isSortIdUp){
        return a.id - b.id; 
      }
      return b.id - a.id;
    });
    this.setState({ users: newUsers , isSortIdUp: !isSortIdUp});
  };

  createList = ({ firstName, lastName, id }, index) => (
    <Ciao key={id} id={id} name={firstName} lname={lastName} />
  );

  render() {
    const { users, isSortIdUp } = this.state;
    return (
      <>
        <h1 tabIndex={4}>
          Hi <em>JSX!</em>
        </h1>
        <div>
          <button onClick={this.sortUsersById}>
            sort by id {isSortIdUp ? 'up' : 'down'}
          </button>
        </div>
        {users.map(this.createList)}
      </>
    );
  }
}

export default App;
