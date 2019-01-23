import * as React from 'react';
import { Navbar } from 'react-bootstrap';

const Title = () => {
    return (
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Weather App</a>
                </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
    );
};

export default Title;