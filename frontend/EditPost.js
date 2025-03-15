import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`${API_URL}/${id}`, { title, content })
      .then(() => window.location = "/");
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
