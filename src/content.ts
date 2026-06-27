import type { Highlight, NavigationItem, Testimonial, TourPackage } from './types'

export const navItems: NavigationItem[] = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Packages', href: '#packages' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const highlights: Highlight[] = [
  {
    icon: '01',
    title: 'Curated itineraries',
    description:
      'Pick from ready-made weekend trips or adapt the route to fit your budget and travel style.',
  },
  {
    icon: '02',
    title: 'Flexible planning',
    description:
      'Compare dates, travelers, and package types in a layout that stays readable on smaller screens.',
  },
  {
    icon: '03',
    title: 'Reliable support',
    description:
      'Travel assistance and clear package details keep the booking process simple from browse to checkout.',
  },
]

export const featuredPackages: TourPackage[] = [
  {
    name: 'Hunza Valley Escape',
    location: 'Gilgit-Baltistan',
    duration: '4 days',
    price: '$320',
    summary:
      'A scenic mountain getaway with boutique stays, guided day trips, and sunrise viewpoints.',
    badge: 'Best value',
    rating: '4.9',
  },
  {
    name: 'Kashmir Lakes Retreat',
    location: 'Neelum Valley',
    duration: '3 days',
    price: '$240',
    summary:
      'Relaxed lakeside travel with flexible schedules, short hikes, and private transport options.',
    badge: 'Popular',
    rating: '4.8',
  },
  {
    name: 'Lahore Heritage Walk',
    location: 'Punjab',
    duration: '2 days',
    price: '$180',
    summary:
      'Food, architecture, and culture paired into a compact city itinerary for quick weekend breaks.',
    badge: 'City break',
    rating: '4.7',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ayesha Khan',
    role: 'Family traveler',
    quote:
      'The itinerary card layout made it easy to compare destinations and choose a trip that fit our family schedule.',
    rating: '5.0',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Weekend explorer',
    quote:
      'The responsive layout felt clean on my phone, and the package sections made the whole experience easy to browse.',
    rating: '4.9',
  },
  {
    name: 'Sara Malik',
    role: 'Solo traveler',
    quote:
      'I like that the reusable components keep the app consistent while still leaving room for more destinations later.',
    rating: '5.0',
  },
]