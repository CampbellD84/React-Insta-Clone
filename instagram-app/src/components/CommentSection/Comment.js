import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';

const Comment = props => {
    return(
        <div className="comment">
            <span><strong>{props.comment.username}</strong></span><br />
            <span>{props.comment.text}</span>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;