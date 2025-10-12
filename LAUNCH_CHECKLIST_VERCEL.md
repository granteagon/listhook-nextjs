# Launch Readiness Checklist

This comprehensive checklist covers all operational aspects for taking your ListHook Next.js site from development to production. Follow each section methodically to ensure a smooth launch.

---

## Pre-Launch Checklist

### 1. Deployment & Environment

#### Hosting Platform Selection
- [ ] **Choose hosting platform** - Vercel is highly recommended for Next.js (zero-config deployment, automatic HTTPS, edge CDN)
  - Alternative options: Netlify, AWS Amplify, Railway, or self-hosted on DigitalOcean/AWS
  - Vercel free tier includes: 100GB bandwidth, serverless functions, automatic SSL, preview deployments

#### Environment Configuration
- [ ] **Review environment variables** - Currently no `.env` file in project, but consider adding:
  ```bash
  # For contact form integration
  RESEND_API_KEY=re_xxxxx
  CONTACT_EMAIL_TO=support@listhook.com

  # For analytics (if needed)
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

  # For error tracking (if using Sentry)
  SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
  ```

- [ ] **Configure production domain**
  - Add custom domain in Vercel dashboard
  - Example: `listhook.com` and `www.listhook.com`

- [ ] **Test contact form submission** (CRITICAL - currently only console.logs)
  - Contact form at `/contact` needs actual email integration
  - See "Contact Form Integration Options" section below

- [ ] **Set up email service**
  - Choose between Resend, SendGrid, or Vercel Forms (see comparison below)
  - Add API routes to handle form submissions
  - Test email delivery to your support inbox

#### Build & Deployment Test
- [ ] **Run production build locally**
  ```bash
  cd /Users/Grant.Eagon/Repos/listhook-nextjs
  npm run build
  npm run start
  ```
  - Verify no build errors
  - Check for console warnings
  - Test all pages load correctly at `localhost:3000`

---

### 2. DNS & Domain

