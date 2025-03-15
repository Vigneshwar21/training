import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL, { title, content })
      .then(() => window.location = "/");
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
