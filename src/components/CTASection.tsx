import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            Ready to Own Your Leads?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop renting your business from big tech. Start building your own exclusive pipeline with ListHook's white-glove service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <a href="/book-call">Schedule Your Lead Strategy Call</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background" asChild>
              <a href="/how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
              <span>100% Lead Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
              <span>0% Commission Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 fill-green-600 text-white" />
              <span>100% Hands-Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
