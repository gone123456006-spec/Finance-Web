# Deployment Checklist

## Pre-Deployment

- [ ] Update `js/config.js` with production values
  - [ ] Verify phone numbers
  - [ ] Verify email addresses
  - [ ] Update Google Apps Script URL
  - [ ] Verify company information

- [ ] Test all forms
  - [ ] Contact form (WhatsApp callback)
  - [ ] Application form (Google Sheets submission)

- [ ] Test all links
  - [ ] Call links (tel:)
  - [ ] WhatsApp links
  - [ ] Navigation links
  - [ ] External links

- [ ] Verify security
  - [ ] All external resources use HTTPS
  - [ ] No hardcoded sensitive data
  - [ ] CSP headers configured

- [ ] Optimize assets
  - [ ] Compress images (if any)
  - [ ] Minify CSS/JS (optional)
  - [ ] Check file sizes

## Deployment Steps

### For Static Hosting (Netlify/Vercel/GitHub Pages)

1. **Prepare repository**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   ```

2. **Push to GitHub/GitLab**
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Deploy**
   - Connect repository to hosting platform
   - Configure build settings (if needed)
   - Set environment variables (if any)
   - Deploy

### For Traditional Web Hosting

1. **Upload files**
   - Use FTP/SFTP client
   - Upload all files maintaining directory structure
   - Ensure `.htaccess` is uploaded (for Apache)

2. **Configure server**
   - Verify PHP/Node.js version (if needed)
   - Enable mod_rewrite (Apache)
   - Configure SSL certificate

3. **Test**
   - Visit website
   - Test all functionality
   - Check mobile responsiveness

## Post-Deployment

- [ ] Test website on multiple devices
- [ ] Test all forms and submissions
- [ ] Verify Google Sheets integration
- [ ] Check WhatsApp links
- [ ] Test call links
- [ ] Verify security headers
- [ ] Check page load speed
- [ ] Test navigation
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to search engines (if applicable)

## Monitoring

- [ ] Set up Google Analytics (optional)
- [ ] Monitor form submissions
- [ ] Check error logs
- [ ] Set up uptime monitoring (optional)

## Backup

- [ ] Create backup of files
- [ ] Document configuration
- [ ] Save Google Apps Script URL
- [ ] Document any custom changes

## Troubleshooting

### Common Issues

1. **Forms not submitting**
   - Check Google Apps Script URL in config.js
   - Verify Google Apps Script is deployed
   - Check browser console for errors

2. **Links not working**
   - Verify phone numbers in config.js
   - Check href attributes are set correctly
   - Test on actual device

3. **Security headers not working**
   - Verify .htaccess is uploaded
   - Check Apache mod_headers is enabled
   - Test with security header checker

4. **Images not loading**
   - Check external URLs
   - Verify CSP allows image sources
   - Check network connectivity

## Support

For issues or questions:
- Email: support@finvyce.com
- Phone: +91 89746 68938

---

**Last Updated**: 2026
