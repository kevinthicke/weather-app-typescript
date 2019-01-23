import * as React from 'react';

const ExtraInfoStyle: React.CSSProperties = {
    background: '#5bc0de',
    listStyleType: 'none',
    borderRadius: '2px',
    color: '#292b2c',
    fontSize: '12pt',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const ExtraInfoItemStyle: React.CSSProperties = {
    display: 'grid',
    paddingLeft: '20px',
    gridTemplateColumns: '1fr 1fr'
}

export interface ExtraInfoProps {
    humidity: number,
    pressure: number
}

const ExtraInfo: React.SFC<ExtraInfoProps> = ({ humidity, pressure }) => {
    return (
        <div style={ExtraInfoStyle}>
        <li style={ExtraInfoItemStyle}>
            <span>Pressure</span>
            <span>{ pressure } atm</span> 
        </li>
        <li style={ExtraInfoItemStyle}>
            <span>Humidity</span>
            <span>{ humidity }%</span>
        </li>
</div>
    )
}

export default ExtraInfo;