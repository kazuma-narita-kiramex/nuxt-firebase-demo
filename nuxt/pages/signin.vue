<template>
  <sign-in/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SignIn from '~/components/SignIn.vue'

@Component({
  components: { SignIn }
})
export default class Login extends Vue {}
</script>
