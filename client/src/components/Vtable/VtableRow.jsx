import React from "react";

const VtableRow = (text, data) => {
  return (
    <tr key={text}>
      <th>{text}</th>
      <td>{data}</td>
    </tr>
  );
};

export default VtableRow;
