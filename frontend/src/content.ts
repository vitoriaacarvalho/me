// Profile info is read from the shared content/ folder; the rest still lives here.
// Bracketed values are placeholders.
import cvJson from '../../content/cv.json'
import whoAmI from '../../content/who-am-I.json'
import projectsJson from '../../content/projects.json'
import type { Cv, Post, Project } from './types'

const [firstName, ...rest] = whoAmI.name.split(' ')

export const profile = {
  name: whoAmI.name,
  firstName,
  lastName: rest.join(' '),
  initials: whoAmI.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toLowerCase(),
  handle: 'vitoria',
  location: whoAmI.location,
  openToWork: true,
  role: whoAmI.role,
  bio: whoAmI.bio,
  stack: whoAmI.stack,
}

export const links = {
  email: 'vitoriaprogramadora@gmail.com',
  github: 'vitoriaacarvalho',
  linkedin: 'vitoria-de-barros',
  cvPdf: `${import.meta.env.BASE_URL}vitoria-carvalho-cv.pdf`,
}

export const posts: Post[] = []

export const projects: Project[] = projectsJson.projects.map((p) => ({
  name: p.title,
  description: p['short-description'],
  tech: p.tech,
  status: p.status,
  progress: p.progress,
  href: p.link && p.link !== '#' ? p.link : undefined,
}))

export const cv: Cv = cvJson