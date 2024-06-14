import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useUserContext } from '../context/UserContext';

// const user = useUserContext();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, symbol, percentage24hr, supply, explorer) {
  return { name, symbol, percentage24hr, supply, explorer };
}

// hardcoded mock data should be pulled in from mockUserData depending on account
const rows = [
  createData('Bitcoin', 'BTC', "-1.7763528139022236", "19712118.0000000000000000", "https://blockchain.info/"),
  createData('Dogecoin', 'DOGE', "-6.1229053093901797", 	"144709666383.7052300000000000","http://dogechain.info/chain/Dogecoin"),
  createData('XRP', 'XRP', "556192492.6247483944054671", "45404028640.0000000000000000", "https://xrpcharts.ripple.com/#/graph/"),
];

export default function LibraryTable(props) {
  // data = props.data;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Symbol</StyledTableCell>
            <StyledTableCell align="right">Delta 24Hr</StyledTableCell>
            <StyledTableCell align="right">Supply</StyledTableCell>
            <StyledTableCell align="right">Explorer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.symbol}</StyledTableCell>
              <StyledTableCell align="right">{row.percentage24hr}</StyledTableCell>
              <StyledTableCell align="right">{row.supply}</StyledTableCell>
              <StyledTableCell align="right">{row.explorer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}