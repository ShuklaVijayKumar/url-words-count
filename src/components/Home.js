import React from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
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
              <label for="dessertPicture">Please enter url below to calculate the word occurances</label>
              <input type="text" className="form-control" id="dessertPicture" placeholder="https://en.wikipedia.org/wiki/WisdomTree_Investments"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

//render(<Stats />);

export default Home;
