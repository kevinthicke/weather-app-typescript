import * as React from 'react';
import { Button } from 'react-bootstrap';

const LocationStyle: React.CSSProperties = {
    background: '#428bca',
    gridRow: '1',
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '7fr 1fr',
    color: '#292b2c',
    fontSize: '20pt',
    borderRadius: '2px',
    paddingLeft: '30px',
    paddingRight: '10px'
}

const infoButtonStyle: React.CSSProperties = {
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
    city: string
}

const Location: React.SFC<LocationProps> = ({ city }) => (
    <div style={LocationStyle}>
            <span style={cityStyle}>{ city }</span>
            <Button bsStyle="success" style={infoButtonStyle}>
                + info
            </Button>
    </div>
)

export default Location;