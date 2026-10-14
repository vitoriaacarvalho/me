import { useEffect, useState } from 'react'

export const routes = [
  { id: 'who', label: 'who am I', path: 'whoami' },
  { id: 'posts', label: 'posts', path: 'posts' },
  { id: 'projects', label: 'projects', path: 'projects' },
  { id: 'cv', label: 'check my CV', path: 'cv.md' },
  { id: 'contact', label: 'contact me', path: 'contact' },
] as const

export type RouteId = (typeof routes)[number]['id']
export type Route = (typeof routes)[number]

export const hrefFor = (id: RouteId) => (id === 'who' ? '#/' : `#/${id}`)

function routeFromHash(): Route {
  const id = window.location.hash.replace(/^#\/?/, '')
  return routes.find((r) => r.id === id) ?? routes[0]
}

/** Hash-based routing so each section is linkable and the back button works. */
export function useRoute(): Route {
  const [route, setRoute] = useState(routeFromHash)

  useEffect(() => {
    const onChange = () => {
      setRoute(routeFromHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
