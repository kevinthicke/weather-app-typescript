import * as React from 'react';
import { Navbar } from 'react-bootstrap';

const TitleStyle: React.CSSProperties = {
    fontSize: '18pt'
}

export interface TitleProps {
    title: string
}

export default class Title extends React.Component<TitleProps> {
    render() {
        const { title } = this.props;
        return (
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home" style={TitleStyle}>{ title }</a>
                    </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        );
    }
}