import { Command, Terminal } from '../components/Terminal'
import { SectionHeader } from '../components/SectionHeader'
import { posts, profile, projects } from '../content'
import { hrefFor } from '../routes'

export function WhoAmI() {
  return (
    <div className="stack" style={{ gap: 40 }}>
      <SectionHeader
        hero
        command="./hello.sh"
        title={
          <>
            Hi, I'm <span className="accent">{profile.name}</span>
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </>
        }
        lead={profile.bio}
      />

      <div className="row">
        <span className="pill">
          <span className="accent">{posts.length}</span> posts · drafting
        </span>
        <span className="pill">
          <span className="accent">{projects.length}</span> projects · compiling
        </span>
      </div>

      <Terminal title="zsh — about-me">
        <Command cmd="whoami">{profile.name}</Command>
        <Command cmd="cat role.txt">{profile.role}</Command>
        <Command cmd="cat stack.txt">
          <div className="tags">
            {profile.stack.map((s, i) => (
              <span key={i} className="tag">
                {s}
              </span>
            ))}
          </div>
        </Command>
        <Command cmd="ls projects/">building something cool… check back soon</Command>
        <Command />
      </Terminal>

      <div className="row">
        <a className="btn btn--primary" href={hrefFor('projects')}>
          cd projects/ →
        </a>
        <a className="btn btn--ghost" href={hrefFor('contact')}>
          say hi
        </a>
      </div>
    </div>
  )
}
