import React from "react";
import {FileEarmarkMusicFill, MusicNoteList} from "react-bootstrap-icons"


export default function Menu({isSongs, setIsSongs}){
    return (
        <div className="menu">
            <div className={`d-flex menu-item ${isSongs && "active"}`}
            onClick={() => setIsSongs(true)}>
                <FileEarmarkMusicFill/>
                <span>Songs</span>
            </div>
            <div className={`d-flex menu-item ${!isSongs && "active"}`}
            onClick={() => setIsSongs(false)}>
                <MusicNoteList/>
                <span>Playlist</span>
            </div>
        </div>
    )
};
