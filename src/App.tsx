import './App.css';
import { useState,useEffect } from 'react'
import axios from 'axios'
import MyPosts from './components/Posts/Post.inteface';
import { Post } from './components/Posts/Post';
import { Button } from './components/Buttons/Button';

function App() {

  const[posts,setPosts] = useState<MyPosts[]>([])
  const[currentPage,setCurrentPage] = useState(1)
  const[postPerPage,setPostPerPage] = useState(5)
  const url = 'https://jsonplaceholder.typicode.com/posts'
  
  const fetchingData = async() => {
  const res = await axios.get(url)
    setPosts(res.data)

  }

 
  useEffect(() => {
    fetchingData()
  },[])


  const lastPost = currentPage * postPerPage   
  const firstPost = lastPost - postPerPage   
  const currentPost = posts.slice(firstPost,lastPost)   

  return (
    <div className="mt-6 w-2/3 mx-auto">
      <Post blog={currentPost} />
      <Button postPerPage={postPerPage} totalPost={posts.length} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
