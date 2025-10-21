import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { Brain, Palette, QrCode, Bell, Clock, BarChart3, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why ListHook - The Smart Alternative to Zillow & Social Media',
  description: 'Top agents are choosing ListHook over Zillow leads, social media, and DIY postcards. Get instant text notifications when prospects engage, professional branding, AI targeting, and complete automation. Same price as a few Zillow leads runs your entire monthly campaign.',
  openGraph: {
    title: 'Why Top Agents Choose ListHook Over Zillow',
    description: 'Instant notifications, professional branding, AI targeting, and complete automation. The smart alternative to expensive Zillow leads.',
    images: ['/og-image.png'],
  },
};

export default function WhyListHookPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Why Top Agents Are Choosing ListHook Over Zillow
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The same price as a few Zillow leads could run your entire monthly marketing campaign.
              Here's what makes us different.
            </p>
            <Link
              href="/campaigns"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              See Which Campaign Works for Your Market
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 1: AI-Powered Targeting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  AI-Powered Targeting & Strategy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI analyzes neighborhood demographics, property values, turnover rates, and market trends
                  to identify the exact radius and households most likely to list in the next 6-12 months.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Zillow:</span>
                      <span className="text-gray-600"> Random leads from people browsing properties online - many not serious sellers</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">DIY Postcards:</span>
                      <span className="text-gray-600"> You're guessing which neighborhoods to target and hoping for the best</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Data-driven radius recommendations based on your listing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Demographic analysis to identify high-value prospects</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Historical turnover data to predict future sellers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Market timing insights for optimal campaign launch</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Professional Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">Your Brand, Front & Center</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Professional postcards featuring YOUR photo, not a platform logo</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Custom color schemes matching your personal brand</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Your contact info and call-to-action prominently displayed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Templates proven to convert - professionally designed</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Palette className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Professional Design That Builds YOUR Brand
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every postcard is designed to establish YOU as the neighborhood expert.
                  Recipients remember your name and face, not some corporate platform.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Zillow:</span>
                      <span className="text-gray-600"> Their logo dominates, you're just another agent in their system</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Social Media:</span>
                      <span className="text-gray-600"> The platform owns the relationship - you're renting attention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: QR Code Landing Pages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <QrCode className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  QR Code Landing Pages
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Each postcard includes a unique QR code that leads to a custom landing page about the listing.
                  Bridge the gap between offline mail and online engagement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Traditional Postcards:</span>
                      <span className="text-gray-600"> Just a phone number - no way to track interest or capture digital leads</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Zillow:</span>
                      <span className="text-gray-600"> Lead goes through their system first - you're notified later</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">What Happens When They Scan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Beautiful mobile-optimized landing page with listing details</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Optional contact form to capture their information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>You get notified instantly (see next feature)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Track which addresses are most engaged</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Instant Text Notifications - THE GAME CHANGER */}
      <section className="py-20 bg-gradient-to-br from-coral-500 to-coral-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Instant Text Notifications: The Game-Changer
              </h2>
              <p className="text-xl text-white/90 mb-8">
                This is where ListHook changes everything. No other platform gives you this level of real-time engagement.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-xl p-8 md:p-12 mb-12">
              <div className="mb-6">
                <span className="inline-block bg-coral-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Real Scenario
                </span>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                You're at a showing when your phone buzzes:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <p className="font-semibold text-blue-900 text-lg">
                  "Sarah Johnson just scanned your postcard at 456 Oak Street. Estimated home value: $525,000."
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                You text back immediately while the interest is hot. By the time you leave your showing,
                you've already scheduled a CMA appointment for tomorrow.
              </p>
              <p className="text-gray-600 italic">
                That's the power of instant notification - you engage while they're literally holding your postcard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">With ListHook</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span>Text notification within seconds of QR scan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span>Know exact address and estimated property value</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span>Respond while they're still interested</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span>Strike while the iron is hot</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/20 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">With Competitors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-white/60 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Zillow: Email notification 24-48 hours later</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-white/60 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Social Media: No notification unless they DM you</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-white/60 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/80">DIY: They have to call you - no tracking</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-white/60 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Lead has already cooled off</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Complete Automation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">Your Time Investment</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-blue-200 text-sm mb-2">Initial Strategy Session</p>
                      <p className="text-3xl font-bold">30 minutes</p>
                      <p className="text-blue-200 text-sm mt-1">One time only</p>
                    </div>
                    <div className="border-t border-white/20 pt-6">
                      <p className="text-blue-200 text-sm mb-2">Ongoing Time Per Listing</p>
                      <p className="text-3xl font-bold">0 minutes</p>
                      <p className="text-blue-200 text-sm mt-1">Completely automated</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Complete Automation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  After a 30-minute initial strategy session, you never touch the system again.
                  We handle everything - design, printing, targeting, mailing, tracking.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Social Media:</span>
                      <span className="text-gray-600"> Daily content creation, posting, engaging - hours per week</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">DIY Postcards:</span>
                      <span className="text-gray-600"> Hours per campaign: design, list building, ordering, tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 6: Campaign Analytics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">What You Can Track</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Exact number of postcards delivered</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>QR code scan rate by address</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Landing page views and engagement time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Contact form submissions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Cost per lead and ROI by campaign</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Which neighborhoods respond best</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Campaign Analytics & Transparency
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  See exactly where every dollar goes and what results it generates.
                  No black box - complete transparency into your marketing ROI.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Zillow:</span>
                      <span className="text-gray-600"> Opaque algorithm - you never know why you got certain leads</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1 font-bold">vs</span>
                    <div>
                      <span className="font-semibold text-blue-900">Social Media:</span>
                      <span className="text-gray-600"> Vanity metrics (likes/follows) don't equal actual leads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
              The Complete Comparison
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              See how ListHook stacks up against the alternatives
            </p>

            {/* Mobile-Optimized Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm md:text-base font-semibold border-r border-blue-800">
                      Feature
                    </th>
                    <th className="px-4 py-4 text-center text-sm md:text-base font-semibold border-r border-blue-800 bg-coral-500">
                      ListHook
                    </th>
                    <th className="px-4 py-4 text-center text-sm md:text-base font-semibold border-r border-blue-800">
                      Zillow
                    </th>
                    <th className="px-4 py-4 text-center text-sm md:text-base font-semibold border-r border-blue-800">
                      Social Media
                    </th>
                    <th className="px-4 py-4 text-center text-sm md:text-base font-semibold">
                      DIY Postcards
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      Monthly Cost
                    </td>
                    <td className="px-4 py-4 text-center text-sm md:text-base border-r border-gray-200 bg-coral-50">
                      <span className="font-semibold text-coral-700">$99-349</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm md:text-base border-r border-gray-200">
                      <span className="text-gray-600">$50-100 per lead</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm md:text-base border-r border-gray-200">
                      <span className="text-gray-600">Free-$500+</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm md:text-base">
                      <span className="text-gray-600">$200-500+</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      Lead Ownership
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200 bg-coral-50">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">100% yours</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Shared/sold</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Platform owns</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Yours</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      Your Branding
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200 bg-coral-50">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">100% custom</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Zillow first</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <span className="text-gray-600 text-sm">Limited</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">DIY quality</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      Instant Feedback
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200 bg-coral-50">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Text alerts</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">24-48hr delay</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <span className="text-gray-600 text-sm">If they DM</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">No tracking</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      Time Investment
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200 bg-coral-50">
                      <span className="font-semibold text-coral-700 block">30 min</span>
                      <span className="text-xs text-gray-600">One time</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <span className="text-gray-600 block">2-5 hrs/week</span>
                      <span className="text-xs text-gray-600">Following up</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <span className="text-gray-600 block">1-2 hrs/day</span>
                      <span className="text-xs text-gray-600">Content creation</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-600 block">3-5 hrs/campaign</span>
                      <span className="text-xs text-gray-600">Per mailing</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      Your Control
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200 bg-coral-50">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Full control</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Their algorithm</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Platform rules</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Full control</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm md:text-base font-medium text-gray-900 border-r border-gray-200">
                      ROI Transparency
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200 bg-coral-50">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Full dashboard</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-600 block mt-1">Black box</span>
                    </td>
                    <td className="px-4 py-4 text-center border-r border-gray-200">
                      <span className="text-gray-600 text-sm">Vanity metrics</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-gray-600 text-sm">Manual tracking</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Renting Leads and Start Building Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See which campaign strategy works best for your market and listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/campaigns"
                className="inline-block bg-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-600 transition-colors"
              >
                See Which Campaign Works for Your Market
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
