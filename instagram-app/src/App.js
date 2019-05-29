import React, {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      postsFiltered: []
    }
  };

  componentDidMount() {
    this.setState({
      posts: dummyData,
      likes: dummyData.likes
    })
  };

  handlePostSearch = e => {
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
      <div className="App">
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
};



export default App;
