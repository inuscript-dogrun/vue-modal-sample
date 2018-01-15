<template>
  <div :style="{display: ready ? 'block' : 'none'}">
    <modal name="hello-modal">
      <div class="container">
        Hello!
      </div>
    </modal>
  </div>
</template>

<script>
import Vue from "vue"
import VModal from "vue-js-modal"
import { ModalEvent } from "./ModalEvent"

Vue.use(VModal)

export default {
  data(){
    return {
      ready: false
    }
  },
  mounted(){
    console.log(this.$slots)
    this.ready = true
    ModalEvent.$on("openModal", () => {
      this.$modal.show("hello-modal")
    })
  }
}
</script>
<style scoped>
.container{
  padding: 1em;
}
</style>
