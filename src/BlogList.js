import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const BlogList = (prop) => {
  const blogs=prop.blogs;
  const [filedele,Setfiledele]=useState(false);
  const handleDelete=(id)=>{
    Setfiledele(true);
    fetch('http://localhost:8000/blogs/'+ id,{
      method:'DELETE'
    }).then(()=>{
      console.log('Blog Deleted');
      Setfiledele(false);
    })
  }
  useEffect(()=>{
    console.log(1);
  },[filedele])

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to ={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
          {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;