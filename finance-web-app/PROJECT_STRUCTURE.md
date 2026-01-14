# Finvyce Project Structure

## 📁 Directory Structure

```
finance-web-app/
├── assets/                          # Media files
│   └── IMG_5623.MP4                # Video assets
│
├── css/                             # Stylesheets
│   └── style.css                    # Main stylesheet (all styles)
│
├── js/                              # JavaScript files
│   ├── app.js                      # Main application logic
│   └── config.js                   # Configuration file (phone numbers, URLs, etc.)
│
├── pages/                           # Additional pages
│   ├── dashboard.html              # Dashboard page
│   └── form.html                   # Application form page
│
├── docs/                            # Documentation & Scripts
│   └── google-apps-script-code.js  # Google Apps Script code for Sheets integration
│
├── index.html                       # Main homepage
├── .gitignore                       # Git ignore rules
├── .htaccess                        # Apache configuration (security headers, compression)
├── robots.txt                       # Search engine crawler instructions
├── README.md                        # Main documentation
├── DEPLOYMENT.md                    # Deployment checklist and guide
└── PROJECT_STRUCTURE.md             # This file
```

## 🔧 Configuration

### `js/config.js`
Centralized configuration file containing:
- Contact information (phone numbers, email, address)
- Google Apps Script URL
- WhatsApp settings
- Application metadata

**To update settings**: Edit `js/config.js` - no need to search through multiple files!

## 🔒 Security Features

### Implemented Security Measures:
1. **Content Security Policy (CSP)** - Prevents XSS attacks
2. **X-Frame-Options** - Prevents clickjacking
3. **X-Content-Type-Options** - Prevents MIME sniffing
4. **Referrer Policy** - Controls referrer information
5. **HTTPS Enforcement** - All external links use HTTPS
6. **Security Headers** - Via .htaccess (Apache) and meta tags

### Security Files:
- `.htaccess` - Apache security headers and compression
- Meta tags in HTML files - Additional security headers

## 📱 Features

### Main Features:
- ✅ Fully responsive design
- ✅ Modern dark theme UI
- ✅ Contact form with WhatsApp integration
- ✅ Google Sheets form submission
- ✅ Floating action buttons (Call & WhatsApp)
- ✅ Interactive circular finance diagram
- ✅ FAQ section with tooltips
- ✅ Testimonials carousel
- ✅ Sticky navigation
- ✅ SEO optimized

## 🚀 Deployment Ready

### Files Included:
- ✅ `.gitignore` - Excludes unnecessary files from version control
- ✅ `README.md` - Complete documentation
- ✅ `DEPLOYMENT.md` - Step-by-step deployment guide
- ✅ `.htaccess` - Apache server configuration
- ✅ `robots.txt` - SEO crawler instructions

### Deployment Options:
1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
2. **Traditional Web Hosting** (Apache, Nginx)
3. **CDN** (Cloudflare, AWS CloudFront)

## 📝 File Descriptions

### Core Files:
- `index.html` - Main homepage with all sections
- `pages/form.html` - Application form page
- `pages/dashboard.html` - Dashboard page (if used)
- `css/style.css` - All styles in one file
- `js/app.js` - All JavaScript functionality
- `js/config.js` - Configuration (phone numbers, URLs, etc.)

### Documentation:
- `README.md` - Main documentation with setup instructions
- `DEPLOYMENT.md` - Deployment checklist and troubleshooting
- `PROJECT_STRUCTURE.md` - This file

### Configuration:
- `.gitignore` - Git ignore rules
- `.htaccess` - Apache configuration
- `robots.txt` - SEO configuration
- `docs/google-apps-script-code.js` - Google Apps Script code

## 🔄 Update Process

### To Update Contact Information:
1. Open `js/config.js`
2. Update values in `CONFIG.contact` object
3. Save file
4. Changes apply automatically (no need to edit HTML)

### To Update Google Apps Script URL:
1. Open `js/config.js`
2. Update `CONFIG.googleAppsScript.formSubmissionUrl`
3. Save file
4. Form will use new URL automatically

## 📊 Dependencies

### External Resources:
- **Images**: Unsplash CDN (https://images.unsplash.com)
- **Google Apps Script**: For form submissions
- **WhatsApp API**: For WhatsApp links (wa.me)

### No Build Process Required:
- Pure HTML, CSS, and JavaScript
- No npm packages needed
- No build tools required
- Ready to deploy as-is

## 🛠️ Development

### Local Development:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

### Mobile Testing:
1. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Access from mobile: `http://YOUR_IP:8000`

## 📞 Support

For questions or issues:
- Email: support@finvyce.com
- Phone: +91 89746 68938

---

**Version**: 1.0.0  
**Last Updated**: 2026
