import React from "react";
import Stats from "./Stats";

class Page1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.url = "http://localhost:8080/wordcount";

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
    fetch(this.url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ url: event.target.elements.urlText.value }), // data can be `string` or {object}!
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
              <i>e.g. http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt</i>
              <input
                type="text"
                className="form-control"
                id="urlText"
                placeholder="some url"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div>
              <Stats result={this.state.data} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Page1;
