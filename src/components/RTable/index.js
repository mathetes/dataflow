import React from "react";
import Styles from "./Styles";

import Table from "./Table";
import makeData from "./makeData";

function RTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Ценности",
        accessor: "myvalue",
      },
      {
        Header: "Предмет",
        accessor: "mysubject",
      },

      {
        Header: "Цель",
        accessor: "perpose",
      },
      {
        Header: "Задача",
        accessor: "task",
      },
      {
        Header: "Проблема",
        accessor: "issue",
      },
      {
        Header: "Вариант",
        accessor: "variant",
      },
      {
        Header: "Решение",
        accessor: "progress",
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
