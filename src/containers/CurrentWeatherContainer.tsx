import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';

const mapStateTopProps = state => ({
    currentWeather: state.currentWeather
});

export default connect(mapStateTopProps, null)(CurrentWeather);