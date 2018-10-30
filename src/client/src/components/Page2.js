import React from "react";
import Prompt from "./Prompt";
import Keys from "../Keys";
import Stats from "./Stats";

class Page2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  myCallback = dataFromChild => {
    if (dataFromChild === Keys.PASSWORD) {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => this.setState({ isAuthenticated: true, data: data }));
    } else {
      this.setState({
        isAuthenticated: false
      });
    }
  };

  render() {
    if (this.state.isAuthenticated === false) {
      return (
        <div className="static-modal">
          <Prompt callback={this.myCallback} />
        </div>
      );
    }
    if (this.state.isAuthenticated === false) {
      return <div>User unauthorised !!</div>;
    }
    return (
      <div>
        <Stats result={this.state.data} />
      </div>
    );
  }
}

export default Page2;
