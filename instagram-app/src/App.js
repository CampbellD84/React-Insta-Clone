import React, {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  };

  componentDidMount() {
    this.setState({
      posts: dummyData,
      likes: dummyData.likes
    })
  };
  

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} comments={this.state.comments} likes={this.state.likes}/>
      </div>
    );
  
  }
};



export default App;
