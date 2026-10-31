# Wanted Work Website

A responsive, client-side job classifieds website built with HTML, CSS and JavaScript.

## Customize

- **Jobs, WhatsApp number, phone and email:** edit `config.js`
- **Images:** replace files inside `assets/` and update paths in `config.js`
- **Colors, fonts and layout:** edit `styles.css`
- **Domain-specific settings:** add your purchased domain in GitHub Pages settings

## Test locally

Run a local server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

1. Create a GitHub repository and upload all files in this folder.
2. In repository settings, open **Pages**.
3. Under **Build and deployment**, select the `main` branch and `/ (root)` folder.
4. Save. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Connect your GoDaddy `.in` domain

1. In GoDaddy DNS, add GitHub Pages DNS records:
   - For the apex domain (`yourdomain.in`), add four **A records** pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
   - Add a **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`.
2. In GitHub **Pages > Custom domain**, enter `yourdomain.in` and save.
3. Enable **Enforce HTTPS** after DNS verification.
DNS changes may take several hours to propagate.
