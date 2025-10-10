import Script from "next/script";

async function getBlog(slug) {
  const res = await fetch(`https://api.mahitechnocrafts.in/api/v1/blogs/slug/${slug}`, {
    next: { revalidate: 0 },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data || null;
}

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);
  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.content?.slice(0, 160) || "",
    keywords: blog.keywords || [],
    alternates: { canonical: blog.canonicalUrl || `/blogs/${blog.slug}` },
    openGraph: {
      title: blog.ogTitle || blog.title,
      description: blog.ogDescription || blog.metaDescription || "",
      images: blog.ogImage ? [{ url: blog.ogImage }] : [],
      type: "article",
      url: `/blogs/${blog.slug}`,
      article: {
        authors: [blog.author || "Mahi Technocrafts"],
        publishedTime: blog.publishedAt,
        tags: blog.keywords || [],
      },
    },
    twitter: {
      card: blog.twitterCard || "summary_large_image",
      title: blog.ogTitle || blog.title,
      description: blog.ogDescription || blog.metaDescription || "",
      images: blog.ogImage ? [blog.ogImage] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlog(params.slug);
  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <p className="text-gray-600 mt-2">The article you are looking for does not exist.</p>
      </div>
    );
  }

  const schemaData = blog.schemaMarkup && Object.keys(blog.schemaMarkup).length > 0
    ? blog.schemaMarkup
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        image: blog.ogImage || blog.thumbnail || undefined,
        author: {
          "@type": "Organization",
          name: blog.author || "Mahi Technocrafts",
        },
        datePublished: blog.publishedAt,
        articleSection: blog.category || "General",
        keywords: blog.keywords || [],
      };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-14">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">
        {blog.category || "General"} · {blog.author || "Mahi Technocrafts"}
      </p>
      {blog.thumbnail && (
        <img src={blog.thumbnail} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
      )}
      <article className="prose max-w-none">
        {/* Render rich content safely if HTML is provided */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      {/* JSON-LD Schema Markup */}
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
    </div>
  );
}