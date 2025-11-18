import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ListHook",
  description: "Read the privacy policy for ListHook.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: March 15, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                ListHook (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our real estate marketing automation platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Name and contact information</li>
                    <li>Billing information and payment details</li>
                    <li>Real estate license information</li>
                    <li>MLS credentials and listing data</li>
                    <li>Marketing content and materials</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    When you use our platform, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Device and browser information</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and preferences</li>
                    <li>Marketing campaign performance data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process payments and billing</li>
                <li>Send marketing materials on your behalf</li>
                <li>Analyze and improve our platform</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Service providers and partners</li>
                <li>Payment processors</li>
                <li>Marketing and printing services</li>
                <li>Analytics providers</li>
                <li>Legal authorities when required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="ml-4 space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:privacy@listhook.com" className="text-primary hover:text-primary/80">
                    privacy@listhook.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 264 Alexandra Dr #5, Mount Pleasant, SC 29464
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
