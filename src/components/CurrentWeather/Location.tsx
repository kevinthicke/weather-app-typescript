import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const LocationStyle: React.CSSProperties = {
    background: '#428bca',
    gridRow: '1',
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '7fr 1fr 1fr',
    gridGap: '2px',
    color: '#292b2c',
    fontSize: '20pt',
    borderRadius: '2px',
    paddingLeft: '30px',
    paddingRight: '10px'
}

const ButtonStyle: React.CSSProperties = {
    display: 'flex',
    height: '30px',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12pt'
}

const cityStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
}

export interface LocationProps {
    city: string,
    handleRemoveCurrentWeather: (city: string) => void,
    handleClickMoreInfo: (city: string) => void
}

const Location: React.SFC<LocationProps> = ({ city, handleRemoveCurrentWeather, handleClickMoreInfo }) => {
    const onClickMoreInfo = (city: string) => {
        handleClickMoreInfo(city)
    }

    const onClickRemoveCurrentWeather = (city: string) => {
        handleRemoveCurrentWeather(city)
    }

    return (
        <div style={LocationStyle}>
            <span style={cityStyle}>{ city }</span>
            <Button bsStyle="success" style={ButtonStyle} onClick={() => onClickMoreInfo(city)}>
                <span> <Glyphicon glyph="glyphicon glyphicon-plus"/> info </span>
            </Button>
            <Button bsStyle="danger" style={ButtonStyle} onClick={() => onClickRemoveCurrentWeather(city)}>
                <span> <Glyphicon glyph="glyphicon glyphicon-remove"/> </span>
            </Button>
        </div>
    )
}


export default Location;