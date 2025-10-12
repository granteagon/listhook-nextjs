import Link from 'next/link';
import Container from './ui/Container';

export default function Footer() {
  const productLinks = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/how-it-works', label: 'How It Works' }
  ];

  const companyLinks = [
    { href: '/about', label: 'About' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' }
  ];

  const legalLinks = [
    { href: '/terms', label: 'Terms' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/twilio-verification', label: 'Twilio Verification' }
  ];

  const socialLinks = [
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
    { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
    { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <div className="text-2xl font-bold text-white">
                  ListHook
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                AI-powered postcard marketing that happens automatically for real estate agents.
                Turn new listings into automatic, targeted marketing campaigns.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <span className="text-sm">{social.icon[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; 2025 ListHook. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