#### DNS Configuration
- [ ] **Prepare DNS records** for cutover (don't change yet!)
  ```
  # For Vercel
  A record:     @        76.76.21.21
  CNAME record: www      cname.vercel-dns.com
  ```

- [ ] **Plan DNS TTL reduction** (24-48 hours before launch)
  - Lower TTL to 300 seconds (5 minutes) to speed up propagation
  - Do this at least 1 day before launch

- [ ] **SSL certificate** - Automatic with Vercel
  - Vercel auto-provisions Let's Encrypt certificates
  - No action needed, but verify HTTPS works after DNS cutover

- [ ] **Configure www vs non-www redirect**
  - In `next.config.ts`, add redirects if needed:
  ```typescript
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.listhook.com' }],
      destination: 'https://listhook.com/:path*',
      permanent: true,
    },
  ],
  ```

- [ ] **Estimate downtime window**
  - DNS propagation: 5 minutes to 24 hours (typically < 1 hour with low TTL)
  - Recommended launch: Friday evening or Saturday morning (low traffic)
  - Have rollback plan: keep old DNS records documented

---

### 3. SEO & Redirects (CRITICAL)

#### Route Mapping & Redirects
**This is the most critical section for preserving SEO rankings.**

- [ ] **Map old React SPA routes to new Next.js routes** (see table below)
- [ ] **Create 301 redirect rules** in `next.config.ts`
- [ ] **Test all old URLs redirect properly**
  - Use curl or browser to test each old route
  - Verify 301 status codes (permanent redirect)

- [ ] **Example redirect configuration:**
  ```typescript
  // next.config.ts
  const config = {
    redirects: async () => [
      // Add old SPA routes here if they differ
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ],
  };
  ```

#### Search Console & Sitemaps
- [ ] **Submit new sitemap to Google Search Console**
  - Create `app/sitemap.ts` (Next.js will auto-generate XML)
  - Submit to: `https://search.google.com/search-console`
  - Monitor for crawl errors

- [ ] **Update robots.txt** if domain changes
  - Create `app/robots.ts` or use static `public/robots.txt`
  ```typescript
  // app/robots.ts
  export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      sitemap: 'https://listhook.com/sitemap.xml',
    };
  }
  ```

- [ ] **Verify Google Search Console ownership**
  - Add verification meta tag to `app/layout.tsx` or
  - Upload verification file to `public/` directory

---

### 4. Content & Assets

#### Open Graph & Social Media
- [ ] **Create Open Graph image** (`public/og-image.png`)
  - Dimensions: 1200x630px
  - Include ListHook logo and tagline
  - Used for social media previews (Facebook, Twitter, LinkedIn)
  - Currently using default in `app/layout.tsx` metadata

- [ ] **Verify all images load properly**
  - Check images in `public/` directory:
    - `/public/logo.png` - Exists
    - `/public/og-image.png` - **MISSING - NEEDS CREATION**
    - Blog post images if applicable

- [ ] **Check all internal links work**
  - Test navigation between all pages
  - Verify footer links
  - Check blog post links if applicable
  - Use Chrome DevTools Network tab to catch 404s

#### Content Verification
- [ ] **Review all placeholder content**
  - Contact information (phone, email, address) in `/contact` page
  - Update placeholder text: "123 Business Ave" → actual address
  - Verify business hours are accurate

- [ ] **Spell check all pages**
  - Run through Grammarly or similar
  - Have non-technical team member review

---

### 5. Forms & Integrations

#### Contact Form Implementation (CRITICAL)
**Current status:** Form only logs to console (line 38 in `app/contact/page.tsx`)

- [ ] **Choose integration method** (see comparison below)
- [ ] **Implement server-side form handler**
  - Create API route: `app/api/contact/route.ts`
  - Add server-side validation
  - Integrate with email service

- [ ] **Test contact form end-to-end**
  - Fill out form on staging/preview
  - Verify email arrives in support inbox
  - Check email formatting
  - Test with invalid data (validation)
  - Test on mobile devices

- [ ] **Verify email delivery**
  - Test from multiple email providers (Gmail, Outlook, etc.)
  - Check spam folders
  - Verify sender reputation (SPF, DKIM records)

- [ ] **Set up form submission notifications**
  - Email to support team
  - Optional: Slack webhook notification
  - Optional: CRM integration (see below)

#### CRM Integration (Optional)
- [ ] **Consider CRM integration**
  - HubSpot: Native Next.js integration available
  - Salesforce: Use REST API
  - Pipedrive: Webhook integration
  - Zapier: Connect form to any CRM (easiest option)

---

### 6. Analytics & Monitoring

#### Analytics Setup
- [ ] **Install Google Analytics 4 or Plausible**

  **Option 1: Google Analytics (Free)**
  ```typescript
  // app/layout.tsx - Add to <head>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `}
  </Script>
  ```

  **Option 2: Plausible (Privacy-focused, paid)**
  - Simpler, no cookie consent needed
  - $9/mo for 10k pageviews
  - Add script tag: `<script defer data-domain="listhook.com" src="https://plausible.io/js/script.js"></script>`

- [ ] **Set up Vercel Analytics** (Built-in, free)
  - Enable in Vercel dashboard
  - Provides Web Vitals data (LCP, FID, CLS)
  ```bash
  npm install @vercel/analytics
  ```
  ```typescript
  // app/layout.tsx
  import { Analytics } from '@vercel/analytics/react';

  export default function RootLayout({ children }) {
    return (
      <html>
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    );
  }
  ```

- [ ] **Configure error tracking with Sentry**
  ```bash
  npm install @sentry/nextjs
  npx @sentry/wizard@latest -i nextjs
  ```
  - Captures runtime errors, unhandled promises
  - Provides stack traces and user context
  - Free tier: 5,000 events/month

#### Uptime Monitoring
- [ ] **Set up uptime monitoring**
  - **BetterStack** (formerly Better Uptime) - Free tier available
  - **UptimeRobot** - Free for up to 50 monitors
  - **Pingdom** - Paid, more advanced
  - Monitor: Homepage, contact form submission, API health

- [ ] **Create alerts for form failures**
  - Monitor `/api/contact` endpoint response codes
  - Alert on 5xx errors or high 4xx rates
  - Set up email/SMS notifications

---

### 7. Testing & Validation

#### Pre-Production Testing
- [ ] **Deploy to staging/preview environment**
  - Vercel creates automatic preview URLs for each commit
  - Use preview URL for final testing
  - Share with stakeholders: `your-site-git-main-yourname.vercel.app`

- [ ] **Non-technical stakeholder review**
  - Share preview URL with marketing, sales team
  - Create feedback form or Slack channel
  - Address all content/design feedback

#### Cross-Device Testing
- [ ] **Test on mobile devices**
  - iOS Safari (iPhone)
  - Android Chrome
  - Test portrait and landscape orientations
  - Verify touch targets are large enough (48x48px minimum)

- [ ] **Test all browsers**
  - Chrome (latest)
  - Safari (latest)
  - Firefox (latest)
  - Edge (latest)
  - Optional: Check IE11 support (likely not needed)

#### Accessibility Audit
- [ ] **Run accessibility audit**
  - Use Chrome DevTools Lighthouse (Accessibility score)
  - Use WAVE browser extension: `https://wave.webaim.org/`
  - Check keyboard navigation (Tab, Enter, Escape)
  - Verify screen reader support (macOS VoiceOver or NVDA)
  - Target: WCAG 2.1 Level AA compliance

