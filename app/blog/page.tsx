import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedPost, getRegularPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Real Estate Marketing Insights & Lead Generation Tips",
  description: "Expert tips, strategies, and proven data on real estate postcard marketing, lead generation, geographic farming, and direct mail ROI. Learn from industry research and successful agents.",
  openGraph: {
    title: "ListHook Blog - Real Estate Marketing Insights",
    description: "Expert tips and proven strategies for real estate lead generation, postcard marketing, and geographic farming.",
    images: ['/og-image.png'],
  },
};

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const regularPosts = getRegularPosts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Real Estate Marketing Insights
          </h1>
          <p className="text-xl text-gray-600">
            Expert tips and strategies to help you generate more leads and win more listings.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-coral-500">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
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
                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Marketing Tips in Your Inbox
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of real estate professionals who receive weekly insights on lead generation, marketing strategies, and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
            <button className="px-8 py-3 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-colors flex items-center justify-center gap-2">
              Subscribe
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
