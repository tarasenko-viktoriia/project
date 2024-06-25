import React from "react";
import { PlayFill } from "react-bootstrap-icons";

export default function Song(props){
    return (
        <div className="song text-center">
            <img className="audio-img" alt={props.title} src={props.artwork}/>
            <div>{props.title}</div>
            <PlayFill className="play-logo"/>
            <div>Artist: {props.artist}</div>
        </div>
    )
}