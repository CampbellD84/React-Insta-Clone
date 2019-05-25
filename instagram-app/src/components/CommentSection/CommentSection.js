import React, {Component} from 'react';
import Comment from './Comment';
import InputComment from './InputComment';
import LikeSection from './LikeSection';

import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: "",
            likes: props.likes
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

    likeCountIncrement = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };

    render() {
        return (
            <div>
                {this.state.comments.map((comment, idx) => (
                    <Comment 
                    comment={comment}
                    key={idx}
                    />
                ))}
                <LikeSection 
                likes={this.state.likes} 
                likeCountIncrement={this.likeCountIncrement}
                />
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