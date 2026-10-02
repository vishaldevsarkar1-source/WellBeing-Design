# How to Deploy This Website to GitHub

Your project is fully configured for GitHub Pages and GitHub deployment.

---

## Method 1: Deploy to GitHub Pages (Automated with GitHub Actions)

We have already configured `.github/workflows/deploy.yml` and `base: './'` in `vite.config.ts`.

### Step 1: Create a New Repository on GitHub
1. Go to [github.com](https://github.com) and click **New Repository**.
2. Name it (for example: `wellbeing-design`).
3. Set visibility to **Public** (or Private if you have GitHub Pro).
4. Do not initialize with README (leave it empty).

### Step 2: Push your Code to GitHub
Run the following terminal commands inside your project folder:

```bash
git init
git add .
git commit -m "Initial commit of WellBeing Design website"
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. On GitHub, go to your repository **Settings** tab.
2. In the left sidebar, click **Pages** (under Code and automation).
3. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions**
4. The workflow will automatically run, build your site, and publish it live!
5. Your website will be live at:
   `https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## Method 2: 1-Click Free Hosting via Vercel (Recommended Alternative)

If you prefer custom domains, automatic SSL, and instant global CDN:
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project** and select your GitHub repository.
4. Click **Deploy**. Vercel will detect Vite automatically and give you a fast live `.vercel.app` URL in 30 seconds.
