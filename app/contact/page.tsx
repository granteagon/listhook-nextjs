'use client'

import WorkflowSection from "@/components/WorkflowSection";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if Turnstile token is present
    if (!turnstileToken) {
      toast.error("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show specific error message from server
        const errorMessage = data.error || 'Failed to send message';
        const details = data.details ? '\n' + data.details.map((d: any) => d.message).join('\n') : '';
        toast.error(errorMessage + details);
        return;
      }

      // Success - show confirmation and reset form
      toast.success("Message sent successfully! We'll respond within 24 hours.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTurnstileToken(""); // Reset Turnstile token
    } catch (error) {
      // Network or unexpected error
      toast.error("Failed to send message. Please check your connection and try again.");
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Let's Talk About Your Marketing
            </h1>
            <p className="text-xl text-muted-foreground">
              Get a custom quote and see how ListHook can transform your lead generation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-large">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number * <span className="text-muted-foreground font-normal">(min 10 digits)</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    minLength={10}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Goals * <span className="text-muted-foreground font-normal">(min 10 characters)</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="What areas are you targeting? What's your typical budget for marketing?"
                    rows={5}
                    minLength={10}
                  />
                </div>

                {/* Turnstile Security Widget */}
                <div className="flex justify-center">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => {
                      setTurnstileToken("");
                      toast.error("Security verification failed. Please try again.");
                    }}
                    onExpire={() => setTurnstileToken("")}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !turnstileToken}>
                  {isSubmitting ? "Sending..." : "Get Your Custom Quote"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <a href="mailto:sales@listhook.com" className="text-primary hover:underline">
                        sales@listhook.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <a href="tel:+18434108360" className="text-primary hover:underline">
                        (843) 410-8360
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon-Fri 9am-6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        264 Alexandra Dr #5<br />
                        Mount Pleasant, SC 29464
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-medium">We Review Your Info</p>
                      <p className="text-sm text-muted-foreground">Our team analyzes your market and goals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Custom Quote Prepared</p>
                      <p className="text-sm text-muted-foreground">We create a tailored plan and pricing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Strategy Call</p>
                      <p className="text-sm text-muted-foreground">We discuss your campaign strategy together</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Launch Your Campaign</p>
                      <p className="text-sm text-muted-foreground">Start generating leads on autopilot</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">No Obligation Quote</h3>
                <p className="opacity-90">
                  We'll create a custom plan for your market with transparent pricing. No pressure, just options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowSection />
    </main>
  );
}
