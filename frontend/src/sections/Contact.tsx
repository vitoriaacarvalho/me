import { SectionHeader } from '../components/SectionHeader'
import { links, profile } from '../content'

export function Contact() {
  const channels = [
    { label: 'email', value: links.email, href: `mailto:${links.email}` },
    { label: 'github', value: `github.com/${links.github}`, href: `https://github.com/${links.github}` },
    {
      label: 'linkedin',
      value: `linkedin.com/in/${links.linkedin}`,
      href: `https://linkedin.com/in/${links.linkedin}`,
    },
  ]

  return (
    <div className="stack" style={{ gap: 32 }}>
      <SectionHeader
        command={`ping ${profile.handle}`}
        title="contact me"
        lead="Got an opportunity, an idea, or just want to talk code? My inbox is open."
      />

      <div className="grid grid--contact">
        {channels.map((c) => (
          <a
            key={c.label}
            className="contact-card"
            href={c.href}
            {...(c.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
          >
            <span className="t-xs accent">{c.label}</span>
            <span className="t-base">{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
