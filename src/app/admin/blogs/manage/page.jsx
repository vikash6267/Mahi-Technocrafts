"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { apiConnector } from "@/services/apiConnector";
import { blogsEndpoint } from "@/services/apis";

export default function ManageBlogsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const res = await apiConnector("GET", `${blogsEndpoint.LIST}?published=false`);
      setItems(res?.data?.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const togglePublish = async (id, published) => {
    await apiConnector("PUT", blogsEndpoint.UPDATE(id), { published: !published });
    load();
  };

  const remove = async (id) => {
    if (!confirm("Delete this blog?")) return;
    await apiConnector("DELETE", blogsEndpoint.DELETE(id));
    load();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-14 min-h-[100vh]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <Link href="/admin/blogs" className="px-3 py-2 bg-blue-600 text-white rounded">Create New</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Slug</th>
              <th className="p-2 border">Published</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((b) => (
              <tr key={b._id}>
                <td className="p-2 border">{b.title}</td>
                <td className="p-2 border">{b.slug}</td>
                <td className="p-2 border">{String(b.published)}</td>
                <td className="p-2 border space-x-2">
                  <Link className="px-2 py-1 bg-indigo-600 text-white rounded" href={`/admin/blogs/${b._id}`}>Edit</Link>
                  <button className="px-2 py-1 bg-green-600 text-white rounded" onClick={() => togglePublish(b._id, b.published)}>
                    {b.published ? "Unpublish" : "Publish"}
                  </button>
                  <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => remove(b._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}