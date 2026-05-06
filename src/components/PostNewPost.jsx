import { useState } from 'react'

export default function PostNewPost({ onPostData }) {

    const newPost = {
        author: '',
        title: '',
        body: '',
        public: false
    }

    const [draftPost, setDraftPost] = useState(newPost);

    function handlePostData(e) {
        const name = e.target.name;
        const type = e.target.type;
        const value = e.target.value;
        const checked = e.target.checked;

        let newValue = type === 'checkbox' ? checked : value;

        setDraftPost(
            {
                ...draftPost,
                [name]: newValue
            })
    }



    function handleSubmit(e) {
        e.preventDefault()
        onPostData(draftPost)
        setDraftPost(newPost)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='author'
                value={draftPost.author}
                onChange={handlePostData}
            />
            <input
                type="text"
                name='title'
                value={draftPost.title}
                onChange={handlePostData}
            />
            <input
                type="text"
                name='body'
                value={draftPost.body}
                onChange={handlePostData}
            />
            <input
                type="checkbox"
                name='public'
                checked={draftPost.public}
                onChange={handlePostData}
            />
            <button className='btn glass-card'>ADD</button>
        </form>
    )
}