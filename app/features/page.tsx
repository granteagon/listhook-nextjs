import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { Mail, QrCode, Users, Target, ChartBar, Clock, Shield, Zap, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features - Automated Postcard Marketing Tools',
  description: 'Powerful features designed specifically for real estate agents: automated postcards, QR code tracking, smart targeting, ROI analytics, and compliance-ready templates. Start generating leads automatically.',
  openGraph: {
    title: 'ListHook Features - Everything You Need to Win More Listings',
    description: 'Automated postcards, QR tracking, smart targeting, and ROI analytics designed for real estate agents.',
    images: ['/og-image.png'],
  },
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Everything You Need to Win More Listings
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Powerful features designed specifically for real estate agents who want to grow their business through direct mail marketing.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Automated Postcards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create Just Listed & Just Sold postcards instantly from your MLS data. No design skills needed.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <QrCode className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                QR Code Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generate unique QR codes and landing pages for each campaign. Track scans and capture leads automatically.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Sphere & Farm Campaigns
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Target your sphere of influence or farm specific neighborhoods with personalized campaigns.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Your Listings Into More Listings
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  ListHook automates the 20% of marketing that yields 80% of results. Our platform handles everything from design to delivery, so you can focus on what matters most - closing deals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1">•</span>
                    <span className="text-blue-100">Automated campaign creation from MLS data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1">•</span>
                    <span className="text-blue-100">Professional templates designed for conversion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral-500 mr-3 mt-1">•</span>
                    <span className="text-blue-100">Digital tracking with physical mail impact</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg"
                  alt="ListHook Dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Powerful Features for Modern Agents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Smart Targeting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically select the optimal radius around your listings based on neighborhood demographics.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <ChartBar className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                ROI Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track campaign performance, lead generation, and return on investment in real-time.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Automated Timing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule campaigns to hit mailboxes at the perfect time based on market data.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Compliance Ready
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All templates are reviewed by legal experts and comply with real estate regulations.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Instant Setup
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your MLS and start your first campaign in under 5 minutes.
              </p>
            </Card>

            <Card hover className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Brand Consistency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maintain your brand identity across all campaigns with custom templates.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get More Listings?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join successful agents who are growing their business with ListHook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Sales
              </Link>
              <Link
                href="/pricing"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
