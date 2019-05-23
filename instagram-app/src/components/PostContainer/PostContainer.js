import React from 'react';
import PostContent from './PostContent';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(post => (
                <PostContent key={post.imageUrl} post={post} />
            ))}
        </div>
    );
}

export default PostContainer;