import { Component } from "react";
import "./App.css";
import CiaoList from "./components/CiaoList";
import Hello from "./components/Hello";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Brad",
          lastName: "Pitt"
        },
        {
          id: 7,
          firstName: "Alex",
          lastName: "Varker"
        },
        {
          id: 3,
          firstName: "Tom",
          lastName: "Rot"
        }
      ],
      isSortIdUp: true,
      //стан для фіксування порядку сортування за іменем
      isSortFirstNameUp: true,
      isSortUsersByLastName: true
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
  sortUsersByLasttName = () => {
    const { users, isSortUsersByLastName } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return isSortUsersByLastName ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortUsersByLastName ? -1 : 1;
      }
      return 0;
    });
    this.setState({
      users: newUsers,
      isSortUsersByLastName: !isSortUsersByLastName
    });
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

  render() {
    const { users, isSortIdUp, sortUsersByFirstName, isSortUsersByLastName } =
      this.state;
    return (
      <>
        <Hello />
        <div>
          {/* додати кнопку, яка виконує сортування за іменем */}
          <button onClick={this.sortUsersByFirstName}>
            sort by first name {sortUsersByFirstName ? "up" : "down"}
          </button>
          <button onClick={this.sortUsersByLasttName}>
            sort by last name {isSortUsersByLastName ? "up" : "down"}
          </button>
          <button onClick={this.sortUsersById}>
            sort by id {isSortIdUp ? "up" : "down"}
          </button>
        </div>
        <CiaoList users={users} />
      </>
    );
  }
}

export default App;
