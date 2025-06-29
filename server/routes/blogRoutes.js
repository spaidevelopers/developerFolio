const express = require('express');
const { createBlog, getAllBlogs, updateBlog, getSingleBlog } = require('../controllers/blogController');
const verifyToken = require('../middleware/authMiddleware');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');

const router = express.Router();
const upload = multer({ storage });

router.get('/', getAllBlogs);
router.get('/:id', getSingleBlog);

router.post('/', verifyToken, upload.single('thumbnail'), createBlog);
router.put('/:id', verifyToken, upload.single('thumbnail'), updateBlog);


module.exports = router;
