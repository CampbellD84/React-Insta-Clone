import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import HeadPost from './HeadPost';

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
            <CommentSection comments={props.post.comments}/>
        </div>
    );
}

export default PostContent;