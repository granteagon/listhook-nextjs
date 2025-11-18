'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const WorkflowSection = () => {
  const router = useRouter();

  const steps = [
    {
      number: 1,
      title: "Set Your Goals",
      description: "Choose targets & budget",
    },
    {
      number: 2,
      title: "We Send Postcards",
      description: "Automated printing & mailing",
    },
    {
      number: 3,
      title: "Track Leads & Close Deals",
      description: "Real-time notifications & 100% lead ownership",
    },
  ];

  return (
    <section className="mb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-0 items-center bg-card rounded-2xl overflow-hidden shadow-lg">
          {/* Left side - Blue background */}
          <div className="bg-primary text-primary-foreground p-12 lg:p-16">
            <h2 className="text-4xl font-bold mb-6">See How It All Works Together</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              From campaign creation to lead notification, every feature is designed to work seamlessly together to grow
              your business.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => router.push("/how-it-works")}
            >
              View Step-by-Step Guide
            </Button>
          </div>

          {/* Right side - Steps */}
          <div className="p-12 lg:p-8 space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
