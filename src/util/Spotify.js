import React from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';

const clientId = '8c5ff53cd84f4b9db5af97123759bb59';
const redirectUri = 'http://localhost:3000/';

let accessToken = '';
let expiresIn;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) { 
            accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
            expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            let url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = url;
        }
    },

    search(searchTerm) {
        let endpoint =  `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
         return fetch(endpoint, 
                {
                    headers: {Authorization: `Bearer ${this.getAccessToken()}`}
                }).then(response => {
                    if(response.ok) {
                        
                        const jsonResponse = response.json();
                        console.log(jsonResponse);
                        return jsonResponse;
                    }
                    throw new Error('Request Failed');
                }, networkError => {
                    console.log(networkError.message);
                }).then(jsonResponse => {
                        
                        if(jsonResponse.tracks.items) {
                            const tracks = jsonResponse.tracks.items.map(track => {
                                return {
                                    id: track.id,
                                    name: track.name,
                                    artist: track.artists[0].name,
                                    album: track.album.name,
                                    uri: track.uri
                                }
                            })
                            return tracks;
                        }
                       
                });
    }
   
};

export default Spotify;