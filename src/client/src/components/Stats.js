import React from "react";
import Prompt from "./Prompt";
import Keys from "../Keys/Keys";
import Stats from "./Stats";

class Page2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: undefined
    };
  }

  myCallback = dataFromChild => {
    if (dataFromChild === Keys.PASSWORD) {
      console.log('1');
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => this.setState({ isAuthenticated: true, data: data }));
    } else {
      this.setState({
        isAuthenticated: false
      });
    }
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => this.setState({ submitted: true, data: data }));
    //console.log(this.state.data);
    //event.preventDefault();
  }

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
        <Stats result={this.state.data}/>
      </div>
    );
  }
}

export default Page2;
