const Blog = require('../models/Blog');
const stream = require('stream');
const cloudinary = require('../utils/cloudinary');

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const file = req.file;

    // Check if image is provided
    if (!file) {
      return res.status(400).json({ error: 'Thumbnail is required' });
    }

    // Upload image to Cloudinary
    const upload = cloudinary.uploader.upload_stream(
      { folder: 'blogs', resource_type: 'image' },
      async (err, result) => {
        if (err) {
          console.log('Cloudinary upload error:', err);
          return res.status(500).json({ error: 'Image upload failed' });
        }

        // Save blog to database
        const newBlog = new Blog({
          title,
          content,
          thumbnail: result.secure_url
        });

        await newBlog.save();
        return res.status(201).json({ success: true, blog: newBlog });
      }
    );

    // Send image file to Cloudinary
    stream.Readable.from(file.buffer).pipe(upload);

  } catch (error) {
    console.log('Create blog error:', error);
    res.status(500).json({ error: 'Server error while creating blog' });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, content, shortText } = req.body;

    const updateFields = { title, content, shortText };

    if (req.file) {
      const upload = cloudinary.uploader.upload_stream(
        { folder: 'blogs', resource_type: 'image' },
        async (err, result) => {
          if (err) {
            console.log('Image update error:', err);
            return res.status(500).json({ error: 'Failed to upload image' });
          }

          updateFields.thumbnail = result.secure_url;

          const updatedBlog = await Blog.findByIdAndUpdate(blogId, updateFields, { new: true });
          res.status(200).json({ message: 'Blog updated', blog: updatedBlog });
        }
      );

      stream.Readable.from(req.file.buffer).pipe(upload);

    } else {
      const updatedBlog = await Blog.findByIdAndUpdate(blogId, updateFields, { new: true });
      res.status(200).json({ message: 'Blog updated', blog: updatedBlog });
    }

  } catch (err) {
    console.log('Update blog error:', err);
    res.status(500).json({ error: 'Something went wrong while updating blog' });
  }
};

// Get single blog
const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json({ success: true, blog });

  } catch (err) {
    console.log('Get single blog error:', err);
    res.status(500).json({ error: 'Error fetching blog' });
  }
};

// Get all blogs (latest first)
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });

  } catch (err) {
    console.log('Get blogs error:', err);
    res.status(500).json({ error: 'Could not load blogs' });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  getSingleBlog,
  getAllBlogs
};
