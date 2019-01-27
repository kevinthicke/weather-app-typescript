import * as React from 'react';
import CurrentWeather from './CurrentWeather';

const FavLocationListStyle: React.CSSProperties = {
    width: '420px',
    height: '85vh',
    //background: '#292b2c',
    padding: '10px',
    borderRadius: '1px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

const titleStyle: React.CSSProperties = {
    //color: '#f7f7f7' 
    color: 'black'
}

export default class FavLocationList extends React.Component <any, any> {
    constructor(props: any) {
        super(props);

        this.onRemoveCurrentWeather = this.onRemoveCurrentWeather.bind(this);
        this.onGetCityMoreInfo = this.onGetCityMoreInfo.bind(this);
    }

    onRemoveCurrentWeather(city) {
        this.props.deleteFavLocation(city)
    }

    onGetCityMoreInfo(city) {
        this.props.getForecastExtended(city)
    }

    renderFavLocationList(aCurrentWeather) {
        if(aCurrentWeather.length==0) {
            return <div> </div>
        } else {
            return aCurrentWeather.map(
                currentWeather => <CurrentWeather key={currentWeather.id} 
                                    data={currentWeather}
                                    handleCityToBeRemoved={this.onRemoveCurrentWeather} 
                                    handleCityMoreInfo={this.onGetCityMoreInfo}/>)
        }
    }
    
    render() {
        const { aCurrentWeather } = this.props;
        
        return(
            <div style={FavLocationListStyle}>
                <h3 style={titleStyle}>Favorite locations</h3>
                { this.renderFavLocationList(aCurrentWeather)}
            </div>      

        )
    }
}