<template>
  <div>
    {{ userName }}
    <sign-out/>
    <button @click="getCmsData">microCMSからデータ取得</button>
    <span v-html="cmsData.body"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { functions } from '~/plugins/firebase'
import SignOut from '~/components/SignOut.vue'
import { userStore } from '~/store'

@Component({
  components: { SignOut }
})
export default class Index extends Vue {
  cmsData: any = {}

  get userName(): string {
    return userStore.name
  }

  // storeかpluginにしたい
  async getCmsData() {
    const func = functions.httpsCallable("microCMS")
    const res: any = await func({ path: '/news/qHOcT5z5-' })
    this.cmsData = res.data
  }
}
</script>
