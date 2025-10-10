"use client";
import { useState } from "react";
import { apiConnector } from "@/services/apiConnector";
import { blogsEndpoint, uploadsEndpoint } from "@/services/apis";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const slugify = (text) =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function AdminCreateBlogPage() {
  const router = useRouter();

  // Function to handle navigation

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    thumbnail: "",
    category: "General",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    twitterCard: "summary_large_image",
    author: "Mahi Technocrafts",
    published: false,
  });
  const [thumbPreview, setThumbPreview] = useState("");
  const [ogPreview, setOgPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const handleNavigate = () => {
    router.push("/admin/blogs/manage");
  };
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const v = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: v }));
    if (name === "title" && !form.slug) {
      setForm((prev) => ({ ...prev, slug: slugify(value) }));
    }
  };

  const uploadImage = async (file, target) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("image", file);
      const res = await apiConnector("POST", uploadsEndpoint.IMAGE, formData, {
        "Content-Type": "multipart/form-data",
      });
      const url = res?.data?.url;
      if (url) {
        setForm((prev) => ({ ...prev, [target]: url }));
        if (target === "thumbnail") setThumbPreview(url);
        if (target === "ogImage") setOgPreview(url);
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        keywords: form.keywords
          ? form.keywords
              .split(",")
              .map((k) => k.trim())
              .filter(Boolean)
          : [],
      };
      const res = await apiConnector("POST", blogsEndpoint.CREATE, payload);
      if (res.status === 201) {
        alert("Blog created successfully");
        setForm({
          title: "",
          slug: "",
          content: "",
          thumbnail: "",
          category: "General",
          metaTitle: "",
          metaDescription: "",
          keywords: "",
          canonicalUrl: "",
          ogTitle: "",
          ogDescription: "",
          ogImage: "",
          twitterCard: "summary_large_image",
          author: "Mahi Technocrafts",
          published: false,
        });
      } else {
        alert("Failed to create blog");
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Error creating blog");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Create Blog</h1>

        {/* Navigation Button */}
        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaArrowLeft />
          Manage Blogs
        </button>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input
            name="slug"
            value={form.slug}
            onChange={onChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Thumbnail</label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files[0] && uploadImage(e.target.files[0], "thumbnail")
              }
            />
            <span className="text-sm text-gray-600">
              {uploading ? "Uploading..." : "Select an image"}
            </span>
          </div>
          {thumbPreview || form.thumbnail ? (
            <img
              src={thumbPreview || form.thumbnail}
              alt="Thumbnail preview"
              className="mt-2 w-40 h-24 object-cover rounded border"
            />
          ) : null}
          <input
            placeholder="or paste image URL"
            name="thumbnail"
            value={form.thumbnail}
            onChange={onChange}
            className="mt-2 w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={onChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Content (HTML allowed)
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={onChange}
            className="w-full border rounded p-2 h-40"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Meta Title</label>
            <input
              name="metaTitle"
              value={form.metaTitle}
              onChange={onChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Meta Description
            </label>
            <input
              name="metaDescription"
              value={form.metaDescription}
              onChange={onChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Keywords (comma separated)
            </label>
            <input
              name="keywords"
              value={form.keywords}
              onChange={onChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Canonical URL</label>
            <input
              name="canonicalUrl"
              value={form.canonicalUrl}
              onChange={onChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">OG Title</label>
            <input
              name="ogTitle"
              value={form.ogTitle}
              onChange={onChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">OG Description</label>
            <input
              name="ogDescription"
              value={form.ogDescription}
              onChange={onChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">OG Image</label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files[0] && uploadImage(e.target.files[0], "ogImage")
                }
              />
              <span className="text-sm text-gray-600">
                {uploading ? "Uploading..." : "Select an image"}
              </span>
            </div>
            {ogPreview || form.ogImage ? (
              <img
                src={ogPreview || form.ogImage}
                alt="OG preview"
                className="mt-2 w-40 h-24 object-cover rounded border"
              />
            ) : null}
            <input
              placeholder="or paste image URL"
              name="ogImage"
              value={form.ogImage}
              onChange={onChange}
              className="mt-2 w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={onChange}
          />
          <label>Published</label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
