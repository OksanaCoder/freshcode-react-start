import { Component } from "react";
import "./App.css";
import CiaoList from "./components/CiaoList";
import CiaoSort from "./components/CiaoSort";
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
      isSortFirstNameUp: true
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

  render() {
    const { users, isSortIdUp, isSortFirstNameUp } = this.state;
    return (
      <>
        {/* <Hello /> */}

        {/* додати кнопку, яка виконує сортування за іменем */}
        <CiaoSort
          sortUsersByFirstName={this.sortUsersByFirstName}
          isSortIdUp={isSortIdUp}
          isSortFirstNameUp={isSortFirstNameUp}
          sortUsersById={this.sortUsersById}
        />

        <CiaoList users={users} />
      </>
    );
  }
}

export default App;
