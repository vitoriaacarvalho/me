export type Job = {
  role: string
  company: string
  workMode?: string
  start: string
  end: string
  description?: string
  highlights: string[]
  technologies: string[]
}

export type Education = {
  institution: string
  degree: string
  field: string
  start: string
  end: string
}

export type Cv = {
  name: string
  title: string
  email: string
  linkedin: string
  location: string
  summary: string[]
  skills: {
    languages: string[]
    technologies: string[]
  }
  experience: Job[]
  education: Education[]
}

export type Project = {
  name: string
  description: string
  tech: string[]
  status: string
  progress: number
  href?: string
}

export type Post = {
  title: string
  date: string
  href: string
}
