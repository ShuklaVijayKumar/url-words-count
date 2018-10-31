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
                    accessor: "word",
                    Cell: props => (
                      <div
                        style={{
                          fontSize: `${props.original.count>50?50:props.original.count}`+ 'px'
                        }}
                      >
                        {props.original.word}
                      </div>
                    )
                  },
                  {
                    Header: "Count",
                    id: "count",
                    accessor: d => d.count
                  }
                ]
              }
            ]}
            defaultSorted={[
              {
                id: "count",
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
