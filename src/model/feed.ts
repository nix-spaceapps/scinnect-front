import { Scinnector } from "./scinnector"

export interface Post {
    uuid: string
    text: string
    comments: Array<Comment>
    password: string
    scinnector: Scinnector
    keywords: Array<string>,
    time: Date
  }
  
  export interface Comment {
    uuid: string
    scinnector: Scinnector,
    text: string
  }
  