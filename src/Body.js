import React from "react";
import './Body.css';
import Header from "./Header";

function Body ({spotify}) {
    return(

        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src="https://i.scdn.co/image/0f057142f11c251f81a22ca639b7261530b280b2"
                 alt="" />
                <div className="body__infoText" >
                    <strong> PLAYLIST</strong>
                    <h2> Discover Weekly</h2>
                    <p> Description...</p>
                </div>
            </div>
        </div>
    );

}
export default Body;