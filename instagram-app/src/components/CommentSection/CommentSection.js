import React, {Component} from 'react';
import Comment from './Comment';
import InputComment from './InputComment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, idx) => (
                    <Comment 
                    comment={comment}
                    key={idx}
                    />
                ))}
                <InputComment />
            </div>
        );
    }
}
    


export default CommentSection;