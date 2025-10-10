"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiConnector } from "@/services/apiConnector";
import { blogsEndpoint, uploadsEndpoint } from "@/services/apis";

export default function EditBlogPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [form, setForm] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await apiConnector("GET", blogsEndpoint.BY_ID(id));
      setForm(res?.data?.data || null);
    })();
  }, [id]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const v = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: v }));
  };

  const uploadImage = async (file, target) => {
    try {
      setUploading(true);
      const fd = new FormData();
      fd.append("image", file);
      const res = await apiConnector("POST", uploadsEndpoint.IMAGE, fd, { "Content-Type": "multipart/form-data" });
      const url = res?.data?.url;
      if (url) setForm((prev) => ({ ...prev, [target]: url }));
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await apiConnector("PUT", blogsEndpoint.UPDATE(id), form);
    if (res.status === 200) {
      alert("Updated");
      router.push("/admin/blogs/manage");
    } else {
      alert("Update failed");
    }
  };

  if (!form) return <div className="max-w-3xl mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input name="title" value={form.title || ""} onChange={onChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input name="slug" value={form.slug || ""} onChange={onChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Thumbnail</label>
          <div className="flex items-center gap-3">
            <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && uploadImage(e.target.files[0], "thumbnail")} />
            <span className="text-sm text-gray-600">{uploading ? "Uploading..." : "Select an image"}</span>
          </div>
          {form.thumbnail && <img src={form.thumbnail} alt="Thumbnail" className="mt-2 w-40 h-24 object-cover rounded border" />}
        </div>
        <div>
          <label className="block text-sm font-medium">Content (HTML)</label>
          <textarea name="content" value={form.content || ""} onChange={onChange} className="w-full border rounded p-2 h-40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Meta Title</label>
            <input name="metaTitle" value={form.metaTitle || ""} onChange={onChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Meta Description</label>
            <input name="metaDescription" value={form.metaDescription || ""} onChange={onChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">OG Image</label>
            <div className="flex items-center gap-3">
              <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && uploadImage(e.target.files[0], "ogImage")} />
              <span className="text-sm text-gray-600">{uploading ? "Uploading..." : "Select an image"}</span>
            </div>
            {form.ogImage && <img src={form.ogImage} alt="OG" className="mt-2 w-40 h-24 object-cover rounded border" />}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="published" checked={!!form.published} onChange={onChange} />
          <label>Published</label>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
    </div>
  );
}