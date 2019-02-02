import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  // * creating the state for term searched
            term: ''
        };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search(term) {  
        this.props.onSearch(term);  //* invoking the function declared as props from App component
    }

    handleTermChange(event) {    // * as the user types in the search bar change the state
        this.setState({ term: event.target.value});
    }

    handleSubmit(e) {  // * handle the click on search button and invoking the function with whatever user has typed in
        this.search(this.state.term);
        e.preventDefault();
    }

    handleKeyPress(e) {  // * functionality to search tracks using the 'enter' key
        if(e.key === 'Enter') {
            this.search(this.state.term);
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} 
                    onKeyPress={this.handleKeyPress}
                    placeholder="Enter a Song, Album Or Artist" 
                />
                <a onClick={this.handleSubmit} >SEARCH</a>
            </div>

        );
    }
}

export default SearchBar;