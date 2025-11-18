import CTASection from "@/components/CTASection";
import WorkflowSection from "@/components/WorkflowSection";
import { CheckCircle2, QrCode, Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: QrCode,
    title: "The Strategy Call",
    description: "We'll meet one-on-one to identify your highest-opportunity farm and customize a lead-gen message that fits your market and your brand.",
  },
  {
    icon: Mail,
    title: "We Execute the Campaign",
    description: "Our team designs, prints, and mails your custom campaigns on a proven schedule. You don't lift a finger.",
  },
  {
    icon: CheckCircle2,
    title: "You Convert the Leads",
    description: "Exclusive seller leads go straight to your inbox. You just do what you do best: follow up, build relationships, and close deals.",
  },
];

export default function HowItWorks() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              We Handle the Marketing. You Handle the Closings.
            </h1>
            <p className="text-xl text-muted-foreground">
              Our white-glove service does all the work, so you can focus on what you do best.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">
                          Step {index + 1}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What You Don't Have To Do */}
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-2xl p-8 lg:p-12 shadow-medium mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What You Don't Have To Do Anymore
              </h2>
              <p className="text-xl text-muted-foreground">
                ListHook handles the heavy lifting so you can focus on closing deals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card/80 backdrop-blur rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">❌ Design Postcards</h3>
                <p className="text-muted-foreground">
                  No more spending hours in Canva or hiring designers. We create professional postcards for you.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">❌ Find Mailing Lists</h3>
                <p className="text-muted-foreground">
                  Stop buying outdated lists. Our system automatically identifies the best prospects in your target area.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">❌ Print & Mail</h3>
                <p className="text-muted-foreground">
                  No trips to the print shop or post office. We handle printing and mailing on your schedule.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">❌ Pay Lead Portal Fees</h3>
                <p className="text-muted-foreground">
                  Stop paying 25-35% commission to Zillow and others. Own 100% of your leads.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">❌ Share Leads</h3>
                <p className="text-muted-foreground">
                  No more competing with other agents for the same leads. Every prospect is exclusively yours.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">❌ Track Manually</h3>
                <p className="text-muted-foreground">
                  Forget spreadsheets and guesswork. Get instant notifications when prospects show interest.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-medium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  See It In Action
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong>Automated targeting:</strong> We identify homeowners most likely to sell in your chosen area
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong>Professional design:</strong> Eye-catching postcards that showcase your brand
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong>QR code tracking:</strong> Know exactly who's interested the moment they scan
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 fill-green-600 text-white mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong>Instant alerts:</strong> Get contact details sent directly to your phone
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Started Today</a>
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://listhook.com/images/new-prospect-notification.png"
                  alt="Instant notification example"
                  className="w-full rounded-lg shadow-soft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold mb-3">How often are postcards sent?</h3>
              <p className="text-muted-foreground">
                You choose the frequency. Most agents start with monthly mailings, but you can adjust based on your budget and goals.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold mb-3">Can I customize the postcards?</h3>
              <p className="text-muted-foreground">
                Absolutely! Add your branding, photo, messaging, and choose from our professional templates or work with us on custom designs.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold mb-3">What happens when someone scans the QR code?</h3>
              <p className="text-muted-foreground">
                They're taken to a landing page where they can express interest. You receive an instant notification with their contact information and property details.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold mb-3">How do you select the mailing list?</h3>
              <p className="text-muted-foreground">
                We use property data to identify homeowners matching your criteria—location, property type, ownership duration, and other factors that indicate selling likelihood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <WorkflowSection />
    </main>
  );
}
