import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automated Postcard Marketing for Real Estate Agents",
  description: "AI-powered postcard marketing that happens automatically. 5x higher response rates, $17 cost per lead. First 20 postcards free. Turn your listings into more listings with proven ROI.",
  openGraph: {
    title: "ListHook - Automated Postcard Marketing for Real Estate Agents",
    description: "AI-powered postcard marketing that happens automatically. 5x higher response rates, $17 cost per lead. Turn your listings into more listings.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-900">
              Finally, Marketing That{" "}
              <span className="text-coral-500">Happens Without You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              While you&apos;re showing homes and closing deals, we&apos;re farming your neighborhood with smart postcards that actually get responses.
            </p>

            {/* Social Proof Banner */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 text-blue-900">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-gray-600">Active Agents</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-coral-500">340%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">$17</div>
                <div className="text-sm text-gray-600">Cost Per Lead</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Sales
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            <p className="text-sm text-gray-600">
              First 20 postcards free • No contracts • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              The Marketing Problem Every Agent Faces
            </h2>
            <p className="text-xl text-gray-600">
              Between clients and closings, marketing gets pushed to &apos;tomorrow.&apos; Sound familiar?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">The Guilt</h3>
              <p className="text-gray-600">
                &quot;I know I should be marketing consistently, but between showings and contracts, where do I find the time to design postcards?&quot;
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">🎢</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">The Cycle</h3>
              <p className="text-gray-600">
                &quot;When I&apos;m busy with deals, I stop prospecting. When deals close, I scramble to find new leads. It&apos;s feast or famine.&quot;
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">The Overwhelm</h3>
              <p className="text-gray-600">
                &quot;There are so many marketing options. Social media, online ads, direct mail... I don&apos;t know where to start or what actually works.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What if marketing just{" "}
                <span className="text-coral-500">happened?</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                While you focus on what you do best – serving clients and closing deals – our system quietly farms your neighborhood with intelligent postcards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-coral-500 text-2xl mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">Smart AI Targeting</h3>
                <p className="text-blue-100">
                  We identify the most likely sellers in your area using equity data and market trends.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-coral-500 text-2xl mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">Professional Design</h3>
                <p className="text-blue-100">
                  Beautiful, branded postcards that make you look like a top producer.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-coral-500 text-2xl mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">Complete Automation</h3>
                <p className="text-blue-100">
                  From design to delivery, everything happens automatically when you list or sell.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/how-it-works"
                className="inline-block bg-white text-blue-900 border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                See the Complete Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Effortless Lead Generation
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your marketing from a source of stress into a reliable lead generation machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-coral-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">You List a Home</h3>
              <p className="text-gray-600">
                Just do what you always do – list your property in the MLS. That&apos;s it. No extra steps required.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coral-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">We Handle the Marketing</h3>
              <p className="text-gray-600">
                Our AI identifies the best prospects nearby and automatically sends beautiful postcards to your target audience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coral-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">You Get the Leads</h3>
              <p className="text-gray-600">
                Qualified prospects contact you directly through your custom landing page. No chasing, just quality leads.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Simple Pricing. Total Control.
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              $25/month membership + you set the budget per listing. No surprises, no long contracts, no hidden fees.
            </p>

            <div className="bg-gradient-to-br from-coral-50 to-coral-100 border-2 border-coral-500 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">First 20 Postcards Free</h3>
              <p className="text-lg text-gray-700">
                See results before you pay for postcards. Start today with zero risk.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-gray-700">
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> No setup fees
              </div>
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> Cancel anytime
              </div>
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> Full dashboard access
              </div>
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> See results first
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-600 transition-colors"
              >
                Contact Sales
              </Link>
              <Link
                href="/pricing"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Pricing Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results from Real Agents
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Don&apos;t take our word for it. See what agents just like you are achieving with automated postcard marketing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-bold text-coral-500 mb-2">340%</div>
                <div className="text-sm text-blue-100 uppercase tracking-wide mb-2">Average ROI</div>
                <div className="text-blue-200 text-sm">First 90 days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-bold text-coral-500 mb-2">5.2%</div>
                <div className="text-sm text-blue-100 uppercase tracking-wide mb-2">Response Rate</div>
                <div className="text-blue-200 text-sm">vs 2-3% industry average</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-bold text-coral-500 mb-2">$17</div>
                <div className="text-sm text-blue-100 uppercase tracking-wide mb-2">Cost Per Lead</div>
                <div className="text-blue-200 text-sm">vs $25-50 industry average</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
