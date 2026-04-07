import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogs, CATEGORIES } from "@/lib/constants/";

const BlogPage = () => {
  
  const featuredBlog = blogs.find((b) => b.featured);

  if (!blogs) return notFound();

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-green-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <MaxWidthWrapper className="relative md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">
                Latest Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Discover & Learn
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
                Explore our collection of articles, insights, and stories to
                stay informed and inspired.
              </p>
            </div>

            <div className="relative">
              <div className="size-auto aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/bg.jpg"
                  alt="Blog banner"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Categories */}
      <section className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b">
        <MaxWidthWrapper className="py-4 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Browse Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full px-4 py-2 transition-all hover:scale-105 cursor-pointer"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Featured Section */}
      <section className="py-4 md:py-8">
        <MaxWidthWrapper>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Featured Story
              </h2>
            </div>
            <p className="text-gray-600">Our most compelling read this week</p>
          </div>

          {featuredBlog ? (
            <Link
              href={`/blog/${featuredBlog.slug}/read`}
              className="group block"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative w-auto aspect-video lg:aspect-auto lg:h-125 rounded-md shadow-xl">
                  <Image
                    src={featuredBlog.imgUrl}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />

                  <div className="absolute top-4 left-4 -z-10">
                    <span className="inline-flex items-center rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      Featured
                    </span>
                  </div>

                  <div className="absolute size-full top-3 -right-3 bg-app-green-2" />
                </div>

                <div className="flex flex-col justify-center space-y-6 p-4 lg:p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredBlog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredBlog.readTime}
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {featuredBlog.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-xl text-gray-600">
                    {featuredBlog.subtitle}
                  </p>
                  <p className="text-gray-500">
                    {featuredBlog.content.slice(0, 200)}...
                  </p>

                  <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
                    Read full article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No featured articles at the moment.
              </p>
            </div>
          )}
        </MaxWidthWrapper>
      </section>

      {/* Recent Articles */}
      <section className="py-0 bg-gray-50/50">
        <MaxWidthWrapper>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                Recent Articles
              </h2>
            </div>
            <p className="text-gray-600">Stay updated with our latest posts</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <ArticleCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* All Articles Grid */}
      <section className="py-0">
        <MaxWidthWrapper>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
            <p className="text-gray-600">Browse our complete collection</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs.slice(3).map((blog) => (
              <ArticleCard key={blog.slug} blog={blog} compact />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default BlogPage;

// Utility component for articles
type ArticleCardProps = {
  blog: (typeof blogs)[0];
  compact?: boolean;
};

function ArticleCard({ blog, compact = false }: ArticleCardProps) {
  if (compact) {
    return (
      <Link
        href={`/blog/${blog.slug}/read`}
        className="group bg-white relative shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 "
      >
        <div className="relative aspect-video size-auto overflow-hidden">
          <Image
            src={blog.imgUrl}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-gray-500">{blog.readTime}</span>
          </div>
          <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{blog.subtitle}</p>
        </div>

        <div className="absolute size-full top-3 -right-3 bg-app-green-2 -z-10" />
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${blog.slug}/read`}
      className="group bg-white  relative shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 "
    >
      <div className="relative size-auto aspect-video overflow-hidden">
        <Image
          src={blog.imgUrl}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {blog.date}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 mb-3">{blog.subtitle}</p>
          <p className="text-sm text-gray-500 line-clamp-2">{blog.content}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </span>
          <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold group-hover:gap-2 transition-all">
            Read
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div className="absolute size-full top-3 -right-3 bg-app-green-2 -z-10" />
    </Link>
  );
}
