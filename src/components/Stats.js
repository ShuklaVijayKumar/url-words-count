import React from "react";
import { makeData } from "./utils";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Prompt from "./Prompt";

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      data: makeData()
    };
  }

  myCallback = dataFromChild => {
    if (dataFromChild === "Password") {
      console.log("passed");  
      this.setState({
        isAuthenticated: true,
        data: makeData()
      });
    }
  };

 

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className="static-modal">
          <Prompt callback={this.myCallback} />
        </div>
      );
    }
    const { data } = this.state;
    return (
      <div
        style={{ width: 500, textAlign: "center", flow: "center" }}
        id="contact"
      >
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                columns: [
                  {
                    Header: "Word",
                    accessor: "Word",
                    maxWidth: 200
                  },
                  {
                    Header: "Occurance",
                    id: "Occurance",
                    accessor: d => d.Occurance,
                    maxWidth: 200
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
            defaultPageSize={50}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default Stats;
