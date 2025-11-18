import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SolutionsSection from "@/components/SolutionsSection";
import HomePricingSection from "@/components/HomePricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SolutionsSection />
        <HomePricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
