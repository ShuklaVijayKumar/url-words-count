import React from "react";
import Prompt from "./Prompt";
import Keys from "../Keys";
import Stats from "./Stats";

class Page2 extends React.Component {
  constructor() {
    super();
    this.url = "http://localhost:8080/wordcount";
    this.state = {
      isAuthenticated: false
    };
  }

  myCallback = dataFromChild => {
    if (dataFromChild === Keys.PASSWORD) {
      fetch(this.url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify({ url: "http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt" }), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          const results = response.results;
          const data = Object.keys(results).map(key => {
            return {
              count: results[key].count,
              word: key
            };
          });
          this.setState({ isAuthenticated: true, data });
        })
        .catch(error => console.error("Error:", error));
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
