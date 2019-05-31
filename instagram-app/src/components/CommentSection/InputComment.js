import React from 'react';
import styled from 'styled-components';

const CommentInputArea = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 55px;
    input {
        border: 0;
        margin-top: 15px;
        margin-bottom: 30px;
        background-color: #f0f0f0;
        height: 30px;
        width: 300px;
        border-radius: 5px;
        ::placeholder {
            padding-left: 10px;
        }
    }
`;

const InputComment = props => {
    return (
        <CommentInputArea>
            <form onSubmit={props.commentSubmit}>
                <input 
                type="text" 
                value={props.comment}
                placeholder="Comment..."
                onChange={props.commentChange}
                />
            </form>
        </CommentInputArea>
    );
}

export default InputComment;