import React from 'react';

const HeadPost = props => {
    return (
        <div>
            <div>
                <img alt="head of post" 
                src={props.thumbnailUrl}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
}

export default HeadPost;