import React from 'react';

const InputComment = props => {
    return (
        <div>
            <form onSubmit={props.commentSubmit}>
                <input 
                type="text" 
                value={props.comment}
                placeholder="Comment..."
                onChange={props.commentChange}
                />
            </form>
        </div>
    );
}

export default InputComment;