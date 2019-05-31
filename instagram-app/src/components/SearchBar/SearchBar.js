import React from 'react';
import IGLogo from '../../logo/logo.instagram.png';
import styled from 'styled-components';

const SearchHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #2d2d37;
`;

const InstaLogo = styled.img`
    width: 220px;
    height: 60px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SearchInput = styled.input`
    border: 0;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #f0f0f0;
    height: 30px;
    width: 300px;
    border-radius: 5px;
    ::placeholder {
        padding-left: 10px;
    }
}
`;

const SearchBar = props => {
    return (
        <SearchHeader>
            <InstaLogo src={IGLogo} alt="instagram logo"/>
            <SearchInput type="text" name="search" onKeyDown={props.postSearch} placeholder="Search"/>
            <SocialIcons>
                <span><img src="https://img.icons8.com/material-outlined/36/000000/compass.png" alt="compass"/></span>
                <span><img src="https://img.icons8.com/windows/36/000000/hearts.png" alt="like"/></span>
                <span><img src="https://img.icons8.com/windows/36/000000/contacts.png" alt="user"/></span>
            </SocialIcons>
        </SearchHeader>
    );
}

export default SearchBar;