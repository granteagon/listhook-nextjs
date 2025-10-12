'use client';

import Container from '@/components/ui/Container';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

function PricingToggle({
  isAnnual,
  setIsAnnual
}: {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-100 rounded-full p-1 inline-flex">
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            isAnnual
              ? 'bg-white text-blue-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Annual (Save 20%)
        </button>
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            !isAnnual
              ? 'bg-white text-blue-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  buttonText = 'Contact Sales for Pricing',
  buttonHref = '/contact'
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <div
      className={`bg-white rounded-lg p-8 relative ${
        popular
          ? 'border-2 border-coral-500 shadow-lg'
          : 'border border-gray-200 shadow-sm'
      } hover:shadow-md transition-shadow`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-coral-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-xl font-semibold text-blue-900 mb-4">{name}</h3>

      <div className="mb-4">
        <span className="text-4xl font-bold text-blue-900">{price}</span>
        <span className="text-gray-500">/month</span>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-[18px] h-[18px] text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={buttonHref}
        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-coral-500 text-white hover:bg-coral-600'
            : 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="bg-gray-50">
      <Container className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business. All plans include printing, postage, and delivery.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                All plans include printing, postage, and delivery.
              </p>
            </div>

            <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <PricingCard
                name="Starter"
                price={isAnnual ? '$99' : '$129'}
                description="Perfect for new agents or those just getting started with postcard marketing."
                features={[
                  'Up to 200 postcards per month',
                  'Just Listed & Just Sold templates',
                  'QR code tracking',
                  'Basic analytics',
                  'Email support'
                ]}
                buttonText="Contact Sales for Pricing"
              />

              <PricingCard
                name="Growth"
                price={isAnnual ? '$199' : '$249'}
                description="For established agents looking to scale their postcard marketing."
                features={[
                  'Up to 500 postcards per month',
                  'All Starter features',
                  'Custom branding options',
                  'Advanced analytics',
                  'Priority support',
                  'Automated follow-up campaigns'
                ]}
                popular={true}
                buttonText="Contact Sales for Pricing"
              />

              <PricingCard
                name="Pro"
                price={isAnnual ? '$349' : '$399'}
                description="For top-producing agents and teams with serious marketing needs."
                features={[
                  'Up to 1,000 postcards per month',
                  'All Growth features',
                  'Team collaboration tools',
                  'API access',
                  'Dedicated account manager',
                  'Custom integrations',
                  'White-label options'
                ]}
                buttonText="Contact Sales for Pricing"
              />
            </div>

            {/* Footer CTA */}
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Have questions about our pricing?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our sales team for custom pricing options or to discuss volume discounts.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
