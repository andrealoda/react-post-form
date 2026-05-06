export default function ShowPost({ postData }) {


    
    return (
        <>
            <div className="author">{postData.author}</div>
            <div className="author">{postData.title}</div>
            <div className="author">{postData.body}</div>
            <div className="public">{false}</div>
        </>
    )
}