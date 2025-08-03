# App Deployment

## Deployment Overview

- During GitHub Actions deployment, this command creates `.env.production`:
echo "VITE_BACKEND_API_URL=${{ secrets.VITE_BACKEND_API_URL }}" > .env.production

It injects the backend API URL from **GitHub Secrets** into the React build securely.

- The `.htaccess` file is copied into the build folder and deployed to Hostinger every time to enable SPA routing on Apache servers.

## Important Notes

- Add your `VITE_BACKEND_API_URL`, `FTP_USERNAME`, and `FTP_PASSWORD` as **GitHub Secrets**.
- Ensure `.htaccess` is included in your repo (not ignored).
- The deployment uploads all build files and `.htaccess` to Hostinger’s `public_html` folder.

---

## Deployment Steps

1. **Set up GitHub Secrets**  
  Add the following secrets to your GitHub repository:
  - `VITE_BACKEND_API_URL`
  - `FTP_USERNAME`
  - `FTP_PASSWORD`

2. **Build and Configure Environment**  
  During the GitHub Actions workflow, the following command creates the production environment file:
  ```sh
  echo "VITE_BACKEND_API_URL=${{ secrets.VITE_BACKEND_API_URL }}" > .env.production
  ```
  This securely injects the backend API URL into the React build.

3. **Include `.htaccess`**  
  Ensure the `.htaccess` file is present in your repository (not in `.gitignore`).  
  It will be copied into the build folder to enable SPA routing on Apache servers.

4. **Deploy to Hostinger**  
  The workflow uploads all build files and `.htaccess` to the `public_html` directory on Hostinger.

---


This setup ensures smooth routing and secure environment config during deployment.