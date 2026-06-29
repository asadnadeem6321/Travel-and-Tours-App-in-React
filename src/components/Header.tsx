import { useState } from 'react'
import type { NavigationItem } from '../types'

type HeaderProps = {
  brand: string
  navItems: NavigationItem[]
}

export function Header({ brand, navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <a className="header__brand" href="#top" aria-label={brand}>
        <span className="header__mark">{brand.slice(0, 2)}</span>
        <span>
          <strong>{brand}</strong>
          <small>Travel & tours</small>
        </span>
      </a>

      <button
        type="button"
        className="header__toggle"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
      </button>

      <nav
        id="primary-navigation"
        className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button--secondary header__cta" href="#contact">
        Book now
      </a>
    </header>
  )
}