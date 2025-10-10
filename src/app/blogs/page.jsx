import Link from "next/link";

export const metadata = {
  title: "Blogs | Mahi Technocrafts",
  description: "Read insights, tutorials, and updates from Mahi Technocrafts.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blogs | Mahi Technocrafts",
    description: "Latest articles and updates from Mahi Technocrafts",
    type: "website",
    url: "/blogs",
  },
};

async function getBlogs() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.mahitechnocrafts.in";
    const res = await fetch(`${apiUrl}/api/v1/blogs?published=true`, {
      next: { revalidate: 0 },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { data: [] }; // fallback
  }
}

export default async function BlogsPage() {
  const { data = [] } = await getBlogs();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {data.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg font-medium">
          No blogs found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((blog) => (
            <article
              key={blog._id}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.category || "General"} ·{" "}
                  {blog.author || "Mahi Technocrafts"}
                </p>
                <p className="text-gray-700">
                  {(blog.metaDescription || blog.content || "").slice(0, 140)}
                  ...
                </p>
                <div className="mt-4">
                  <Link
                    className="text-blue-600 hover:underline"
                    href={`/blogs/${blog.slug}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
