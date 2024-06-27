import React, {useState} from "react";
import Menu from "./Menu"
import {MusicList, PlayList} from "../data";
import Song from "./Song";
import Playlist from "./Playlist";

export default function Home(){
    const [isSongs, setIsSongs] = useState(true);
    return (
        <div className="home">
            <h3 className="header text-center">Bits</h3>
            <div className="main-container">
                <div className="d-flex justify-content-center input-container">
                    <input type="search" id="search-input" className="form-control" placeholder="Searh">
                    </input>
                </div>
                <div className="d-flex content">
                    <Menu isSongs={isSongs} setIsSongs={setIsSongs}/>
                    <div style={{flex: 1}}>
                    { isSongs ? (
                            <div className="d-flex flex-wrap songs">
                                {
                                    MusicList.map((item) => (<Song {...item}/> ))
                                }
                            </div> 
                    ) : (
                    <Playlist/>)}
                    </div>  
                </div>
            </div>
        </div>
    )
};
