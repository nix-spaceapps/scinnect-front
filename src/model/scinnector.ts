export type Scinnector = {
  uuid: string
  name: string
  bio: any
  tags: any
  projects: Array<Project>
}

export type Project = {
  uuid: string
  name: string
  description: string
  image: string
  tags: any
}
