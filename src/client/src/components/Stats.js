import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Stats extends React.Component {
  render() {
    const data = this.props.result;
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
                    accessor: "title",
                    Cell: props => (
                      <div
                        style={{
                          fontSize: `${props.original.userId} px`
                        }}
                      >
                        {props.original.title}
                      </div>
                    )
                  },
                  {
                    Header: "Occurance",
                    id: "userId",
                    accessor: d => d.userId
                  }
                ]
              }
            ]}
            defaultSorted={[
              {
                id: "userId",
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
