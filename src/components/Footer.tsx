type FooterProps = {
  brand: string
  description: string
  contactEmail: string
}

export function Footer({ brand, description, contactEmail }: FooterProps) {
  return (
    <footer className="footer" id="contact">
      <div>
        <span className="footer__brand">{brand}</span>
        <p>{description}</p>
      </div>

      <div className="footer__links">
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <a href="#packages">View packages</a>
        <a href="#highlights">Trip benefits</a>
      </div>
    </footer>
  )
}