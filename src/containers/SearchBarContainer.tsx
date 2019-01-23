import { connect } from 'react-redux';
import { getCurrentWeather } from '../actions/index';
import SearchBar from '../components/AppBar/SearchBar';

const mapDispatchToProps = (dispatch) => ({
    getCurrentWeather: (city: string) => dispatch(getCurrentWeather(city))
}) 

const mapStateTopProps = state => ({
    currentWeather: state.currentWeather
});

export default connect(mapStateTopProps, mapDispatchToProps)(SearchBar);