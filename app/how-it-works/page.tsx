import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Mail, QrCode, Users, Clock, DollarSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works - Automated Real Estate Postcard Marketing',
  description: 'See how ListHook automates your postcard marketing end-to-end. Connect your MLS, we handle design and delivery, you get qualified leads. 10-minute setup, proven ROI.',
  openGraph: {
    title: 'How ListHook Works - Automated Postcard Marketing for Real Estate',
    description: 'Connect your MLS, we automatically design and send postcards, you get leads. Simple 3-step process with proven results.',
    images: ['/og-image.png'],
  },
};

function StepCard({
  number,
  icon: Icon,
  title,
  description
}: {
  number: number;
  icon: typeof Mail;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-coral-50 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-coral-500">{number}</span>
        </div>
        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-700" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description
}: {
  icon: typeof Clock;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
        <Icon className="w-6 h-6 text-blue-700" />
      </div>
      <div>
        <h3 className="font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <Container className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            How ListHook Works
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automated postcard marketing that turns your listings into more listings.
            Set up once, then let our system do the work.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Three Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <StepCard
            number={1}
            icon={Mail}
            title="Connect Your MLS"
            description="Link your MLS account to automatically create postcards when you list or sell a property. Our AI handles the design and targeting."
          />
          <StepCard
            number={2}
            icon={QrCode}
            title="Postcards Are Sent"
            description="When a listing is added or sold, we automatically generate and mail beautiful postcards to the optimal radius around the property."
          />
          <StepCard
            number={3}
            icon={Users}
            title="Recipients Take Action"
            description="Recipients scan the QR code on the postcard and are directed to a professional landing page where they can contact you directly."
          />
        </div>

        {/* Process Visualization */}
        <div className="bg-blue-900 rounded-lg p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Automated End-to-End Process
              </h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                ListHook handles everything automatically - from detecting new listings to
                designing postcards and tracking results. You focus on closing deals while
                we handle the marketing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-blue-100">
                  <span className="w-2 h-2 bg-coral-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Automatic postcard creation from MLS data</span>
                </li>
                <li className="flex items-start text-blue-100">
                  <span className="w-2 h-2 bg-coral-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AI-powered design and targeting</span>
                </li>
                <li className="flex items-start text-blue-100">
                  <span className="w-2 h-2 bg-coral-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Digital lead capture and tracking</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg"
                alt="ListHook Process"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Why Agents Love ListHook
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <BenefitCard
              icon={Clock}
              title="Quick 10-Minute Setup"
              description="Connect your MLS and customize your preferences in minutes, not hours."
            />
            <BenefitCard
              icon={DollarSign}
              title="Proven ROI"
              description="Our system generates $4-$12 for every dollar spent on average."
            />
            <BenefitCard
              icon={Mail}
              title="Fully Automated"
              description="Zero manual work needed - postcards are sent automatically when you list or sell."
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join successful agents who are growing their business with ListHook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
