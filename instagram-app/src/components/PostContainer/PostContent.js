import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import HeadPost from './HeadPost';

import PropTypes from 'prop-types';

const PostContent = props => {
    return (
        <div className="post-outer">
            <HeadPost 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-img">
                <img 
                alt="post thumb"
                src={props.post.imageUrl}
                />
            </div>
            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </div>
    );
}

PostContent.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default PostContent;