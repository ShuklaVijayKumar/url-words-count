import React from "react";
import Stats from "./Stats";

class Page1 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      submited: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(event) {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => this.setState({ submitted:true, data:data }));
      //console.log(this.state.data);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid" id="contact">
        <div className="row">
          <form
            className="col-lg-6 col-md-offset-3"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <label>
                Please enter url below to calculate the word occurances
              </label>
              <input
                type="text"
                className="form-control"
                id="urlText"
                placeholder="https://en.wikipedia.org/wiki/WisdomTree_Investments"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div>
              <Stats result={this.state.data}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Page1;
