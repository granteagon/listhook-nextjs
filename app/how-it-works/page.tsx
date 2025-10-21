import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import {
  QrCode,
  Users,
  Clock,
  DollarSign,
  ArrowRight,
  TrendingDown,
  Share2,
  Eye,
  AlertCircle,
  Target,
  Palette,
  Send,
  Smartphone,
  Bell,
  Check,
  X,
  BarChart3,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works - Automated Real Estate Postcard Marketing That Actually Works',
  description: 'Stop wasting money on Zillow leads and social media. See how ListHook delivers automated postcard marketing with proven 12:1 ROI and instant lead notifications.',
  openGraph: {
    title: 'How ListHook Works - Break Free from Zillow and Build Your Own Pipeline',
    description: 'Escape the 35% referral fees and shared leads. Automated postcard marketing that puts YOU in control with instant notifications and proven ROI.',
    images: ['/og-image.png'],
  },
};

// Problem card component for Section 1
function ProblemCard({
  icon: Icon,
  problem,
  stat
}: {
  icon: typeof TrendingDown;
  problem: string;
  stat?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <p className="text-gray-800 font-medium mb-2">{problem}</p>
          {stat && <p className="text-sm text-red-600 font-semibold">{stat}</p>}
        </div>
      </div>
    </div>
  );
}

// Process step component for Section 2
function ProcessStep({
  number,
  icon: Icon,
  title,
  description
}: {
  number: number;
  icon: typeof Target;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      {/* Connector line - hidden on last item */}
      <div className="hidden md:block absolute left-10 top-20 w-full h-0.5 bg-blue-200 -z-10"
           style={{ width: number === 5 ? '0' : 'calc(100% - 80px)' }} />

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center -mt-8 mb-4">
            <span className="text-white font-bold">{number}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-3 text-center">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-center">{description}</p>
      </div>
    </div>
  );
}

