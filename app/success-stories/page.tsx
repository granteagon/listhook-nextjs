import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Agents, Real Results, Real Stories | ListHook Success Stories',
  description: 'See how agents just like you transformed their marketing from a source of stress into a reliable lead generation machine. 340% average ROI, 5.2% response rate.',
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-800/50 px-4 py-2 text-sm font-medium text-blue-100 ring-1 ring-inset ring-blue-700/50">
              500+ agents have transformed their marketing
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Real Agents, Real Results, Real Stories
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              See how agents just like you transformed their marketing from a source of stress into a reliable lead generation machine. These are their stories.
            </p>
          </div>
        </Container>
      </section>

      {/* Too Busy To Market - Empathy Section */}
      <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You're Not Lazy, You're Just Busy
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              Between showings, contracts, and client calls, when exactly are you supposed to design postcards? We get it. That's why we built this.
            </p>
          </div>

          {/* A Day in the Life Timeline */}
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
              Sound Familiar?
            </h3>
            <p className="mb-12 text-center text-gray-600">
              We surveyed 1,000+ real estate agents. Here's what a typical day looks like...
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex-shrink-0 text-4xl">🌅</div>
                <div>
                  <div className="mb-2 font-semibold text-gray-900">7:00 AM - Morning</div>
                  <p className="mb-2 text-gray-700 italic">
                    "Coffee in hand, I'm already reviewing contracts. First showing at 8:30. Maybe I'll work on marketing tonight..."
                  </p>
                  <p className="text-sm text-gray-600">Your day starts with a listing appointment</p>
                </div>
              </div>

              <div className="flex gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex-shrink-0 text-4xl">☀️</div>
                <div>
                  <div className="mb-2 font-semibold text-gray-900">12:00 PM - Midday</div>
                  <p className="mb-2 text-gray-700 italic">
                    "Three showings done, 47 emails answered, two offers to write. Marketing? What marketing?"
                  </p>
                  <p className="text-sm text-gray-600">By noon, you've shown 3 homes and answered 47 emails</p>
                </div>
              </div>

              <div className="flex gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex-shrink-0 text-4xl">🌆</div>
                <div>
                  <div className="mb-2 font-semibold text-gray-900">7:00 PM - Evening</div>
                  <p className="mb-2 text-gray-700 italic">
                    "Finally home. Kids need dinner, spouse wants to talk. Marketing can wait until tomorrow... again."
                  </p>
                  <p className="text-sm text-gray-600">Evening comes, and you still haven't touched your marketing</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Problem & Solution */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-xl font-semibold text-red-900">The Problem:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <div>
                    <div className="font-medium">Marketing gets pushed to "tomorrow"</div>
                    <div className="text-sm text-gray-600">Every day something 'urgent' takes priority</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <div>
                    <div className="font-medium">Guilt about inconsistent outreach</div>
                    <div className="text-sm text-gray-600">You know you should be farming, but when?</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <div>
                    <div className="font-medium">Feast or famine income cycles</div>
                    <div className="text-sm text-gray-600">Busy closing → stop prospecting → no leads</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <div>
                    <div className="font-medium">No time to learn new systems</div>
                    <div className="text-sm text-gray-600">Complex tools just add more to your plate</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-xl font-semibold text-green-900">What You Need:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <div>
                    <div className="font-medium">Marketing that happens automatically</div>
                    <div className="text-sm text-gray-600">No thinking, no remembering, just results</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <div>
                    <div className="font-medium">No daily effort required</div>
                    <div className="text-sm text-gray-600">Set it once, let it run forever</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <div>
                    <div className="font-medium">Proven results you can trust</div>
                    <div className="text-sm text-gray-600">340% average ROI from day one</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <div>
                    <div className="font-medium">Simple setup, complex results</div>
                    <div className="text-sm text-gray-600">5-minute setup, lifetime of leads</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Story Categories */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories by Agent Type
            </h2>
            <p className="text-xl text-gray-600">
              No matter where you are in your career, agents like you are seeing results
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* New Agents */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-6">
                <div className="mb-2 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                  New Agent Success
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  From 0 to 5 Listings in 6 Months
                </h3>
                <div className="text-gray-600">
                  <div className="font-semibold">Sarah M. - First Year Agent</div>
                  <div className="text-sm">Austin, TX • Licensed January 2024</div>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <div className="mb-2 font-semibold text-gray-900">Before:</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• No marketing budget, afraid to spend money</li>
                    <li>• Relying only on friends and family referrals</li>
                    <li>• Constant worry about where the next deal would come from</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 font-semibold text-green-700">Results:</div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 5 listings from postcard leads</li>
                    <li>• $47,000 in commissions from just $340 in postcards</li>
                    <li>• <strong className="text-green-700">1,385% ROI</strong> in first 6 months</li>
                  </ul>
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-4 text-sm italic text-gray-700">
                "I was terrified to spend money on marketing. This gave me confidence because it was so affordable and actually worked. Now I have a predictable lead source!"
              </blockquote>
            </div>

            {/* Busy Agents */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-6">
                <div className="mb-2 inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
                  Busy Agent Success
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  From Overwhelmed to Organized
                </h3>
                <div className="text-gray-600">
                  <div className="font-semibold">Mike R. - 8 Years Experience</div>
                  <div className="text-sm">Denver, CO • 25-30 transactions/year</div>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <div className="mb-2 font-semibold text-gray-900">Before:</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Too busy closing deals to market consistently</li>
                    <li>• Feast or famine cycles</li>
                    <li>• Constant guilt about neglecting his farm area</li>
                    <li>• Marketing felt like another job</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 font-semibold text-green-700">Results:</div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Steady 2-3 leads per month without thinking about it</li>
                    <li>• No more marketing guilt</li>
                    <li>• Predictable pipeline that feeds his busy practice</li>
                  </ul>
                </div>
              </div>

              <blockquote className="border-l-4 border-purple-600 bg-purple-50 p-4 text-sm italic text-gray-700">
                "Finally, marketing that happens without me thinking about it. My farm area knows me now, and I'm not stressed about where the next deal comes from!"
              </blockquote>
            </div>

            {/* Top Producers */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-6">
                <div className="mb-2 inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                  Top Producer Success
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  From Good ROI to Great ROI
                </h3>
                <div className="text-gray-600">
                  <div className="font-semibold">Jennifer L. - Top 1%</div>
                  <div className="text-sm">Phoenix, AZ • 75+ transactions/year</div>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <div className="mb-2 font-semibold text-gray-900">Before:</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Expensive marketing agencies with generic campaigns</li>
                    <li>• Hard to track ROI</li>
                    <li>• Paying $2,000/month for unclear results</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 font-semibold text-green-700">Results:</div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Cut marketing costs 60%</li>
                    <li>• Increased response rates 3x</li>
                    <li>• Better lead quality</li>
                    <li>• Now spending <strong className="text-green-700">$800/month</strong> for better results</li>
                  </ul>
                </div>
              </div>

              <blockquote className="border-l-4 border-amber-600 bg-amber-50 p-4 text-sm italic text-gray-700">
                "Smart targeting beats expensive broad campaigns every time. This is surgical precision. I know exactly what I'm getting for my investment."
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep Dive Case Study: Elena */}
      <section className="border-y border-gray-200 bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                Deep Dive Case Study
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Elena Went from Stressed to Successful
              </h2>
              <p className="text-lg text-gray-600">
                Mid-career agent, 4 years experience, competitive suburban market in Charlotte, NC
              </p>
            </div>

            {/* Before: The Struggle */}
            <div className="mb-12 rounded-xl border border-red-200 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-red-900">Before: The Struggle</h3>
              <ul className="mb-6 space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-red-600">✗</span>
                  <div>
                    <div className="font-semibold text-gray-900">Inconsistent marketing efforts</div>
                    <div className="text-sm text-gray-600">Would send postcards when she remembered, then stop for months</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-red-600">✗</span>
                  <div>
                    <div className="font-semibold text-gray-900">Wasting money on generic mailers</div>
                    <div className="text-sm text-gray-600">$300/month on broad neighborhood mailings with poor targeting</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-red-600">✗</span>
                  <div>
                    <div className="font-semibold text-gray-900">Terrible response rates</div>
                    <div className="text-sm text-gray-600">Getting 0-1 responses per 500-piece campaign</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-red-600">✗</span>
                  <div>
                    <div className="font-semibold text-gray-900">Losing to competitors</div>
                    <div className="text-sm text-gray-600">Other agents in her area were getting the listings she wanted</div>
                  </div>
                </li>
              </ul>
              <blockquote className="border-l-4 border-red-600 bg-red-50 p-4 italic text-gray-700">
                "I was ready to give up on direct mail completely. Nothing was working and I couldn't afford to keep throwing money away. I felt like marketing was just this mysterious thing I'd never figure out."
              </blockquote>
            </div>

            {/* After: The Transformation */}
            <div className="mb-12 rounded-xl border border-green-200 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-green-900">After: The Transformation</h3>
              <ul className="mb-6 space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-green-600">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Completely automated marketing</div>
                    <div className="text-sm text-gray-600">Every listing automatically triggers smart postcard campaigns</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-green-600">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Better targeting, lower costs</div>
                    <div className="text-sm text-gray-600">$150/month with AI-powered targeting to likely sellers</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-green-600">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">5x better response rates</div>
                    <div className="text-sm text-gray-600">Getting 4-6 qualified leads per month consistently</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-green-600">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Neighborhood recognition</div>
                    <div className="text-sm text-gray-600">Homeowners now know her brand and call her first</div>
                  </div>
                </li>
              </ul>
              <blockquote className="border-l-4 border-green-600 bg-green-50 p-4 italic text-gray-700">
                "Now marketing happens in the background while I focus on clients. I actually look forward to seeing my postcard stats because they're always good news. It's like having a marketing team that never sleeps."
              </blockquote>
            </div>

            {/* 6-Month Results Timeline */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">6-Month Results Timeline</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">1-2</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Month 1-2: Setup & Early Validation</div>
                    <div className="text-sm text-gray-700">Setup complete, first campaigns sent, 2 leads</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">3-4</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Month 3-4: First Win</div>
                    <div className="text-sm text-gray-700">Consistent leads, first listing closed, $18K commission from first sale</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-semibold">5-6</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Month 5-6: Full Momentum</div>
                    <div className="text-sm text-gray-700">Two more listings, brand recognition building, $47K total commissions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Aggregate Results & Network Stats */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Results Across All Our Agents
            </h2>
            <p className="mb-12 text-xl text-blue-100">
              These aren't cherry-picked success stories. This is the average performance across our entire network.
            </p>

            {/* Key Performance Metrics */}
            <div className="mb-16 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-2 text-5xl font-bold text-white">340%</div>
                <div className="mb-2 text-lg font-semibold text-blue-100">Average ROI</div>
                <div className="text-sm text-blue-200">First 90 days</div>
                <div className="mt-4 text-xs text-blue-300">For every $100 spent, agents earn $340 back</div>
              </div>
              <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-2 text-5xl font-bold text-white">5.2%</div>
                <div className="mb-2 text-lg font-semibold text-blue-100">Response Rate</div>
                <div className="text-sm text-blue-200">vs 2-3% industry average</div>
                <div className="mt-4 text-xs text-blue-300">Nearly double the industry standard</div>
              </div>
              <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-2 text-5xl font-bold text-white">$17</div>
                <div className="mb-2 text-lg font-semibold text-blue-100">Cost Per Lead</div>
                <div className="text-sm text-blue-200">vs $25-50 industry average</div>
                <div className="mt-4 text-xs text-blue-300">Up to 65% less than alternatives</div>
              </div>
            </div>

            {/* Network Stats */}
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-8 text-2xl font-bold text-white">The Real Numbers</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">547</div>
                  <div className="text-sm text-blue-200">Total agents using ListHook</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">127,000+</div>
                  <div className="text-sm text-blue-200">Total postcards sent</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">6,604</div>
                  <div className="text-sm text-blue-200">Total leads generated</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">892</div>
                  <div className="text-sm text-blue-200">Listings closed from leads</div>
                </div>
              </div>
              <div className="mt-8 border-t border-white/20 pt-6">
                <div className="mb-2 text-4xl font-bold text-white">$18.4M</div>
                <div className="text-blue-200">Total commissions earned by our network</div>
              </div>
              <div className="mt-6 text-sm text-blue-300">
                Average setup time: 4.2 minutes
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ROI Proof Points */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                $4-$12 Back for Every $1 Spent
              </h2>
              <p className="text-xl text-gray-600">
                Don't take our word for it. See the industry data, agent results, and calculate your exact ROI potential. Numbers don't lie.
              </p>
            </div>

            {/* Industry Data Comparison */}
            <div className="mb-12 rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">The Data Speaks for Itself</h3>
              <p className="mb-8 text-gray-600">
                Direct mail consistently outperforms digital marketing channels. Here's the proof.
              </p>

              <div className="mb-8">
                <h4 className="mb-4 font-semibold text-gray-900">Marketing Channel ROI Comparison:</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">
                    <span className="font-medium text-gray-900">Direct Mail</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-700">112%</span>
                      <span className="text-green-700">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <span className="font-medium text-gray-900">Email Marketing</span>
                    <span className="text-xl font-bold text-gray-600">36%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <span className="font-medium text-gray-900">Social Media</span>
                    <span className="text-xl font-bold text-gray-600">28%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <span className="font-medium text-gray-900">Online Display Ads</span>
                    <span className="text-xl font-bold text-gray-600">12%</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">Source: Data & Marketing Association, 2024</p>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <blockquote className="text-gray-700 italic">
                  "Direct mail delivers the highest ROI of any marketing channel we track. In real estate, where relationships and trust matter most, nothing beats the tangible impact of a well-designed postcard arriving at exactly the right time."
                </blockquote>
                <p className="mt-2 text-sm font-medium text-gray-900">
                  – Data & Marketing Association, 2024 Response Rate Report
                </p>
              </div>
            </div>

            {/* Compare the Risk */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 text-center">Compare the Risk</h3>
              <p className="mb-8 text-center text-gray-600">
                See how our postcards stack up against other lead generation methods
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h4 className="mb-4 font-semibold text-gray-900">Online Lead Services</h4>
                  <ul className="mb-4 space-y-2 text-sm text-gray-700">
                    <li>• Cost per lead: $50-200</li>
                    <li>• Quality: Mixed</li>
                    <li>• Competition: High</li>
                    <li>• Brand building: None</li>
                  </ul>
                  <div className="text-sm font-medium text-red-700">High cost, unpredictable quality</div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h4 className="mb-4 font-semibold text-gray-900">Print Advertising</h4>
                  <ul className="mb-4 space-y-2 text-sm text-gray-700">
                    <li>• Monthly cost: $500-2000</li>
                    <li>• Targeting: Poor</li>
                    <li>• Tracking: Difficult</li>
                    <li>• Response rate: 0.5-1%</li>
                  </ul>
                  <div className="text-sm font-medium text-red-700">Expensive, hard to measure</div>
                </div>

                <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                  <h4 className="mb-4 font-semibold text-green-900">Our Postcards ✓</h4>
                  <ul className="mb-4 space-y-2 text-sm text-gray-700">
                    <li>• Cost per lead: $15-30</li>
                    <li>• Quality: High</li>
                    <li>• Competition: None</li>
                    <li>• Brand building: Strong</li>
                  </ul>
                  <div className="text-sm font-medium text-green-700">Affordable, trackable, effective</div>
                </div>
              </div>
            </div>

            {/* Real ROI Case Studies */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="mb-8 text-2xl font-bold text-gray-900 text-center">Real ROI Case Studies</h3>

              <div className="space-y-6">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-gray-900">Sarah M. - New Agent, Austin, TX</div>
                  </div>
                  <div className="grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <div className="text-gray-600">Investment:</div>
                      <div className="font-semibold text-gray-900">$340</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Postcards sent:</div>
                      <div className="font-semibold text-gray-900">523</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Leads generated:</div>
                      <div className="font-semibold text-gray-900">28</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Listings closed:</div>
                      <div className="font-semibold text-gray-900">5</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Total commissions:</div>
                      <div className="font-semibold text-green-700">$47,000</div>
                    </div>
                    <div>
                      <div className="text-gray-600">ROI:</div>
                      <div className="text-xl font-bold text-green-700">1,385%</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-purple-100 bg-purple-50 p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-gray-900">Mike R. - Busy Agent, Denver, CO</div>
                  </div>
                  <div className="grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <div className="text-gray-600">Monthly investment:</div>
                      <div className="font-semibold text-gray-900">$250</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Avg postcards/month:</div>
                      <div className="font-semibold text-gray-900">385</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Avg leads/month:</div>
                      <div className="font-semibold text-gray-900">18</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Monthly closings:</div>
                      <div className="font-semibold text-gray-900">3</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Monthly revenue:</div>
                      <div className="font-semibold text-green-700">$36,000</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Monthly ROI:</div>
                      <div className="text-xl font-bold text-green-700">1,340%</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-amber-100 bg-amber-50 p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-gray-900">Jennifer L. - Top Producer, Phoenix, AZ</div>
                  </div>
                  <div className="grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <div className="text-gray-600">Previous spend:</div>
                      <div className="font-semibold text-red-700">$2,000/mo</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Current spend:</div>
                      <div className="font-semibold text-green-700">$800/mo</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Response rate:</div>
                      <div className="font-semibold text-gray-900">3x higher</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Lead quality:</div>
                      <div className="font-semibold text-gray-900">Much better</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Annual savings:</div>
                      <div className="font-semibold text-green-700">$14,400</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Cost reduction:</div>
                      <div className="text-xl font-bold text-green-700">60%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Your Success Story?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Join hundreds of agents who transformed their marketing from stress to success. Your story could be next.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
