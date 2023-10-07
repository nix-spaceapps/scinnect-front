export interface User {
    uuid: string
    email: string
    usermame: string
    password: string
    scinnector: Scinnector
    enabled: boolean
    username: string
    authorities: any
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
  }
  
  export interface Scinnector {
    uuid: string
    name: string
    bio: any
  }
  