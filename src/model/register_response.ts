export interface UserResponse {
    uuid: string
    email: string
    enabled: boolean
    username: string
    authorities: any
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
  }
  