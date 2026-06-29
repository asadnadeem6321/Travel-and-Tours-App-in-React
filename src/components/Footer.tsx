type FooterProps = {
  brand: string
  description: string
  contactEmail: string
}

export function Footer({ brand, description, contactEmail }: FooterProps) {
  return (
    <footer className="footer" id="contact">
      <div className="footer__about">
        <span className="footer__brand">{brand}</span>
        <p>{description}</p>

        <div className="footer__chips" aria-label="Footer highlights">
          <span>Custom itineraries</span>
          <span>Hotel + transport</span>
          <span>Weekend escapes</span>
        </div>
      </div>

      <div className="footer__contact">
        <p className="footer__label">Start planning</p>
        <a className="footer__email" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>

        <div className="footer__links">
          <a href="#packages">View packages</a>
          <a href="#highlights">Trip benefits</a>
          <a href="#reviews">Traveler reviews</a>
        </div>
      </div>
    </footer>
  )
}