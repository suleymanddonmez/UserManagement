import * as React from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Table({ tableConfig }) {
  const row = tableConfig.row;
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
              let { sx, ...otherProps } = cellProps;
              return (
                <TableCell key={`th_${index}`} sx={{ fontWeight: "bold", ...sx }} {...otherProps}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((rowData, index) => (
            <TableRow key={`tr_${index}`} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {keys.map((key, index) => {
                let cell = row[key] || {};
                let value = rowData[key] || "-";
                let cellProps = cell.props || {};
                let { sx, ...otherProps } = cellProps;
                return (
                  <TableCell key={`td_${index}`} sx={sx} {...otherProps}>
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
