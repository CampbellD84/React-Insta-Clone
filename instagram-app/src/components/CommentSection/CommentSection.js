import React, {Component} from 'react';
import Comment from './Comment';
import InputComment from './InputComment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }

    handleComment = e => {
        this.setState({comment: e.target.value});
    }

    addNewComment = e => {
        e.preventDefault();
        const newCmt = {text: this.state.comment, username: 'absurdistdev'};
        const comments = this.state.comments.slice();
        comments.push(newCmt);
        this.setState({
            comments, comment: ""
        });
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
                <InputComment
                comment={this.state.comment}
                commentSubmit={this.addNewComment}
                commentChange={this.handleComment} 
                />
            </div>
        );
    }
}
    


export default CommentSection;