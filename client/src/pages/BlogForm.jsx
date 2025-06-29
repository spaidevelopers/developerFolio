import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

function BlogForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    loadBlogs();
  }, [navigate]);

  const loadBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
      const latestFirst = res.data.blogs.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBlogs(latestFirst);
    } catch (err) {
      console.log('Error fetching blogs:', err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Please login first');
  
    if (!image && !editId) {
      return alert('Please upload a thumbnail before submitting your blog.');
    }
  
    const plain = content.replace(/<[^>]+>/g, '');
    const shortText = plain.split(' ').slice(0, 30).join(' ') + '...';
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('shortText', shortText);
    if (image) formData.append('thumbnail', image);
  
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/blogs/${editId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Blog updated!');
      } else {
        await axios.post('http://localhost:5000/api/blogs', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Blog uploaded!');
      }
  
      resetForm();
      loadBlogs();
    } catch (err) {
      console.log('Error uploading blog:', err);
      alert('Something went wrong');
    }
  };  

  const resetForm = () => {
    setEditId(null);
    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview('');
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setTitle(blog.title);
    setContent(blog.content);
    setImagePreview(blog.thumbnail);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="full-page-blog">
      <div className="blog-form-wrapper">
        <h2>{editId ? 'Edit Blog' : 'Create Blog'}</h2>
        <p>{editId ? 'Make changes below' : 'Write your new blog below'}</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="input-group file-upload-section">
            <label className="file-upload-label">Upload Thumbnail</label>
            <div className="file-upload-area">
              <input type="file" id="file-upload" accept="image/*" onChange={handleImageChange} />
              <label htmlFor="file-upload" className="upload-box">
                {image ? image.name : 'Choose image'}
              </label>
            </div>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="thumbnail-preview" />
            )}
          </div>

          <div className="editor-group">
            <label className="content-label">Blog Content</label>
            <Editor
              apiKey="m36w9w96sbb2ik6z6a38cwhye8bi866ibwwdw1zolf287bq5"
              value={content}
              onEditorChange={(val) => setContent(val)}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                  'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                  'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                ],
                toolbar:
                  'undo redo | blocks | bold italic underline strikethrough | forecolor backcolor | ' +
                  'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | link image media table | preview fullscreen | help',
                content_style: 'body { font-family: Segoe UI, sans-serif; font-size:14px }'
              }}

            />
          </div>

          <button type="submit" className="blog-submit">
            {editId ? 'Update Blog' : 'Submit Blog'}
          </button>

          {editId && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#f44336',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Cancel Edit
            </button>
          )}
        </form>

        <button
          onClick={handleLogout}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#888',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      <div className="table-wrapper">
        <h3 className="table-heading">All Blogs</h3>

        <div className="table-scroll">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Thumbnail</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={blog._id}>
                  <td>
                    <div style={{ fontWeight: '600' }}>{blog.title}</div>
                    <div style={{ fontSize: '13px', color: '#888' }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td>
                    <img
                      src={blog.thumbnail}
                      alt="thumb"
                      style={{
                        width: '90px',
                        height: '60px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        border: '1px solid #ddd',
                      }}
                    />
                  </td>
                  <td>
                    <span
                      style={{
                        background: '#e0e7ff',
                        color: '#3b4fe2',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '13px',
                      }}
                    >
                      {editId === blog._id ? 'Editing' : 'Active'}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(blog)}
                      style={{
                        backgroundColor: '#5b3bf0',
                        color: '#fff',
                        padding: '8px 14px',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default BlogForm;
