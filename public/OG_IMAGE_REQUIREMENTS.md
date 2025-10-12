# Open Graph Image Requirements

## Required File
**Path**: `/public/og-image.png`

## Specifications
- **Dimensions**: 1200 x 630 pixels (required for Facebook/LinkedIn)
- **Format**: PNG (preferred) or JPG
- **File Size**: Under 8MB (under 1MB recommended)
- **Color Space**: RGB
- **Aspect Ratio**: 1.91:1

## Design Guidelines

### Must Include
1. **ListHook Logo**: Prominent placement, clear and readable
2. **Main Tagline**: "Automated Postcard Marketing for Real Estate Agents"
3. **Key Value Prop**: Consider adding metrics like "5x Higher Response Rates" or "340% Average ROI"

### Visual Elements to Consider
- Postcard imagery or mockups
- Real estate-related visuals
- Automation/technology icons
- Clean, professional design
- Brand colors: Blue (#1e40af) and Coral (#ff6b6b)

### Typography
- Use clear, bold fonts readable at small sizes
- Ensure text is legible when scaled down to thumbnail
- Maintain high contrast between text and background
- Minimum font size: 60px for main text

### Safe Zones
- Keep important content 100px from edges
- Account for circular profile picture overlays on some platforms
- Ensure logo and key text are visible even if cropped

## Design Templates/Tools
- **Canva**: Free OG image templates
- **Figma**: Professional design tool
- **Adobe Photoshop**: Full control
- **Placid**: Automated image generation

## Testing Tools
Once created, validate with:
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Example Structure
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [ListHook Logo]                                    │
│                                                     │
│  Automated Postcard Marketing                       │
│  for Real Estate Agents                            │
│                                                     │
│  🎯 5x Higher Response Rates                       │
│  💰 $17 Cost Per Lead                              │
│  📈 340% Average ROI                                │
│                                                     │
│  [Postcard Visual or Dashboard Screenshot]         │
│                                                     │
└─────────────────────────────────────────────────────┘
     1200px wide x 630px tall
```

## Additional Social Image Recommendations

### Twitter Card (Optional Enhanced)
- **Dimensions**: 1200 x 675 pixels
- **Path**: `/public/twitter-card.png`
- Similar design to OG image but with 16:9 ratio

### LinkedIn (Uses OG Image)
- Same 1200x630 works perfectly
- Test with LinkedIn Post Inspector

### Instagram/Facebook Stories (Optional)
- **Dimensions**: 1080 x 1920 pixels (9:16 ratio)
- **Path**: `/public/story-card.png`
- Vertical format for stories

## Current Status
❌ **NOT CREATED** - This file needs to be designed and added before launch

## Priority
🔴 **HIGH** - Required for proper social media sharing

## Next Steps
1. Design the image following above specifications
2. Save as `/public/og-image.png`
3. Validate using Facebook Sharing Debugger
4. Test social sharing on major platforms
5. Update if any issues found

---

**Note**: The metadata references this file in:
- `/app/layout.tsx` (root layout)
- All page-level metadata files
- Blog post dynamic metadata

Without this file, social shares will fall back to default browser behavior (less optimized for engagement).