- [ ] **Accessibility checklist:**
  - [ ] All images have alt text
  - [ ] Form inputs have labels
  - [ ] Color contrast ratio ≥ 4.5:1
  - [ ] Focus indicators visible
  - [ ] Semantic HTML used
  - [ ] ARIA labels where needed

#### Performance Testing
- [ ] **Run PageSpeed Insights**
  - Test on: `https://pagespeed.web.dev/`
  - Target scores:
    - Performance: ≥ 90
    - Accessibility: ≥ 90
    - Best Practices: ≥ 90
    - SEO: 100
  - Optimize images if needed (use WebP format)
  - Check Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)

- [ ] **Test on slow 3G connection**
  - Chrome DevTools → Network tab → Throttling → Slow 3G
  - Verify page is usable on slow connections
  - Check loading states and skeleton screens

---

## Launch Day Checklist

### Pre-Launch (2 hours before)
- [ ] **Final backup of old site**
  - Export all content from old CMS (if applicable)
  - Save old site files to archive folder
  - Document old hosting credentials
  - Take screenshots of old site for reference

- [ ] **Notify team of launch window**
  - Send Slack message with timeline
  - Assign roles (who monitors what)
  - Set up war room (Zoom/Slack channel)

### Launch (Go Time)
- [ ] **Deploy to production on Vercel**
  ```bash
  git push origin main
  # Or manually deploy in Vercel dashboard
  ```
  - Verify deployment succeeds
  - Check deployment logs for errors
  - Test production URL before DNS switch

- [ ] **Switch DNS records**
  - Update A record to point to Vercel
  - Update CNAME record for www subdomain
  - Document old DNS settings for rollback

- [ ] **Monitor DNS propagation**
  - Check: `https://dnschecker.org/`
  - Verify A record shows new IP globally
  - Typically takes 5-30 minutes with low TTL

### Post-Launch (First Hour)
- [ ] **Test live site**
  - Visit `https://listhook.com` (use incognito mode)
  - Test contact form submission
  - Check HTTPS certificate is valid (green padlock)
  - Verify all pages load correctly

- [ ] **Monitor error logs**
  - Check Vercel deployment logs
  - Monitor Sentry for errors (if configured)
  - Watch Vercel Analytics for traffic

- [ ] **Test contact form live**
  - Submit test message from contact page
  - Verify email arrives in support inbox
  - Confirm auto-responder works (if configured)

- [ ] **Check analytics tracking**
  - Visit site and generate pageview
  - Verify event appears in Google Analytics (real-time view)
  - Check Vercel Analytics dashboard

- [ ] **Test social media previews**
  - Facebook Debugger: `https://developers.facebook.com/tools/debug/`
  - Twitter Card Validator: `https://cards-dev.twitter.com/validator`
  - LinkedIn Post Inspector: `https://www.linkedin.com/post-inspector/`
  - Should show Open Graph image and metadata

---

## Post-Launch Checklist (Week 1)

### Daily Monitoring
- [ ] **Monitor Google Search Console**
  - Check for crawl errors
  - Verify new pages are being indexed
  - Monitor search impressions and clicks
  - Check mobile usability issues

- [ ] **Check 404 errors**
  - Review server logs for 404s
  - Add redirects for any broken links
  - Common causes: old blog posts, changed URLs

- [ ] **Review form submissions**
  - Check all contact form emails arrived
  - Verify no spam submissions
  - Respond to all inquiries within 24 hours

