import React from "react";
import Styles from "./Styles";
import Table from "./Table";

import makeData from "./makeData";

function RTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Theme",
        columns: [
          {
            Header: "Area",
            accessor: "firstName",
          },
          {
            Header: "Subject",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default RTable;
