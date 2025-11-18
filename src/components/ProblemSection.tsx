import { DollarSign, Clock, TrendingDown, X } from "lucide-react";
import Image from "next/image";

const problems = [
  {
    icon: DollarSign,
    title: "Expensive Leads You Don't Own",
    description: "Zillow charges $1,500/month, takes 35% of your commission, and sells the same lead to 3 other agents.",
    image: "/images/not-your-leads.png"
  },
  {
    icon: Clock,
    title: "Social Media Takes Too Much Time",
    description: "You almost have to change your business from selling property to running a social media agency to be successful.",
    image: "/images/frustrated-social.png"
  },
  {
    icon: TrendingDown,
    title: "SEO is Tough to Win",
    description: "Competing on Google means going up against big teams or working with agencies that drain your budget with little to show for it.",
    image: "/images/frustrated-seo.png"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
              The Reality
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-3 lg:mb-4">
            The Problem with Digital Marketing
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Agents have no control and no time
          </p>
        </div>

        {/* Problems Alternating Layout */}
        <div className="space-y-12 lg:space-y-16 mb-24">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                {/* Text Content */}
                <div className={`space-y-6 lg:px-16 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="flex items-start gap-3">
                    {/* <div className="flex-shrink-0 mt-1">
                      <Icon className="h-6 w-6 text-destructive" />
                    </div> */}
                    <h3 className="text-3xl lg:text-4xl font-extrabold">{problem.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{problem.description}</p>
                </div>

                {/* Image */}
                <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="max-w-xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-soft">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        {/* <div className="bg-background rounded-3xl py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-6xl mx-auto">
            <div className="flex justify-center lg:justify-start">
              <div className="max-w-xl mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-soft max-h-[357px]">
                  <img
                    src={resultImage}
                    alt="Agent frustrated with expensive marketing"
                    className="w-full h-full object-cover max-h-[357px]"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:px-16">
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight">The Result?</h3>
              <p className="text-lg text-muted-foreground max-w-xl">
                You spend your time and money building the brand and revenue of another company while yours struggles to compete
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  <span className="text-base font-medium">They win</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  <span className="text-base font-medium">You lose</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  <span className="text-base font-medium">You pay for it</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div> 
    </section>
  );
};

export default ProblemSection;
