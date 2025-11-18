import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ListHook",
  description: "Read the terms of service for using ListHook.",
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: March 15, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using ListHook&apos;s platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                ListHook provides real estate marketing automation services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Automated postcard marketing campaigns</li>
                <li>Digital marketing integration</li>
                <li>Lead capture and tracking</li>
                <li>Marketing analytics and reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-3">To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Be at least 18 years old</li>
                <li>Hold a valid real estate license</li>
                <li>Provide accurate account information</li>
                <li>Maintain account security</li>
                <li>Comply with all applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-3">Users agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Pay all applicable fees and charges</li>
                <li>Maintain valid payment information</li>
                <li>Pay for all authorized charges</li>
                <li>Contact us about billing disputes within 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Content Guidelines</h2>
              <p className="text-gray-600 leading-relaxed mb-3">Users must ensure all marketing content:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Complies with real estate regulations</li>
                <li>Respects intellectual property rights</li>
                <li>Is truthful and accurate</li>
                <li>Does not violate privacy rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We reserve the right to suspend or terminate accounts that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Violate these terms</li>
                <li>Engage in fraudulent activity</li>
                <li>Fail to pay fees</li>
                <li>Misuse our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-3">ListHook is not liable for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Service interruptions</li>
                <li>Data loss or corruption</li>
                <li>Third-party actions</li>
                <li>Indirect or consequential damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                For questions about these Terms, contact us at:
              </p>
              <div className="ml-4 space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:legal@listhook.com" className="text-primary hover:text-primary/80">
                    legal@listhook.com
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
