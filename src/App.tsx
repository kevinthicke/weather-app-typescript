import * as React from 'react';
import CurrentWeather from './components/CurrentWeather';
import AppBar from './components/AppBar';
import { Grid } from 'react-bootstrap';
import CurrentWeatherContainer from './containers/ListFavWeatherContainer';
import ListFavWeatherContainer from './containers/ListFavWeatherContainer';

export default class App extends React.Component <any, any> {
  render() {
    return(
      <Grid fluid>
          <AppBar />
          <ListFavWeatherContainer />
      </Grid>
    ) 
  }
}
