import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogs } from "@/lib/constant";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {

  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return {};

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blog.title} | Blog`,
    description: blog.subtitle,
    openGraph: {
      title: blog.title,
      description: blog.subtitle,
      type: "article",
      publishedTime: blog.date,
      authors: ["Blog Author"],
      images: [
        {
          url: blog.imgUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.subtitle,
      images: [blog.imgUrl],
    },
  };
}

function getRelatedPosts(
  currentSlug: string,
  currentCategory: string,
  limit: number = 3,
) {
  return blogs
    .filter(
      (blog) => blog.slug !== currentSlug && blog.category === currentCategory,
    )
    .slice(0, limit);
}

const ReadBlogPage = async ({
  params,
}: Props) => {
   const { slug } = await params;
  return (
    <Suspense fallback={<p>Loading</p>}>
      <RenderBlog slug={slug} />
    </Suspense>
  );
};

async function RenderBlog({ slug }: {slug:string}) {
  // const slug = (await params).slug;
  const post = await getBlog(slug);

  if (!post) return notFound();

  const relatedPosts = getRelatedPosts(slug, post.category);
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50/50">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <MaxWidthWrapper className="py-0">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3">
              <Button
                className="p-2 rounded-full hover:bg-app-green-2 transition-colors cursor-pointer"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                className="p-2 rounded-full hover:bg-app-green-2 transition-colors cursor-pointer"
                title="Save"
              >
                <Bookmark className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-100 max-h-150 w-full overflow-hidden">
        <Image
          src={post.imgUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

        <MaxWidthWrapper className="relative h-full">
          <div className="absolute bottom-8 left-0 right-0 text-white">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()} views
              </span>
            </div>

            <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl drop-shadow">
              {post.subtitle}
            </p>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Main Content */}
      <MaxWidthWrapper className="py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-8">
            {/* Author Info */}
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-linear-to-br from-emerald-100 to-teal-100">
                <div className="absolute inset-0 flex items-center justify-center text-emerald-600 font-bold text-xl">
                  {post.author.charAt(0)}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <h3 className="font-semibold text-lg">{post.author}</h3>
                </div>
                <p className="text-gray-600">{post.authorRole}</p>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="text-lg font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 p-8 bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">Share this article</h4>
              <p className="text-gray-600 mb-6">
                If you found this article valuable, consider sharing it with
                others who might benefit from it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related Articles */}
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                  Related Articles
                </h3>

                <div className="space-y-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}/read`}
                        className="group block"
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                            <Image
                              src={related.imgUrl}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {related.date} • {related.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">No related articles found.</p>
                  )}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="mt-8 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                <p className="text-emerald-50 mb-4">
                  Subscribe to our newsletter for more articles like this.
                </p>
                <div>
                  <Link
                    href={"#subscribe"}
                    className="w-full rounded-full bg-white text-emerald-700 hover:bg-gray-100 py-2 px-4"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
export default ReadBlogPage;
