'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorkflowSection from "@/components/WorkflowSection";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, Shield, Users, HeartHandshake, Zap, Clock, Palette } from "lucide-react";

export default function AboutUs() {
  const router = useRouter();

  const stats = [
    { value: "2024", label: "Year Founded" },
    { value: "500+", label: "Active Users" },
    { value: "5k+", label: "Campaigns Sent" },
    { value: "1000+", label: "Leads Generated" },
  ];

  const values = [
    {
      icon: Zap,
      title: "Simplicity",
      description: "We prioritize ease of use, ensuring that our platform is simple and intuitive for everyone, regardless of technical expertise.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "ListHook is designed for all, from small business owners to real estate professionals, making direct mail marketing simple for everyone.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your data is always safe with us. We use industry-leading security protocols to protect your information at every step.",
    },
    {
      icon: HeartHandshake,
      title: "Customer-Centricity",
      description: "We place our users at the heart of everything we do, continuously improving based on their feedback and needs.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock, offering immediate assistance whenever you need it.",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "We believe functionality should come with style. Our UI is both functional and visually appealing, creating an enjoyable experience.",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section - Our Story */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-4 uppercase tracking-wide">About Us</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  In 2024, a group of passionate marketers and engineers came together with a shared vision.
                  They were driven by the dream of revolutionizing direct mail marketing through automation and technology.
                </p>
                <p>
                  They envisioned a tool so versatile and intuitive that it could seamlessly help businesses of all sizes
                  reach their target audience through the power of personalized postcards, without the hassle of traditional methods.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="transform rotate-2 hover:rotate-0 transition-transform">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">John Smith</h3>
                      <p className="text-sm text-muted-foreground">Co-Founder</p>
                    </CardContent>
                  </Card>
                  <Card className="transform -rotate-2 hover:rotate-0 transition-transform mt-8">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Co-Founder</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide">What Drives Us?</p>
            <h2 className="text-4xl font-bold">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide">Offices</p>
            <h2 className="text-4xl font-bold mb-4">Meet Us</h2>
            <p className="text-xl text-muted-foreground">
              Come visit us at one of our welcoming office locations—we'd love to see you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">United States</h3>
                <p className="text-muted-foreground">
                  Florida, Miami<br />
                  1234 Business Blvd, Suite 100<br />
                  Miami, FL 33101
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Remote Office</h3>
                <p className="text-muted-foreground">
                  We're a distributed team!<br />
                  Work with us from anywhere<br />
                  in the world
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <blockquote className="text-2xl font-semibold mb-8">
              "Automation is a cornerstone of success for any modern business"
            </blockquote>
            <div>
              <h3 className="text-xl font-bold mb-4">Why wait?</h3>
              <p className="text-3xl font-bold mb-6">Start Growing Your Business!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => router.push("/book-call")}>
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" onClick={() => router.push("/contact")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  24/7 Support
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Free to Start
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowSection />
    </main>
  );
}
