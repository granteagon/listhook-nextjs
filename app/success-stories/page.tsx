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
              Real transformation stories from agents like you
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Real Agents. Real Results. Real ROI.
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              These agents were frustrated with expensive Zillow leads and inconsistent marketing. Here&apos;s what happened when they took back control.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Study 1: From Zillow Dependency to Pipeline Ownership */}
      <section className="border-b border-gray-200 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                Case Study #1
              </div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From Zillow Dependency to Pipeline Ownership
              </h2>
              <div className="text-lg text-gray-600">
                <div className="font-semibold">Jessica Martinez</div>
                <div>Phoenix, AZ • 5 years experience</div>
              </div>
            </div>

            <div className="space-y-8">
              {/* The Problem */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-red-900">The Problem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• $2,000/month on Zillow Premier Agent</li>
                  <li>• Only 2 deals per year from portal leads</li>
                  <li>• Shared leads with 3-4 other agents</li>
                  <li>• Zero brand recognition in her market</li>
                  <li>• No control over lead quality or timing</li>
                </ul>
              </div>

              {/* The Strategy */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-blue-900">The Strategy</h3>
                <p className="mb-4 text-gray-700">
                  Target 600 homes in her farm area with quarterly mailings using Just Listed and market update postcards.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-gray-600">Target homes:</div>
                    <div className="text-2xl font-bold text-gray-900">600</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Mailings per year:</div>
                    <div className="text-2xl font-bold text-gray-900">4</div>
                  </div>
                </div>
              </div>

              {/* The Campaign */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-purple-900">The Campaign</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-gray-600">Postcards/year:</div>
                    <div className="text-2xl font-bold text-gray-900">2,400</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Annual cost:</div>
                    <div className="text-2xl font-bold text-gray-900">$3,600</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Monthly cost:</div>
                    <div className="text-2xl font-bold text-green-700">$300</div>
                  </div>
                </div>
              </div>

              {/* The Results */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-green-900">The Results (First 6 Months)</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-4">
                  <div>
                    <div className="text-sm text-gray-600">QR scans:</div>
                    <div className="text-2xl font-bold text-gray-900">18</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Appointments:</div>
                    <div className="text-2xl font-bold text-gray-900">5</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Listings:</div>
                    <div className="text-2xl font-bold text-gray-900">2</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Buyer clients:</div>
                    <div className="text-2xl font-bold text-gray-900">1</div>
                  </div>
                </div>
                <div className="mb-6 border-t border-green-300 pt-6">
                  <div className="text-sm text-gray-600">Total commissions earned:</div>
                  <div className="text-4xl font-bold text-green-700">$48,000</div>
                </div>
              </div>

              {/* The Quote */}
              <blockquote className="border-l-4 border-blue-600 bg-white p-6 text-lg italic text-gray-700 shadow-md">
                &quot;Getting that text alert when someone scans my postcard QR code is addictive. I know exactly where they live and what triggered their interest. I&apos;ve cut my Zillow budget to $500 and might eliminate it entirely.&quot;
                <div className="mt-4 text-sm font-semibold not-italic text-gray-900">— Jessica Martinez</div>
              </blockquote>

              {/* The Math */}
              <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900">The Math: ListHook vs. Zillow</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                    <div className="mb-4 font-semibold text-gray-900">Zillow (6 months)</div>
                    <div className="mb-2 text-sm text-gray-600">Investment:</div>
                    <div className="mb-4 text-2xl font-bold text-red-700">$12,000</div>
                    <div className="mb-2 text-sm text-gray-600">Typical return (1 deal):</div>
                    <div className="mb-4 text-2xl font-bold text-gray-900">$25,000</div>
                    <div className="mb-2 text-sm text-gray-600">ROI:</div>
                    <div className="text-3xl font-bold text-gray-700">2.1x</div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                    <div className="mb-4 font-semibold text-green-900">ListHook (6 months)</div>
                    <div className="mb-2 text-sm text-gray-600">Investment:</div>
                    <div className="mb-4 text-2xl font-bold text-green-700">$1,800</div>
                    <div className="mb-2 text-sm text-gray-600">Actual return:</div>
                    <div className="mb-4 text-2xl font-bold text-gray-900">$48,000</div>
                    <div className="mb-2 text-sm text-gray-600">ROI:</div>
                    <div className="text-3xl font-bold text-green-700">26.7x</div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-center">
                  <div className="text-sm text-gray-600">ROI Improvement:</div>
                  <div className="text-2xl font-bold text-blue-900">12.7x better than Zillow</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study 2: Building a Sphere Campaign */}
      <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                Case Study #2
              </div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Building a Sphere Campaign from Scratch
              </h2>
              <div className="text-lg text-gray-600">
                <div className="font-semibold">David Chen</div>
                <div>Seattle, WA • New agent (6 months licensed)</div>
              </div>
            </div>

            <div className="space-y-8">
              {/* The Problem */}
              <div className="rounded-xl border border-red-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-red-900">The Problem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Brand new license with zero marketing budget</li>
                  <li>• 200 contacts but no systematic way to stay in touch</li>
                  <li>• Friends don&apos;t know he&apos;s in real estate yet</li>
                  <li>• Afraid of being &quot;too salesy&quot; with sphere</li>
                  <li>• Competitors already farming his neighborhood</li>
                </ul>
              </div>

              {/* The Strategy */}
              <div className="rounded-xl border border-blue-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-blue-900">The Strategy</h3>
                <p className="mb-4 text-gray-700">
                  Monthly &quot;Just Listed&quot; and market update postcards to his sphere of 200 contacts, plus their neighbors (expanding to 350 total households).
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-gray-600">Initial sphere:</div>
                    <div className="text-2xl font-bold text-gray-900">200 contacts</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Expanded reach:</div>
                    <div className="text-2xl font-bold text-gray-900">350 homes</div>
                  </div>
                </div>
              </div>

              {/* The Campaign */}
              <div className="rounded-xl border border-purple-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-purple-900">The Campaign</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-gray-600">Postcards/month:</div>
                    <div className="text-2xl font-bold text-gray-900">350</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Monthly cost:</div>
                    <div className="text-2xl font-bold text-green-700">$175</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Campaign type:</div>
                    <div className="text-base font-semibold text-gray-900">Sphere nurture</div>
                  </div>
                </div>
              </div>

              {/* The Results */}
              <div className="rounded-xl border border-green-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-green-900">The Results (First 4 Months)</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="mb-2 font-semibold text-gray-900">Month 1-2: Brand Awareness</div>
                    <div className="text-sm text-gray-700">
                      12 phone calls from friends saying &quot;I didn&apos;t know you got your license!&quot;
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="mb-2 font-semibold text-gray-900">Month 3: First Referral</div>
                    <div className="text-sm text-gray-700">
                      College friend referred their neighbor looking to sell - $8,500 commission
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="mb-2 font-semibold text-gray-900">Month 4: Sphere Expansion</div>
                    <div className="text-sm text-gray-700">
                      Former coworker hired him to buy new home - $6,200 commission
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t border-green-300 pt-6">
                  <div className="text-sm text-gray-600">Total investment (4 months):</div>
                  <div className="mb-4 text-2xl font-bold text-gray-900">$700</div>
                  <div className="text-sm text-gray-600">Total commissions earned:</div>
                  <div className="text-4xl font-bold text-green-700">$14,700</div>
                </div>
              </div>

              {/* The Quote */}
              <blockquote className="border-l-4 border-purple-600 bg-white p-6 text-lg italic text-gray-700 shadow-md">
                &quot;I was afraid of being annoying, but people genuinely appreciate staying updated on the market. Now when someone in their network mentions real estate, I&apos;m the first person they think of.&quot;
                <div className="mt-4 text-sm font-semibold not-italic text-gray-900">— David Chen</div>
              </blockquote>

              {/* The Math */}
              <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900">The Math: Sphere ROI</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                    <div className="text-sm text-gray-600">Total investment:</div>
                    <div className="text-2xl font-bold text-gray-900">$700</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                    <div className="text-sm text-gray-600">Total return:</div>
                    <div className="text-2xl font-bold text-green-700">$14,700</div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
                    <div className="text-sm text-gray-600">ROI:</div>
                    <div className="text-3xl font-bold text-green-700">21x</div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-medium text-gray-700">
                    <strong>Key insight:</strong> New agents with limited budgets can achieve outsized returns by systematically nurturing their sphere of influence. The cost per contact is under $2/month.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study 3: Scaling with Just Listed Announcements */}
      <section className="border-b border-gray-200 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                Case Study #3
              </div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Scaling with Just Listed Announcements
              </h2>
              <div className="text-lg text-gray-600">
                <div className="font-semibold">The Rodriguez Team</div>
                <div>Austin, TX • 12 years experience, 50+ transactions/year</div>
              </div>
            </div>

            <div className="space-y-8">
              {/* The Problem */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-red-900">The Problem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Getting listings but not leveraging them for more business</li>
                  <li>• Manually sending &quot;Just Listed&quot; emails that got ignored</li>
                  <li>• Missing the compound effect opportunity</li>
                  <li>• Social media posts disappeared in 24 hours</li>
                  <li>• No systematic way to turn 1 listing into 3</li>
                </ul>
              </div>

              {/* The Strategy */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-blue-900">The Strategy</h3>
                <p className="mb-4 text-gray-700">
                  Automated &quot;Just Listed&quot; postcards to 200 nearest neighbors every time they take a new listing, creating a consistent farming presence.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-gray-600">Cards per listing:</div>
                    <div className="text-2xl font-bold text-gray-900">200</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Trigger:</div>
                    <div className="text-base font-semibold text-gray-900">Automatic on MLS entry</div>
                  </div>
                </div>
              </div>

              {/* The Campaign */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-purple-900">The Campaign (Annual)</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-gray-600">Listings/year:</div>
                    <div className="text-2xl font-bold text-gray-900">52</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total postcards:</div>
                    <div className="text-2xl font-bold text-gray-900">10,400</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Annual cost:</div>
                    <div className="text-2xl font-bold text-green-700">$15,600</div>
                  </div>
                </div>
              </div>

              {/* The Results */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-green-900">The Results (First Year)</h3>
                <div className="mb-6 space-y-4">
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">Inbound listing calls:</span>
                    <span className="text-xl font-bold text-gray-900">127</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">New listings won:</span>
                    <span className="text-xl font-bold text-gray-900">18</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">Buyer referrals from neighbors:</span>
                    <span className="text-xl font-bold text-gray-900">7</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">Total new transactions:</span>
                    <span className="text-xl font-bold text-green-700">25</span>
                  </div>
                </div>
                <div className="border-t border-green-300 pt-6">
                  <div className="text-sm text-gray-600">Additional commission revenue:</div>
                  <div className="text-4xl font-bold text-green-700">$312,000</div>
                </div>
              </div>

              {/* The Quote */}
              <blockquote className="border-l-4 border-amber-600 bg-white p-6 text-lg italic text-gray-700 shadow-md">
                &quot;Every listing now works twice as hard. The postcards go out automatically, and we get calls before the home even hits the market. It&apos;s the compound effect in action.&quot;
                <div className="mt-4 text-sm font-semibold not-italic text-gray-900">— Maria Rodriguez</div>
              </blockquote>

              {/* The Math */}
              <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900">The Math: Compound Effect</h3>
                <div className="mb-6 space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-2 text-sm text-gray-600">Marketing investment:</div>
                    <div className="text-2xl font-bold text-gray-900">$15,600</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-2 text-sm text-gray-600">Additional commission revenue:</div>
                    <div className="text-2xl font-bold text-green-700">$312,000</div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="mb-2 text-sm text-gray-600">ROI:</div>
                    <div className="text-3xl font-bold text-green-700">20x</div>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-medium text-gray-700">
                    <strong>The multiplier effect:</strong> Each listing generated 0.48 additional transactions through automated Just Listed campaigns. Over time, this compounds exponentially.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study 4: Eliminating Zillow Completely */}
      <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800">
                Case Study #4
              </div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Eliminating Zillow Completely
              </h2>
              <div className="text-lg text-gray-600">
                <div className="font-semibold">Michael Thompson</div>
                <div>Charlotte, NC • 7 years experience</div>
              </div>
            </div>

            <div className="space-y-8">
              {/* The Problem */}
              <div className="rounded-xl border border-red-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-red-900">The Problem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• $1,800/month on Zillow Premier Agent ($21,600/year)</li>
                  <li>• Competing with 4-5 other agents for same leads</li>
                  <li>• Quality inconsistent - lots of tire kickers</li>
                  <li>• Conversion rate under 2%</li>
                  <li>• No brand equity building</li>
                  <li>• Felt like renting his business from Zillow</li>
                </ul>
              </div>

              {/* The Strategy */}
              <div className="rounded-xl border border-blue-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-blue-900">The Strategy</h3>
                <p className="mb-4 text-gray-700">
                  Transition budget from Zillow to aggressive geographic farming: 1,200 homes, monthly mailings, combination of Just Listed and market reports.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-gray-600">Farm size:</div>
                    <div className="text-2xl font-bold text-gray-900">1,200 homes</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Frequency:</div>
                    <div className="text-xl font-bold text-gray-900">Monthly</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Transition period:</div>
                    <div className="text-xl font-bold text-gray-900">90 days</div>
                  </div>
                </div>
              </div>

              {/* The Campaign */}
              <div className="rounded-xl border border-purple-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-purple-900">The Campaign</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-gray-600">Postcards/month:</div>
                    <div className="text-2xl font-bold text-gray-900">1,200</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Monthly cost:</div>
                    <div className="text-2xl font-bold text-green-700">$600</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Annual cost:</div>
                    <div className="text-2xl font-bold text-green-700">$7,200</div>
                  </div>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="text-sm text-gray-600">Annual savings vs. Zillow:</div>
                  <div className="text-2xl font-bold text-green-700">$14,400</div>
                </div>
              </div>

              {/* The Results */}
              <div className="rounded-xl border border-green-200 bg-white p-8 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-green-900">The Results (After 12 Months)</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-4 font-semibold text-gray-900">From Zillow (previous year)</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-semibold">243</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conversions:</span>
                        <span className="font-semibold">4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Commission:</span>
                        <span className="font-semibold">$52,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="mb-4 font-semibold text-green-900">From ListHook (new year)</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-semibold">89</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conversions:</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Commission:</span>
                        <span className="font-semibold text-green-700">$96,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Lead quality improvement:</span>
                      <span className="text-xl font-bold text-blue-900">2x conversion rate</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Revenue increase:</span>
                      <span className="text-xl font-bold text-green-700">+$44,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Quote */}
              <blockquote className="border-l-4 border-red-600 bg-white p-6 text-lg italic text-gray-700 shadow-md">
                &quot;Best decision I ever made. I own my pipeline now. People call me because they know my name, not because Zillow sold them my contact info. The quality difference is night and day.&quot;
                <div className="mt-4 text-sm font-semibold not-italic text-gray-900">— Michael Thompson</div>
              </blockquote>

              {/* The Math */}
              <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900">The Math: Full Comparison</h3>
                <div className="mb-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                    <div className="mb-4 text-center font-semibold text-red-900">Zillow Model</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Annual cost:</span>
                        <span className="font-bold text-red-700">$21,600</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span className="font-bold">$52,000</span>
                      </div>
                      <div className="flex justify-between border-t border-red-200 pt-2">
                        <span>Net profit:</span>
                        <span className="font-bold">$30,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI:</span>
                        <span className="text-xl font-bold">2.4x</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                    <div className="mb-4 text-center font-semibold text-green-900">ListHook Model</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Annual cost:</span>
                        <span className="font-bold text-green-700">$7,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span className="font-bold">$96,000</span>
                      </div>
                      <div className="flex justify-between border-t border-green-200 pt-2">
                        <span>Net profit:</span>
                        <span className="font-bold text-green-700">$88,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI:</span>
                        <span className="text-xl font-bold text-green-700">13.3x</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
                  <div className="mb-2 text-sm text-gray-600">Additional annual profit by switching:</div>
                  <div className="text-3xl font-bold text-blue-900">$58,400</div>
                  <div className="mt-2 text-sm text-gray-700">Plus: $14,400 saved + $44,000 additional revenue</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study 5: Luxury Market Positioning */}
      <section className="border-b border-gray-200 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800">
                Case Study #5
              </div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Luxury Market Positioning
              </h2>
              <div className="text-lg text-gray-600">
                <div className="font-semibold">Amanda Sterling</div>
                <div>San Diego, CA • 9 years experience, luxury specialist</div>
              </div>
            </div>

            <div className="space-y-8">
              {/* The Problem */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-red-900">The Problem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Competing for luxury listings with established agents</li>
                  <li>• Hard to break into exclusive neighborhoods</li>
                  <li>• Previous marketing felt too generic for high-end clients</li>
                  <li>• Needed to demonstrate market expertise</li>
                  <li>• $3M+ homes require different approach</li>
                </ul>
              </div>

              {/* The Strategy */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-blue-900">The Strategy</h3>
                <p className="mb-4 text-gray-700">
                  Ultra-targeted campaign to just 180 luxury homes ($2M+), quarterly high-end market reports showcasing recent sales and market insights.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-gray-600">Target properties:</div>
                    <div className="text-2xl font-bold text-gray-900">180 homes</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Average value:</div>
                    <div className="text-2xl font-bold text-gray-900">$3.2M</div>
                  </div>
                </div>
              </div>

              {/* The Campaign */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-purple-900">The Campaign</h3>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-gray-600">Postcards/year:</div>
                    <div className="text-2xl font-bold text-gray-900">720</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Annual cost:</div>
                    <div className="text-2xl font-bold text-green-700">$1,080</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Design:</div>
                    <div className="text-base font-semibold text-gray-900">Premium</div>
                  </div>
                </div>
              </div>

              {/* The Results */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-green-900">The Results (18 Months)</h3>
                <div className="mb-6 space-y-4">
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">Private listing consultations:</span>
                    <span className="text-xl font-bold text-gray-900">14</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">Luxury listings won:</span>
                    <span className="text-xl font-bold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-white p-4">
                    <span className="text-gray-700">Average commission:</span>
                    <span className="text-xl font-bold text-gray-900">$48,000</span>
                  </div>
                </div>
                <div className="border-t border-green-300 pt-6">
                  <div className="text-sm text-gray-600">Total commission revenue:</div>
                  <div className="text-4xl font-bold text-green-700">$144,000</div>
                </div>
              </div>

              {/* The Quote */}
              <blockquote className="border-l-4 border-indigo-600 bg-white p-6 text-lg italic text-gray-700 shadow-md">
                &quot;High-net-worth clients appreciate sophistication and consistency. The quarterly market reports position me as the neighborhood expert. When they&apos;re ready to sell their $3M home, they call me first.&quot;
                <div className="mt-4 text-sm font-semibold not-italic text-gray-900">— Amanda Sterling</div>
              </blockquote>

              {/* The Math */}
              <div className="rounded-xl border border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900">The Math: Luxury ROI</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                    <div className="text-sm text-gray-600">18-month investment:</div>
                    <div className="text-2xl font-bold text-gray-900">$1,620</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                    <div className="text-sm text-gray-600">Total return:</div>
                    <div className="text-2xl font-bold text-green-700">$144,000</div>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
                    <div className="text-sm text-gray-600">ROI:</div>
                    <div className="text-3xl font-bold text-green-700">89x</div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-medium text-gray-700">
                    <strong>Luxury insight:</strong> Higher-value properties require fewer conversions to generate significant revenue. A focused, premium approach to 180 homes delivered better results than broad campaigns to thousands.
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
