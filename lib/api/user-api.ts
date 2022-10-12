import { Axios } from 'axios'

export default class UserApi {
  public constructor(private readonly axios: Axios) {}

  public async get() {
    return await this.axios.get('/users/me')
  }

  public async update(updateUserDTO: any) {
    return await this.axios.patch(`users/`, updateUserDTO)
  }

  public async login() {
    return await this.axios.get(`/auth/login/social-login/google?authorized_uri=localhost:3000`)
    
  }
}
