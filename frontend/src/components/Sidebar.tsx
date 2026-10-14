import { profile } from '../content'
import { hrefFor, routes, type RouteId } from '../routes'

export function Sidebar({ current }: { current: RouteId }) {
  return (
    <nav className="sidebar" aria-label="Main menu">
      <a href={hrefFor('who')} className="brand" style={{ textDecoration: 'none' }}>
        <span className="brand__logo" aria-hidden="true">
          {profile.initials}
        </span>
        <span className="brand__name">
          <span>{profile.firstName}</span>
          <span className="accent">{profile.lastName}</span>
        </span>
      </a>

      <div className="stack">
        <span className="menu__label">~/menu</span>
        <ul className="menu">
          {routes.map((r) => {
            const active = r.id === current
            return (
              <li key={r.id}>
                <a className="menu__item" href={hrefFor(r.id)} aria-current={active ? 'page' : undefined}>
                  <span className="menu__mark" aria-hidden="true">
                    {active ? '›' : ''}
                  </span>
                  <span>{r.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="sidebar__status">
        {profile.openToWork && (
          <div>
            <span className="sidebar__dot" aria-hidden="true">
              ●
            </span>{' '}
            open to opportunities
          </div>
        )}
        <div>{profile.location}</div>
      </div>
    </nav>
  )
}
