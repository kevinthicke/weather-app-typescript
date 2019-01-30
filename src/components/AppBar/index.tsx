import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import Title from './Title';
import SearchBarContainer from '../../containers/SearchBarContainer';

const NavbarStyle: React.CSSProperties = {
    margin: '10px',
    height: '60px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center'
}

export default class AppBar extends React.Component {
    render() {
        return (
            <Navbar inverse style={NavbarStyle} staticTop>
                <Title title={'Weather App'}/> 
                <SearchBarContainer />
            </Navbar>
        )
    }
}

