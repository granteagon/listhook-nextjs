import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Transparent Pricing
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-3 lg:mb-4 text-center lg:text-left">
              Custom Campaigns That Fit Your Market
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-6 max-w-xl text-center lg:text-left">
              Pricing tailored to your target area and goals. Most agents invest $500-$2,000/month.
            </p>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              See Full Pricing Details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="overflow-hidden rounded-3xl bg-card border border-border max-w-md w-full">
                <div className="border-b border-border p-6">
                  <h3 className="text-xl font-extrabold mb-3 uppercase">Custom Quote</h3>
                  <div className="text-3xl font-black mb-3 text-primary">
                    $500-$2,000
                    <span className="text-base font-normal text-muted-foreground ml-2">/ month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pricing varies based on your target area, mailing frequency, and campaign volume
                  </p>
                </div>

                <div className="pt-6">
                  <ul className="space-y-3 px-6 pb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Professional postcard design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Automated printing & mailing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm">QR code tracking technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Real-time lead notifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 fill-green-600 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm">100% lead ownership</span>
                    </li>
                  </ul>

                  <div className="px-6 pb-6">
                    <Button size="lg" className="w-full" asChild>
                      <a href="/contact">Get Your Custom Quote</a>
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      No obligation. We'll create a custom plan for your market.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricingSection;
