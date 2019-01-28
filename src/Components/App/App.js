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
        id: '1',
        name: "Akhar",
        artist: "Amrinder Gill",
        album: "Lahoriye",
      }, 
      {
        id: '2',
        name: "Car Reebna Wali",
        artist: "Amrinder Gill",
        album: "Bhajjo Veero Ve",
      }, 
      {
        id: '3',
        name: "Mera Deewanapan",
        artist: "Dr Zeus",
        album: "Judaa 2",
      } ],
      playlistName: "Soulful",

      playlistTracks: [
        {
        id: '4',
        name: "Kurta Suha",
        artist: "Amrinder Gill",
        album: "Angrez",
        },
        {
        id: '5',
        name: "jatt",
        artist: "Amrinder Gill",
        album: "Love Punjab",
        },
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
    } else {
      let currentPlaylist = this.state.playlistTracks.slice();
      currentPlaylist.push(track);
      this.setState({ playlistTracks: currentPlaylist});
    }
  }

  removeTrack(track){
    let currentPlaylist = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({ playlistTracks: currentPlaylist});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight"></span>ing</h1>
          <div className="App">
              <SearchBar />
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                <Playlist playlist={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
              </div>
          </div>
      </div>
    );
  }
}

export default App;

