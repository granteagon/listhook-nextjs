import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { CheckCircle, TrendingUp, Users, Home, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campaign Examples - Real Estate Postcard Marketing Pricing & ROI',
  description: 'Transparent pricing for real estate postcard campaigns. See exactly what ListHook costs for neighborhood farming, sphere of influence, just listed/sold campaigns, and custom strategies. Way less than Zillow.',
  openGraph: {
    title: 'ListHook Campaign Examples - What Does It Cost for YOUR Market?',
    description: 'See transparent pricing and ROI for neighborhood farming, sphere campaigns, just listed/sold mailings, and more. Calculate your cost per deal.',
    images: ['/og-image.png'],
  },
};

interface CampaignCardProps {
  title: string;
  strategy: string;
  example: string;
  cost: string;
  roi: string;
  comparison?: string;
  icon: React.ReactNode;
  popular?: boolean;
}

function CampaignCard({
  title,
  strategy,
  example,
  cost,
  roi,
  comparison,
  icon,
  popular = false,
}: CampaignCardProps) {
  return (
    <Card
      hover
      className={`p-8 relative ${
        popular
          ? 'border-2 border-coral-500 shadow-lg'
          : 'border border-gray-200 shadow-sm'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-coral-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-start mb-6">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-blue-900 pt-2">{title}</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Strategy
          </h4>
          <p className="text-gray-700 leading-relaxed">{strategy}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Example
          </h4>
          <p className="text-gray-700 leading-relaxed">{example}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Investment
          </h4>
          <p className="text-3xl font-bold text-blue-900 mb-1">{cost}</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">
            Expected ROI
          </h4>
          <p className="text-gray-800 font-medium">{roi}</p>
        </div>

        {comparison && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">
              vs Zillow Premier Agent
            </h4>
            <p className="text-gray-800 font-medium">{comparison}</p>
          </div>
        )}

        <Link
          href="/contact"
          className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
            popular
              ? 'bg-coral-500 text-white hover:bg-coral-600'
              : 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50'
          }`}
        >
          Build This Campaign
        </Link>
      </div>
    </Card>
  );
}

