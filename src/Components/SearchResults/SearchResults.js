import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
    render() {
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults}  // * getting the tracks from state
                    onAdd={this.props.onAdd}   // * use the add track function declared in App component
                    isRemoval={false}    // * the logic to show +/- button
                />
            </div>
        );
    }
}

export default SearchResults;