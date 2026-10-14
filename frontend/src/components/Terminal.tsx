import type { ReactNode } from 'react'

export function Terminal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot" style={{ background: '#A8366B' }} aria-hidden="true" />
        <span className="terminal__dot" style={{ background: '#6E3F9E' }} aria-hidden="true" />
        <span className="terminal__dot" style={{ background: '#45337A' }} aria-hidden="true" />
        <span className="terminal__title">{title}</span>
      </div>
      <div className="terminal__body">{children}</div>
    </div>
  )
}

export function Command({ cmd, children }: { cmd?: string; children?: ReactNode }) {
  return (
    <div>
      <div>
        <span className="accent">❯</span> {cmd ?? <span className="cursor cursor--block" aria-hidden="true" />}
      </div>
      {children && <div className="terminal__output">{children}</div>}
    </div>
  )
}
