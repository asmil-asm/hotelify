# 🏨 Hotelify — Hotel Booking Platform

A modern and responsive hotel booking platform built with React.  
Hotelify allows users to explore hotels, search and filter available stays, view hotel details, manage bookings, and authenticate securely.

🔗 **Live Demo (Render):**[https://hotelify-1zwx.onrender.com/]

---

## ✨ Features

- 🔐 User authentication with Clerk
- 🏨 Browse and explore available hotels
- 🔎 Search and filter hotels
- 📅 Select check-in and check-out dates
- 🛏️ View detailed hotel information
- ❤️ Manage selected/favorite hotels
- 🧾 Booking flow
- 📱 Fully responsive design
- ⚡ Fast data fetching and caching with TanStack Query
- 🗂️ Global state management with Zustand
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 🧭 Client-side routing with React Router
- 🌐 API communication using Axios
- ☁️ Deployment-ready for Render Static Sites

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS

### State & Data Management

- Zustand
- TanStack Query
- Axios

### Authentication

- Clerk

### UI & UX

- Framer Motion
- Swiper
- React Datepicker

### Development

- ESLint
- Vite

---

## 📸 Screenshots

Add screenshots of the main pages here to showcase the UI.

- Home Page
- Hotel Details
- Booking

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/asmil-asm/hotelify.git
```

### 2. Navigate to the project

```bash
cd hotelify
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and add the required environment variables:

```env
VITE_API_URL=your_api_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

> Never commit private API keys or sensitive credentials to the repository.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## ☁️ Deploy on Render

Hotelify is a Vite-powered React frontend, so it can be deployed on Render as a **Static Site**. Render serves static sites over a global CDN and can redeploy automatically on every push to the connected branch.

### Option 1: Deploy as a Static Site (Recommended)

1. **Create a Render account**  
   Go to [dashboard.render.com](https://dashboard.render.com) and sign up. Signing in with GitHub is recommended.

2. **Create a new Static Site**  
   - Click **New +** → **Static Site**.
   - Connect your GitHub account.
   - Select the `asmil-asm/hotelify` repository.
   - Choose the branch you want to deploy, for example `main`.

3. **Configure build settings**  
   Use the following values for a Vite project:

   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

   > If your repository contains a `package-lock.json`, you can use `npm ci && npm run build` instead for faster and more reproducible installs.

4. **Add environment variables**  
   In the **Environment Variables** section, add the same variables used in your local `.env` file:

   ```env
   VITE_API_URL=your_api_url
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   ```

5. **Add an SPA rewrite rule**  
   Because Hotelify uses React Router for client-side routing, add a rewrite rule so that direct navigation to routes such as `/hotels/123` serves `index.html`:

   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** `Rewrite`

6. **Deploy**  
   Click **Create Static Site**. Render will start the first build and deploy. Once finished, your app will be live on a `*.onrender.com` URL.

7. **Update the Live Demo link**  
   After deployment, update the Render live demo link at the top of this README.

---

### Option 2: Use a `render.yaml` Blueprint (Infrastructure as Code)

For reproducible deployments, you can add a `render.yaml` file to the repository root. Render Blueprints let you define services, environment variables, build settings, and routing rules declaratively.

Create `render.yaml` in the repository root with the following content:

```yaml
services:
  - type: web
    name: hotelify
    runtime: static
    branch: main
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
    envVars:
      - key: VITE_API_URL
        sync: false
      - key: VITE_CLERK_PUBLISHABLE_KEY
        sync: false
```

Then, in the Render Dashboard:

1. Click **New +** → **Blueprint**.
2. Connect the repository.
3. Select the `render.yaml` file.
4. Provide the environment variable values when prompted.
5. Render will provision the static site automatically.

> The `sync: false` setting tells Render not to sync the value from the repository and to ask for it during setup. Do not commit real secrets to the repository.

---

### Deploying a Backend Separately

If you add a backend API later, deploy it separately on Render as a **Web Service**, then set its public URL as `VITE_API_URL` in the frontend Static Site environment variables.

---

## 📁 Project Structure

```text
src/
├── components/
├── pages/
├── hooks/
├── services/
├── store/
├── assets/
├── layouts/
└── ...
```

The project is organized around reusable React components, pages, API/data logic, and global state management.

Optional deployment files at the repository root:

```text
render.yaml
```

---

## 🎯 Project Goals

Hotelify was built to practice and demonstrate modern frontend development concepts, including:

- Building reusable React components
- Managing server state with TanStack Query
- Managing client state with Zustand
- Implementing authentication
- Working with APIs
- Building responsive interfaces
- Creating a realistic booking experience
- Structuring a scalable frontend application

---

## 🔮 Future Improvements

- Add hotel reviews and ratings
- Add advanced hotel filtering
- Add user booking history
- Add payment integration
- Add map integration
- Improve accessibility
- Add automated tests
- Add TypeScript
- Improve SEO and performance

---

## 👨‍💻 Author

**Asmail Shaheen**

Frontend Developer passionate about building modern, responsive, and user-focused web applications.

---

## 📄 License

This project is created for educational and portfolio purposes.
