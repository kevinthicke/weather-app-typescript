import * as React from 'react';
import CurrentWeather from './components/CurrentWeather';
import AppBar from './components/AppBar';
import { Grid } from 'react-bootstrap';
import CurrentWeatherContainer from './containers/ListFavWeatherContainer';
import ListFavWeatherContainer from './containers/ListFavWeatherContainer';
import ForecastExtended from './components/ForecastExtended';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const AppContentStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '2fr 5fr'
}

export default class App extends React.Component <any, any> {
  render() {
    return(
      <Grid fluid>
          <AppBar />
          <div style={AppContentStyle}>
            <ListFavWeatherContainer />
            <ForecastExtendedContainer />
          </div>
      </Grid>
    ) 
  }
}
