const Blog = require("../model/blog");

// Create Blog
exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      content,
      thumbnail,
      category,
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard,
      schemaMarkup,
      author,
      published,
      publishedAt,
    } = req.body;

    // Create
    const blog = await Blog.create({
      title,
      slug,
      content,
      thumbnail,
      category,
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard,
      schemaMarkup,
      author,
      published,
      publishedAt,
    });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    if (error.code === 11000 && error.keyPattern?.slug) {
      return res.status(409).json({ success: false, message: "Slug already exists" });
    }
    res.status(500).json({ success: false, message: "Failed to create blog" });
  }
};

// Get all blogs (with optional filters: published, category, search)
exports.getAllBlogs = async (req, res) => {
  try {
    const {
      published = "true",
      category,
      search,
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};
    if (published === "true") query.published = true;
    if (category) query.category = category;
    if (search) query.title = { $regex: search, $options: "i" };

    const skip = (Number(page) - 1) * Number(limit);
    const [items, total] = await Promise.all([
      Blog.find(query).sort({ publishedAt: -1, createdAt: -1 }).skip(skip).limit(Number(limit)),
      Blog.countDocuments(query),
    ]);

    res.status(200).json({ success: true, data: items, total, page: Number(page), limit: Number(limit) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch blogs" });
  }
};

// Get blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch blog" });
  }
};

// Get blog by id
exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch blog" });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const blog = await Blog.findByIdAndUpdate(id, updates, { new: true });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to update blog" });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to delete blog" });
  }
};