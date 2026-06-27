import './App.css'
import { Footer } from './components/Footer'
import { FeatureCard } from './components/FeatureCard'
import { Header } from './components/Header'
import { PackageCard } from './components/PackageCard'
import { SectionHeading } from './components/SectionHeading'
import { TestimonialCard } from './components/TestimonialCard'
import { featuredPackages, highlights, navItems, testimonials } from './content'

function App() {
  return (
    <div className="app-shell" id="top">
      <Header brand="DevWeekends" navItems={navItems} />

      <main>
        <section className="hero">
          <div className="hero__content">
            <span className="eyebrow">Travel planning, simplified</span>
            <h1>Discover weekend escapes, guided tours, and custom travel plans.</h1>
            <p className="hero__text">
              Build memorable trips with handpicked stays, curated experiences,
              and flexible bookings designed for mobile and desktop travelers.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#packages">
                Explore packages
              </a>
              <a className="button button--secondary" href="#contact">
                Plan a trip
              </a>
            </div>

            <div className="hero__stats" aria-label="Travel highlights">
              <article>
                <strong>120+</strong>
                <span>Trips tailored</span>
              </article>
              <article>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </article>
              <article>
                <strong>24/7</strong>
                <span>Travel support</span>
              </article>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Trip search summary">
            <div className="search-card">
              <p className="search-card__label">Find your next escape</p>
              <div className="search-card__fields">
                <div>
                  <span>Destination</span>
                  <strong>Hunza Valley</strong>
                </div>
                <div>
                  <span>Travel dates</span>
                  <strong>Fri - Sun</strong>
                </div>
                <div>
                  <span>Travelers</span>
                  <strong>2 adults</strong>
                </div>
              </div>
              <button type="button" className="button button--primary button--full">
                Search trips
              </button>
            </div>
          </aside>
        </section>

        <section className="section section--tight" id="highlights">
          <SectionHeading
            eyebrow="Why travelers choose us"
            title="Everything needed to turn a trip idea into a smooth itinerary."
            description="Reusable booking blocks, guided tours, and clear trip details help users compare options quickly."
          />

          <div className="feature-grid">
            {highlights.map((highlight) => (
              <FeatureCard key={highlight.title} {...highlight} />
            ))}
          </div>
        </section>

        <section className="section" id="packages">
          <SectionHeading
            eyebrow="Popular tours"
            title="Featured packages built for quick browsing and easy comparison."
            description="Each card receives props from shared data so content stays consistent while the layout remains flexible."
          />

          <div className="package-grid">
            {featuredPackages.map((tour) => (
              <PackageCard key={tour.name} tour={tour} />
            ))}
          </div>
        </section>

        <section className="section section--split" id="reviews">
          <div>
            <SectionHeading
              eyebrow="Traveler feedback"
              title="A polished review area that works across all screen sizes."
              description="The cards below reuse the same component with different props, keeping the UI clean and easy to extend."
            />
          </div>

          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>
      </main>

      <Footer
        brand="DevWeekends"
        description="A responsive React travel and tours starter for weekend getaways, guided adventures, and custom travel planning."
        contactEmail="hello@devweekends.travel"
      />
    </div>
  )
}

export default App
