import React from "react";
import "../styles/Header.css";

const Header =() =>{
    return(
        <div class="headerMain">
            <h1>Streamish</h1>
            <div class="headerSearch">
                <div>
                    <label for="vSearch"></label>
                    <input type="text" id="vSearch"></input>
                </div>
                <div><button>Search</button></div>
            </div>
        </div>
    );
}
export default Header;