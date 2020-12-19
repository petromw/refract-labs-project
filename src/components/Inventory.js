import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'productName', headerName: 'Product', width: 180 },
  { field: 'price', headerName: 'Price', width: 90 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 90},
];

const rows = [
  { id: 1, productName: 'Tires', price: '$25', quantity: 30 },
  { id: 2, productName: 'Handlebars', price: '$30', quantity: 35 },
  { id: 3, productName: 'Chains', price: '$15', quantity: 65 },
  { id: 4, productName: 'Brakes', price: '$10', quantity: 120 },
  { id: 5, productName: 'Seats', price: '$40', quantity: 45 },
  { id: 6, productName: 'Air Pumps', price: '$20', quantity: 15 }, 
  { id: 7, productName: 'Bells', price: '$5', quantity: 135 }, 
  { id: 8, productName: 'Bike Locks', price: '$18', quantity: 80 }, 
  { id: 9, productName: 'Helmets', price: '$45', quantity: 50 },
];

const useStyles = makeStyles({
	root: {
		height: '80vh',
	  	marginTop: 95,
	  	marginLeft: 15,
	},
	container: {
	  height: '100%',
	  maxHeight: 450,
	},
	h3: {
		paddingTop: 5,
		paddingLeft: 5,
		flexGrow: '1'
	},
  });

export default function DataTable() {
	const classes = useStyles();

  return (
	<Paper className={classes.root}>
		<h3 className={classes.h3}>Inventory</h3>
    	<div className={classes.container}>
      		<DataGrid rows={rows} columns={columns}/>
    	</div>
	</Paper>
  );
}
