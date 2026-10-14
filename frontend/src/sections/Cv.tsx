import type { ReactNode } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { cv, links } from '../content'
import type { Job } from '../types'

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

export function Cv() {
  return (
    <div className="stack" style={{ gap: 32 }}>
      <SectionHeader command="cat cv.md" title="check my CV" lead={`${cv.title} · ${cv.location}`} />

      <div className="card cv" tabIndex={0} aria-label="CV">
        <Section heading="summary">
          <ul className="cv__list">
            {cv.summary.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Section>

        <Section heading="experience">
          {cv.experience.map((job) => (
            <JobEntry key={`${job.company}-${job.start}`} job={job} />
          ))}
        </Section>

        <Section heading="education">
          {cv.education.map((e) => (
            <div key={e.institution} className="cv__entry">
              <span className="t-base t-bright">{e.institution}</span>
              <span className="t-md t-muted">
                {e.degree}, {e.field}
              </span>
              <span className="t-sm t-dim">{period(e.start, e.end)}</span>
            </div>
          ))}
        </Section>

        <Section heading="skills">
          <div className="cv__entry">
            <span className="t-sm t-dim">languages</span>
            <Tags items={cv.skills.languages} />
          </div>
          <div className="cv__entry">
            <span className="t-sm t-dim">technologies</span>
            <Tags items={cv.skills.technologies} />
          </div>
        </Section>
      </div>

      <div className="row">
        <a className="btn btn--primary" href={links.cvPdf} download>
          ↓ download CV (PDF)
        </a>
        <a className="btn btn--ghost" href={cv.linkedin} target="_blank" rel="noreferrer">
          view on LinkedIn
        </a>
      </div>
    </div>
  )
}
// "2024-12" → "dec 2024"; "2022" and "present" pass through
function formatDate(value: string) {
  const [year, month] = value.split('-')
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : value
}

const period = (start: string, end: string) => `${formatDate(start)} – ${formatDate(end)}`

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="cv__section">
      <h2 className="t-xs accent" style={{ margin: 0, fontWeight: 400 }}>
        # {heading.toUpperCase()}
      </h2>
      {children}
    </section>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  )
}

function JobEntry({ job }: { job: Job }) {
  return (
    <article className="cv__job">
      <div className="cv__job-head">
        <span className="t-base t-bright">
          {job.role} <span className="accent">@</span> {job.company}
        </span>
        <span className="t-sm t-dim">{period(job.start, job.end)}</span>
      </div>
      {job.workMode && <span className="t-sm t-dim">{job.workMode}</span>}
      {job.description && <p className="t-sm t-body t-dim" style={{ fontStyle: 'italic' }}>{job.description}</p>}
      <ul className="cv__list">
        {job.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {job.technologies.length > 0 && <Tags items={job.technologies} />}
    </article>
  )
}