import { Target, Zap, TrendingUp, Shield, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "1. You Own The Leads (Exclusive)",
    description: "No shared leads. No bidding wars. We target your farm, so when a seller raises their hand, they are talking only to you."
  },
  {
    icon: Zap,
    title: "2. You Focus on Closing (Hands-Off)",
    description: "You're a closer, not a direct mail manager. Our white-glove service handles the entire campaign—strategy, design, and execution—so you just handle the appointments."
  },
  {
    icon: TrendingUp,
    title: "3. You Keep The Commission (Zero Fees)",
    description: "Stop paying 35% referral fees for your own business. You pay a flat rate for the marketing. You keep 100% of the GCI. Period."
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium mb-6">
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
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Stop Renting Your Business. Start Owning It.
          </h1>
        </div>

        {/* Hero Image */}
        {/* <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-large">
            <img
              src={happyRealtorImage}
              alt="Happy realtor with successful lead notifications"
              className="w-full h-auto"
            />
          </div>
        </div> */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
