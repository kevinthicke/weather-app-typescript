import { connect } from 'react-redux';
import FavLocationList from '../components/FavLocationList';
import { deleteFavLocation } from '../actions/index';

const mapStateTopProps = state => ({
    aCurrentWeather: state.aCurrentWeather
});

const mapDispatchToProps = dispatch => ({
    deleteFavLocation: (city: string) => dispatch(deleteFavLocation(city))
})

export default connect(mapStateTopProps, mapDispatchToProps)(FavLocationList);