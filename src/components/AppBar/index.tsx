import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import Title from './Title';
import SearchBar from './SearchBar';
import SearchBarContainer from '../../containers/SearchBarContainer';

const NavbarStyle: React.CSSProperties = {
    marginTop: '10px'
}

const AppBar = () => (
    <Navbar inverse style={NavbarStyle} staticTop>
        <Title /> 
        <SearchBarContainer />
    </Navbar>
)

export default AppBar;
