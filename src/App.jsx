import { useState } from 'react'

const emptyPost = {
  author: '',
  title: '',
  comapnyName: '',
  body: '',
  public: false
}



const App = () => {

  const [postData, setPostData] = useState(emptyPost);

  function handlePostData(e) {
    console.log(e);
    setPostData(
      {
        ...postData,
        [e.target.name]: e.target.value
      }
    )
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <PostNewPost postData={postData} onPostData={handlePostData} />
          </div>
          <div className="col">
            <ShowPost postData={postData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
