# Run and deploy your AI Studio app

This contains everything you need to run your app locally and deploy it to GitHub Pages.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

Deployment is automated—just push to `main` and your site will be live at [https://brazennerve.github.io/portfolio/](https://brazennerve.github.io/portfolio/).

### Manual Steps (if needed)

- Make sure your build output directory is `dist`.
- If using React Router, set your `BrowserRouter` basename to `/portfolio`.
