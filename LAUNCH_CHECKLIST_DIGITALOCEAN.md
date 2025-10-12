# DigitalOcean App Platform Launch Checklist

This checklist is specifically for deploying ListHook to DigitalOcean App Platform.

---

## Prerequisites

- [ ] DigitalOcean account created
- [ ] GitHub repository accessible
- [ ] Resend account with API key
- [ ] Custom domain ready (if applicable)

---

## Pre-Launch Setup

### 1. Environment Variables

Configure these in DigitalOcean App Platform dashboard (Settings → App-Level Environment Variables):

```
NODE_ENV=production
RESEND_API_KEY=re_xxxxx (mark as SECRET)
CONTACT_EMAIL_TO=support@listhook.com
```

### 2. App Platform Configuration

**Option A: Use `.do/app.yaml` (Recommended)**
- File already created at `.do/app.yaml`
- Update the `github.repo` field with your actual GitHub username/org
- DigitalOcean will auto-detect this file

**Option B: Configure via UI**
1. Go to DigitalOcean → Apps → Create App
2. Connect to GitHub repository
3. Select branch: `main`
4. Configure:
   - **Environment**: Node.js
   - **Build Command**: `npm ci && npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: 3000
   - **Instance Size**: Basic (512MB RAM) or higher

### 3. Local Build Test

```bash
cd /Users/Grant.Eagon/Repos/listhook-nextjs
npm run build
npm start
```

Verify:
- [ ] Build completes without errors
- [ ] Site loads at http://localhost:3000
- [ ] All pages accessible
- [ ] Contact form works (note: won't actually send email without RESEND_API_KEY)

---

## Deployment Process

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Configure for DigitalOcean App Platform deployment"
git push origin main
```

### Step 2: Create App in DigitalOcean

1. **Go to Apps dashboard**: https://cloud.digitalocean.com/apps
2. **Click "Create App"**
3. **Connect GitHub**:
   - Authorize DigitalOcean to access your GitHub repos
   - Select your repository
   - Choose branch: `main`
4. **Review Resources**:
   - Should auto-detect as Node.js app
   - Verify build/run commands match package.json
5. **Add Environment Variables**:
   - Add `RESEND_API_KEY` (mark as encrypted)
   - Add `CONTACT_EMAIL_TO`
   - `NODE_ENV` should be set automatically
6. **Choose Region**: Select closest to your target audience (e.g., NYC for East Coast US)
7. **Choose Plan**: Basic ($5/mo) or Professional ($12/mo)
8. **Name Your App**: `listhook` or `listhook-production`
9. **Click "Create Resources"**

### Step 3: Monitor Initial Deployment

- Watch build logs in DigitalOcean dashboard
- Initial build takes 3-5 minutes
- You'll get a temporary URL: `https://your-app-name.ondigitalocean.app`

---

## Post-Deployment Testing

### Immediate Checks (First 30 Minutes)

- [ ] **Visit app URL**: https://your-app-name.ondigitalocean.app
- [ ] **Test all pages**:
  - [ ] Homepage loads correctly
  - [ ] `/features` - Features page
  - [ ] `/pricing` - Pricing page
  - [ ] `/how-it-works` - Process explanation
  - [ ] `/success-stories` - Testimonials
  - [ ] `/contact` - Contact form
  - [ ] `/blog` - Blog listing
  - [ ] `/privacy`, `/terms`, `/cookies` - Legal pages

- [ ] **Test contact form**:
  - Fill out form with real email
  - Submit and verify success message
  - Check your email inbox for the submission
  - Verify email formatting looks correct

- [ ] **Check mobile responsiveness**:
  - Open on phone or use Chrome DevTools device emulator
  - Test navigation
  - Test contact form on mobile

- [ ] **Verify HTTPS**: Should be automatic, green padlock in browser

---

## Custom Domain Setup (Optional)

### Add Custom Domain in DigitalOcean

1. Go to App Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `listhook.com`
4. DigitalOcean provides DNS records to add

### Update DNS Records

Add these records at your domain registrar (e.g., Namecheap, GoDaddy):

```
Type: CNAME
Host: www
Value: your-app-name.ondigitalocean.app
TTL: 3600

Type: A
Host: @
Value: [IP provided by DigitalOcean]
TTL: 3600
```

**Note**: DNS propagation takes 5 minutes to 48 hours (typically < 1 hour)

### SSL Certificate

- DigitalOcean auto-provisions Let's Encrypt SSL
- Should be active within 5-10 minutes of DNS pointing correctly
- Verify at https://listhook.com (green padlock)

---

## Monitoring & Maintenance

### Built-in DigitalOcean Features

- [ ] **Enable email alerts**: App Settings → Notifications
  - Deployment failures
  - Resource warnings
  - Downtime alerts

- [ ] **Review metrics**: Runtime tab shows:
  - Request rate
  - Response times
  - Error rates
  - Memory usage

### Recommended External Monitoring

- [ ] **Uptime Monitoring**: UptimeRobot (free) or BetterStack
- [ ] **Error Tracking**: Sentry (5k events/month free)
- [ ] **Analytics**: Google Analytics 4

