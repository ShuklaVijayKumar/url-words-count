import React from "react";
import { makeData } from "./utils";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Prompt from "./Prompt";
import Keys from "../Keys/Keys";

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: undefined,
      data: makeData()
    };
  }

  myCallback = dataFromChild => {
    if (dataFromChild === Keys.PASSWORD) {
      this.setState({
        isAuthenticated: true
      });
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
    const { data } = this.state;
    return (
      <div style={{ textAlign: "center", flow: "center" }} id="contact">
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                columns: [
                  {
                    Header: "Word",
                    accessor: "Word",
                    Cell: props => (
                      <div
                        style={{
                          fontSize: `${props.original.Occurance}` + "px"
                        }}
                      >
                        {props.original.Word}
                      </div>
                    )
                  },
                  {
                    Header: "Occurance",
                    id: "Occurance",
                    accessor: d => d.Occurance
                  }
                ]
              }
            ]}
            defaultSorted={[
              {
                id: "Occurance",
                desc: true
              }
            ]}
            defaultPageSize={100}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default Stats;
