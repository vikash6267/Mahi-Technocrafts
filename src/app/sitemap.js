const BASE_URL = "https://mahitechnocrafts.in";

export const revalidate = 3600; // revalidate at most every hour

async function getBlogs() {
  try {
    const res = await fetch(
      "https://api.mahitechnocrafts.in/api/v1/blogs?published=true&limit=1000",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    const items = json?.data || [];
    return items.map((b) => ({
      url: `${BASE_URL}/blogs/${b.slug}`,
      lastModified: b.updatedAt || b.publishedAt || b.createdAt || new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (e) {
    return [];
  }
}

export default async function sitemap() {
  const staticRoutes = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
 
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cyber-security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes = await getBlogs();
  return [...staticRoutes, ...blogRoutes];
}