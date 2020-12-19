import React, { Component } from 'react';
import Inventory from './components/Inventory';
import ScheduleRepair from './components/ScheduleRepair';
import Customers from './components/Customers';
import LandingPage from './components/LandingPage';
import Grid from '@material-ui/core/Grid';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <ScheduleRepair/>
        <Grid container spacing={1}>
          <Grid item md={4}><Inventory/></Grid>
          <Grid item md={8}><Customers/></Grid>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;