import { useState } from 'react'
import PostNewPost from './components/PostNewPost';

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

            {postData.map((post, index) => (
              <div key={index} className="card my-3 p-3">
                <h3>{post.title}</h3>
                <p><strong>Author:</strong> {post.author}</p>
                <p>{post.body}</p>
                <span className={`badge ${post.public ? 'bg-success' : 'bg-secondary'}`}>
                  {post.public ? 'Public' : 'Private'}
                </span>
              </div>
            ))}


          </div>
        </div>
      </div>
    </>
  );
}

export default App
