import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ListHook",
  description: "Learn about how ListHook uses cookies.",
};

export default function CookiesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: March 15, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Remembering your preferences</li>
                <li>Understanding how you use our platform</li>
                <li>Providing personalized experiences</li>
                <li>Securing your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">2.1 Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Required for the platform to function:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Authentication and security</li>
                    <li>Account preferences</li>
                    <li>Shopping cart functionality</li>
                    <li>Basic site operations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">2.2 Analytics Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Help us improve our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Usage patterns</li>
                    <li>Feature popularity</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">2.3 Marketing Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Used for advertising and promotion:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Targeted advertising</li>
                    <li>Campaign tracking</li>
                    <li>Social media integration</li>
                    <li>Conversion measurement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Cookie Management</h2>
              <p className="text-gray-600 leading-relaxed mb-3">You can manage cookies through:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Browser settings</li>
                <li>Our cookie preferences center</li>
                <li>Third-party opt-out tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We use services from:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Google Analytics</li>
                <li>Facebook Pixel</li>
                <li>Payment processors</li>
                <li>Marketing platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy periodically. We will notify you of any significant changes through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                For questions about our Cookie Policy, contact us at:
              </p>
              <div className="ml-4 space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:privacy@listhook.com" className="text-blue-600 hover:underline">
                    privacy@listhook.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 49 A Calhoun St, Charleston, SC 29401
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
