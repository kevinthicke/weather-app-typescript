import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended/index';


const mapStateToProps = state => ({
    weatherForecast: state.weatherForecast
})

export default connect(mapStateToProps, null)(ForecastExtended);