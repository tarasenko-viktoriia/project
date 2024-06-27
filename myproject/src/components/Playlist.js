import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {PlayList} from "../data"
import {changeList} from "../redux/reducer/list"
import Song from "./Song";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";

export default function Playlist() {
    const [isPlaylist, setIsPlaylist] = useState (true);
    const [playList, setPlayList] = useState ({});
    const list = useSelector(state => state.list.value);
    const dispatch = useDispatch ();
    return (
        <div className="songs d-flex flex-wrap"> 
        {isPlaylist
            ? PlayList.map((item) => (
            <div className="song text-center" onClick={()=> {
                setPlayList(item);
                setIsPlaylist (false);
                dispatch(changeList(item.songs));
                }}>
                <img className="audio-img" alt={item.title} src={item.imgUrl}/>
                <div>{item.title}</div>
            </div>))
        : (
        <div>
            <div className="playlist-header">
                <ArrowLeftCircleFill onClick={()=>setIsPlaylist(true)}/>
                {playList.title}
            </div>
            <div className="justify-content-center d-flex flex-wrap">
                {list.map((item) => (
                    <Song {...item}></Song>
                ))}
            </div>
            </div>)}
        </div>
    );
}