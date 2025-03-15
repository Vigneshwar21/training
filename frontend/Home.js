import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setPosts(posts.filter((post) => post._id !== id));
    });
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">Create New Post</Link>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/edit/${post._id}`}>Edit</Link>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
