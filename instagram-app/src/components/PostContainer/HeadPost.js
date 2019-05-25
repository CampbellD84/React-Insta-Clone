import React from 'react';

const HeadPost = props => {
    return (
        <div className="post-header">
            <div className="thumb-post">
                <img
                src={props.thumbnailUrl} 
                alt="head of post" 
                />
            </div>
            <div><strong>{props.username}</strong></div>
        </div>
    );
}

export default HeadPost;