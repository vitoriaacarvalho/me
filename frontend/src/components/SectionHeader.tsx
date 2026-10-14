import type { ReactNode } from 'react'
import { profile } from '../content'

type Props = {
  command: string
  title: ReactNode
  lead?: ReactNode
  hero?: boolean
}

export function SectionHeader({ command, title, lead, hero }: Props) {
  return (
    <header className="stack" style={{ gap: hero ? 16 : 12 }}>
      <span className="prompt">
        {profile.handle}@portfolio:~$ <span className="prompt__cmd">{command}</span>
      </span>
      <h1 className={hero ? 'title title--hero' : 'title'}>{title}</h1>
      {lead && <p className={hero ? 'lead lead--hero' : 'lead'}>{lead}</p>}
    </header>
  )
}
