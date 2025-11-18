import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Professional Design",
    description: "Eye-catching postcards designed to stand out in the mailbox and drive responses",
    bgColor: "bg-primary/10"
  },
  {
    title: "Automated Campaigns",
    description: "Set your target area and schedule—we handle printing, postage, and delivery automatically",
    bgColor: "bg-accent/20"
  },
  {
    title: "Smart Lead Tracking",
    description: "QR codes on every postcard with instant notifications when homeowners scan to contact you",
    bgColor: "bg-primary/10"
  },
  {
    title: "Performance Analytics",
    description: "Track campaign performance and ROI to optimize your marketing spend",
    bgColor: "bg-accent/20"
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 md:gap-y-7 lg:gap-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                The Complete Solution
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 max-w-[800px] text-center md:mb-4">
              Everything You Need to Win Listings
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Professional postcards delivered to homeowners in your target area, automatically.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 md:pt-0 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-col-reverse items-stretch rounded-xl border border-border bg-card p-2 shadow-sm lg:flex-row">
                  {/* Text Content */}
                  <div className="flex flex-1 flex-col p-3 py-4 lg:p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold mb-2">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground lg:pr-8">
                        {solution.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <a
                        href="/how-it-works"
                        className="inline-flex w-auto items-center justify-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Image Placeholder - Desktop */}
                  <div className={`relative z-0 hidden h-[160px] overflow-hidden rounded-lg ${solution.bgColor} md:h-[244px] md:w-72 lg:block`}>
                    {/* Placeholder for future image */}
                  </div>

                  {/* Image Placeholder - Mobile */}
                  <div className={`relative overflow-hidden block h-[200px] rounded-lg ${solution.bgColor} lg:hidden`}>
                    {/* Placeholder for future image */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
