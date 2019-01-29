import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(term) {
        this.props.onSearch(term);
    }

    handleTermChange(event) {
        let searchTerm = event.target.value;
        this.search(searchTerm);
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter a Song, Album, Artist" />
                <a>SEARCH</a>
            </div>

        );
    }
}

export default SearchBar;