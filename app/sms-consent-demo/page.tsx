'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import Link from "next/link";

export default function SmsConsentDemo() {
  return (
    <div className="py-20 lg:py-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full mb-6">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Compliance Demonstration Page
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            SMS Consent Demonstration
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This page demonstrates our SMS opt-in workflow for Twilio A2P 10DLC compliance verification.
            All form elements below are disabled for demonstration purposes only.
          </p>
        </div>

        {/* Demo Form Card */}
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-large border">
            <h2 className="text-2xl font-bold mb-6">Complete Your Account</h2>

            {/* Phone Number Input */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Mobile Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value="(843) 555-1234"
                disabled
                className="bg-muted"
              />
            </div>

            {/* SMS Consent Checkbox */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="sms_consent"
                  checked
                  disabled
                  className="mt-1 flex-shrink-0"
                />
                <label htmlFor="sms_consent" className="text-sm leading-relaxed cursor-default">
                  By providing your phone number and checking this box, you agree to receive transactional
                  and alert text messages from <strong>ListHook</strong> at the number provided. These messages
                  will include <strong>new lead notifications</strong>, <strong>account security codes (2FA)</strong>,
                  and <strong>important account updates</strong>.
                  <br /><br />
                  <strong>Consent is not a condition of service.</strong> Msg frequency varies. Msg & data rates may apply.
                  You may opt-out at any time by replying <strong>STOP</strong>.
                  View our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link href="/terms-of-service" className="text-primary hover:underline font-medium">
                    Terms of Service
                  </Link>.
                </label>
              </div>
            </div>

            {/* Complete Registration Button */}
            <Button
              disabled
              size="lg"
              className="w-full mb-4"
            >
              Complete Registration
            </Button>

            {/* Disclaimer */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                This is a non-functional demonstration page for compliance verification purposes only.
                No data is collected or processed through this form.
              </p>
            </div>
          </div>

          {/* Additional Context */}
          <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-500 dark:border-blue-600">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
              About This Page
            </h3>
            <p className="text-sm text-gray-900 dark:text-gray-100 mb-3">
              This demonstration page shows exactly how ListHook obtains SMS consent from users during registration.
              It is provided for Twilio A2P 10DLC compliance verification.
            </p>
            <ul className="text-sm text-gray-900 dark:text-gray-100 space-y-1">
              <li>✓ Clear opt-in language with checkbox</li>
              <li>✓ Explicit consent required before registration</li>
              <li>✓ Purpose of messages clearly stated</li>
              <li>✓ Opt-out instructions included</li>
              <li>✓ Links to Privacy Policy and Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
  );
}
