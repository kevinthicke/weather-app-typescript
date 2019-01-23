import * as React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { getCurrentWeather } from '../../actions/index';
import CurrentWeather from '../CurrentWeather/index';

const formStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: '7px'
}


export default class SearchBar extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = { 
            searchInput: '',
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);

    }

    onSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.props.getCurrentWeather(this.state.searchInput);
        this.setState({ searchInput: '' });
    }

    onChangeInput(event: React.FormEvent<FormControl>) {
        const { value: searchInput } = event.target as HTMLInputElement;
        this.setState({ searchInput });
    }

    render() {
        
        return (
            <Navbar.Form pullRight>
                <form style={formStyle} onSubmit={this.onSubmitSearch}>
                    <FormControl type="text" placeholder="Ex: London" onChange={this.onChangeInput} />
                    <Button type="submit" bsStyle="primary" >Search!</Button>
                </form>
            </Navbar.Form>
        );
    }
};
