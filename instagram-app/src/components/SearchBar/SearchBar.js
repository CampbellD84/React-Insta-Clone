import React from 'react';
import './SearchBar.css';
import IGLogo from '../../logo/logo.instagram.png';


const SearchBar = props => {
    return (
        <div className="search">
            <img id="insta" src={IGLogo} alt="logo"/>
            <input type="text" name="search" onKeyDown={props.postSearch} placeholder="Search"/>
            <div className="social">
                <span><img src="https://img.icons8.com/material-outlined/36/000000/compass.png" alt="compass"/></span>
                <span><img src="https://img.icons8.com/windows/36/000000/hearts.png" alt="like"/></span>
                <span><img src="https://img.icons8.com/windows/36/000000/contacts.png" alt="user"/></span>
            </div>
        </div>
    );
}

export default SearchBar;