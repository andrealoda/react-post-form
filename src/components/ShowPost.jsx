export default function ShowPost({ postData, setPostData }) {

    function removeArticle(idToRemove) {
        const filteredArticles = postData.filter(post => post.id !== idToRemove)
        setPostData(filteredArticles)
    }

    return (
        <>
            {postData.map((post, index) => (
                <div key={index}>
                    <p>{post.title}</p>
                    <p>{post.author}</p>
                    <p>{post.body}</p>
                    <p>{post.public ? 'Public' : 'Private'}</p>
                    <div>
                        <button onClick={() => removeArticle(post.id)}>REMOVE</button>
                    </div>

                </div>
            ))}
        </>
    )
}