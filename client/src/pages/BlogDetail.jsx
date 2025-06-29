import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data.blog);
      } catch (err) {
        console.error('Failed to load blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: 'center', paddingTop: '40px' }}>Loading blog...</p>;
  }

  if (!blog) {
    return <p style={{ textAlign: 'center', paddingTop: '40px' }}>Blog not found.</p>;
  }

  return (
    <div style={{
      maxWidth: '960px',
      margin: '0 auto',
      padding: '50px 20px',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#1f1f2e'
    }}>
      <img
        src={blog.thumbnail}
        alt={blog.title}
        style={{
          display: 'block',
          maxWidth: '1000px',
          width: '100%',
          height: '360px',
          objectFit: 'cover',
          aspectRatio: '16 / 7',
          borderRadius: '14px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
          margin: '0 auto 30px auto'
        }}
      />

      <h1 style={{
        fontSize: '34px',
        marginBottom: '20px',
        lineHeight: '1.3',
        fontWeight: 700
      }}>
        {blog.title}
      </h1>

      <div
        style={{
          fontSize: '17px',
          lineHeight: '1.8',
          color: '#444',
        }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

export default BlogDetail;
