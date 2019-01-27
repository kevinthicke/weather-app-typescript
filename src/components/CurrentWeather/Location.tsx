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
}

const Location: React.SFC<LocationProps> = ({ city }) => {
    const onClickExtendedInfo = (city) => {
        console.log('Haz hecho click en ' + city);
    }

    const onClickRemoveFromFavLocations = (city) => {
        console.log('Remove from fav locations ' + city)
    }

    return (
        <div style={LocationStyle}>
            <span style={cityStyle}>{ city }</span>
            <Button bsStyle="success" style={ButtonStyle} onClick={() => onClickExtendedInfo(city)}>
                <span> <Glyphicon glyph="glyphicon glyphicon-plus"/> info </span>
            </Button>
            <Button bsStyle="danger" style={ButtonStyle} onClick={() => onClickRemoveFromFavLocations(city)}>
                <span> <Glyphicon glyph="glyphicon glyphicon-remove"/> </span>
            </Button>
        </div>
    )
}


export default Location;