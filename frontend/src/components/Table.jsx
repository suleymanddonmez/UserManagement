import React from "react";

//material-ui
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//components
import IconButtonMenu from "./IconButtonMenu";

//libraries
import { cloneDeep } from "lodash";

function Table({ tableConfig }) {
  const row = tableConfig.row;
  const rowActions = tableConfig.rowActions;
  const data = tableConfig.data;
  const keys = Object.keys(tableConfig.row);

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {keys.map((key, index) => {
              let cell = row[key] || {};
              let value = cell.text;
              let cellProps = cell.headerProps || {};
              return (
                <TableCell key={`th_${index}`} variant="header" {...cellProps}>
                  {value}
                </TableCell>
              );
            })}
            {rowActions && <TableCell key={`th_actions`} variant="header"></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((rowData, index) => (
            <TableRow key={`tr_${index}`} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {keys.map((key, index) => {
                let cell = row[key] || {};
                let value = rowData[key] || "-";
                let cellProps = cell.props || {};
                return (
                  <TableCell key={`td_${index}`} {...cellProps}>
                    {value}
                  </TableCell>
                );
              })}
              {rowActions && (
                <TableCell key={`actions`} sx={{ textAlign: "right" }}>
                  <IconButtonMenu
                    iconButtonProps={{
                      size: "small",
                    }}
                    iconName={"MoreVert"}
                    items={rowActions.map((act) => {
                      let action = cloneDeep(act);
                      if (act.onClick) {
                        action.onClick = () => {
                          act.onClick(rowData);
                        };
                      }
                      return action;
                    })}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
