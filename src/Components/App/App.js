import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [ 
      {
        id: 1,
        name: "Akhar",
        artist: "Amrinder Gill",
        album: "Lahoriye",
        isRemoval: false
      }, 
      {
        id: 2,
        name: "Car Reebna Wali",
        artist: "Amrinder Gill",
        album: "Bhajjo Veero Ve",
        isRemoval: false
      }, 
      {
        id: 3,
        name: "Mera Deewanapan",
        artist: "Dr Zeus",
        album: "Judaa 2",
        isRemoval: false
      }, 
      {
        id: 4,
        name: "Leekan",
        artist: "Amrinder Gill",
        album: "Ashke",
        isRemoval: false
      }]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight"></span>ing</h1>
          <div className="App">
              <SearchBar />
              <div className="App-playlist">
                <SearchResults />
                <Playlist />
              </div>
          </div>
      </div>
    );
  }
}

export default App;

