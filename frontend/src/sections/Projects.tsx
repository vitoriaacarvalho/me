import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../content'

export function Projects() {
  return (
    <div className="stack" style={{ gap: 32 }}>
      <SectionHeader
        command="ls -la projects/"
        title={
          <>
            projects<span className="accent">/</span>
          </>
        }
        lead="Cool stuff I like to make :)"
      />

      <div className="grid">
        {projects.map((p, i) => (
          <article key={i} className="card">
            <span className="t-xs accent">● {p.status}</span>
            <span className="t-lg t-bold t-bright">
              {p.href ? <a href={p.href}>{p.name}</a> : p.name}
            </span>
            <span className="t-md t-body t-muted">{p.description}</span>
            <div className="tags">
              {p.tech.map((t, j) => (
                <span key={j} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label={`${p.name} progress`}
              aria-valuenow={p.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress__fill" style={{ width: `${p.progress}%` }} />
            </div>
          </article>
        ))}

        <div className="card card--dashed">
          <span className="t-md t-dim">$ mkdir next-idea</span>
          <span className="t-base t-soft">
            More on the way
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