### Weekly Tasks
- [ ] **Check analytics data**
  - Review traffic sources
  - Analyze bounce rates by page
  - Check conversion funnel
  - Compare to old site (if data available)

- [ ] **Review performance metrics**
  - Check PageSpeed Insights scores
  - Monitor Core Web Vitals in Search Console
  - Review Vercel Analytics Web Vitals

- [ ] **Error review**
  - Check Sentry for recurring errors
  - Review Vercel function logs
  - Fix any critical issues

### Cleanup Tasks
- [ ] **Archive old repository**
  - Move old React SPA repo to archive folder
  - Add README noting it's deprecated
  - Keep for reference but don't update

- [ ] **Decommission old hosting**
  - Cancel old hosting subscription
  - Export any remaining data
  - Update billing to remove charges
  - **Savings:** Estimate cost reduction vs. old hosting

- [ ] **Update documentation**
  - Document new deployment process
  - Update team wiki with new site info
  - Create runbook for common tasks

---

## Redirect Mapping

### Current Next.js Routes
Based on the project structure, these routes are available:

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage | ✅ Live |
| `/features` | Features overview | ✅ Live |
| `/how-it-works` | Product explanation | ✅ Live |
| `/pricing` | Pricing plans | ✅ Live |
| `/success-stories` | Customer testimonials | ✅ Live |
| `/contact` | Contact form | ✅ Live (needs integration) |
| `/blog` | Blog listing | ✅ Live |
| `/blog/[slug]` | Individual blog posts | ✅ Live |
| `/twilio-verification` | Twilio integration page | ✅ Live |
| `/privacy` | Privacy policy | ✅ Live |
| `/terms` | Terms of service | ✅ Live |
| `/cookies` | Cookie policy | ✅ Live |

### Redirect Configuration Template

If your old React SPA had different routes, add redirects in `next.config.ts`:

```typescript
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,

  // Add redirects for old URLs
  redirects: async () => [
    // Example: Old route → New route
    {
      source: '/about',
      destination: '/features',
      permanent: true, // 301 redirect
    },
    {
      source: '/product',
      destination: '/how-it-works',
      permanent: true,
    },
    {
      source: '/plans',
      destination: '/pricing',
      permanent: true,
    },
    {
      source: '/testimonials',
      destination: '/success-stories',
      permanent: true,
    },
    // Blog redirects (if URL structure changed)
    {
      source: '/posts/:slug',
      destination: '/blog/:slug',
      permanent: true,
    },
    // Catch-all for old hash-based routes (SPA)
    {
      source: '/#/:path*',
      destination: '/:path*',
      permanent: true,
    },
  ],
};

export default config;
```

**Action Required:**
- [ ] Review old site URLs (use Screaming Frog or sitemap)
- [ ] List all URLs that changed between old and new site
- [ ] Add 301 redirects for each changed URL
- [ ] Test each redirect manually

---

## Contact Form Integration Options

Your contact form currently only logs to console. Here are three production-ready options:

### Option 1: Resend (Recommended)
**Best for:** Transactional emails, developer-friendly

**Pros:**
- Simple API, excellent DX
- Free tier: 100 emails/day, 3,000/month
- High deliverability
- React Email templates support
- Generous free tier for small businesses

**Cons:**
- Requires API key (environment variable)
- Paid plans start at $20/mo for 50k emails

**Implementation:**
```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'ListHook Contact Form <noreply@listhook.com>',
      to: ['support@listhook.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

**Setup Steps:**
1. Sign up at `https://resend.com`
2. Verify your domain (add DNS records)
3. Get API key from dashboard
4. Add to Vercel environment variables: `RESEND_API_KEY`
5. Update form to call `/api/contact` endpoint

---

### Option 2: SendGrid
**Best for:** Larger volume, advanced features

**Pros:**
- Industry standard
- Free tier: 100 emails/day forever
- Advanced analytics and tracking
- Email validation API included
- Marketing email capabilities

**Cons:**
- More complex setup
- Requires API key and domain verification
- Overkill for simple contact forms

**Implementation:**
```bash
npm install @sendgrid/mail
```

```typescript
// app/api/contact/route.ts
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    const msg = {
      to: 'support@listhook.com',
      from: 'noreply@listhook.com', // Must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

**Setup Steps:**
1. Sign up at `https://sendgrid.com`
2. Verify sender identity (email or domain)
3. Create API key with "Mail Send" permissions
4. Add to Vercel: `SENDGRID_API_KEY`
5. Configure SPF/DKIM records for better deliverability

