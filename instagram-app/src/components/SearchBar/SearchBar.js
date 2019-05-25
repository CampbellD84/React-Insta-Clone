import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div>
            <img src="../../assets/logo.instagram.png" alt="logo"/>
            <input type="text" name="search" placeholder="Search"/>
        </div>
    );
}

export default SearchBar;