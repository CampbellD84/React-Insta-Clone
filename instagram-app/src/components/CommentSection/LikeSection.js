import React from 'react';
import styled from 'styled-components';

const LikeCommentArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 55px;
    span {
        margin-right: 15px;
        margin-top: 5px;
    }
`;

const LikeSection = props => {
    return(
        <LikeCommentArea onClick={props.likeCountIncrement}>
            <span><img src="https://img.icons8.com/windows/32/000000/hearts.png" alt="like"/></span>
            <span><strong>{props.likes}</strong></span>
            <span><img src="https://img.icons8.com/metro/26/000000/topic.png" alt="comment"/></span>
        </LikeCommentArea>
    );
}

export default LikeSection;