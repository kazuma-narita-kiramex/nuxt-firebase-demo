<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as firebaseui from 'firebaseui'
import { auth, authSignInOptions } from '~/plugins/firebase'

@Component
export default class FirebaseAuth extends Vue {
  mounted() {
    auth.onAuthStateChanged( (user) => {
      if (!user) {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: authSignInOptions,
          callbacks: {
            // Nuxtのローカルサーバーで起こるCORSエラーのためこのように設定。本番環境では不要
            signInSuccessWithAuthResult: () => {
              window.location.href = '/'
              return false // falseを設定するとsignInSuccessUrlにはリダイレクトしない
            }
          },
          signInSuccessUrl: '/',
          signInFlow: 'popup'
        }

        ui.start('#firebaseui-auth-container', config)
      }
    })
  }
}
</script>
