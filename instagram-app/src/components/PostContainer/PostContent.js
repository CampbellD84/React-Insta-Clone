import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import HeadPost from './HeadPost';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostOuter = styled.div`
    border: 1px solid #2d2d37;
    border-radius: 15px;
    width: 80%;
    height: 80%;
    margin: 20px auto;
`;

const PostImgArea = styled.div`
    height: 100%;
    width: 100%;
`;

const PostImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const PostContent = props => {
    return (
        <PostOuter>
            <HeadPost 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <PostImgArea>
                <PostImg 
                alt="post thumb"
                src={props.post.imageUrl}
                />
            </PostImgArea>
            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </PostOuter>
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