import WorkflowSection from "@/components/WorkflowSection";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              No hidden fees. No commission sharing. Just automated marketing that works.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-large border-2 border-primary">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  MOST POPULAR
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Custom Campaign Pricing</h2>
                <p className="text-muted-foreground text-lg">
                  Pricing varies based on your target area, mailing frequency, and volume
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Professional postcard design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Automated printing & mailing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>QR code tracking technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Real-time lead notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Campaign analytics dashboard</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">What You Get:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>100% lead ownership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Zero commission sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-0.5 flex-shrink-0" />
                      <span>Custom branding options</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-3">Typical Investment:</h3>
                <p className="text-muted-foreground mb-4">
                  Most agents invest between <strong className="text-foreground">$500-$2,000/month</strong> depending on their market and goals. This typically includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 250-1,000 postcards per month</li>
                  <li>• Targeting your chosen neighborhoods</li>
                  <li>• All design, printing, and mailing costs included</li>
                </ul>
              </div>

              <div className="text-center">
                <Button size="lg" asChild>
                  <a href="/contact">Get Your Custom Quote</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No obligation. We'll create a custom plan for your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Math Makes Sense
            </h2>
            <p className="text-xl text-muted-foreground">
              Direct mail has the highest ROI of any marketing channel for real estate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
              <div className="text-5xl font-bold text-primary mb-2">$4-$12</div>
              <div className="text-sm text-muted-foreground">Return on every $1 spent</div>
              <p className="text-xs text-muted-foreground mt-3">According to NAR studies</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
              <div className="text-5xl font-bold text-primary mb-2">0%</div>
              <div className="text-sm text-muted-foreground">Commission sharing</div>
              <p className="text-xs text-muted-foreground mt-3">Unlike Zillow & other portals</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Lead ownership</div>
              <p className="text-xs text-muted-foreground mt-3">Every lead belongs to you</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-medium mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Example ROI Calculation:</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span>Monthly investment:</span>
                <span className="font-bold text-foreground">$1,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span>Conservative ROI (4x):</span>
                <span className="font-bold text-foreground">$4,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span>One closing needed per year:</span>
                <span className="font-bold text-foreground">1 deal</span>
              </div>
              <div className="flex justify-between items-center py-3 pt-6 text-xl">
                <span className="font-bold">Your net benefit:</span>
                <span className="font-bold text-primary">Infinite ROI</span>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Most agents close multiple deals from their campaigns annually
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Compare to Other Options
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden shadow-medium">
              <thead className="bg-muted">
                <tr>
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-center font-bold text-primary">ListHook</th>
                  <th className="p-4 text-center font-bold">Zillow</th>
                  <th className="p-4 text-center font-bold">Social Media</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4">Lead Ownership</td>
                  <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 fill-green-600 text-white mx-auto" /></td>
                  <td className="p-4 text-center text-destructive">✗</td>
                  <td className="p-4 text-center text-destructive">✗</td>
                </tr>
                <tr>
                  <td className="p-4">Commission Sharing</td>
                  <td className="p-4 text-center font-bold">0%</td>
                  <td className="p-4 text-center text-destructive">35%</td>
                  <td className="p-4 text-center">0%</td>
                </tr>
                <tr>
                  <td className="p-4">Time Investment</td>
                  <td className="p-4 text-center font-bold">None</td>
                  <td className="p-4 text-center">Low</td>
                  <td className="p-4 text-center text-destructive">High</td>
                </tr>
                <tr>
                  <td className="p-4">Exclusive Leads</td>
                  <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 fill-green-600 text-white mx-auto" /></td>
                  <td className="p-4 text-center text-destructive">Shared (3-4 agents)</td>
                  <td className="p-4 text-center text-destructive">✗</td>
                </tr>
                <tr>
                  <td className="p-4">Proven ROI</td>
                  <td className="p-4 text-center font-bold">$4-$12 per $1</td>
                  <td className="p-4 text-center">Variable</td>
                  <td className="p-4 text-center">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Your Custom Quote?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a campaign that fits your market and budget
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Book a Call Now</a>
            </Button>
            <p className="text-sm mt-4 opacity-75">
              No obligation • 24/7 Support • Custom solutions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
