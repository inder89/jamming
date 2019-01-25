import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
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


{/* <div>
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div class="App">
    <!-- Add a SearchBar component -->
    <div class="App-playlist">
      <!-- Add a SearchResults component -->
      <!-- Add a Playlist component -->
    </div>
  </div>
</div> */}