// Solution pair component for Section 3
function SolutionPair({
  problem,
  solution,
  icon: Icon
}: {
  problem: string;
  solution: string;
  icon: typeof Check;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
        <p className="text-gray-700 font-medium">{problem}</p>
      </div>
      <div className="flex items-start gap-4 pl-2 border-l-4 border-green-500">
        <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center ml-2">
          <Icon className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-gray-900 font-semibold mb-1">ListHook Solution:</p>
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* SECTION 1: THE PROBLEM WITH REAL ESTATE MARKETING TODAY */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50">
        <Container className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-blue-900 mb-6">
                The Real Estate Marketing Trap
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                You became an agent to help clients and close deals—not to feed a constant
                marketing machine or pay massive referral fees to companies that own your leads.
              </p>
            </div>

            {/* Problem Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ProblemCard
                icon={DollarSign}
                problem="Zillow and other portals take 30-40% of your commission on every closed lead"
                stat="35% average referral fee"
              />
              <ProblemCard
                icon={Users}
                problem="The same lead gets shared with 3-4 other agents—you're competing from the start"
                stat="~1% conversion rate"
              />
              <ProblemCard
                icon={Eye}
                problem="Portal branding overshadows your personal brand. Clients remember Zillow, not you."
              />
              <ProblemCard
                icon={Share2}
                problem="Social media requires full-time content creation—and it's the only channel with negative sentiment among agents"
              />
              <ProblemCard
                icon={AlertCircle}
                problem="No control and no visibility into your marketing performance or lead quality"
              />
              <ProblemCard
                icon={TrendingDown}
                problem="The feast-famine cycle: 48% of salespeople never follow up, yet 60% of customers say no 4 times before yes"
                stat="Missed opportunity epidemic"
              />
            </div>

            {/* Transition Statement */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-700">
              <p className="text-2xl font-bold text-blue-900 mb-4">
                There&apos;s a better way to build your pipeline—one that puts YOU in control.
              </p>
              <p className="text-lg text-gray-700">
                Stop renting your business from lead portals. Start building equity in your brand
                with marketing that works for you 24/7—without the time sink.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* SECTION 2: HOW LISTHOOK WORKS (5-STEP VISUAL JOURNEY) */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                How ListHook Works
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Five simple steps to automated marketing that generates qualified leads while
                you focus on what you do best: closing deals.
              </p>
            </div>

            {/* 5-Step Process */}
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              <ProcessStep
                number={1}
                icon={Target}
                title="Strategy Session"
                description="We work with you to identify your goals, target audience, and ideal geographic farming areas."
              />
              <ProcessStep
                number={2}
                icon={Palette}
                title="Professional Design"
                description="Beautiful postcards that showcase YOUR brand, YOUR listings, and YOUR unique value proposition."
              />
              <ProcessStep
                number={3}
                icon={Send}
                title="Automated Sending"
                description="Postcards arrive on schedule to the right homeowners without any manual work from you."
              />
              <ProcessStep
                number={4}
                icon={QrCode}
                title="QR Code Engagement"
                description="Homeowners scan to learn more about you, your services, or schedule a consultation."
              />
              <ProcessStep
                number={5}
                icon={Bell}
                title="Instant Text Alert"
                description="You get a notification within seconds with prospect details—strike while the iron is hot."
              />
            </div>

            {/* Closing Statement */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-xl text-center">
              <p className="text-2xl font-bold text-white mb-4">
                This is marketing that works FOR you, not the other way around.
              </p>
              <p className="text-lg text-blue-100">
                Set it up once, and your brand keeps working—building recognition and trust
                in your farm area—while you focus on showings, negotiations, and closings.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* SECTION 3: WHY THIS SOLVES YOUR PROBLEMS */}
      <div className="bg-white">
        <Container className="py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Why This Solves Your Problems
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Every feature is designed to fix the exact pain points that plague modern
                real estate marketing. Here&apos;s how ListHook changes the game:
              </p>
            </div>

            {/* Problem → Solution Pairs */}
            <div className="grid md:grid-cols-2 gap-8">
              <SolutionPair
                problem="Zillow steals your brand and owns the relationship"
                solution="Your Brand, Not Ours"
                icon={Users}
              />
              <SolutionPair
                problem="35% referral fees eat your margins"
                solution="You Own The Leads"
                icon={DollarSign}
              />
              <SolutionPair
                problem="No visibility into what's working"
                solution="Instant Feedback = Control"
                icon={BarChart3}
              />
              <SolutionPair
                problem="Feast-famine lead generation cycle"
                solution="Consistent, Automated Marketing"
                icon={Zap}
              />
              <SolutionPair
                problem="Social media is a full-time job"
                solution="Zero Time Investment"
                icon={Clock}
              />
              <SolutionPair
                problem="Unclear ROI on marketing spend"
                solution="Proven ROI ($12 per $1)"
                icon={TrendingDown}
              />
            </div>

            {/* Bottom stat callout */}
            <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-500">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-green-600 mb-2">12:1</p>
                  <p className="text-gray-700 font-medium">Average ROI</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-600 mb-2">5.2%</p>
                  <p className="text-gray-700 font-medium">Response Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-600 mb-2">$17</p>
                  <p className="text-gray-700 font-medium">Cost Per Lead</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* SECTION 4: SEE IT IN ACTION */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900">
        <Container className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Discover how ListHook transforms your marketing from a time-consuming burden
              into a hands-free lead generation machine.
            </p>

            {/* Demo/Video Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm p-12 rounded-lg border-2 border-white/20 mb-12">
              <div className="aspect-video bg-blue-800/50 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Smartphone className="w-20 h-20 text-white/80 mx-auto mb-4" />
                  <p className="text-white/80 text-lg">Demo Video Coming Soon</p>
                  <p className="text-white/60">See a complete campaign walkthrough</p>
                </div>
              </div>
              <p className="text-blue-100 text-lg">
                Watch how postcards get created, sent, and turn into qualified leads—all
                automatically while you focus on serving clients.
              </p>
            </div>

            {/* Final CTA */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Ready to build your campaign? Let&apos;s talk.
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Schedule a strategy session to see how ListHook can transform your marketing
                and put you back in control of your pipeline.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-coral-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-coral-600 transition-colors shadow-lg"
              >
                Contact Sales Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
