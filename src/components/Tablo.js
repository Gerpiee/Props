import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Dondurulmuş Yoğurt', 159, 6.0, 24, 4.0),
  createData('Dondurmalı sandviç', 237, 9.0, 37, 4.3),
  createData('Ekler', 262, 16.0, 24, 6.0),
  createData('Kek', 305, 3.7, 67, 4.3),
  createData('Zencefilli çörek', 356, 16.0, 49, 3.9),
];

 function Tablo() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Porsiyon (100g)</TableCell>
            <TableCell align="right">Kalori</TableCell>
            <TableCell align="right">Yağ&nbsp;(g)</TableCell>
            <TableCell align="right">Karbonhidrat&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tablo;