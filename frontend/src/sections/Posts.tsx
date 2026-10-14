import { SectionHeader } from '../components/SectionHeader'
import { posts } from '../content'

export function Posts() {
  return (
    <div className="stack" style={{ gap: 32 }}>
      <SectionHeader
        command="ls posts/"
        title={
          <>
            posts<span className="accent">/</span>
          </>
        }
        lead="Notes on what I'm learning, building and breaking."
      />

      {posts.length === 0 ? (
        <div className="empty">
          <span className="t-md t-dim">total 0</span>
          <span className="t-lg t-bright">No posts yet — the first one is being written.</span>
          <span className="t-md t-muted">
            $ git commit -m "first post" <span className="accent">(coming soon)</span>
          </span>
        </div>
      ) : (
        <div className="stack" style={{ gap: 16 }}>
          {posts.map((p) => (
            <a key={p.href} className="contact-card" href={p.href}>
              <span className="t-xs accent">{p.date}</span>
              <span className="t-base">{p.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
