import { User } from "./user"

export type Scinnector = {
  uuid: string
  name: string
  bio: any
  tags: any
  projects: Array<Project>
  user: User
}

export type Project = {
  uuid: string
  name: string
  description: string
  image: string
  tags: any
}
