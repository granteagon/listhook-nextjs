import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SolutionsSection from "@/components/SolutionsSection";
import HomePricingSection from "@/components/HomePricingSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <SolutionsSection />
      <HomePricingSection />
      <CTASection />
    </main>
  );
}
