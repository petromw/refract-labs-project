import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Tooltip } from '@material-ui/core';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const useStyles = makeStyles(() => ({
    root: {
      marginTop: 25,
      marginLeft: 10,
      flexGrow: 1,
    },
    descriptionTextField: {
      width: '25ch',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '1vh',
      paddingBottom: '2vh'
    }
  }));

  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Schedule a repair here:</DialogTitle>
        <Calendar
            onChange={onChange}
            value={value}
        />
        <form className={classes.descriptionTextField} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Description" />
        </form>
        <Button variant="outlined" color="primary" onClick={handleClose}>
            Submit
        </Button>        
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ScheduleRepairDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title='Open modal to shcedule a repair' arrow>
       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Schedule Repair
        </Button> 
      </Tooltip>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
