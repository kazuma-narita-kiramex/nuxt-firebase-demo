import { Middleware } from '@nuxt/types'
import { auth } from '~/plugins/firebase'

const Auth: Middleware = (context) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      context.store.dispatch('user/signIn', user)
    } else {
      if (context.route.name !== 'signin') {
        context.redirect('/signin')
      }
    }
  })
}

export default Auth
