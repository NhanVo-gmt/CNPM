import React, { useMemo } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { useTable } from "react-table";
import {faSquare,faCaretLeft, faCaretRight, fa1, fa2, fa3, fa4, fa5, fa6} from "@fortawesome/free-solid-svg-icons"
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "./IconPosition.css";



export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;
  return (
    <>
      <div className="content">
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
         </tbody>
        </table>   
        <div className="pagination">
            <span><FontAwesomeIcon icon={faCaretLeft}/></span>
            <span><FontAwesomeIcon icon={fa1}/></span>
            <span><FontAwesomeIcon icon={fa2}/></span>
            <span><FontAwesomeIcon icon={fa3}/></span>
            <span><FontAwesomeIcon icon={fa4}/></span>
            <span><FontAwesomeIcon icon={fa5}/></span>
            <span><FontAwesomeIcon icon={faCaretRight}/></span>
        </div>
      </div> 
    </>
  );
};
