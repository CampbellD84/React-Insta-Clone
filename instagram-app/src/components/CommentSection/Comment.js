import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentArea = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 10px;
    span {
        margin-right: 7px;
    }
`;

const Comment = props => {
    return(
        <CommentArea>
            <span><strong>{props.comment.username}</strong></span><br />
            <span>{props.comment.text}</span>
        </CommentArea>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;