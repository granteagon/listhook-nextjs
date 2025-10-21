import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "@/data/blogPosts";
import type { ReactElement } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | ListHook Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function parseContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: ReactElement[] = [];
  let key = 0;

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return;
    }

    // Handle headings
    if (trimmedLine.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-blue-900 mt-8 mb-4">
          {trimmedLine.substring(3)}
        </h2>
      );
    } else if (trimmedLine.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-blue-900 mt-6 mb-3">
          {trimmedLine.substring(4)}
        </h3>
      );
    } else if (trimmedLine.startsWith('- ')) {
      // Handle list items
      elements.push(
        <li key={key++} className="text-gray-600 ml-4 mb-2">
          {trimmedLine.substring(2)}
        </li>
      );
    } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
      // Handle bold paragraphs
      elements.push(
        <p key={key++} className="text-gray-600 mb-4 leading-relaxed font-semibold">
          {trimmedLine.substring(2, trimmedLine.length - 2)}
        </p>
      );
    } else {
      // Regular paragraphs
      elements.push(
        <p key={key++} className="text-gray-600 mb-4 leading-relaxed">
          {trimmedLine}
        </p>
      );
    }
  });

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-coral-500">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <div className="ml-auto">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-blue max-w-none">
              {parseContent(post.content)}
            </div>
          </div>
        </article>

        {/* ListHook CTA */}
        <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-xl p-8 text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Stop Paying Zillow to Steal Your Leads
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Build your own pipeline with automated postcards that market YOU, not them. $1.50 per card. 100% lead ownership. Instant notifications when prospects engage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/campaigns"
              className="px-8 py-3 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              See Campaign Examples
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-blue-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want More Marketing Tips?
          </h2>
          <p className="text-blue-100 mb-6">
            Join our newsletter for weekly insights on real estate marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
            <button className="px-8 py-3 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
