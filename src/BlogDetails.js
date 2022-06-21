import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams();
    const {error, isPending, data: blog}=useFetch('http://localhost:8000/blogs/' + id);
    const history1=useHistory();
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+ id,{
            method:'DELETE'
        }).then(()=>{
            console.log('Blog Deleted');
            history1.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Is Loading </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
            
        </div>

    );
}
 
export default BlogDetails;