import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import HeadPost from './HeadPost';

const PostContent = props => {
    return (
        <div>
            <div>
                <HeadPost 
                username={props.post.username} 
                thumbnail={props.post.thumbnailUrl}
                />
            </div>
            <div>
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