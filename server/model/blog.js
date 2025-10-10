const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    content: { type: String, required: true },
    thumbnail: { type: String },
    category: { type: String, default: "General" },

    // SEO Meta Fields
    metaTitle: { type: String },
    metaDescription: { type: String },
    keywords: [{ type: String }],
    canonicalUrl: { type: String },
    ogTitle: { type: String },
    ogDescription: { type: String },
    ogImage: { type: String },
    twitterCard: { type: String, default: "summary_large_image" },

    // Schema Markup (JSON-LD)
    schemaMarkup: {
      type: Object,
      default: {},
    },

    author: { type: String, default: "Mahi Technocrafts" },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Helper to slugify a string
function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Ensure slug is present and normalized
BlogSchema.pre("validate", function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title);
  }
  if (this.slug) {
    this.slug = slugify(this.slug);
  }
  next();
});

const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;