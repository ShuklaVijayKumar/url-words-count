import React from "react";
import Prompt from "./Prompt";
import Keys from "../Keys/Keys";
import Stats from "./Page2";

class Page2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: undefined
    };
  }

  myCallback = dataFromChild => {
    console.log('1');
    if (dataFromChild === Keys.PASSWORD) {
      console.log('2');
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
    if (typeof this.state.isAuthenticated === "undefined") {
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
