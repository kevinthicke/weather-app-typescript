import * as React from 'react';
import CurrentWeather from './CurrentWeather';

const FavLocationListStyle: React.CSSProperties = {
    width: '420px',
    height: '100vh',
    background: '#292b2c',
    padding: '10px',
    borderRadius: '1px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

const titleStyle: React.CSSProperties = {
    color: '#f7f7f7' 
}

export default class FavLocationList extends React.Component <any, any> {
    renderFavLocationList(aCurrentWeather) {
        if(aCurrentWeather.length==0) {
            return <div> </div>
        } else return aCurrentWeather.map(currentWeather => <CurrentWeather key={currentWeather.id} data={currentWeather} />)
    }
    
    render() {
        const { aCurrentWeather } = this.props;
        
        return(
            <div style={FavLocationListStyle}>
                <h4 style={titleStyle}>Favorite locations</h4>
                { this.renderFavLocationList(aCurrentWeather)}
            </div>      

        )
    }
}