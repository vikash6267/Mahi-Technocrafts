const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogCtrl");

// List blogs
router.get("/", getAllBlogs);

// Get by slug
router.get("/slug/:slug", getBlogBySlug);

// Get by id
router.get("/:id", getBlogById);

// Create blog
router.post("/", createBlog);

// Update blog
router.put("/:id", updateBlog);

// Delete blog
router.delete("/:id", deleteBlog);

module.exports = router;