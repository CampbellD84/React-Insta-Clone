import React, {Component} from 'react';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            postsFiltered: []
        }
    }

    componentDidMount() {
        this.setState({
          posts: dummyData,
          likes: dummyData.likes
        })
      };
    
      handlePostSearch = e => {
        // eslint-disable-next-line array-callback-return
        const posts = this.state.posts.filter(post => {
          if (post.username.includes(e.target.value)) {
            return post;
          }
        });
        this.setState({
          postsFiltered: posts
        });
      };
      
    
      render() {
        return (
          <div>
            <SearchBar 
              postSearch={this.handlePostSearch}
              lookupSearch={this.state.termSearch}
            />
            <PostContainer 
              posts={this.state.postsFiltered.length > 0 ? this.state.postsFiltered : this.state.posts} 
              comments={this.state.comments} 
              likes={this.state.likes}
            />
          </div>
        );
      
      }
}

export default PostsPage;