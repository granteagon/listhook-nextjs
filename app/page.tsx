import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What If Every Lead You Generated Was Actually Yours? | ListHook",
  description: "No sharing. No 35% fees. No wondering if your marketing works. Just exclusive leads, instant alerts, and total control. Own your leads with automated postcard marketing.",
  openGraph: {
    title: "What If Every Lead You Generated Was Actually Yours? | ListHook",
    description: "No sharing. No 35% fees. No wondering if your marketing works. Just exclusive leads, instant alerts, and total control.",
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-900 leading-tight">
              What If Every Lead You Generated Was Actually{" "}
              <span className="text-coral-500">Yours?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              No sharing. No 35% fees. No wondering if your marketing works. Just exclusive leads, instant alerts, and total control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/how-it-works"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Show Me How
              </Link>
            </div>

            {/* Visual placeholder for split-screen */}
            <div className="mt-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-2 border-dashed border-gray-400">
              <p className="text-gray-600 text-sm mb-4">Visual Coming Soon:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="font-semibold text-blue-900 mb-2">Zillow Interface</p>
                  <p className="text-sm text-gray-600">Shared leads, 35% fees, their brand</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-coral-500">
                  <p className="font-semibold text-coral-500 mb-2">ListHook Postcard</p>
                  <p className="text-sm text-gray-600">Your leads, your brand, your control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              The Real Estate Marketing Trap
            </h2>
            <p className="text-xl text-gray-600">
              You&apos;re working harder than ever, but the system is stacked against you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Expensive Leads You Don&apos;t Own</h3>
              <p className="text-gray-600">
                Zillow charges $1,500/month, takes 35% of your commission, and sells the same lead to 3 other agents.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Marketing Everyone Else&apos;s Brand</h3>
              <p className="text-gray-600">
                When you pay for portal leads, their logo is bigger than yours. You&apos;re advertising for them, not building YOUR business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">🎢</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">The Feast or Famine Cycle</h3>
              <p className="text-gray-600">
                Inconsistent marketing means inconsistent income. When you&apos;re busy closing deals, your pipeline dries up.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Zero Visibility Into What&apos;s Working</h3>
              <p className="text-gray-600">
                You spend thousands on marketing but have no idea if anyone&apos;s paying attention until months later (or never).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Vignette */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Three steps to owning your leads and building a marketing machine that works while you sleep.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="bg-coral-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">We Build Your Strategy Together</h3>
                <p className="text-blue-100">
                  Tell us your target neighborhoods, budget, and goals. We create a personalized postcard campaign that puts YOUR brand front and center.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="bg-coral-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Postcards Work For You</h3>
                <p className="text-blue-100">
                  When you list a property, our AI targets the most likely sellers nearby. Beautiful, branded postcards go out automatically—no design work, no trips to the post office.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="bg-coral-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Instant Alerts When They Engage</h3>
                <p className="text-blue-100">
                  Real-time notifications when prospects visit your custom landing page or scan your QR code. Strike while they&apos;re hot—these are YOUR exclusive leads.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/how-it-works"
                className="inline-block bg-white text-blue-900 border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                See the Complete Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Agents Are Switching to ListHook
            </h2>
            <p className="text-xl text-gray-600">
              Stop renting leads. Start owning your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Own Your Leads</h3>
              <p className="text-gray-600">
                No sharing with competitors. No referral fees. Every lead is 100% yours to nurture and convert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Build YOUR Brand</h3>
              <p className="text-gray-600">
                Your face, your logo, your reputation. Every postcard reinforces your position as the local expert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Instant Feedback</h3>
              <p className="text-gray-600">
                Know exactly who&apos;s engaging with your marketing in real-time. No more wondering what&apos;s working.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Transparent, Affordable Pricing</h3>
              <p className="text-gray-600">
                $25/month + your budget per listing. No hidden fees, no commission splits, no surprises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Zero Time Investment</h3>
              <p className="text-gray-600">
                Set it once, and it runs forever. Marketing happens automatically while you focus on closing deals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Proven ROI</h3>
              <p className="text-gray-600">
                340% average ROI, 5.2% response rate, $17 cost per lead. Numbers that actually make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Real Results from Real Agents
              </h2>
              <p className="text-xl text-blue-100">
                These agents stopped paying Zillow and started building their own pipeline.
              </p>
            </div>

            {/* Stats */}
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

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <p className="text-blue-100 mb-4 italic">
                  &quot;I was spending $2,000/month on Zillow and fighting 3 other agents for every lead. With ListHook, I own every lead and my cost per acquisition dropped by 60%.&quot;
                </p>
                <p className="text-white font-semibold">— Sarah M., Charleston SC</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <p className="text-blue-100 mb-4 italic">
                  &quot;The instant alerts are a game-changer. When someone scans my postcard, I get a text immediately. I&apos;ve closed 3 deals in 60 days from these warm leads.&quot;
                </p>
                <p className="text-white font-semibold">— Mike T., Austin TX</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/success-stories"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Ready to Stop Paying Zillow and Start Building Your Pipeline?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join hundreds of agents who are owning their leads, building their brand, and finally getting marketing that actually works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                See Campaign Examples
              </Link>
            </div>

            {/* Trust Builders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> No setup fees
              </div>
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> Cancel anytime
              </div>
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> First 20 postcards free
              </div>
              <div className="flex items-center justify-center">
                <span className="text-coral-500 mr-2">✓</span> Results guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
