import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [ ],
      playlistName: "New Playlist",
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
    } else {
      let currentPlaylist = this.state.playlistTracks.slice(); // * create a copy of the array
      currentPlaylist.push(track);
      this.setState({ playlistTracks: currentPlaylist});
    }
  }

  removeTrack(track){
    let currentPlaylist = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({ playlistTracks: currentPlaylist});
  }

  updatePlaylistName(input){
    this.setState({ playlistName: input});
  }

  savePlaylist() {

    let trackURIs = [];
    for(let i= 0; i < this.state.playlistTracks.length; i++) {   //TODO use map instead
      trackURIs.push(this.state.playlistTracks[i].uri);
    };

   Spotify.savePlaylist(this.state.playlistName, trackURIs)
      .then(() => this.setState({
        playlistTracks: [],
        playlistName: 'New Playlist'
      }));
    }

  search(term){
    Spotify.search(term).then(items => this.setState({
      searchResults: items
    }));
  }

  componentDidMount() {
    Spotify.getAccessToken();
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
              <SearchBar onSearch={this.search} />
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                <Playlist playlist={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks} 
                    onRemove={this.removeTrack} 
                    onNameChange={this.updatePlaylistName} 
                    onSave={this.savePlaylist} 
                />
              </div>
          </div>
      </div>
    );
  }
}

export default App;

