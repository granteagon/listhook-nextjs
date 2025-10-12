import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Messaging Terms & Opt-In Policy | ListHook',
  description: 'SMS messaging terms, opt-in policy, and compliance information for ListHook SMS notifications.',
};

export default function TwilioVerificationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          SMS Messaging Terms & Opt-In Policy
        </h1>

        {/* Company Information Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Company Information
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Company Name:</strong> ListHook
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 49 A Calhoun St, Charleston, SC 29401
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:support@listhook.com" className="text-blue-600 hover:text-blue-800 underline">
                support@listhook.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-800 underline">
                (555) 123-4567
              </a>
            </p>
          </div>
        </section>

        {/* How to Opt-In Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Opt-In
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              By providing your mobile phone number when creating a postcard marketing campaign on ListHook,
              you are expressly consenting to receive SMS text messages from us. Your consent is obtained
              before any messages are sent to your device.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Types of Messages You'll Receive:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Campaign status notifications and updates</li>
              <li>Lead alerts when prospects respond to your campaigns</li>
              <li>Important account notifications</li>
              <li>Campaign performance summaries</li>
              <li>Service updates and announcements</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Consent to receive SMS messages is not a condition of purchase. Standard message and data
              rates may apply based on your mobile carrier plan.
            </p>
          </div>
        </section>

        {/* Message Frequency Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Message Frequency
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 mb-3">
              Message frequency varies based on your campaign activity and account settings.
              Typically, you can expect to receive:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>1-5 messages per active campaign</li>
              <li>Real-time lead notifications (frequency depends on campaign response rates)</li>
              <li>Occasional service announcements</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              Message and data rates may apply. The number of messages you receive will depend on
              your campaign volume and notification preferences.
            </p>
          </div>
        </section>

        {/* How to Opt-Out Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Opt-Out
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              You can opt-out of receiving SMS messages from ListHook at any time using any of
              the following methods:
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Text Message Opt-Out
              </h3>
              <p className="text-gray-700 mb-2">
                Reply to any message with one of the following keywords:
              </p>
              <p className="text-gray-900 font-mono font-bold text-lg mb-2">
                STOP | UNSUBSCRIBE | QUIT | CANCEL | END
              </p>
              <p className="text-gray-700 text-sm">
                You will receive a confirmation message confirming your opt-out request.
              </p>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Contact Support:</strong> You may also opt-out by contacting our support team at{' '}
                <a href="mailto:support@listhook.com" className="text-blue-600 hover:text-blue-800 underline">
                  support@listhook.com
                </a>{' '}
                or calling{' '}
                <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-800 underline">
                  (555) 123-4567
                </a>.
              </p>
              <p>
                <strong>Processing Time:</strong> Opt-out requests may take up to 48 hours to process.
                You may receive messages that were already in queue during this processing period.
              </p>
              <p className="text-sm italic">
                Note: Opting out of SMS messages will not affect your account access or other
                email communications.
              </p>
            </div>
          </div>
        </section>

        {/* Help Information Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Help & Support
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              If you need assistance or have questions about our SMS messaging service:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Text HELP:</strong> Reply with the keyword <span className="font-mono font-bold">HELP</span> to
                any message to receive assistance information
              </li>
              <li>
                <strong>Email Support:</strong>{' '}
                <a href="mailto:support@listhook.com" className="text-blue-600 hover:text-blue-800 underline">
                  support@listhook.com
                </a>
              </li>
              <li>
                <strong>Phone Support:</strong>{' '}
                <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-800 underline">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Privacy & Terms Links Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Privacy & Terms
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. We collect and use your mobile phone number and
              related SMS data in accordance with our Privacy Policy and Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Terms of Service
              </Link>
            </div>
            <p className="text-gray-700 text-sm">
              <strong>Data Collection & Usage:</strong> We collect your phone number to deliver
              SMS notifications related to your campaigns and account activity. This information
              is stored securely and is not shared with third parties except as necessary to
              deliver the SMS service (through our messaging provider) or as required by law.
              You can request deletion of your phone number by contacting support.
            </p>
          </div>
        </section>

        {/* Carrier Information Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Carrier Information
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>Supported Carriers:</strong> Our SMS service is compatible with all major
              U.S. wireless carriers, including but not limited to:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 text-gray-700">
              <div>AT&T</div>
              <div>T-Mobile</div>
              <div>Verizon</div>
              <div>Sprint</div>
              <div>U.S. Cellular</div>
              <div>Boost Mobile</div>
              <div>Cricket Wireless</div>
              <div>Metro by T-Mobile</div>
              <div>And other carriers</div>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
              <p className="text-gray-900 font-semibold mb-2">
                Important Carrier Notice:
              </p>
              <p className="text-gray-700 text-sm">
                Message and data rates may apply based on your mobile carrier plan. Carriers
                are not liable for delayed or undelivered messages. For questions about charges,
                contact your mobile carrier directly.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <footer className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-500 text-center">
            Last Updated: October 2025 | This page describes ListHook's SMS messaging compliance
            and opt-in/opt-out procedures in accordance with TCPA and carrier requirements.
          </p>
        </footer>
      </div>
    </div>
  );
}
