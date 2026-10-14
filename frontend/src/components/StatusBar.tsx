import { profile } from '../content'

const year = new Date().getFullYear()

export function StatusBar({ path }: { path: string }) {
  return (
    <footer className="statusbar">
      <span className="statusbar__mode">NORMAL</span>
      <span>~/{path}</span>
      <span className="statusbar__credits">
        © {year} {profile.firstName} {profile.lastName} · built with &lt;3
      </span>
    </footer>
  )
}
