import React, {useState} from "react";
import Menu from "./Menu"


export default function Home(){
    const [isSongs, setIsSongs] = useState(true);
    return (
        <div className="home">
            <h3 className="header text-center">Bits</h3>
            <div className="d-flex justify-content-center mt-3">
                <input type="search" id="search-input" className="form-control" placeholder="Searh">
                </input>
            </div>
            <div className="d-flex content">
                <Menu isSongs={isSongs} setIsSongs={setIsSongs}/>
                <div style={{flex: 1}}>
                    Songs
                </div>
            </div>
        </div>
    )
};
