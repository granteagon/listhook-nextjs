# Logo Replacement Guide

## ✅ What We Fixed

Your logo now uses **inline SVG with `currentColor`**, which means:
- ✅ Automatically matches text color in **Header** (blue)
- ✅ Automatically matches text color in **Footer** (white)
- ✅ No more color mismatch issues!
- ✅ File size reduced from 922KB to ~1KB

## 🎨 How to Replace with Your Actual Logo

The current logo in `components/ui/Logo.tsx` is a **placeholder**. Here's how to add your real logo:

### Step 1: Get Your Logo's SVG Path Data

#### Option A: From Figma
1. Select your logo in Figma
2. Right-click → "Copy/Paste as" → "Copy as SVG"
3. Paste into a text editor
4. Look for `<path d="..."/>` elements
5. Copy the `d="..."` attribute values

#### Option B: From Adobe Illustrator
1. Select your logo
2. File → Export → Export As...
3. Choose SVG format
4. Check "Presentation Attributes" (not CSS)
5. Open the exported SVG in a text editor
6. Find the `<path d="..."/>` elements

#### Option C: From Existing SVG File
1. Open your SVG file in a text editor
2. Look for `<path>`, `<circle>`, `<rect>`, `<polygon>` elements
3. Copy all the shape elements

### Step 2: Update Logo.tsx

Open `components/ui/Logo.tsx` and replace the placeholder paths:

```tsx
export default function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"  // ← Adjust if your logo needs different aspect ratio
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paste your actual SVG paths here */}
      <path d="YOUR_PATH_DATA_HERE" />
      {/* Add more paths if your logo has multiple shapes */}
    </svg>
  );
}
```

### Step 3: Adjust ViewBox (if needed)

The `viewBox` attribute defines the coordinate system:
- Current: `viewBox="0 0 24 24"` (24x24 grid)
- Your logo might need: `viewBox="0 0 100 100"` or `viewBox="0 0 512 512"`

**How to find your viewBox:**
Look at your original SVG file's opening tag:
```xml
<svg viewBox="0 0 1390 1381" ...>
```
Copy those numbers to your Logo component.

### Step 4: Test Color Matching

Run the dev server:
```bash
npm run dev
```

Visit `http://localhost:3000` and verify:
- ✅ Logo is **blue** (#2563eb) in header
- ✅ Logo is **white** (#ffffff) in footer
- ✅ Logo matches text color perfectly

## 🔧 Troubleshooting

### Logo is too small/large
Adjust the className size:
```tsx
// Header.tsx and Footer.tsx
<Logo className="w-8 h-8" />  // Current: 32x32px
<Logo className="w-10 h-10" /> // Larger: 40x40px
<Logo className="w-6 h-6" />   // Smaller: 24x24px
```

### Logo looks stretched/squashed
Adjust the `viewBox` to match your logo's aspect ratio:
```tsx
viewBox="0 0 24 24"   // Square
viewBox="0 0 32 24"   // Wide rectangle
viewBox="0 0 24 32"   // Tall rectangle
```

### Logo isn't the right color
Make sure `fill="currentColor"` is set on the `<svg>` tag (not on individual paths).

### Complex logo with multiple colors
If your logo needs multiple colors, you have two options:

**Option 1:** Simplify to single color (recommended)
- Use just the icon portion of your logo
- Works best for small sizes anyway

**Option 2:** Keep embedded PNG for now
- Revert to `<img src="/favicon.svg" />`
- Accept slight color differences
- Note: Won't match in both header and footer

## 📏 Recommended Logo Specs

For best results:
- **Format:** Vector paths (not embedded images)
- **Colors:** Single color using `currentColor`
- **Size:** 24x24 or 32x32 pixel grid
- **Simplicity:** Recognizable at small sizes
- **File size:** Should be 1-5KB as vector

## 🎯 Current Implementation

Files modified:
- ✅ `components/ui/Logo.tsx` - Logo component (replace this)
- ✅ `components/Header.tsx` - Uses Logo component
- ✅ `components/Footer.tsx` - Uses Logo component

The old 922KB `favicon.svg` is still in `public/` for browser favicons, but is no longer used in navigation.

## Need Help?

If you're having trouble extracting your logo paths, you can:
1. Use an online tool like https://jakearchibald.github.io/svgomg/ to optimize/simplify your SVG
2. Ask your designer for a simplified vector version
3. Use a simpler icon from https://lucide.dev or https://heroicons.com

The key is to have **vector path data**, not embedded PNG images.
