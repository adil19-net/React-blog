import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,SetTitle]=useState('');
    const [body,SetBody]=useState('');
    const [author,SetAuthor]=useState('mario');
    const [isPending,SetisPending]=useState(false);
    const history=useHistory();
    const handleclick=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        SetisPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            SetisPending(false);
            history.go(-1);
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleclick}>
                <label>Bog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>SetTitle(e.target.value)}
                />
                <label>Bog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>SetBody(e.target.value)}
                >    
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>SetAuthor(e.target.value)}
                >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
                </select>
                {isPending && <button>Adding Blog</button>}
                {!isPending && <button>Add Blog</button>}
                
                {/* <input type="submit" value="Add Blog"/> */}
                
            </form>
        </div>
    );
}
 
export default Create;