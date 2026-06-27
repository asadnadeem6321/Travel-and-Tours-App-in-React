import type { NavigationItem } from '../types'

type HeaderProps = {
  brand: string
  navItems: NavigationItem[]
}

export function Header({ brand, navItems }: HeaderProps) {
  return (
    <header className="header">
      <a className="header__brand" href="#top" aria-label={brand}>
        <span className="header__mark">{brand.slice(0, 2)}</span>
        <span>{brand}</span>
      </a>

      <nav className="header__nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
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