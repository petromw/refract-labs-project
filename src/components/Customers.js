import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'fullName', label: 'Full Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'phoneNumber', label: 'Phone', minWidth: 100 },
];

function createData(firstName, lastName, email, phoneNumber) {
  const fullName = firstName + " " + lastName;
  return { fullName, email, phoneNumber };
}

const rows = [
  createData('Mark', 'Petro', 'petromw@mail.uc.edu', '(440) 554-3745'),
  createData('John', 'Smith', 'johnsmith@gmail.com', '(440) 123-4566'),
  createData('Jack', 'Torrence', 'jacktorrence@gmail.com', '(440) 345-3785'),
  createData('Harry', 'Potter', 'harrypotter@gmail.com', '(440) 850-7749'),
  createData('John', 'McClane', 'johnmcclane@gmail.com', '(440) 602-5503'),
  createData('Jake', 'Peralta', 'jakeperalta@gmail.com', '(440) 406-6724'),
  createData('Thad', 'Beaumont', 'thadbeaumont@gmail.com', '(440) 997-4573'),
  createData('Leland', 'Gaunt', 'lelandgaunt@gmail.com', '(440) 693-9086'),
  createData('Trisha', 'McFarland', 'trishamcfarland@gmail.com', '(440) 583-5632'),
  createData('Tom', 'Gordon', 'tomgordon@gmail.com', '(440) 444-6424'),
  createData('Benjamin', 'Button', 'benjaminbutton@gmail.com', '(440) 425-8767'),
  createData('Dolores', 'Claiborne', 'doloresclaiborne@gmail.com', '(440) 131-2343'),
  createData('Jack', 'London', 'jacklondon@gmail.com', '(440) 324-6300'),
  createData('Holden', 'Caulfield', 'holdencaulfield@gmail.com', '(440) 779-8896'),
  createData('Percy', 'Jackson', 'percyjackson@gmail.com', '(440) 034-6753'),
  createData('Louis', 'Creed', 'louiscreed@gmail.com', '(440) 900-8394'),
  createData('Carrie', 'White', 'carriewhite@gmail.com', '(440) 875-5352'),
  createData('Paul', 'Sheldon', 'paulsheldon@gmail.com', '(440) 881-5332'),
];

const useStyles = makeStyles({
  root: {
    marginTop: 95,
    marginLeft: 15,
  },
  container: {
    height: 450,
    maxHeight: 450,
  },
  h3: {
		paddingTop: 5,
		paddingLeft: 5,
	},
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <Paper className={classes.root}>
        <h3 className={classes.h3}>Customers</h3>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
  );
}
