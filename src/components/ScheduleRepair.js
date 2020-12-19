import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import ScheduleRepairDialog from './ScheduleRepairDialog';
import { Tooltip } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    marginLeft: 10,

  },
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    height: '50vh',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    maxHeight: '90%',
  },
  scheduleRepairDialogButton: {
    paddingTop: '1vh',
  },
}));

const columns = [
  { id: "date", label: "Date", minWidth: 50 },
  { id: "time", label: "Time", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 100 },
]

function createData(date, time, description) {
  return { date, time, description }
}

const rows = [
  createData("Sun Dec 20 2020", "4:00pm", "Repair Mark's Bike"),
  createData("Sun Dec 20 2020", "5:00pm", "Repair John's Bike"),
  createData("Mon Dec 21 2020", "3:00pm", "Repair Jack's Bike"),
  createData("Tue Dec 22 2020", "11:00am", "Repair Harry's Bike"),
  createData("Wed Dec 23 2020", "9:00am", "Repair Jake's Bike"),
  createData("Thu Dec 24 2020", "8:00am", "Repair Thad's Bike"),
  createData("Thu Dec 24 2020", "9:30am", "Repair Trisha's Bike"),
  createData("Thu Dec 24 2020", "11:00am", "Repair Tom's Bike"),
  createData("Fri Dec 25 2020", "9:15am", "Repair Benjamin's Bike"),
  createData("Fri Dec 23 2020", "11:45am", "Repair Jake's Bike"),

]

export default function DataTable() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <h2>Appointments</h2>
      <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item md={4}>
        <Tooltip title='Use this to filter appointments' arrow>
          <Paper className={classes.paper}>
            <Calendar
              onChange={onChange}
              value={value}
            />
            <div className={classes.scheduleRepairDialogButton}>
              <ScheduleRepairDialog />
            </div>
          </Paper>
          </Tooltip>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
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
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}