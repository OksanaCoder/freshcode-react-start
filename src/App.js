import { Component } from 'react';
import './App.css';
// import Ciao from './components/Ciao';
import CiaoList from './components/CiaoList';

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
      //стан для фіксування порядку сортування за іменем
      isSortFirstNameUp: true,
    };
  }

  sortUsersByFirstName = () => {
    const { users, isSortFirstNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isSortFirstNameUp ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortFirstNameUp ? -1 : 1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isSortFirstNameUp: !isSortFirstNameUp });
  };
  sortUsersById = () => {
    const { users, isSortIdUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    this.setState({ users: newUsers, isSortIdUp: !isSortIdUp });
  };

  // createList = ({ firstName, lastName, id }, index) => (
  //   <Ciao key={id} id={id} name={firstName} lname={lastName} />
  // );

  render() {
    const { users, isSortIdUp, sortUsersByFirstName } = this.state;
    return (
      <>
        <h1 tabIndex={4}>
          Hi <em>JSX!</em>
        </h1>
        <div>
          {/* додати кнопку, яка виконує сортування за іменем */}
          <button onClick={this.sortUsersByFirstName}>
            sort by name {sortUsersByFirstName ? 'up' : 'down'}
          </button>
          <button onClick={this.sortUsersById}>
            sort by id {isSortIdUp ? 'up' : 'down'}
          </button>
        </div>
        <CiaoList users={users}/>
        {/* <section>{users.map(this.createList)}</section> */}
      </>
    );
  }
}

export default App;
