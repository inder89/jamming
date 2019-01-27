import React, { Component } from 'react';
import './Track.css';

class Track extends Component{  
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }
    
    renderAction(isRemoval) {
        if(isRemoval) {
            return  "-";
        } else {
            return  "+"; 
        }
    }

    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album} --></p>
                </div>
                
                <a className="Track-action">{this.renderAction}</a>
            </div>
        );
    }
}

export default Track;