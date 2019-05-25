import React from 'react';


const LikeSection = props => {
    return(
        <div className="like-comment" onClick={props.likeCountIncrement}>
            <span><img src="https://img.icons8.com/windows/32/000000/hearts.png" alt="like"/></span>
            <span><strong>{props.likes}</strong></span>
            <span><img src="https://img.icons8.com/metro/26/000000/topic.png" alt="comment"/></span>
        </div>
    );
}

export default LikeSection;