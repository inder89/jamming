import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

 class TrackList extends Component {
    render() {
       
        return this.props.tracks ? 
            (
                <div className="TrackList">
                    {console.log(this.props.tracks)}
                        { 
                            this.props.tracks.map((track) => { 
                                return (<Track track={track} key={track.id} />)
                            })
                        }
                            
                        
                </div>
            )
        :
            null;
    }
}

export default TrackList;

