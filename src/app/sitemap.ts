import { siteConfig } from "@/config";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const news:any[] = [];
  //await getNews();

  const newsEntries: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${siteConfig.baseUrl}/blog/${n.slug}/read`,
    lastModified: n.createdAt ? new Date(n.createdAt) : new Date(),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/about`,
      changeFrequency: "never" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.baseUrl}/leaders`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.baseUrl}/contact`,
      changeFrequency: "never" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.baseUrl}/projects`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.baseUrl}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...newsEntries,
  ];
}
