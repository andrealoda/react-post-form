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
    setPostData([...postData, newPost]);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <PostNewPost onPostData={handleNewPost} />
            <ShowPost postData={postData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