---

## Environment-Specific Configuration

### Resend Setup

1. **Verify sender domain** in Resend dashboard:
   - Go to https://resend.com/domains
   - Add `listhook.com`
   - Add provided DNS records (SPF, DKIM)
   - Wait for verification (usually < 30 minutes)

2. **Test email sending**:
   ```bash
   # After domain verified, test contact form again
   # Emails should now come from noreply@listhook.com
   ```

3. **Monitor email delivery**:
   - Check Resend dashboard for delivery status
   - Review any bounce/spam reports

---

## Troubleshooting Common Issues

### Build Fails

**Issue**: Build fails with Node.js version error
**Solution**: Check `.nvmrc` file exists and contains `20`

**Issue**: Build fails with "out of memory"
**Solution**: Upgrade to larger instance size in App Platform settings

### Runtime Issues

**Issue**: 502 Bad Gateway errors
**Solution**:
- Check build logs for errors
- Verify `npm start` command works locally
- Ensure `output: 'standalone'` is in next.config.ts

**Issue**: Contact form doesn't send emails
**Solution**:
- Verify `RESEND_API_KEY` is set in environment variables
- Check Resend dashboard for error logs
- Verify sender domain is verified in Resend

### Performance Issues

**Issue**: Slow page loads
**Solution**:
- Check DigitalOcean metrics for high memory usage
- Consider upgrading instance size
- Review Next.js build output for large bundles

---

## Rollback Procedure

If critical issues arise:

### Quick Rollback

1. Go to Deployments tab
2. Find last working deployment
3. Click "⋯" menu → "Redeploy"
4. Confirm rollback

### Full Rollback to Previous Code

```bash
git revert HEAD
git push origin main
```

DigitalOcean will automatically deploy the reverted code.

---

## Scaling & Optimization

### Vertical Scaling

**When to scale up**:
- Consistent 80%+ memory usage
- Slow response times (> 1s)
- Frequent restarts

**How to scale**:
- App Settings → Edit Plan
- Choose larger instance size
- Apply changes (causes brief downtime)

### Horizontal Scaling

- Available on Professional plan ($12/mo+)
- Add multiple containers for high availability
- Automatic load balancing

---

## Continuous Deployment

### Auto-Deploy Setup (Already Configured)

✅ Automatic deployments enabled via `.do/app.yaml`:
```yaml
github:
  deploy_on_push: true
```

**How it works**:
1. Push code to `main` branch
2. DigitalOcean detects changes
3. Automatic build and deployment
4. Zero-downtime deployment

### Preview Environments

- Create feature branches in GitHub
- DigitalOcean can create preview URLs for branches
- Enable in App Settings → Components

---

## Cost Optimization

### Current Estimate

**Basic Setup** ($5-12/month):
- App Platform Basic: $5/mo (512MB RAM)
- OR Professional: $12/mo (1GB RAM + autoscaling)

**Additional Services**:
- Resend: Free tier (3,000 emails/month)
- Domain: $10-15/year
- **Total**: ~$6-13/month

### Cost Monitoring

- Check DigitalOcean billing dashboard monthly
- Set up billing alerts at $10, $20 thresholds
- Resend shows email usage in dashboard

---

## Security Checklist

- [ ] **Environment variables**: All secrets marked as encrypted
- [ ] **HTTPS**: SSL certificate active
- [ ] **Dependencies**: Run `npm audit` and fix vulnerabilities
- [ ] **Rate limiting**: Consider adding to contact form API
- [ ] **Headers**: Next.js security headers auto-applied
- [ ] **Monitoring**: Alerts set up for downtime/errors

---

## Support & Resources

### DigitalOcean Documentation

- App Platform Docs: https://docs.digitalocean.com/products/app-platform/
- Next.js on App Platform: https://docs.digitalocean.com/products/app-platform/how-to/deploy-nextjs-app/

### Getting Help

- **DigitalOcean Support**: Available via dashboard (Support → tickets)
- **Community**: https://www.digitalocean.com/community
- **Status Page**: https://status.digitalocean.com

### Project Documentation

- Original Vercel checklist: `LAUNCH_CHECKLIST_VERCEL.md`
- Project overview: `CLAUDE.md`

---

## Success Metrics (Week 1)

After launch, track these goals:

- [ ] **Uptime**: 99%+ (check DigitalOcean metrics)
- [ ] **Contact form**: All submissions delivered successfully
- [ ] **Zero critical errors**: No 500 errors in logs
- [ ] **Performance**: Homepage loads < 2 seconds
- [ ] **Mobile**: Site usable on all devices

---

## Next Steps After Launch

1. **Set up Google Search Console**: Submit sitemap.xml
2. **Configure Google Analytics**: Track visitor behavior
3. **Set up uptime monitoring**: UptimeRobot or BetterStack
4. **Monitor contact form submissions**: First week is critical
5. **Review and iterate**: Based on real user feedback

---

**You're ready to launch! 🚀**

Remember: Launch is just the beginning. Monitor closely for the first 48 hours and be ready to address any issues quickly.
