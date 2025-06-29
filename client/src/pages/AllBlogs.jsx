import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        const latestFirst = response.data.blogs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(latestFirst);
      } catch (error) {
        console.error('Failed to load blogs:', error);
      }
    };

    getBlogs();
  }, []);

  return (
    <div style={{
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif"
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#111',
      }}>
        Blog Articles
      </h2>

      <p style={{
        fontSize: '16px',
        color: '#666',
        marginBottom: '40px',
      }}>
        Explore helpful insights and stories around XYZ topics.
      </p>

      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {blogs.map((blog) => (
            <div key={blog._id} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
            }}>
              <img
                src={blog.thumbnail}
                alt={blog.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />

              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '6px',
                  color: '#111'
                }}>
                  {blog.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  marginBottom: '8px'
                }}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                <p style={{
                  fontSize: '15px',
                  color: '#444',
                  marginBottom: '15px'
                }}>
                  {blog.content.replace(/<[^>]+>/g, '').slice(0, 100)}...
                </p>

                <Link to={`/blog/${blog._id}`} style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  border: '1.5px solid #d00478',
                  color: '#d00478',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: '0.3s ease',
                }}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllBlogs;