---

### Option 3: Vercel Forms (Simplest)
**Best for:** Quick launch, minimal setup

**Pros:**
- No code required (almost)
- No API keys needed
- Built into Vercel platform
- Free tier: 100 submissions/month
- Stores submissions in Vercel dashboard

**Cons:**
- Limited customization
- No email notifications by default (need Zapier)
- Must check Vercel dashboard manually
- Paid: $10/mo for unlimited submissions

**Implementation:**
1. Add `data-netlify="true"` to form (Vercel equivalent coming)
2. Or use Vercel's form endpoint:

```typescript
// Update app/contact/page.tsx
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitSuccess(true);
      reset();
    } else {
      // Handle error
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

**Alternative:** Use Formspree (free tier: 50 forms/month)
- Sign up at `https://formspree.io`
- Get form endpoint URL
- Update form action to POST to Formspree endpoint

---

### Recommendation Matrix

| Criteria | Resend | SendGrid | Vercel Forms |
|----------|--------|----------|--------------|
| **Ease of Setup** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Developer Experience** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Free Tier Generosity** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Deliverability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Customization** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Best For** | Small-medium biz | Enterprise | Quick MVP |

**Final Recommendation:** Use **Resend** for best balance of simplicity and features.

---

## Monitoring & Alerting Setup

### Vercel Setup

#### 1. Enable Vercel Analytics
```bash
cd /Users/Grant.Eagon/Repos/listhook-nextjs
npm install @vercel/analytics @vercel/speed-insights
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

#### 2. Configure Deployment Notifications
- Go to Vercel dashboard → Project Settings → Notifications
- Enable notifications for:
  - Deployment failures
  - Build errors
  - Performance issues
- Add Slack webhook (optional):
  - Vercel → Integrations → Slack
  - Choose channel for notifications

#### 3. Set Up Log Drains
- Vercel → Project Settings → Log Drains
- Options:
  - Datadog
  - New Relic
  - Axiom (free tier available)
  - Custom webhook

---

### Google Analytics Setup

#### 1. Create GA4 Property
1. Visit `https://analytics.google.com`
2. Create new property: "ListHook Website"
3. Set timezone and currency
4. Copy Measurement ID (format: `G-XXXXXXXXXX`)

#### 2. Add to Next.js
```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

#### 3. Configure Events
Track important actions:
```typescript
// utils/analytics.ts
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Usage in contact form:
trackEvent('form_submit', {
  form_name: 'contact',
  form_destination: '/contact',
});
```

#### 4. Set Up Conversion Goals
- GA4 Dashboard → Events → Mark as Conversion
- Key conversions to track:
  - Form submissions
  - Phone clicks
  - Email clicks
  - Pricing page views

---

### Sentry Setup

#### 1. Install Sentry
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

This wizard creates:
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- Updates `next.config.ts`

#### 2. Configure Sentry
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100% of transactions
  // In production, lower this value to reduce volume
  tracesSampleRate: 0.1,

  // Capture Replay for 10% of all sessions,
  // plus 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Filter out sensitive data
  beforeSend(event, hint) {
    // Don't send error if it contains sensitive data
    if (event.exception) {
      // Filter out errors from browser extensions
      const error = hint.originalException;
      if (error && error.message && error.message.includes('chrome-extension')) {
        return null;
      }
    }
    return event;
  },
});
```

#### 3. Create Alerts
- Sentry → Alerts → Create Alert Rule
- Suggested alerts:
  - **High error rate:** > 10 errors in 5 minutes
  - **New issue:** Alert on first occurrence of new error
  - **Regression:** Alert when resolved issue happens again

#### 4. Integration with Slack
- Sentry → Settings → Integrations → Slack
- Choose channel for notifications
- Configure notification rules

---

### Uptime Monitoring Setup

#### Option 1: BetterStack (Recommended)
1. Sign up at `https://betterstack.com/uptime`
2. Create monitor:
   - URL: `https://listhook.com`
   - Check frequency: Every 30 seconds (free tier)
   - Regions: Multiple global locations
3. Add status page:
   - Public URL: `status.listhook.com`
   - Shows uptime history