export default function CampaignsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              What Does a ListHook Campaign Cost for YOUR Market?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every agent's strategy is different. Here are our most popular campaign types with transparent pricing.
            </p>
            <p className="text-2xl font-semibold text-coral-500">
              (Spoiler: It's way less than you're spending on Zillow.)
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Campaign Type 1: Neighborhood Farming */}
            <CampaignCard
              title="Neighborhood Farming"
              strategy="Become the go-to agent in a target neighborhood by mailing 4-6 times per year to the same 300-500 homes. Build name recognition and establish yourself as the neighborhood expert."
              example="500 homes × 4 mailings = 2,000 postcards/year"
              cost="$3,000/year"
              roi="2 listings × $25k commission = $50k return (16.7x ROI)"
              comparison="$18,000/year for shared leads with 5+ other agents"
              icon={<Home className="w-6 h-6 text-blue-700" />}
              popular={true}
            />

            {/* Campaign Type 2: Sphere of Influence */}
            <CampaignCard
              title="Sphere of Influence (Past Clients)"
              strategy="Stay top-of-mind with 200 past clients, friends, and family. Send quarterly updates to ensure you're the first person they think of when they (or someone they know) needs a real estate agent."
              example="200 contacts × 4 mailings = 800 postcards/year"
              cost="$1,200/year"
              roi="2 deals × $25k = $50k return (41.7x ROI)"
              icon={<Users className="w-6 h-6 text-blue-700" />}
            />

            {/* Campaign Type 3: Just Listed / Just Sold */}
            <CampaignCard
              title="Just Listed / Just Sold"
              strategy="Announce every listing to 300 nearby homes. Show your activity, prove your expertise, and capture homeowners thinking about selling in the next 6-12 months."
              example="2 listings/month × 300 homes = 600 postcards/month (7,200/year)"
              cost="$900/month"
              roi="1 additional listing every 3 months × $25k = $100k/year return (9.3x ROI)"
              comparison="One Zillow lead costs $60-120. You'd need 7,500+ leads/year at that price."
              icon={<TrendingUp className="w-6 h-6 text-blue-700" />}
            />

            {/* Campaign Type 4: Custom Strategy */}
            <CampaignCard
              title="Custom Strategy"
              strategy="Combine approaches based on your unique market and goals. Mix neighborhood farming with just listed/sold campaigns, target luxury properties, or focus on specific demographics. You set your budget, we maximize your reach."
              example="Examples: Farming 2 neighborhoods + sphere mailings, luxury-only targeting, first-time buyer focus, or seasonal campaigns"
              cost="You choose"
              roi="Depends on your strategy and market - we'll help you calculate expected returns during consultation"
              icon={<Target className="w-6 h-6 text-blue-700" />}
            />
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
              100% Transparent Pricing
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      $1.50 per postcard (all-inclusive)
                    </h3>
                    <p className="text-gray-600">
                      Includes professional design, printing, postage, and delivery. No hidden fees, no surprise charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      No setup fees
                    </h3>
                    <p className="text-gray-600">
                      Start your first campaign with zero upfront costs. No onboarding fees, no platform fees, no monthly minimums.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      No contracts
                    </h3>
                    <p className="text-gray-600">
                      Cancel anytime, no questions asked. We earn your business every month with results, not contracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      You control your budget
                    </h3>
                    <p className="text-gray-600">
                      Set spending limits, pause campaigns, or scale up anytime. Your marketing budget stays completely under your control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">
                    Why $1.50 per postcard?
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We bulk print and mail thousands of postcards every week, which lets us pass the savings on to you.
                    Compare that to DIY postcard marketing (design time + VistaPrint + stamps = $2-3 per card and hours of work)
                    or Zillow Premier Agent ($1,500+/month for shared leads in competitive markets).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Campaign Builder Placeholder */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Calculate Your Campaign Cost
              </h2>
              <p className="text-xl text-gray-600">
                See exactly what a campaign would cost in YOUR market
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-8">
                {/* Campaign Type Selector */}
                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-4">
                    What type of campaign are you interested in?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="p-4 border-2 border-coral-500 bg-coral-50 rounded-lg text-left hover:bg-coral-100 transition-colors">
                      <div className="font-semibold text-blue-900 mb-1">Neighborhood Farming</div>
                      <div className="text-sm text-gray-600">Target 300-500 homes consistently</div>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
                      <div className="font-semibold text-blue-900 mb-1">Sphere of Influence</div>
                      <div className="text-sm text-gray-600">Stay top-of-mind with past clients</div>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
                      <div className="font-semibold text-blue-900 mb-1">Just Listed/Sold</div>
                      <div className="text-sm text-gray-600">Announce every transaction</div>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
                      <div className="font-semibold text-blue-900 mb-1">Custom Strategy</div>
                      <div className="text-sm text-gray-600">Build your own approach</div>
                    </button>
                  </div>
                </div>

                {/* Number of Homes Slider */}
                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-4">
                    How many homes do you want to target?
                    <span className="ml-2 text-coral-500">500 homes</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    defaultValue="500"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-coral-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>100 homes</span>
                    <span>1,000 homes</span>
                  </div>
                </div>

                {/* Touches Per Year Slider */}
                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-4">
                    How many times per year?
                    <span className="ml-2 text-coral-500">4 touches</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="1"
                    defaultValue="4"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-coral-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>2 touches/year</span>
                    <span>12 touches/year</span>
                  </div>
                </div>

                {/* Results Display */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white">
                  <div className="text-center mb-6">
                    <div className="text-sm text-blue-200 mb-2">Your Campaign</div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">$3,000/year</div>
                    <div className="text-blue-200">That's just $250/month</div>
                  </div>

                  <div className="border-t border-blue-700 pt-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Total postcards</span>
                      <span className="font-semibold">2,000 cards/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">vs. Zillow Premier</span>
                      <span className="font-semibold text-coral-300">Save $15,000/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Projected ROI</span>
                      <span className="font-semibold text-green-300">16.7x return</span>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-blue-200 mb-4">
                      If just 2 homeowners list with you at $25k avg commission = $50,000 return
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block bg-coral-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-600 transition-colors"
                    >
                      Lock in This Campaign →
                    </Link>
                  </div>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Note: This is a simplified calculator. Our team will work with you to build the exact campaign that fits your goals and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
              ListHook vs. Traditional Lead Generation
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Lead Source</th>
                    <th className="px-6 py-4 text-left font-semibold">Annual Cost</th>
                    <th className="px-6 py-4 text-left font-semibold">Lead Quality</th>
                    <th className="px-6 py-4 text-left font-semibold">Competition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-semibold text-blue-900">
                      ListHook Farming
                    </td>
                    <td className="px-6 py-4 text-gray-700">$3,000</td>
                    <td className="px-6 py-4 text-gray-700">High (exclusive territory)</td>
                    <td className="px-6 py-4 text-gray-700">You own the market</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Zillow Premier Agent
                    </td>
                    <td className="px-6 py-4 text-gray-700">$18,000+</td>
                    <td className="px-6 py-4 text-gray-700">Medium (shared leads)</td>
                    <td className="px-6 py-4 text-gray-700">5+ agents per lead</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Realtor.com
                    </td>
                    <td className="px-6 py-4 text-gray-700">$12,000+</td>
                    <td className="px-6 py-4 text-gray-700">Medium (shared leads)</td>
                    <td className="px-6 py-4 text-gray-700">3-5 agents per lead</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      DIY Postcard Campaigns
                    </td>
                    <td className="px-6 py-4 text-gray-700">$4,000-6,000</td>
                    <td className="px-6 py-4 text-gray-700">High (but inconsistent)</td>
                    <td className="px-6 py-4 text-gray-700">Time-intensive</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Door Knocking
                    </td>
                    <td className="px-6 py-4 text-gray-700">$0 (time cost)</td>
                    <td className="px-6 py-4 text-gray-700">High (if consistent)</td>
                    <td className="px-6 py-4 text-gray-700">Extremely time-intensive</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                * Annual costs based on typical agent spending in mid-sized markets. Your costs may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Campaign?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's talk about your market, your goals, and which campaign strategy will deliver the best ROI for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Strategy Call
            </Link>
            <p className="mt-6 text-blue-200 text-sm">
              Free consultation. No pressure. Just honest advice about what will work for your market.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
