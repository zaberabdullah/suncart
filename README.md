# ☀️ SunCart – Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more.

## 🌐 Live URL

[https://suncart-8542.vercel.app](https://suncart-8542.vercel.app)

## 🎯 Project Purpose

SunCart is a full-stack eCommerce web application built with Next.js. Users can browse summer products, view detailed product information (after authentication), and manage their profile. The platform features secure authentication with email/password and Google OAuth.

## ✨ Key Features

- **Hero Slider** — Animated banner with summer sale offers
- **Popular Products** — Display of top 3 featured summer products
- **All Products Page** — Browse the full summer collection
- **Product Details Page** — Protected route, only accessible after login
- **Authentication** — Email/password login & Google OAuth via BetterAuth
- **User Profile** — View and update profile name and photo
- **Summer Care Tips** — Helpful tips for summer skincare and health
- **Top Brands** — Showcase of featured summer brands
- **Responsive Design** — Fully responsive on mobile, tablet, and desktop
- **Animations** — Smooth animations using Animate.css

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Authentication:** BetterAuth
- **Database:** MongoDB Atlas
- **Deployment:** Vercel

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication (email + Google OAuth) |
| `mongodb` | MongoDB database adapter |
| `swiper` | Hero slider component |
| `animate.css` | CSS animations |
| `react-hook-form` | Form validation |
| `react-icons` | Icon library |
| `lucide-react` | Icon library |
| `daisyui` | UI component library |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/suncart.git

# Navigate to project directory
cd suncart

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Run development server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGO_URI=your-mongodb-connection-string
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...all]/    # BetterAuth API routes
│   │   └── products/         # Products API route
│   ├── auth/
│   │   ├── login/            # Login page
│   │   └── register/         # Register page
│   ├── my-profile/
│   │   ├── update/           # Update profile page
│   │   └── page.jsx          # Profile page
│   ├── products/
│   │   ├── [id]/             # Product details (protected)
│   │   └── page.jsx          # All products page
│   ├── data/
│   │   └── products.json     # Product data
│   └── page.js               # Home page
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSlider.jsx
│   └── TopBrands.jsx
└── lib/
    ├── auth.js               # BetterAuth config
    └── auth-client.js        # BetterAuth client
```

## 🔒 Authentication Flow

- Users can register with email/password or Google OAuth
- Product details page is protected — login required to access
- After login, users are redirected back to the page they tried to visit
- User session is managed via BetterAuth with MongoDB

## 👨‍💻 Author

**Zaber Abdullah**
- GitHub: [@zaberabdullah](https://github.com/zaberabdullah)