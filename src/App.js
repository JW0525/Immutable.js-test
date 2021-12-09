import React, { Component } from "react";
import UserList from "./UserList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    users: [
      {
        id: 1,
        username: "velopert",
      },
      {
        id: 2,
        username: "mjkim",
      },
    ],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  onButtonClick = (e) => {
    this.setState(({ users, input }) => ({
      input: "",
      users: users.concat({
        id: this.id++,
        username: input,
      }),
    }));
  };

  render() {
    const { onChange, onButtonClick } = this;
    const { input, users } = this.state;

    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
