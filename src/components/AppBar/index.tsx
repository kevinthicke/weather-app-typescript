import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import Title from './Title';
import SearchBarContainer from '../../containers/SearchBarContainer';

const NavbarStyle: React.CSSProperties = {
    marginTop: '10px'
}

const AppBar = () => (
    <Navbar inverse style={NavbarStyle} staticTop>
        <Title title={'Weather App'}/> 
        <SearchBarContainer />
    </Navbar>
)

export default AppBar;
