import type { Testimonial } from '../types'

type TestimonialCardProps = Testimonial

export function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__rating">{rating}</div>
      <p className="testimonial-card__quote">{quote}</p>
      <div className="testimonial-card__author">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </article>
  )
}