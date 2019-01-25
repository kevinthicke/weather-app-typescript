import { connect } from 'react-redux';
import FavLocationList from '../components/FavLocationList';

const mapStateTopProps = state => ({
    aCurrentWeather: state.aCurrentWeather
});

export default connect(mapStateTopProps, null)(FavLocationList);