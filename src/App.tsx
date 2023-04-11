import './App.css';
import { useState,useEffect } from 'react'
import axios from 'axios'
import MyPosts from './Post.inteface';
import { Post } from './components/Post';

function App() {

  const[posts,setPosts] = useState<MyPosts[]>([])
  const[currentPage,setCurrentPage] = useState(1)
  const url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(url);
        setPosts(res.data)
      }
      fetchData()

  },[])

  return (
    <div className="App">
      <Post blog={posts} />
    </div>
  );
}

export default App;
