# DevWeekends Travel & Tours

A modern, responsive travel and tours booking website built with React and TypeScript. Browse destinations, view tour packages, read traveler reviews, and request personalized trip plans through an interactive contact form.

---

## Features Implemented

### 1. **Header Navigation**
- Sticky navigation bar with logo and menu links
- Mobile-responsive hamburger menu that toggles on smaller screens
- Quick-access CTA (Call-To-Action) button for desktop users
- Smooth scrolling navigation

### 2. **Hero Section**
- Prominent headline showcasing the brand value proposition
- Featured destination preview with high-quality image (Babu Sar Pass)
- Search/filtering card to help users find tours by destination, dates, and travelers
- Responsive image gallery with fallback designs

### 3. **Highlights Section**
- Three feature cards highlighting key service benefits
- Icons and descriptions for each benefit (custom itineraries, accommodation, weekend packages)
- Clean card-based layout that adapts to mobile screens

### 4. **Tour Packages Section**
- Browse three featured tour destinations (Hunza Valley, Kashmir Lakes, Lahore Heritage)
- Each package displays: destination name, location, duration, price, short summary, and rating
- Special badges for promotional packages
- Card-based grid layout responsive to all screen sizes

### 5. **Testimonials Section**
- Display of three traveler reviews and ratings
- Star ratings and customer feedback visible at a glance
- Testimonial author information (name and role)
- Glass-morphism card design for visual consistency

### 6. **Contact Form**
- Collect user travel details: name, email, destination preference, travel dates, number of travelers
- Form validation ensuring all required fields are completed
- Dropdown selections for destination and traveler count
- Success confirmation message after submission
- Auto-reset form for continuous use
- Form data logged to console (ready for backend API integration)

### 7. **Footer**
- Brand information and company description
- Direct contact email link
- Feature highlights as quick reference
- Additional navigation links
- Responsive two-column layout collapsing to single column on mobile

---

## How It's Implemented

### Architecture
- **Component-Based Design**: 6 reusable React components (Header, Hero, FeatureCard, PackageCard, TestimonialCard, ContactForm, Footer)
- **Centralized Data**: All content (navigation, packages, testimonials) stored in a single `content.ts` file for easy updates
- **Type Safety**: TypeScript interfaces ensure correct data flow through the component tree

### Responsive Design
- **Mobile-First Approach**: CSS media queries at 960px (tablet) and 640px (mobile) breakpoints
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive spacing and alignment
- **Responsive Typography**: Font sizes scale dynamically using CSS `clamp()` function
- **Touch-Friendly**: Larger buttons and spacing on mobile for better usability

### State Management
- **React Hooks**: `useState` for managing mobile menu toggle and form state
- **Form Handling**: Controlled form inputs with onChange handlers and form submission logic

### Visual Design
- **Dark Theme**: Modern dark background with light text for reduced eye strain
- **Accent Colors**: Gold (#f6b45b) and teal (#5de4c7) for highlights and CTAs
- **Glass-Morphism Effects**: Backdrop blur and transparency for contemporary UI
- **Smooth Animations**: Transitions and slide-in animations for interactive feedback

### Asset Management
- **Optimized Images**: High-quality destination photos (Babu Sar Pass, Mountain landscapes)
- **Responsive Images**: CSS `object-fit: cover` ensures images maintain aspect ratio across devices

---

## Technology Stack

- **React 19.2.7** – UI framework with functional components and hooks
- **TypeScript ~6.0.2** – Type safety and better development experience
- **Vite 8.1.0** – Fast build tool with hot module replacement (HMR)
- **CSS Grid & Flexbox** – Modern layout system
- **Google Fonts** – Manrope (sans-serif) and Fraunces (serif) typography

---

## Getting Started

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173` with hot reload enabled.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

---

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── FeatureCard.tsx
│   ├── PackageCard.tsx
│   ├── TestimonialCard.tsx
│   └── ContactForm.tsx
├── App.tsx             # Main app component
├── App.css             # All styling (responsive design)
├── content.ts          # Centralized data (navigation, packages, testimonials)
├── types.ts            # TypeScript type definitions
└── assets/             # Images and static files
```

---

## Key Design Decisions

1. **Single CSS File**: All styles in `App.css` for easier theme management and responsive adjustments
2. **Data-Driven Content**: `content.ts` allows quick updates without touching components
3. **Mobile Menu Toggle**: Client-side state management for instant mobile navigation
4. **Form Data Logging**: Console logging prepares the form for easy backend API integration
5. **Glass-Morphism UI**: Modern aesthetic with backdrop blur and transparency for premium feel

---

## Next Steps for Enhancement

- Connect contact form to backend API for storing user inquiries
- Integrate payment gateway for package bookings
- Add image gallery or carousel for destination previews
- Implement filtering/search functionality for tours
- Add customer reviews database integration
- Deploy to hosting platform (Vercel, Netlify, etc.)
