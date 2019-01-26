import * as React from 'react';
import { Navbar } from 'react-bootstrap';

export interface TitleProps {
    title: string
}

const Title: React.SFC<TitleProps> = ({ title }) => {
    return (
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">{ title }</a>
                </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
    );
};

export default Title;