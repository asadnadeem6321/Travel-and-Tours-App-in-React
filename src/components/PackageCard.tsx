import type { TourPackage } from '../types'

type PackageCardProps = {
  tour: TourPackage
}

export function PackageCard({ tour }: PackageCardProps) {
  return (
    <article className="package-card">
      <div className="package-card__header">
        <span className="package-card__badge">{tour.badge}</span>
        <span className="package-card__rating">{tour.rating} rating</span>
      </div>

      <div className="package-card__body">
        <h3>{tour.name}</h3>
        <p className="package-card__meta">
          {tour.location} · {tour.duration}
        </p>
        <p>{tour.summary}</p>
      </div>

      <div className="package-card__footer">
        <strong>{tour.price}</strong>
        <span>per traveler</span>
      </div>
    </article>
  )
}