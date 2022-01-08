import * as React from 'react';

import {
  Table, TableBody, TableCell, TableContainer, TableRow, Paper,
} from '@material-ui/core';

const company = [
  { name: 'Title', value: 'One Stop Startup' },
  { name: 'Type', value: 'AE' },
  { name: 'Date of Creation', value: '20/12/2021' },
  { name: 'AFM', value: 'xxxxxxxx' },
  { name: 'CEO', value: 'Us' },
];
export default function CompanyInfo() {
  return (
    <TableContainer component={Paper} style={{ width: 400 }}>
      <Table sx={{ width: 400 }} aria-label="simple table">
        <TableBody>
          {company.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
