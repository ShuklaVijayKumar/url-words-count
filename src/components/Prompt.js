import React from "react";

import { Modal, Button, ButtonToolbar } from "react-bootstrap";

class Prompt extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      show: true,
      inputValue:''
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }
  handleClick() {
    if (this.refs.myInput !== null) {
      var input = this.refs.myInput;
      var inputValue = input.value;
      this.props.callback(inputValue);
      this.setState({ show: false, inputValue:inputValue });
    }
  }

  render() {
    return (
      <ButtonToolbar>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Authentication
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Please enter the password</h4>
            <input type="text" value="Password" ref="myInput" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClick}>OK</Button>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default Prompt;
