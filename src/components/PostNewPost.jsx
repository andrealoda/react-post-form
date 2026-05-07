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
        const { name, type, value, checked } = e.target;

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
        <div className="wrapper glass-card">
            <form onSubmit={handleSubmit}>
                <h4>Autore</h4>
                <input
                    type="text"
                    name='author'
                    value={draftPost.author}
                    onChange={handlePostData}
                />
                <h4>Titolo</h4>
                <input
                    type="text"
                    name='title'
                    value={draftPost.title}
                    onChange={handlePostData}
                />
                <h4>Testo</h4>
                <textarea
                    name='body'
                    value={draftPost.body}
                    onChange={handlePostData}
                />
                <h4>Post pubblico?</h4>
                <input
                    type="checkbox"
                    name='public'
                    checked={draftPost.public}
                    onChange={handlePostData}
                />
                <h4>Hai finito? Aggiungi alla pagina</h4>
                <button className='btn'>+</button>
            </form>
        </div>
    )
}