import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { auth } from '~/plugins/firebase'

export interface IUserState {
  name: string
  email: string
}

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
export default class User extends VuexModule implements IUserState {
  name: string = ''
  email: string = ''


  get isSignedIn() {
    return this.name !== ''
  }

  @Mutation
  setUser(user: any) {
    this.name = user.displayName
    this.email = user.email
  }

  @Mutation
  unsetUser() {
    this.name = ''
    this.email = ''
  }

  @Action
  signIn(user: any) {
    this.setUser(user)
  }

  @Action
  async signOut() {
    await auth.signOut()
    this.unsetUser()
  }
}
