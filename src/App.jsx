import { useState } from 'react'
import PostNewPost from './components/PostNewPost';
import ShowPost from './components/ShowPost';

const emptyPost = {
  author: '',
  title: '',
  body: '',
  public: false
}



const App = () => {

  const [postData, setPostData] = useState([]);


  function handleNewPost(newPost) {
    const newPostWithID = {
      ...newPost, id: crypto.randomUUID()
    }
    setPostData([...postData, newPostWithID]);
  }

  return (
    <>
      <div className="container">
        <div className="title glass-card">
        <h1>YET ANOTHER BLOG</h1>
        </div>
            <ShowPost postData={postData} setPostData={setPostData}/>
            <PostNewPost onPostData={handleNewPost} />


      </div>
    </>
  );
}

export default App
