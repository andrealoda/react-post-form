export default function ShowPost({ postData }) {


    
    return (
        <>
            {postData.map((post, index) => (
              <div key={index} className="card my-3 p-3">
                <h3>{post.title}</h3>
                <p><strong>Author:</strong> {post.author}</p>
                <p>{post.body}</p>
                <span>{post.public ? 'Public' : 'Private'}</span>
              </div>
            ))}
        </>
    )
}