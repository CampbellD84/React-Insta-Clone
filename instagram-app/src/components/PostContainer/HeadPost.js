import React from 'react';
import styled from 'styled-components';


const PostHeader = styled.div`
    display: flex;
    margin-left: 20px;
    justify-content: flex-start;
    align-items: center;
`;

const ThumbPostArea = styled.div`
    margin: 20px 10px 20px 0px; 
`;

const ThumbPostImg = styled.img`
    height: 95px;
    width: 95px;
    border-radius: 100px;
`;

const HeadPost = props => {
    return (
        <PostHeader>
            <ThumbPostArea>
                <ThumbPostImg
                src={props.thumbnailUrl} 
                alt="head of post" 
                />
            </ThumbPostArea>
            <div><strong>{props.username}</strong></div>
        </PostHeader>
    );
}

export default HeadPost;