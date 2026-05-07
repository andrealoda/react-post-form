export default function ShowPost({ postData, setPostData }) {

    function removeArticle(idToRemove) {
        const filteredArticles = postData.filter(post => post.id !== idToRemove)
        setPostData(filteredArticles)
    }

    return (
        <>
            <div className="blog-wrapper">
                {postData.map((post, index) => (
                    <div key={index}>
                        <div className="blog-post glass-card">
                            <h2>TITOLO: {post.title}</h2>
                            <h3>AUTORE: {post.author}</h3>
                            <p>{post.body}</p>
                            <p>{post.public ? 'Questo è un post pubblico' : 'Questo è un post privato'}</p>
                            <div>
                                <button onClick={() => removeArticle(post.id)}>REMOVE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}