import React, { useState } from "react";
import {PlayList} from "../data"

export default function Playlist() {
    const [isPlaylist, setIsPlaylist] = useState (true);
    return (
        <div className="songs d-flex flex-wrap"> 
        {isPlaylist
            ? PlayList.map((item) => (
            <div className="song text-center" onClick={()=> {
                setIsPlaylist (false);}}>
                <img className="audio-img" alt={item.title} src={item.imgUrl}/>
                <div>{item.title}</div>
            </div>))
        : "songs"}
        </div>
    );
}