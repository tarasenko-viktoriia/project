import React, { useState } from "react";

export default function Playlist() {
    const [isPlaylist, setIsPlaylist] = useState (true);
    return (
        <div className="songs d-flex flex-wrap"> 
        {isPlaylist
            ? Playlist.map((item) => <div className="song text-center">
                <img className="audio-img" alt={item.title} src={item.imgUrl}/>
            </div>)
        : "songs"}
        </div>
    );
}