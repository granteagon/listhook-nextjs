import WorkflowSection from "@/components/WorkflowSection";
import { Calendar, Clock, CheckCircle2, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookCall() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Video className="h-4 w-4" />
              Free Strategy Call
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Book Your Free <span className="text-primary">Strategy Call</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              30-minute consultation to discuss your market, goals, and how ListHook can help you generate more leads
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                <span>100% Risk-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                <span>No Sales Pitch</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="group" asChild>
                <a href="https://calendar.app.google/aj7f6eLUnNYEX9R5A" target="_blank" rel="noopener noreferrer">
                  Choose Your Time
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Pick a time that works best for you
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* What We'll Cover */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold mb-6">What We'll Cover</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Your Target Market</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll analyze your farming areas and identify the best opportunities for lead generation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 fill-primary text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Campaign Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to automate your marketing and build a consistent pipeline of qualified leads
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI Projection</h3>
                    <p className="text-sm text-muted-foreground">
                      See exactly how much you could save vs. traditional lead portals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Live Demo</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll show you the platform and how it works for agents like you
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <Button size="lg" className="w-full" variant="outline" asChild>
                  <a href="https://calendar.app.google/aj7f6eLUnNYEX9R5A" target="_blank" rel="noopener noreferrer">
                    View Available Times
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Who This Call Is For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-primary text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real estate agents who want to own their leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-primary text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Professionals tired of paying high portal fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-primary text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Agents ready to build a sustainable pipeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-primary text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Anyone looking to automate their marketing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">100% Risk-Free</h3>
                <p className="opacity-90 mb-4">
                  This is a no-pressure consultation to see if ListHook is right for you. No obligation to buy anything.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>30 minutes • Zoom call</span>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-bold mb-4">What Happens After Booking?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Calendar Invite Sent</p>
                      <p className="text-sm text-muted-foreground">You'll receive a confirmation email with the Zoom link</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Quick Prep Call</p>
                      <p className="text-sm text-muted-foreground">We'll ask about your target areas (optional)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Strategy Session</p>
                      <p className="text-sm text-muted-foreground">30-minute call where we discuss your goals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Custom Proposal</p>
                      <p className="text-sm text-muted-foreground">If it's a fit, we'll send a tailored plan</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What Agents Say About Our Calls
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The strategy call was incredibly helpful. They showed me exactly how I could replace my Zillow spend with better ROI."
              </p>
              <p className="font-semibold">- Sarah M., Los Angeles</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Zero pressure, all value. They took the time to understand my market and gave me a custom plan that actually made sense."
              </p>
              <p className="font-semibold">- Mike R., Austin</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Best 30 minutes I've spent on my business this year. Wish I'd booked this call months ago!"
              </p>
              <p className="font-semibold">- Jennifer K., Miami</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <a href="https://calendar.app.google/aj7f6eLUnNYEX9R5A" target="_blank" rel="noopener noreferrer">
                Book Your Free Call Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WorkflowSection />
    </main>
  );
}
