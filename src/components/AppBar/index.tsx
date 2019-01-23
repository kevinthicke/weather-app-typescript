import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import Title from './Title';
import SearchBar from './SearchBar';
import SearchBarContainer from '../../containers/SearchBarContainer';

const NavbarStyle: React.CSSProperties = {
    marginTop: '10px'
}

export default class AppBar extends React.Component<any, any>{

    render() {
        return (
            <Navbar inverse style={NavbarStyle} staticTop>
                <Title /> 
                <SearchBarContainer />
            </Navbar>
        );
    }
}
