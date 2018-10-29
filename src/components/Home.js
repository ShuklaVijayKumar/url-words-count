import React from "react";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="container-fluid" id="contact">
        <div className="row">
          <form className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-lg-offset-3 col-md-offset-3 ">
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
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