4. Configure alerts:
   - Email notifications
   - Slack webhooks
   - SMS (paid)

#### Option 2: UptimeRobot
1. Sign up at `https://uptimerobot.com`
2. Create HTTP(s) monitor
3. Set check interval: 5 minutes (free)
4. Add alert contacts
5. Create public status page

---

### Monitoring Dashboard

Create a simple dashboard to monitor key metrics:

| Metric | Tool | Target | Alert Threshold |
|--------|------|--------|----------------|
| **Uptime** | BetterStack | 99.9% | < 99% |
| **Response Time** | Vercel Analytics | < 500ms | > 2s |
| **Error Rate** | Sentry | < 0.1% | > 1% |
| **Form Submissions** | Google Analytics | Track daily | N/A |
| **Core Web Vitals** | Search Console | All green | Any red |
| **Deployment Success** | Vercel | 100% | Any failure |

---

## Emergency Contacts & Rollback Plan

### Key Contacts
- **Developer:** [Your Name] - [Phone]
- **Product Owner:** [Name] - [Phone]
- **DNS Manager:** [Hosting provider support]

### Rollback Procedure
If critical issues arise during launch:

1. **Immediate rollback (DNS):**
   ```bash
   # Revert DNS records to old hosting
   # Update A record back to old IP
   ```

2. **Vercel rollback:**
   - Go to Vercel dashboard
   - Click "Deployments"
   - Find last working deployment
   - Click "..." → "Promote to Production"

3. **Communication:**
   - Notify team in Slack
   - Post status update if you have status page
   - Document what went wrong

---

## Final Pre-Launch Verification

Before you switch DNS, run through this quick checklist:

- [ ] Can you load the site on Vercel preview URL?
- [ ] Does the contact form work (test submission)?
- [ ] Do all images load?
- [ ] Does the site look correct on mobile?
- [ ] Is HTTPS working?
- [ ] Is analytics code installed?
- [ ] Have you tested at least one old URL redirect?
- [ ] Is the team aware of the launch?
- [ ] Do you have rollback credentials handy?

**If all checks pass, you're ready to launch!**

---

## Post-Launch Success Metrics

### Week 1 Goals
- [ ] Zero critical errors in Sentry
- [ ] 99%+ uptime
- [ ] All old URLs redirecting properly
- [ ] At least 3 contact form submissions received
- [ ] Analytics tracking confirmed

### Month 1 Goals
- [ ] Search Console shows new pages indexed
- [ ] Organic traffic matches or exceeds old site
- [ ] No 404 errors from external links
- [ ] Core Web Vitals all green
- [ ] Zero deployment failures

---

## Resources & Links

### Documentation
- Next.js Deployment: `https://nextjs.org/docs/deployment`
- Vercel Docs: `https://vercel.com/docs`
- Resend Docs: `https://resend.com/docs`
- Google Analytics: `https://support.google.com/analytics`

### Testing Tools
- PageSpeed Insights: `https://pagespeed.web.dev/`
- DNS Checker: `https://dnschecker.org/`
- SSL Test: `https://www.ssllabs.com/ssltest/`
- Accessibility Checker: `https://wave.webaim.org/`
- Social Media Preview:
  - Facebook: `https://developers.facebook.com/tools/debug/`
  - Twitter: `https://cards-dev.twitter.com/validator`
  - LinkedIn: `https://www.linkedin.com/post-inspector/`

### Support
- Vercel Support: `https://vercel.com/support`
- Next.js Discord: `https://nextjs.org/discord`
- Resend Support: support@resend.com

---

## Notes & Custom Instructions

### Project-Specific Details
- **Current directory:** `/Users/Grant.Eagon/Repos/listhook-nextjs`
- **Framework:** Next.js 15.5.4 with App Router
- **Styling:** Tailwind CSS v4
- **Form validation:** React Hook Form + Zod
- **Node version:** 20+ required

### Known Issues
- Contact form only logs to console (line 38 in `app/contact/page.tsx`)
- No Open Graph image created yet (`public/og-image.png` missing)
- Placeholder contact info in contact page (phone, address)

### Custom Redirects Needed
- Review old site and add specific redirects to `next.config.ts`
- Test with curl or browser before launch

---

**Good luck with your launch!** 🚀

Remember: Launch is just the beginning. Monitor closely for the first week, respond to any issues quickly, and iterate based on user feedback.
