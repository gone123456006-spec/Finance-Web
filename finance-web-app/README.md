# Finvyce - Finance Web Application

A modern, responsive web application for financial services with integrated contact forms, Google Sheets integration, and WhatsApp connectivity.

## 📁 Project Structure

```
finance-web-app/
├── assets/              # Media files (videos, images)
├── css/                 # Stylesheets
│   └── style.css       # Main stylesheet
├── js/                  # JavaScript files
│   ├── app.js          # Main application logic
│   └── config.js       # Configuration file
├── pages/               # Additional pages
│   ├── dashboard.html  # Dashboard page
│   └── form.html       # Application form
├── docs/                # Documentation
│   └── google-apps-script-code.js  # Google Apps Script code
├── index.html          # Main homepage
├── .gitignore          # Git ignore rules
├── .htaccess           # Apache configuration (optional)
└── README.md           # This file
```

## 🚀 Deployment Instructions

### Option 1: Static Hosting (Recommended)

#### Netlify
1. Sign up/login to [Netlify](https://www.netlify.com/)
2. Drag and drop the project folder to Netlify dashboard
3. Or connect your Git repository
4. Deploy automatically

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

#### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder (usually `main` and `/root`)
4. Save and wait for deployment

### Option 2: Traditional Web Hosting

1. **Upload Files**: Upload all files to your web server via FTP/SFTP
2. **Configure Server**: Ensure your server supports:
   - Static file serving
   - HTTPS (recommended)
   - Proper MIME types

3. **Apache Configuration** (if using Apache):
   - The `.htaccess` file is included for security headers
   - Ensure `mod_rewrite` and `mod_headers` are enabled

4. **Nginx Configuration** (if using Nginx):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /path/to/finance-web-app;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-XSS-Protection "1; mode=block" always;
   }
   ```

## ⚙️ Configuration

### Update Contact Information

Edit `js/config.js` to update:
- Phone numbers
- Email addresses
- Google Apps Script URL
- Company information

```javascript
const CONFIG = {
  contact: {
    primaryPhone: '918974668938',
    floatingPhone: '919153832948',
    email: 'support@finvyce.com',
    // ...
  }
};
```

### Google Sheets Integration

1. **Create Google Sheet**:
   - Create a new Google Sheet
   - Add headers: Timestamp, Customer Type, GSTIN, Name of Entity, Buyer Name, Email, Mobile

2. **Set up Google Apps Script**:
   - Open Google Sheet → Extensions → Apps Script
   - Copy code from `docs/google-apps-script-code.js`
   - Save and deploy as Web App
   - Set permissions: "Anyone" or "Anyone with Google account"
   - Copy the Web App URL

3. **Update Config**:
   - Update `googleAppsScript.formSubmissionUrl` in `js/config.js` with your Web App URL

## 🔒 Security Features

- **Content Security Policy (CSP)**: Prevents XSS attacks
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Referrer Policy**: Controls referrer information
- **HTTPS Ready**: All external links use HTTPS

## 📱 Features

- ✅ Fully responsive design
- ✅ Modern UI with dark theme
- ✅ Contact form with WhatsApp integration
- ✅ Google Sheets form submission
- ✅ Floating action buttons (Call & WhatsApp)
- ✅ Interactive circular finance diagram
- ✅ FAQ section with tooltips
- ✅ Testimonials carousel
- ✅ Sticky navigation

## 🛠️ Development

### Local Development

1. **Simple HTTP Server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server -p 8000
   
   # PHP
   php -S localhost:8000
   ```

2. **Access**: Open `http://localhost:8000` in your browser

### Mobile Testing

1. **Find your IP address**:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. **Access from mobile**: `http://YOUR_IP:8000`

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Form not submitting to Google Sheets
- Check Google Apps Script URL in `config.js`
- Verify Google Apps Script is deployed as Web App
- Check browser console for errors
- Ensure CORS is enabled in Google Apps Script

### WhatsApp links not working
- Verify phone numbers in `config.js` (format: country code + number, no +)
- Test on mobile device (WhatsApp Web works on desktop)

### Images not loading
- Check external image URLs (Unsplash)
- Verify internet connection
- Consider hosting images locally

## 📄 License

© 2026 Finvyce. All Rights Reserved.

## 📞 Support

For support, contact:
- Email: support@finvyce.com
- Phone: +91 89746 68938

---

**Version**: 1.0.0  
**Last Updated**: 2026
