import { connect } from 'react-redux';
import FavLocationList from '../components/FavLocationList';
import { deleteFavLocation, getForecastExtended } from '../actions/index';

const mapStateTopProps = state => ({
    aCurrentWeather: state.aCurrentWeather
});

const mapDispatchToProps = dispatch => ({
    deleteFavLocation: (city: string) => dispatch(deleteFavLocation(city)),
    getForecastExtended: (city: string) => dispatch(getForecastExtended(city))
})

export default connect(mapStateTopProps, mapDispatchToProps)(FavLocationList);