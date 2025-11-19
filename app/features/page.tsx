'use client'

import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const features = [
  {
    label: "LEAD OWNERSHIP",
    title: "Own 100% of Your Leads",
    description: "Create your own leads and let clients find what works for both of you.",
    benefits: [
      "No more emailing back & forth, just a single, connected calendar",
      "Leads are yours alone—no sharing with competitors",
      "Zero commission fees on your hard-earned deals"
    ],
    image: "/images/feature-lead-ownership.png"
  },
  {
    label: "INSTANT NOTIFICATIONS",
    title: "Real-Time Lead Alerts",
    description: "Get notified the moment a prospect scans your postcard with their full contact details.",
    benefits: [
      "Instant notifications when prospects engage",
      "Complete contact information delivered immediately",
      "Track campaign performance in real-time"
    ],
    image: "/images/feature-instant-notifications.png"
  },
  {
    label: "AUTOMATION",
    title: "Marketing on Autopilot",
    description: "We handle everything—design, printing, and mailing. You focus on closing deals.",
    benefits: [
      "Fully automated campaign creation and management",
      "Professional design templates included",
      "Direct mail handling from start to finish"
    ],
    image: "/images/feature-automation.png"
  },
  {
    label: "SMART TARGETING",
    title: "Find Your Next Seller",
    description: "Target homeowners most likely to sell using property data and market intelligence.",
    benefits: [
      "Data-driven targeting based on market indicators",
      "Identify motivated sellers before your competition",
      "Focus your marketing budget where it counts"
    ],
    image: "/images/feature-smart-targeting.png"
  }
];

export default function Features() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                Generate Leads like a Pro with ListHook
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the postcard marketing system with only essential features that will delight you and your clients.
              </p>

              {/* Email Signup */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your e-mail"
                    className="pl-10 h-12"
                  />
                </div>
                <Button size="lg" className="h-12 px-8">
                  Start Free
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                  <span className="text-sm font-medium">Free lifetime plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                  <span className="text-sm font-medium">No Credit Card Required</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/images/hero-features-main.png"
                alt="Real estate agent celebrating success with lead notifications"
                width={1200}
                height={900}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="space-y-6">
                      <div className="inline-block">
                        <span className="text-sm font-bold tracking-wider text-accent uppercase">
                          {feature.label}
                        </span>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {feature.description}
                      </p>
                      <ul className="space-y-4">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="relative rounded-2xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1200}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black">
              Ready to Own Your Leads?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join agents who are building their brand and generating qualified leads with ListHook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
