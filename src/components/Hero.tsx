import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-bold text-accent">4.9</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div> */}

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Your Leads. Your Commission. Done For You.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              Stop renting shared leads from big tech. ListHook is the white-glove marketing service that generates exclusive seller leads in your farm. We do all the work. You keep 100% of the commission.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="/book-call">Schedule Your Lead Strategy Call</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/how-it-works">See How It Works</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                <span className="text-sm font-medium">100% Lead Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                <span className="text-sm font-medium">0% Commission</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
                <span className="text-sm font-medium">100% Automated</span>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-extrabold text-accent">$4-$12</div>
                <div className="text-sm text-muted-foreground">ROI per $1 spent</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-accent">0%</div>
                <div className="text-sm text-muted-foreground">Commission taken</div>
              </div>
            </div> */}
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 shadow-large overflow-hidden">
              <Image
                src="/images/hero-realtor-notifications.png"
                alt="Real estate agent with successful property sold and new lead notifications"
                width={800}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
