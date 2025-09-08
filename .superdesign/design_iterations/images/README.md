# Image Organization Guide

## 📁 Folder Structure

```
images/
├── golf-carts/          # Golf cart photos and rentals
├── locations/           # The Villages locations and scenery
├── people/              # People using golf carts, happy customers
└── README.md           # This file
```

## 🎯 Recommended Image Types

### `golf-carts/` Folder
- **2-passenger golf carts** (different angles)
- **4-passenger golf carts** (family size)
- **6-passenger golf carts** (party carts)
- **Golf cart interiors** (comfort features)
- **Golf cart exteriors** (color options)
- **Golf cart details** (wheels, lights, etc.)

### `locations/` Folder
- **The Villages landmarks** (town squares, shopping centers)
- **Golf courses** (where carts are used)
- **Scenic views** (lakes, parks, walking paths)
- **Business districts** (restaurants, shops)
- **Residential areas** (neighborhoods, streets)

### `people/` Folder
- **Happy customers** using golf carts
- **Families** enjoying rides
- **Couples** on golf cart dates
- **Groups** having fun together
- **Business people** using carts for work

## 📏 Image Specifications

### **Recommended Dimensions:**
- **Hero/Banner Images**: 1920x1080px (16:9 ratio)
- **Gallery Images**: 800x600px (4:3 ratio)
- **Thumbnail Images**: 400x300px (4:3 ratio)
- **Logo/Brand Images**: 300x100px (3:1 ratio)

### **File Formats:**
- **JPEG (.jpg)**: For photos (good compression, smaller file size)
- **PNG (.png)**: For graphics with transparency
- **WebP (.webp)**: Modern format, excellent compression

### **File Size Guidelines:**
- **Hero Images**: Under 500KB
- **Gallery Images**: Under 200KB
- **Thumbnails**: Under 100KB

## 🚀 How to Use Images

### **In HTML:**
```html
<!-- Golf cart image -->
<img src="images/golf-carts/4-passenger-cart.jpg" 
     alt="4-Passenger Golf Cart for Family Rentals" 
     class="w-full h-64 object-cover rounded-lg">

<!-- Location image -->
<img src="images/locations/town-square.jpg" 
     alt="The Villages Town Square Shopping Center" 
     class="w-full h-48 object-cover rounded-lg">
```

### **In CSS:**
```css
.hero-section {
    background-image: url('images/locations/golf-course-sunset.jpg');
    background-size: cover;
    background-position: center;
}
```

## 📝 Naming Convention

### **Use descriptive names:**
- ✅ `4-passenger-golf-cart-blue.jpg`
- ✅ `town-square-shopping-center.jpg`
- ✅ `family-enjoying-golf-cart.jpg`
- ❌ `IMG_001.jpg`
- ❌ `photo1.jpg`

### **Include key details:**
- Cart type (2-passenger, 4-passenger, 6-passenger)
- Color or model
- Location name
- Activity or emotion

## 🔍 SEO Best Practices

### **Alt Text Examples:**
- `alt="4-Passenger Golf Cart Rental in The Villages FL"`
- `alt="Family Enjoying Golf Cart Ride at The Villages Golf Course"`
- `alt="The Villages Town Square Shopping Center Golf Cart Access"`

### **File Names for SEO:**
- `golf-cart-rental-villages-florida.jpg`
- `the-villages-golf-course-cart-rental.jpg`
- `family-golf-cart-vacation-villages.jpg`

## 📱 Responsive Images

### **Multiple Sizes:**
Consider creating multiple versions of important images:
- `hero-image-large.jpg` (1920x1080)
- `hero-image-medium.jpg` (1200x675)
- `hero-image-small.jpg` (800x450)

### **HTML5 Picture Element:**
```html
<picture>
    <source media="(min-width: 1200px)" srcset="images/hero-large.jpg">
    <source media="(min-width: 768px)" srcset="images/hero-medium.jpg">
    <img src="images/hero-small.jpg" alt="Golf Cart Rental Hero Image">
</picture>
```

## 🎨 Image Optimization

### **Before Uploading:**
1. **Resize** to appropriate dimensions
2. **Compress** to reduce file size
3. **Optimize** alt text and file names
4. **Test** on different devices

### **Tools:**
- **Online**: TinyPNG, Compressor.io
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **Photoshop**: Save for Web feature

## 📂 Adding New Images

1. **Choose the right folder** based on image content
2. **Use descriptive file names** with hyphens
3. **Optimize file size** before uploading
4. **Add meaningful alt text** when using in HTML
5. **Update this README** if adding new categories

---

**Need Help?** Check your HTML files for examples of how images are currently used, or refer to the gallery.html page for image implementation patterns.

