# 🛒 Suncart - Premium Summer E-commerce

Suncart is a modern, high-performance e-commerce platform built for the summer season. It features a sleek UI, robust authentication, and dynamic product management, providing a seamless shopping experience.

**🌐 Live Demo:** [https://suncart-8542.vercel.app/](https://suncart-8542.vercel.app/)

---

## ✨ Key Features

*   **Secure Authentication**: Fully integrated social (Google) and email/password login using **BetterAuth**.
*   **Dynamic Product Details**: Personalized product pages with real-time data fetching from JSON/MongoDB.
*   **Protected Routes**: Sensitive pages like Product Details and User Profiles are guarded by auth middleware/logic.
*   **Premium UI/UX**: Built with **Tailwind CSS 4** and **DaisyUI**, featuring a minimalistic and eye-friendly design.
*   **Smooth Animations**: Enhanced user interaction with **Animate.css** for a lively feel.
*   **Interactive Sliders**: Optimized product showcases using **Swiper.js**.
*   **Responsive Design**: Completely mobile-friendly layout for shopping on any device.

---

## 🛠️ Tech Stack

*   **Frontend**: Next.js 16 (App Router), React 19
*   **Styling**: Tailwind CSS 4, DaisyUI v5
*   **Authentication**: BetterAuth with MongoDB Adapter
*   **Database**: MongoDB
*   **Icons**: Lucide React & React Icons
*   **Animations**: Animate.css

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone [https://github.com/zaberabdullah/suncart-8542.git](https://github.com/zaberabdullah/suncart-8542.git)

cd suncart-8542


2. Install dependencies
Bash
npm install


3. Setup Environment Variables
Create a .env.local file in the root directory and add the following:

Code snippet
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret



4. Run the development server
Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.



📂 Project Structure
/app: Contains all routes and layouts (App Router).

/components: Reusable UI components (Navbar, NewsCard, Sidebars).

/lib: Core logic including BetterAuth configuration and data fetching.

/data: Local JSON data for products and categories.

