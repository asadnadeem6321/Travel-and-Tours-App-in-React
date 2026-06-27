import type { Highlight } from '../types'

type FeatureCardProps = Highlight

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span className="feature-card__icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}