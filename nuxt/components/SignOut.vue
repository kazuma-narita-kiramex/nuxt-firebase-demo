<template>
  <button @click="signOut">SignOut</button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '~/plugins/firebase'
import { userStore } from '~/store'

@Component
export default class FirebaseAuth extends Vue {
  async signOut() {
    await userStore.signOut()
    alert('ログアウトしました')
  }
}
</script>
